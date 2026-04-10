// ===== CONSTANTS =====
const DEFAULT_VEHICLE_TYPES = [
    { id: 'car', label: 'Car' },
    { id: 'lgv', label: 'LGV' },
    { id: 'hgv', label: 'HGV' },
    { id: 'bus', label: 'Bus' },
    { id: 'tram', label: 'Tram' },
    { id: 'motorcycle', label: 'M/cycle' },
    { id: 'bicycle', label: 'Bicycle' },
    { id: 'pedestrian', label: 'Pedestr.' },
    { id: 'escooter', label: 'E-scoot' },
    { id: 'taxi', label: 'Taxi' }
];

const DEFAULT_APPROACHES = ['North', 'East', 'South', 'West'];

const DIRECTION_ARROWS = {
    left: '\u2B05',
    straight: '\u2B06',
    right: '\u27A1',
    uturn: '\u21A9'
};

const DIRECTION_LABELS = {
    left: 'Left Turn',
    straight: 'Straight',
    right: 'Right Turn',
    uturn: 'U-Turn',
    crossing: 'Crossing'
};

// Vehicle types that are counted per approach (crossing) not by turning movement
const CROSSING_TYPES = new Set(['pedestrian', 'bicycle', 'escooter']);

const STORAGE_KEY = 'traffic_counter_sessions';

// ===== STATE =====
let currentMode = 'traffic'; // 'traffic' or 'pt'
let currentSession = null;
let currentApproachIndex = 0;
let timerInterval = null;
let isPaused = false;
let undoStack = [];
let wakeLock = null;

// PT-specific state
let ptLines = [];
let ptCurrentVehicle = null; // { line, boarding, alighting }
let ptUseNumberInput = false;

// ===== DOM ELEMENTS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    initSetupForm();
    initPTSetupForm();
    bindEvents();
});

function initSetupForm() {
    // Set today's date
    const today = new Date();
    $('#count-date').value = today.toISOString().split('T')[0];

    // Set current time rounded to next interval
    const minutes = today.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15;
    const h = today.getHours() + (roundedMinutes >= 60 ? 1 : 0);
    const m = roundedMinutes % 60;
    $('#start-time').value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

    // Render vehicle type toggles
    const container = $('#vehicle-toggles');
    DEFAULT_VEHICLE_TYPES.forEach(vt => {
        const label = document.createElement('label');
        label.className = 'toggle';
        label.innerHTML = `<input type="checkbox" value="${vt.id}" checked><span>${vt.label}</span>`;
        container.appendChild(label);
    });

    // Render approach name inputs
    updateApproachInputs();
    $('#num-approaches').addEventListener('change', updateApproachInputs);
}

function updateApproachInputs() {
    const n = parseInt($('#num-approaches').value);
    const container = $('#approach-inputs');
    container.innerHTML = '';
    for (let i = 0; i < n; i++) {
        const input = document.createElement('input');
        input.type = 'text';
        input.placeholder = `Approach ${i + 1} (e.g. ${DEFAULT_APPROACHES[i] || 'Name'})`;
        input.value = DEFAULT_APPROACHES[i] || '';
        input.dataset.index = i;
        container.appendChild(input);
    }
}

function bindEvents() {
    // Mode selector
    $$('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.mode-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentMode = tab.dataset.mode;
            $('#setup-form').style.display = currentMode === 'traffic' ? '' : 'none';
            $('#pt-setup-form').style.display = currentMode === 'pt' ? '' : 'none';
            $('#traffic-hint').style.display = currentMode === 'traffic' ? '' : 'none';
            $('#pt-hint').style.display = currentMode === 'pt' ? '' : 'none';
        });
    });

    // Traffic setup form submit
    $('#setup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        startSession();
    });

    // PT setup form
    $('#pt-setup-form').addEventListener('submit', (e) => {
        e.preventDefault();
        startPTSession();
    });
    $('#btn-add-line').addEventListener('click', addPTLine);
    $('#pt-line-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); addPTLine(); }
    });

    // History
    $('#btn-history').addEventListener('click', showHistory);
    $('#btn-back-from-history').addEventListener('click', () => showScreen('setup-screen'));

    // Traffic counting controls
    $('#btn-undo').addEventListener('click', undoLast);
    $('#btn-pause').addEventListener('click', togglePause);
    $('#btn-summary').addEventListener('click', showQuickSummary);
    $('#btn-end').addEventListener('click', endSession);

    // PT counting controls
    $('#btn-boarding').addEventListener('click', () => ptCount('boarding'));
    $('#btn-alighting').addEventListener('click', () => ptCount('alighting'));
    $('#btn-pt-done').addEventListener('click', ptFinishVehicle);
    $('#btn-pt-cancel').addEventListener('click', ptCancelVehicle);
    $('#btn-toggle-input').addEventListener('click', ptToggleInputMode);
    $('#btn-pt-undo').addEventListener('click', ptUndoLast);
    $('#btn-pt-pause').addEventListener('click', togglePause);
    $('#btn-pt-summary').addEventListener('click', showPTQuickSummary);
    $('#btn-pt-end').addEventListener('click', endSession);

    // Results
    $('#btn-back-setup').addEventListener('click', () => showScreen('setup-screen'));
    $('#btn-export-csv').addEventListener('click', exportCSV);
    $('#btn-share').addEventListener('click', shareCSV);
    $$('.results-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.results-tab').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderResults(tab.dataset.view);
        });
    });

    // Modal close
    $('#btn-close-modal').addEventListener('click', () => {
        $('#summary-modal').classList.remove('active');
    });
}

// ===== SCREEN NAVIGATION =====
function showScreen(id) {
    $$('.screen').forEach(s => s.classList.remove('active'));
    $(`#${id}`).classList.add('active');
}

// ===== SESSION MANAGEMENT =====
function startSession() {
    const siteName = $('#site-name').value.trim() || 'Unnamed Site';
    const date = $('#count-date').value;
    const startTime = $('#start-time').value;
    const intervalMinutes = parseInt($('#interval-minutes').value);

    // Gather approaches
    const approachInputs = $$('#approach-inputs input');
    const approaches = Array.from(approachInputs).map((inp, i) =>
        inp.value.trim() || `Approach ${i + 1}`
    );

    // Gather active movements
    const movements = Array.from($$('#movement-toggles input:checked')).map(cb => cb.value);
    if (movements.length === 0) {
        alert('Please select at least one turning movement.');
        return;
    }

    // Gather active vehicle types
    const vehicleTypes = Array.from($$('#vehicle-toggles input:checked')).map(cb => cb.value);
    if (vehicleTypes.length === 0) {
        alert('Please select at least one vehicle type.');
        return;
    }

    // Build session
    currentSession = {
        id: Date.now().toString(36),
        siteName,
        date,
        startTime,
        intervalMinutes,
        approaches,
        movements,
        vehicleTypes,
        intervals: [],
        createdAt: new Date().toISOString()
    };

    currentApproachIndex = 0;
    undoStack = [];
    isPaused = false;

    // Start first interval
    startNewInterval();
    renderCountingScreen();
    showScreen('count-screen');
    requestWakeLock();
}

function startNewInterval() {
    const now = new Date();
    let intervalStart;

    if (currentSession.intervals.length === 0) {
        // First interval: use configured start time
        const [h, m] = currentSession.startTime.split(':').map(Number);
        intervalStart = new Date(currentSession.date + 'T' + currentSession.startTime);
        // If start time is in the future or past, still use it
    } else {
        // Subsequent intervals: start right after previous
        const prev = currentSession.intervals[currentSession.intervals.length - 1];
        intervalStart = new Date(prev.endTime);
    }

    const intervalEnd = new Date(intervalStart.getTime() + currentSession.intervalMinutes * 60000);

    // Initialize counts
    const counts = {};
    const motorTypes = currentSession.vehicleTypes.filter(vt => !CROSSING_TYPES.has(vt));
    const crossingTypes = currentSession.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));

    currentSession.approaches.forEach(approach => {
        counts[approach] = {};
        // Turning movements only get motor vehicle types
        currentSession.movements.forEach(movement => {
            counts[approach][movement] = {};
            motorTypes.forEach(vt => {
                counts[approach][movement][vt] = 0;
            });
        });
        // Crossing types get their own "crossing" movement
        if (crossingTypes.length > 0) {
            counts[approach]['crossing'] = {};
            crossingTypes.forEach(vt => {
                counts[approach]['crossing'][vt] = 0;
            });
        }
    });

    currentSession.intervals.push({
        startTime: intervalStart.toISOString(),
        endTime: intervalEnd.toISOString(),
        counts
    });

    startTimer();
}

// ===== TIMER =====
function startTimer() {
    if (timerInterval) clearInterval(timerInterval);

    updateTimerDisplay();
    timerInterval = setInterval(() => {
        if (!isPaused) {
            updateTimerDisplay();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const interval = getCurrentInterval();
    if (!interval) return;

    const start = new Date(interval.startTime);
    const end = new Date(interval.endTime);
    const now = new Date();
    const remaining = Math.max(0, end - now);

    const startStr = formatTime(start);
    const endStr = formatTime(end);
    const mins = Math.floor(remaining / 60000);
    const secs = Math.floor((remaining % 60000) / 1000);
    const totalDuration = end - start;
    const elapsed = totalDuration - remaining;
    const pct = Math.min(100, (elapsed / totalDuration) * 100);

    // Update the correct timer elements based on mode
    const isPT = currentSession && currentSession.mode === 'pt';
    const prefix = isPT ? 'pt-' : '';

    $(`#${prefix}interval-label`).textContent = `${startStr} - ${endStr}`;
    $(`#${prefix}timer-remaining`).textContent = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    $(`#${prefix}progress-fill`).style.width = pct + '%';

    if (remaining <= 0) {
        onIntervalEnd();
    }
}

function onIntervalEnd() {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }

    saveSession();

    if (currentSession.mode === 'pt') {
        startNewPTInterval();
        renderPTCountingScreen();
    } else {
        startNewInterval();
        renderCountingScreen();
    }
}

function togglePause() {
    isPaused = !isPaused;
    const btns = currentSession?.mode === 'pt' ? [$('#btn-pt-pause')] : [$('#btn-pause')];
    btns.forEach(btn => {
        if (isPaused) {
            btn.textContent = '\u25B6 Resume';
            btn.classList.add('paused');
        } else {
            btn.textContent = '\u23F8 Pause';
            btn.classList.remove('paused');
        }
    });
}

function formatTime(date) {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
}

function getCurrentInterval() {
    if (!currentSession || currentSession.intervals.length === 0) return null;
    return currentSession.intervals[currentSession.intervals.length - 1];
}

// ===== COUNTING SCREEN RENDER =====
function renderCountingScreen() {
    renderApproachTabs();
    renderCountGrid();
}

function renderApproachTabs() {
    const container = $('#approach-tabs');
    container.innerHTML = '';

    currentSession.approaches.forEach((approach, i) => {
        const btn = document.createElement('button');
        btn.className = 'approach-tab' + (i === currentApproachIndex ? ' active' : '');

        // Calculate total for this approach
        const total = getApproachTotal(approach);
        btn.innerHTML = `${approach}<span class="tab-count">${total}</span>`;

        btn.addEventListener('click', () => {
            currentApproachIndex = i;
            renderCountingScreen();
        });
        container.appendChild(btn);
    });
}

function renderCountGrid() {
    const container = $('#count-grid');
    container.innerHTML = '';
    const approach = currentSession.approaches[currentApproachIndex];
    const interval = getCurrentInterval();
    if (!interval) return;

    const motorTypes = currentSession.vehicleTypes.filter(vt => !CROSSING_TYPES.has(vt));
    const crossingTypes = currentSession.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));

    // Render turning movement sections with motor vehicle types only
    currentSession.movements.forEach(movement => {
        if (motorTypes.length === 0) return;
        renderDirectionSection(container, approach, movement, motorTypes, interval);
    });

    // Render crossing section for pedestrians, bicycles, e-scooters
    if (crossingTypes.length > 0 && interval.counts[approach]['crossing']) {
        renderDirectionSection(container, approach, 'crossing', crossingTypes, interval);
    }
}

function renderDirectionSection(container, approach, movement, vehicleTypeIds, interval) {
    const section = document.createElement('div');
    section.className = 'direction-section';

    const header = document.createElement('div');
    header.className = `direction-header ${movement}`;
    const arrow = DIRECTION_ARROWS[movement] || '\u{1F6B6}';
    header.innerHTML = `<span class="arrow">${arrow}</span> ${DIRECTION_LABELS[movement]}`;
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'vehicle-buttons';

    vehicleTypeIds.forEach(vtId => {
        const vt = DEFAULT_VEHICLE_TYPES.find(v => v.id === vtId);
        const count = interval.counts[approach][movement][vtId];

        const btn = document.createElement('button');
        btn.className = 'count-btn' + (count > 0 ? ' has-count' : '');
        btn.innerHTML = `
            <span class="vehicle-label">${vt ? vt.label : vtId}</span>
            <span class="count-value">${count}</span>
        `;

        // Tap to increment
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            incrementCount(approach, movement, vtId);
            btn.classList.add('flash');
            setTimeout(() => btn.classList.remove('flash'), 150);
        });

        // Long press to decrement
        let longPressTimer;
        btn.addEventListener('touchstart', (e) => {
            longPressTimer = setTimeout(() => {
                e.preventDefault();
                decrementCount(approach, movement, vtId);
            }, 500);
        }, { passive: true });
        btn.addEventListener('touchend', () => clearTimeout(longPressTimer));
        btn.addEventListener('touchmove', () => clearTimeout(longPressTimer));

        grid.appendChild(btn);
    });

    section.appendChild(grid);
    container.appendChild(section);
}

// ===== COUNTING LOGIC =====
function incrementCount(approach, movement, vehicleType) {
    const interval = getCurrentInterval();
    if (!interval || isPaused) return;

    interval.counts[approach][movement][vehicleType]++;

    undoStack.push({ approach, movement, vehicleType, action: 'increment' });

    // Haptic feedback
    if (navigator.vibrate) navigator.vibrate(30);

    renderCountingScreen();
}

function decrementCount(approach, movement, vehicleType) {
    const interval = getCurrentInterval();
    if (!interval) return;

    if (interval.counts[approach][movement][vehicleType] > 0) {
        interval.counts[approach][movement][vehicleType]--;
        undoStack.push({ approach, movement, vehicleType, action: 'decrement' });
        if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
        renderCountingScreen();
    }
}

function undoLast() {
    if (undoStack.length === 0) return;
    const last = undoStack.pop();
    const interval = getCurrentInterval();
    if (!interval) return;

    if (last.action === 'increment') {
        if (interval.counts[last.approach][last.movement][last.vehicleType] > 0) {
            interval.counts[last.approach][last.movement][last.vehicleType]--;
        }
    } else if (last.action === 'decrement') {
        interval.counts[last.approach][last.movement][last.vehicleType]++;
    }

    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
    renderCountingScreen();
}

function getApproachTotal(approach) {
    const interval = getCurrentInterval();
    if (!interval) return 0;
    let total = 0;
    const ac = interval.counts[approach];
    if (!ac) return 0;
    for (const movement of Object.keys(ac)) {
        for (const vt of Object.keys(ac[movement])) {
            total += ac[movement][vt];
        }
    }
    return total;
}

// ===== QUICK SUMMARY =====
function showQuickSummary() {
    const body = $('#summary-body');

    // Current interval totals
    const interval = getCurrentInterval();
    let grandTotal = 0;
    const approachTotals = {};

    currentSession.approaches.forEach(approach => {
        let at = 0;
        for (const movement of Object.keys(interval.counts[approach])) {
            for (const vt of Object.keys(interval.counts[approach][movement])) {
                at += interval.counts[approach][movement][vt];
            }
        }
        approachTotals[approach] = at;
        grandTotal += at;
    });

    let html = `<div class="summary-grid">`;
    html += `<div class="summary-card"><div class="label">Current Interval Total</div><div class="value">${grandTotal}</div></div>`;
    html += `<div class="summary-card"><div class="label">Intervals Done</div><div class="value">${currentSession.intervals.length}</div></div>`;

    currentSession.approaches.forEach(approach => {
        html += `<div class="summary-card"><div class="label">${approach}</div><div class="value">${approachTotals[approach]}</div></div>`;
    });
    html += `</div>`;

    // Session grand total across all intervals
    let sessionTotal = 0;
    currentSession.intervals.forEach(intv => {
        currentSession.approaches.forEach(a => {
            for (const m of Object.keys(intv.counts[a])) {
                for (const vt of Object.keys(intv.counts[a][m])) {
                    sessionTotal += intv.counts[a][m][vt];
                }
            }
        });
    });
    html += `<p style="margin-top:16px;text-align:center;font-size:0.9rem;color:var(--text-secondary)">Session grand total: <strong>${sessionTotal}</strong></p>`;

    body.innerHTML = html;
    $('#summary-modal').classList.add('active');
}

// ===== END SESSION =====
function endSession() {
    if (!confirm('End this counting session?')) return;

    if (timerInterval) clearInterval(timerInterval);
    releaseWakeLock();

    // Trim end time of last interval to now
    const lastInterval = getCurrentInterval();
    if (lastInterval) {
        lastInterval.endTime = new Date().toISOString();
    }

    currentSession.endTime = new Date().toISOString();
    saveSession();
    showResults(currentSession);
}

// ===== STORAGE =====
function saveSession() {
    const sessions = getSessions();
    const idx = sessions.findIndex(s => s.id === currentSession.id);
    if (idx >= 0) {
        sessions[idx] = currentSession;
    } else {
        sessions.push(currentSession);
    }
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

function getSessions() {
    try {
        return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
    } catch {
        return [];
    }
}

function deleteSession(id) {
    const sessions = getSessions().filter(s => s.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
}

// ===== HISTORY =====
function showHistory() {
    const container = $('#history-list');
    const sessions = getSessions();

    if (sessions.length === 0) {
        container.innerHTML = '<div class="empty-state"><p>No saved sessions yet.</p></div>';
    } else {
        container.innerHTML = sessions.map(s => `
            <div class="history-item" data-id="${s.id}">
                <div class="history-item-info">
                    <h3>${s.mode === 'pt' ? s.stopName : s.siteName}</h3>
                    <p>${s.mode === 'pt' ? 'PT Passengers' : 'Traffic'} | ${s.date} | ${s.intervals.length} interval(s)</p>
                </div>
                <div class="history-item-actions">
                    <button class="btn-delete-session" data-id="${s.id}" title="Delete">&times;</button>
                </div>
            </div>
        `).reverse().join('');

        // Bind click to load session
        container.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.closest('.btn-delete-session')) return;
                const session = sessions.find(s => s.id === item.dataset.id);
                if (session) showResults(session);
            });
        });

        // Bind delete buttons
        container.querySelectorAll('.btn-delete-session').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm('Delete this session?')) {
                    deleteSession(btn.dataset.id);
                    showHistory();
                }
            });
        });
    }

    showScreen('history-screen');
}

// ===== RESULTS =====
function showResults(session) {
    currentSession = session;

    const info = $('#results-info');
    if (session.mode === 'pt') {
        info.innerHTML = `
            <div class="site-title">${session.stopName}</div>
            <p>Mode: PT Passenger Counting</p>
            <p>Date: ${session.date}</p>
            <p>Intervals: ${session.intervals.length} x ${session.intervalMinutes} min</p>
            <p>Lines: ${session.lines.join(', ')}</p>
        `;
    } else {
        info.innerHTML = `
            <div class="site-title">${session.siteName}</div>
            <p>Date: ${session.date}</p>
            <p>Intervals: ${session.intervals.length} x ${session.intervalMinutes} min</p>
            <p>Approaches: ${session.approaches.join(', ')}</p>
        `;
    }

    // Reset to summary tab
    $$('.results-tab').forEach(t => t.classList.remove('active'));
    $('.results-tab[data-view="summary"]').classList.add('active');

    renderResults('summary');
    showScreen('results-screen');
}

function renderResults(view) {
    const container = $('#results-content');
    const session = currentSession;

    if (session.mode === 'pt') {
        if (view === 'summary') {
            renderPTSummaryTable(container, session);
        } else {
            renderPTIntervalTables(container, session);
        }
    } else {
        if (view === 'summary') {
            renderSummaryTable(container, session);
        } else {
            renderIntervalTables(container, session);
        }
    }
}

function getAllMovements(session) {
    // Return all movement keys that exist in the data (turning movements + crossing)
    const movementSet = new Set(session.movements);
    const crossingTypes = session.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));
    if (crossingTypes.length > 0) movementSet.add('crossing');
    return Array.from(movementSet);
}

function getVehicleTypesForMovement(session, movement) {
    if (movement === 'crossing') {
        return session.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));
    }
    return session.vehicleTypes.filter(vt => !CROSSING_TYPES.has(vt));
}

function renderSummaryTable(container, session) {
    const vtHeaders = session.vehicleTypes.map(vt => {
        const v = DEFAULT_VEHICLE_TYPES.find(x => x.id === vt);
        return v ? v.label : vt;
    });

    let html = `<table class="results-table"><thead><tr>
        <th>Approach</th><th>Direction</th>
        ${vtHeaders.map(h => `<th>${h}</th>`).join('')}
        <th>Total</th>
    </tr></thead><tbody>`;

    let grandTotals = {};
    session.vehicleTypes.forEach(vt => grandTotals[vt] = 0);
    let grandTotal = 0;

    const allMovements = getAllMovements(session);

    session.approaches.forEach(approach => {
        allMovements.forEach(movement => {
            const totals = {};
            session.vehicleTypes.forEach(vt => totals[vt] = 0);

            // Only count vehicle types that belong to this movement
            const vtForMovement = getVehicleTypesForMovement(session, movement);

            // Sum across all intervals
            session.intervals.forEach(interval => {
                vtForMovement.forEach(vt => {
                    const val = interval.counts[approach]?.[movement]?.[vt] || 0;
                    totals[vt] += val;
                });
            });

            const rowTotal = Object.values(totals).reduce((a, b) => a + b, 0);
            grandTotal += rowTotal;
            session.vehicleTypes.forEach(vt => grandTotals[vt] += totals[vt]);

            const arrow = DIRECTION_ARROWS[movement] || '\u{1F6B6}';
            html += `<tr>
                <td>${approach}</td>
                <td>${arrow} ${DIRECTION_LABELS[movement]}</td>
                ${session.vehicleTypes.map(vt => `<td>${totals[vt] || ''}</td>`).join('')}
                <td><strong>${rowTotal}</strong></td>
            </tr>`;
        });
    });

    html += `<tr class="total-row">
        <td colspan="2">TOTAL</td>
        ${session.vehicleTypes.map(vt => `<td>${grandTotals[vt]}</td>`).join('')}
        <td>${grandTotal}</td>
    </tr>`;

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderIntervalTables(container, session) {
    let html = '';
    const allMovements = getAllMovements(session);

    session.intervals.forEach((interval, idx) => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));

        html += `<h3 style="margin:16px 0 8px;font-size:0.95rem;">Interval ${idx + 1}: ${start} - ${end}</h3>`;

        const vtHeaders = session.vehicleTypes.map(vt => {
            const v = DEFAULT_VEHICLE_TYPES.find(x => x.id === vt);
            return v ? v.label : vt;
        });

        html += `<table class="results-table"><thead><tr>
            <th>Approach</th><th>Dir</th>
            ${vtHeaders.map(h => `<th>${h}</th>`).join('')}
            <th>Total</th>
        </tr></thead><tbody>`;

        session.approaches.forEach(approach => {
            allMovements.forEach(movement => {
                const arrow = DIRECTION_ARROWS[movement] || '\u{1F6B6}';
                const vtForMovement = getVehicleTypesForMovement(session, movement);
                const rowTotal = vtForMovement.reduce((sum, vt) =>
                    sum + (interval.counts[approach]?.[movement]?.[vt] || 0), 0);

                html += `<tr>
                    <td>${approach}</td>
                    <td>${arrow}</td>
                    ${session.vehicleTypes.map(vt =>
                        `<td>${interval.counts[approach]?.[movement]?.[vt] || ''}</td>`
                    ).join('')}
                    <td><strong>${rowTotal}</strong></td>
                </tr>`;
            });
        });

        html += `</tbody></table>`;
    });

    container.innerHTML = html;
}

// ===== CSV EXPORT & SHARE =====
function buildCSV(session) {
    if (session.mode === 'pt') return buildPTCSV(session);
    return buildTrafficCSV(session);
}

function buildTrafficCSV(session) {
    const vtHeaders = session.vehicleTypes.map(vt => {
        const v = DEFAULT_VEHICLE_TYPES.find(x => x.id === vt);
        return v ? v.label : vt;
    });

    const headers = ['Site', 'Date', 'Interval Start', 'Interval End', 'Approach', 'Direction',
        ...vtHeaders, 'Total'];
    const rows = [headers.join(',')];

    const allMovements = getAllMovements(session);

    session.intervals.forEach(interval => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));

        session.approaches.forEach(approach => {
            allMovements.forEach(movement => {
                const values = session.vehicleTypes.map(vt =>
                    interval.counts[approach]?.[movement]?.[vt] || 0
                );
                const total = values.reduce((a, b) => a + b, 0);

                rows.push([
                    `"${session.siteName}"`,
                    session.date,
                    start,
                    end,
                    `"${approach}"`,
                    DIRECTION_LABELS[movement],
                    ...values,
                    total
                ].join(','));
            });
        });
    });

    return rows.join('\n');
}

function getCSVFilename(session) {
    const name = session.mode === 'pt' ? session.stopName : session.siteName;
    const prefix = session.mode === 'pt' ? 'pt_passengers' : 'traffic_count';
    return `${prefix}_${name.replace(/\s+/g, '_')}_${session.date}.csv`;
}

function exportCSV() {
    const session = currentSession;
    if (!session) return;

    const csv = buildCSV(session);
    const blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = getCSVFilename(session);
    a.click();
    URL.revokeObjectURL(url);
}

async function shareCSV() {
    const session = currentSession;
    if (!session) return;

    const csv = buildCSV(session);
    const filename = getCSVFilename(session);
    const file = new File(['\uFEFF' + csv], filename, { type: 'text/csv' });

    // Use Web Share API if available (works on iOS Safari, Android Chrome)
    if (navigator.canShare && navigator.canShare({ files: [file] })) {
        try {
            await navigator.share({
                title: `Traffic Count - ${session.siteName}`,
                text: `Traffic count data: ${session.siteName}, ${session.date}, ${session.intervals.length} intervals`,
                files: [file]
            });
        } catch (e) {
            if (e.name !== 'AbortError') {
                alert('Sharing failed. Try the download button instead.');
            }
        }
    } else {
        // Fallback: download the file
        alert('Sharing is not supported on this browser. The file will be downloaded instead — you can then send it manually.');
        exportCSV();
    }
}

// ===== PT PASSENGER COUNTING =====

function initPTSetupForm() {
    const today = new Date();
    $('#pt-date').value = today.toISOString().split('T')[0];

    const minutes = today.getMinutes();
    const roundedMinutes = Math.ceil(minutes / 15) * 15;
    const h = today.getHours() + (roundedMinutes >= 60 ? 1 : 0);
    const m = roundedMinutes % 60;
    $('#pt-start-time').value = `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`;

    ptLines = [];
}

function addPTLine() {
    const input = $('#pt-line-input');
    const val = input.value.trim();
    if (!val) return;

    // Support comma-separated entries
    const newLines = val.split(',').map(l => l.trim()).filter(l => l && !ptLines.includes(l));
    ptLines.push(...newLines);
    input.value = '';
    renderPTLines();
    input.focus();
}

function removePTLine(line) {
    ptLines = ptLines.filter(l => l !== line);
    renderPTLines();
}

function renderPTLines() {
    const container = $('#pt-lines-list');
    container.innerHTML = ptLines.map(line =>
        `<div class="pt-line-chip">${line}<button type="button" onclick="removePTLine('${line.replace(/'/g, "\\'")}')">&times;</button></div>`
    ).join('');
}

function startPTSession() {
    if (ptLines.length === 0) {
        alert('Please add at least one line.');
        return;
    }

    const stopName = $('#pt-stop-name').value.trim() || 'Unnamed Stop';
    const date = $('#pt-date').value;
    const startTime = $('#pt-start-time').value;
    const intervalMinutes = parseInt($('#pt-interval').value);

    currentSession = {
        id: Date.now().toString(36),
        mode: 'pt',
        stopName,
        date,
        startTime,
        intervalMinutes,
        lines: [...ptLines],
        intervals: [],
        createdAt: new Date().toISOString()
    };

    undoStack = [];
    isPaused = false;
    ptCurrentVehicle = null;
    ptUseNumberInput = false;

    startNewPTInterval();
    renderPTCountingScreen();
    showScreen('pt-count-screen');
    requestWakeLock();
}

function startNewPTInterval() {
    let intervalStart;

    if (currentSession.intervals.length === 0) {
        intervalStart = new Date(currentSession.date + 'T' + currentSession.startTime);
    } else {
        const prev = currentSession.intervals[currentSession.intervals.length - 1];
        intervalStart = new Date(prev.endTime);
    }

    const intervalEnd = new Date(intervalStart.getTime() + currentSession.intervalMinutes * 60000);

    currentSession.intervals.push({
        startTime: intervalStart.toISOString(),
        endTime: intervalEnd.toISOString(),
        vehicles: []
    });

    startTimer();
}

function renderPTCountingScreen() {
    // Stop label
    $('#pt-stop-label').textContent = currentSession.stopName;

    // Line selector buttons
    const container = $('#pt-line-buttons');
    container.innerHTML = '';
    currentSession.lines.forEach(line => {
        const btn = document.createElement('button');
        btn.className = 'pt-line-btn';
        btn.textContent = line;
        btn.addEventListener('click', () => ptSelectLine(line));
        container.appendChild(btn);
    });

    // Show/hide based on current vehicle state
    if (ptCurrentVehicle) {
        $('#pt-line-selector').style.display = 'none';
        $('#pt-counter').style.display = '';
        $('#pt-current-line-label').textContent = ptCurrentVehicle.line;
        $('#boarding-count').textContent = ptCurrentVehicle.boarding;
        $('#alighting-count').textContent = ptCurrentVehicle.alighting;

        // Sync number inputs
        $('#pt-boarding-num').value = ptCurrentVehicle.boarding;
        $('#pt-alighting-num').value = ptCurrentVehicle.alighting;

        // Show/hide input modes
        const tapMode = ptUseNumberInput ? 'none' : '';
        const numMode = ptUseNumberInput ? '' : 'none';
        $('.pt-count-buttons').style.display = tapMode ? 'none' : 'grid';
        $('#pt-number-input').style.display = numMode ? 'none' : 'grid';
        $('#btn-toggle-input').textContent = ptUseNumberInput ? 'Switch to tap counting' : 'Switch to number entry';
    } else {
        $('#pt-line-selector').style.display = '';
        $('#pt-counter').style.display = 'none';
    }

    // Render vehicle log
    renderPTVehicleLog();
}

function ptSelectLine(line) {
    ptCurrentVehicle = { line, boarding: 0, alighting: 0 };
    ptUseNumberInput = false;
    renderPTCountingScreen();
}

function ptCount(type) {
    if (!ptCurrentVehicle || isPaused) return;
    ptCurrentVehicle[type]++;
    if (navigator.vibrate) navigator.vibrate(30);
    $('#boarding-count').textContent = ptCurrentVehicle.boarding;
    $('#alighting-count').textContent = ptCurrentVehicle.alighting;
}

function ptToggleInputMode() {
    ptUseNumberInput = !ptUseNumberInput;

    if (ptUseNumberInput) {
        // Sync tap counts to number inputs
        $('#pt-boarding-num').value = ptCurrentVehicle.boarding;
        $('#pt-alighting-num').value = ptCurrentVehicle.alighting;
        $('.pt-count-buttons').style.display = 'none';
        $('#pt-number-input').style.display = 'grid';
    } else {
        // Sync number inputs back to tap counts
        ptCurrentVehicle.boarding = parseInt($('#pt-boarding-num').value) || 0;
        ptCurrentVehicle.alighting = parseInt($('#pt-alighting-num').value) || 0;
        $('.pt-count-buttons').style.display = 'grid';
        $('#pt-number-input').style.display = 'none';
        $('#boarding-count').textContent = ptCurrentVehicle.boarding;
        $('#alighting-count').textContent = ptCurrentVehicle.alighting;
    }

    $('#btn-toggle-input').textContent = ptUseNumberInput ? 'Switch to tap counting' : 'Switch to number entry';
}

function ptFinishVehicle() {
    if (!ptCurrentVehicle) return;

    // If in number input mode, read the values
    if (ptUseNumberInput) {
        ptCurrentVehicle.boarding = parseInt($('#pt-boarding-num').value) || 0;
        ptCurrentVehicle.alighting = parseInt($('#pt-alighting-num').value) || 0;
    }

    const interval = getCurrentInterval();
    if (!interval) return;

    const entry = {
        time: new Date().toISOString(),
        line: ptCurrentVehicle.line,
        boarding: ptCurrentVehicle.boarding,
        alighting: ptCurrentVehicle.alighting
    };

    interval.vehicles.push(entry);
    undoStack.push({ type: 'pt-vehicle', intervalIndex: currentSession.intervals.length - 1 });

    if (navigator.vibrate) navigator.vibrate([30, 50, 30]);

    ptCurrentVehicle = null;
    ptUseNumberInput = false;
    renderPTCountingScreen();
}

function ptCancelVehicle() {
    ptCurrentVehicle = null;
    ptUseNumberInput = false;
    renderPTCountingScreen();
}

function ptUndoLast() {
    if (undoStack.length === 0) return;
    const last = undoStack.pop();

    if (last.type === 'pt-vehicle') {
        const interval = currentSession.intervals[last.intervalIndex];
        if (interval && interval.vehicles.length > 0) {
            interval.vehicles.pop();
        }
    }

    if (navigator.vibrate) navigator.vibrate([50, 30, 50]);
    renderPTCountingScreen();
}

function ptDeleteVehicle(intervalIndex, vehicleIndex) {
    currentSession.intervals[intervalIndex].vehicles.splice(vehicleIndex, 1);
    renderPTCountingScreen();
}

function renderPTVehicleLog() {
    const container = $('#pt-log-entries');
    const interval = getCurrentInterval();
    if (!interval || !interval.vehicles) {
        container.innerHTML = '<p style="color:var(--text-secondary);font-size:0.85rem;text-align:center;padding:16px;">No vehicles counted yet</p>';
        return;
    }

    const intervalIdx = currentSession.intervals.length - 1;

    container.innerHTML = interval.vehicles.map((v, i) => {
        const time = formatTime(new Date(v.time));
        return `<div class="pt-log-entry">
            <span class="log-line">${v.line}</span>
            <span class="log-time">${time}</span>
            <span class="log-counts">
                <span class="log-board">+${v.boarding}</span>
                <span class="log-alight">-${v.alighting}</span>
            </span>
            <button class="log-delete" onclick="ptDeleteVehicle(${intervalIdx},${i})">&times;</button>
        </div>`;
    }).reverse().join('');
}

// PT Quick Summary
function showPTQuickSummary() {
    const body = $('#summary-body');
    const interval = getCurrentInterval();

    let totalBoarding = 0;
    let totalAlighting = 0;
    let vehicleCount = 0;
    const lineTotals = {};

    if (interval && interval.vehicles) {
        interval.vehicles.forEach(v => {
            totalBoarding += v.boarding;
            totalAlighting += v.alighting;
            vehicleCount++;
            if (!lineTotals[v.line]) lineTotals[v.line] = { vehicles: 0, boarding: 0, alighting: 0 };
            lineTotals[v.line].vehicles++;
            lineTotals[v.line].boarding += v.boarding;
            lineTotals[v.line].alighting += v.alighting;
        });
    }

    let html = `<div class="summary-grid">
        <div class="summary-card"><div class="label">Vehicles</div><div class="value">${vehicleCount}</div></div>
        <div class="summary-card"><div class="label">Intervals</div><div class="value">${currentSession.intervals.length}</div></div>
        <div class="summary-card"><div class="label">Boarding</div><div class="value" style="color:#188038">${totalBoarding}</div></div>
        <div class="summary-card"><div class="label">Alighting</div><div class="value" style="color:#d93025">${totalAlighting}</div></div>
    </div>`;

    // Session totals
    let sessionBoarding = 0, sessionAlighting = 0, sessionVehicles = 0;
    currentSession.intervals.forEach(intv => {
        if (intv.vehicles) {
            intv.vehicles.forEach(v => {
                sessionBoarding += v.boarding;
                sessionAlighting += v.alighting;
                sessionVehicles++;
            });
        }
    });

    html += `<p style="margin-top:16px;text-align:center;font-size:0.9rem;color:var(--text-secondary)">
        Session: <strong>${sessionVehicles}</strong> vehicles,
        <strong style="color:#188038">+${sessionBoarding}</strong> boarding,
        <strong style="color:#d93025">-${sessionAlighting}</strong> alighting
    </p>`;

    body.innerHTML = html;
    $('#summary-modal').classList.add('active');
}

// PT Results Tables
function renderPTSummaryTable(container, session) {
    const lineTotals = {};
    session.lines.forEach(l => lineTotals[l] = { vehicles: 0, boarding: 0, alighting: 0 });

    session.intervals.forEach(interval => {
        if (interval.vehicles) {
            interval.vehicles.forEach(v => {
                if (!lineTotals[v.line]) lineTotals[v.line] = { vehicles: 0, boarding: 0, alighting: 0 };
                lineTotals[v.line].vehicles++;
                lineTotals[v.line].boarding += v.boarding;
                lineTotals[v.line].alighting += v.alighting;
            });
        }
    });

    let grandVehicles = 0, grandBoarding = 0, grandAlighting = 0;

    let html = `<table class="results-table"><thead><tr>
        <th>Line</th><th>Vehicles</th><th>Boarding</th><th>Alighting</th><th>Net</th>
    </tr></thead><tbody>`;

    for (const line of Object.keys(lineTotals)) {
        const t = lineTotals[line];
        const net = t.boarding - t.alighting;
        grandVehicles += t.vehicles;
        grandBoarding += t.boarding;
        grandAlighting += t.alighting;

        html += `<tr>
            <td><strong>${line}</strong></td>
            <td>${t.vehicles}</td>
            <td style="color:#188038">${t.boarding}</td>
            <td style="color:#d93025">${t.alighting}</td>
            <td>${net >= 0 ? '+' : ''}${net}</td>
        </tr>`;
    }

    const grandNet = grandBoarding - grandAlighting;
    html += `<tr class="total-row">
        <td>TOTAL</td>
        <td>${grandVehicles}</td>
        <td>${grandBoarding}</td>
        <td>${grandAlighting}</td>
        <td>${grandNet >= 0 ? '+' : ''}${grandNet}</td>
    </tr>`;

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderPTIntervalTables(container, session) {
    let html = '';

    session.intervals.forEach((interval, idx) => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));

        html += `<h3 style="margin:16px 0 8px;font-size:0.95rem;">Interval ${idx + 1}: ${start} - ${end}</h3>`;

        if (!interval.vehicles || interval.vehicles.length === 0) {
            html += `<p style="color:var(--text-secondary);font-size:0.85rem;">No vehicles counted</p>`;
            return;
        }

        html += `<table class="results-table"><thead><tr>
            <th>Time</th><th>Line</th><th>Boarding</th><th>Alighting</th>
        </tr></thead><tbody>`;

        let intBoarding = 0, intAlighting = 0;

        interval.vehicles.forEach(v => {
            const time = formatTime(new Date(v.time));
            intBoarding += v.boarding;
            intAlighting += v.alighting;

            html += `<tr>
                <td>${time}</td>
                <td><strong>${v.line}</strong></td>
                <td style="color:#188038">${v.boarding}</td>
                <td style="color:#d93025">${v.alighting}</td>
            </tr>`;
        });

        html += `<tr class="total-row">
            <td colspan="2">Subtotal</td>
            <td>${intBoarding}</td>
            <td>${intAlighting}</td>
        </tr>`;

        html += `</tbody></table>`;
    });

    container.innerHTML = html;
}

// PT CSV Export
function buildPTCSV(session) {
    const headers = ['Stop', 'Date', 'Interval Start', 'Interval End', 'Time', 'Line', 'Boarding', 'Alighting'];
    const rows = [headers.join(',')];

    session.intervals.forEach(interval => {
        const intStart = formatTime(new Date(interval.startTime));
        const intEnd = formatTime(new Date(interval.endTime));

        if (interval.vehicles) {
            interval.vehicles.forEach(v => {
                const time = formatTime(new Date(v.time));
                rows.push([
                    `"${session.stopName}"`,
                    session.date,
                    intStart,
                    intEnd,
                    time,
                    `"${v.line}"`,
                    v.boarding,
                    v.alighting
                ].join(','));
            });
        }
    });

    return rows.join('\n');
}

// ===== WAKE LOCK =====
async function requestWakeLock() {
    try {
        if ('wakeLock' in navigator) {
            wakeLock = await navigator.wakeLock.request('screen');
        }
    } catch (e) {
        // Wake lock not available or denied — not critical
    }
}

function releaseWakeLock() {
    if (wakeLock) {
        wakeLock.release();
        wakeLock = null;
    }
}

// Re-acquire wake lock when page becomes visible again
document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible' && currentSession && !currentSession.endTime) {
        requestWakeLock();
    }
});
