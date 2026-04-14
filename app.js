// ===== I18N =====
const I18N = {
    en: {
        app_title: 'Traffic Counter',
        session_history: 'Session History',
        mode_traffic: 'Traffic Counting',
        mode_pt: 'PT Passengers',
        mode_merge: 'Merge Files',
        traffic_hint: 'Count vehicles at an intersection by type, turning movement, and approach. Select your intersection layout, choose vehicle types, and set a time interval. Tap each vehicle button as it passes. Long-press to correct a miscount. Data auto-saves at each interval.',
        pt_hint: 'Count boarding and alighting passengers at a PT stop. Add the bus/tram lines that pass your stop. When a vehicle arrives, tap its line, then tap Boarding/Alighting for each passenger (or switch to number entry for busy stops). Tap Done to log the vehicle. Data auto-saves at each interval.',
        merge_hint: 'Select 2 or more .xlsx files exported by students counting at the same intersection. Files will be merged by combining approaches and summing overlapping data.',
        counting_hint: 'Tap a button to count. Long-press to subtract. Use tabs to switch approach. Undo reverses your last tap.',
        pt_counting_hint: 'Tap a line when a vehicle arrives. Count boarding/alighting, then tap Done. Use number entry for busy stops. Tap x on any log entry to delete it.',
        site_name: 'Site Name',
        site_name_ph: 'e.g. Main St & 2nd Ave',
        date: 'Date',
        start_time: 'Start Time',
        num_approaches: 'Number of Approaches',
        approach_names: 'Approach Names',
        turning_movements: 'Turning Movements',
        mv_left: 'Left',
        mv_straight: 'Straight',
        mv_right: 'Right',
        mv_uturn: 'U-turn',
        time_interval: 'Time Interval (minutes)',
        vehicle_types: 'Vehicle Types',
        sound_alert: 'Sound alert on interval change',
        start_counting: 'Start Counting',
        stop_name: 'Stop Name',
        stop_name_ph: 'e.g. Glavni kolodvor',
        lines_at_stop: 'Lines at this stop',
        line_ph: 'e.g. Tram 6, Bus 268',
        add: 'Add',
        select_files: 'Select Excel files to merge',
        tap_select_files: 'Tap to select .xlsx files',
        merge_view: 'Merge & View Results',
        credit: 'Made by: Karlo Babojelić, University of Zagreb Faculty of Transport and Traffic Sciences',
        undo: 'Undo',
        pause: 'Pause',
        resume: 'Resume',
        summary: 'Summary',
        end: 'End',
        select_arriving_line: 'Select arriving line:',
        boarding: 'BOARDING',
        alighting: 'ALIGHTING',
        boarding_cap: 'Boarding',
        alighting_cap: 'Alighting',
        switch_number_entry: 'Switch to number entry',
        switch_tap_counting: 'Switch to tap counting',
        done: 'Done',
        vehicle_log: 'Vehicle Log',
        results: 'Results',
        vehicle_pct: 'Vehicle %',
        by_interval: 'By Interval',
        diagram: 'Diagram',
        merge_selected: 'Merge Selected',
        cancel: 'Cancel',
        select_and_merge: 'Select & Merge',
        quick_summary: 'Quick Summary',
        approach: 'Approach',
        direction: 'Direction',
        movement: 'Movement',
        total: 'Total',
        line: 'Line',
        vehicles: 'Vehicles',
        net_change: 'Net Change',
        peak_15: 'Peak',
        peak_hour: 'Peak Hour',
        phf: 'Peak Hour Factor (PHF)',
        phf_detail: '1.0 = uniform flow, 0.25 = all traffic in one 15-min period',
        directional_split: 'Directional Split',
        vehicle_type_split: 'Vehicle Type Split',
        mode_label: 'Mode',
        mode_pt_full: 'PT Passenger Counting',
        intervals_label: 'Intervals',
        approaches_label: 'Approaches',
        lines_label: 'Lines',
        dir_left: 'Left Turn',
        dir_straight: 'Straight',
        dir_right: 'Right Turn',
        dir_uturn: 'U-Turn',
        dir_crossing: 'Crossing',
        veh_car: 'Car',
        veh_lgv: 'LGV',
        veh_hgv: 'HGV',
        veh_bus: 'Bus',
        veh_tram: 'Tram',
        veh_motorcycle: 'M/cycle',
        veh_bicycle: 'Bicycle',
        veh_pedestrian: 'Pedestr.',
        veh_escooter: 'E-scoot',
        veh_taxi: 'Taxi',
        ap_north: 'North',
        ap_east: 'East',
        ap_south: 'South',
        ap_west: 'West',
        ap_placeholder: 'Approach',
        current_interval_total: 'Current Interval Total',
        intervals_done: 'Intervals Done',
        session_grand_total: 'Session grand total',
        session_totals: 'Session',
        confirm_end: 'End this counting session?',
        confirm_delete: 'Delete this session?',
        alert_no_movements: 'Please select at least one turning movement.',
        alert_no_vehicles: 'Please select at least one vehicle type.',
        alert_no_lines: 'Please add at least one line.',
        alert_share_fail: 'Sharing failed. Try the download buttons instead.',
        alert_share_unsupported: 'Sharing is not supported on this browser. Use the download buttons instead.',
        alert_excel_missing: 'Excel library not loaded. Check your internet connection and try again.',
        alert_merge_pt: 'Can only merge traffic counting sessions, not PT passenger sessions.',
        alert_merge_interval: 'All files must have the same time interval to merge.',
        alert_merge_interval_import: 'Sessions must have the same time interval to merge.',
        empty_history: 'No saved sessions yet.',
        no_vehicles_counted: 'No vehicles counted yet',
        no_vehicles_interval: 'No vehicles counted',
        n_selected: '{n} selected',
        files_loaded: '{n} file(s) loaded — tap to add more',
        peak_suffix: 'veh',
        pt_mode_tag: 'PT Passengers',
        traffic_mode_tag: 'Traffic',
        traffic_proportions_title: 'Vehicle Type Proportions by Approach & Movement',
        pct_of_row: '% of row',
        interval_label: 'Interval',
        subtotal: 'Subtotal',
        vehicles_count: 'Vehicles'
    },
    hr: {
        app_title: 'Brojač prometa',
        session_history: 'Povijest brojanja',
        mode_traffic: 'Brojanje prometa',
        mode_pt: 'Putnici JPP',
        mode_merge: 'Spoji datoteke',
        traffic_hint: 'Brojite vozila na raskrižju prema vrsti, smjeru skretanja i privozu. Odaberite raspored raskrižja, vrste vozila i vremenski interval. Tapnite odgovarajuće vozilo kad prolazi. Dugi pritisak za ispravak krivog brojanja. Podaci se automatski spremaju na svakom intervalu.',
        pt_hint: 'Brojite putnike koji ulaze i izlaze na stajalištu JPP. Dodajte linije autobusa/tramvaja koje prolaze vašim stajalištem. Kad vozilo stigne, odaberite liniju, zatim tapnite Ulaz/Izlaz za svakog putnika (ili prebacite na unos broja za prometnija stajališta). Tapnite Gotovo za spremanje vozila. Podaci se automatski spremaju na svakom intervalu.',
        merge_hint: 'Odaberite 2 ili više .xlsx datoteka koje su studenti izvezli dok su brojali na istom raskrižju. Datoteke će se spojiti kombiniranjem privoza i zbrajanjem preklapajućih podataka.',
        counting_hint: 'Tapnite gumb za brojanje. Dugi pritisak za oduzimanje. Koristite kartice za promjenu privoza. Poništi vraća zadnji potez.',
        pt_counting_hint: 'Tapnite liniju kad vozilo stigne. Brojite ulaze/izlaze, zatim tapnite Gotovo. Koristite unos broja za prometnija stajališta. Tapnite x na bilo kojem zapisu za brisanje.',
        site_name: 'Naziv lokacije',
        site_name_ph: 'npr. Savska ul. i Vukovarska',
        date: 'Datum',
        start_time: 'Vrijeme početka',
        num_approaches: 'Broj privoza',
        approach_names: 'Nazivi privoza',
        turning_movements: 'Smjerovi skretanja',
        mv_left: 'Lijevo',
        mv_straight: 'Ravno',
        mv_right: 'Desno',
        mv_uturn: 'Polukružno',
        time_interval: 'Vremenski interval (minute)',
        vehicle_types: 'Vrste vozila',
        sound_alert: 'Zvučni signal na kraju intervala',
        start_counting: 'Započni brojanje',
        stop_name: 'Naziv stajališta',
        stop_name_ph: 'npr. Glavni kolodvor',
        lines_at_stop: 'Linije na ovom stajalištu',
        line_ph: 'npr. Tramvaj 6, Autobus 268',
        add: 'Dodaj',
        select_files: 'Odaberite Excel datoteke za spajanje',
        tap_select_files: 'Tapnite za odabir .xlsx datoteka',
        merge_view: 'Spoji i prikaži rezultate',
        credit: 'Izradio: Karlo Babojelić, Sveučilište u Zagrebu, Fakultet prometnih znanosti',
        undo: 'Poništi',
        pause: 'Pauza',
        resume: 'Nastavi',
        summary: 'Sažetak',
        end: 'Kraj',
        select_arriving_line: 'Odaberite dolaznu liniju:',
        boarding: 'ULAZ',
        alighting: 'IZLAZ',
        boarding_cap: 'Ulaz',
        alighting_cap: 'Izlaz',
        switch_number_entry: 'Prebaci na unos broja',
        switch_tap_counting: 'Prebaci na brojanje tapanjem',
        done: 'Gotovo',
        vehicle_log: 'Popis vozila',
        results: 'Rezultati',
        vehicle_pct: 'Vozila %',
        by_interval: 'Po intervalu',
        diagram: 'Dijagram',
        merge_selected: 'Spoji odabrano',
        cancel: 'Odustani',
        select_and_merge: 'Odaberi i spoji',
        quick_summary: 'Brzi sažetak',
        approach: 'Privoz',
        direction: 'Smjer',
        movement: 'Kretanje',
        total: 'Ukupno',
        line: 'Linija',
        vehicles: 'Vozila',
        net_change: 'Neto promjena',
        peak_15: 'Vršni',
        peak_hour: 'Vršni sat',
        phf: 'Faktor vršnog sata (PHF)',
        phf_detail: '1.0 = ujednačen tok, 0.25 = sav promet u jednom 15-min razdoblju',
        directional_split: 'Podjela po smjerovima',
        vehicle_type_split: 'Podjela po vrsti vozila',
        mode_label: 'Način',
        mode_pt_full: 'Brojanje putnika JPP',
        intervals_label: 'Intervala',
        approaches_label: 'Privozi',
        lines_label: 'Linije',
        dir_left: 'Skretanje lijevo',
        dir_straight: 'Ravno',
        dir_right: 'Skretanje desno',
        dir_uturn: 'Polukružno',
        dir_crossing: 'Prelaženje',
        veh_car: 'Auto',
        veh_lgv: 'LDV',
        veh_hgv: 'TDV',
        veh_bus: 'Bus',
        veh_tram: 'Tram',
        veh_motorcycle: 'Motocikl',
        veh_bicycle: 'Bicikl',
        veh_pedestrian: 'Pješak',
        veh_escooter: 'E-rom.',
        veh_taxi: 'Taxi',
        ap_north: 'Sjever',
        ap_east: 'Istok',
        ap_south: 'Jug',
        ap_west: 'Zapad',
        ap_placeholder: 'Privoz',
        current_interval_total: 'Ukupno u trenutnom intervalu',
        intervals_done: 'Završenih intervala',
        session_grand_total: 'Ukupno sesije',
        session_totals: 'Sesija',
        confirm_end: 'Završiti ovu sesiju brojanja?',
        confirm_delete: 'Obrisati ovu sesiju?',
        alert_no_movements: 'Odaberite barem jedan smjer skretanja.',
        alert_no_vehicles: 'Odaberite barem jednu vrstu vozila.',
        alert_no_lines: 'Dodajte barem jednu liniju.',
        alert_share_fail: 'Dijeljenje nije uspjelo. Pokušajte s gumbima za preuzimanje.',
        alert_share_unsupported: 'Dijeljenje nije podržano u ovom pregledniku. Koristite gumbe za preuzimanje.',
        alert_excel_missing: 'Excel biblioteka nije učitana. Provjerite internetsku vezu i pokušajte ponovno.',
        alert_merge_pt: 'Mogu se spojiti samo sesije brojanja prometa, ne i sesije putnika JPP.',
        alert_merge_interval: 'Sve datoteke moraju imati isti vremenski interval za spajanje.',
        alert_merge_interval_import: 'Sesije moraju imati isti vremenski interval za spajanje.',
        empty_history: 'Još nema spremljenih sesija.',
        no_vehicles_counted: 'Još nema prebrojanih vozila',
        no_vehicles_interval: 'Nema prebrojanih vozila',
        n_selected: '{n} odabrano',
        files_loaded: '{n} datoteka učitano — tapnite za dodavanje',
        peak_suffix: 'voz',
        pt_mode_tag: 'Putnici JPP',
        traffic_mode_tag: 'Promet',
        traffic_proportions_title: 'Udio vrsta vozila po privozu i kretanju',
        pct_of_row: '% retka',
        interval_label: 'Interval',
        subtotal: 'Međuzbroj',
        vehicles_count: 'Vozila'
    }
};

let currentLang = localStorage.getItem('tc_lang') || 'en';

function t(key, params) {
    let str = (I18N[currentLang] && I18N[currentLang][key]) || (I18N.en[key] || key);
    if (params) {
        for (const k of Object.keys(params)) {
            str = str.replace(`{${k}}`, params[k]);
        }
    }
    return str;
}

function applyTranslations() {
    // Text content
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        el.textContent = t(key);
    });
    // Placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = t(key);
    });
    // Titles
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
        const key = el.getAttribute('data-i18n-title');
        el.title = t(key);
    });
    // Active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });
    // Update html lang attribute
    document.documentElement.lang = currentLang;
}

function setLanguage(lang) {
    if (!I18N[lang]) return;
    currentLang = lang;
    localStorage.setItem('tc_lang', lang);
    applyTranslations();
    // Re-render dynamic views if visible
    if (document.getElementById('setup-screen')?.classList.contains('active')) {
        initSetupForm();
        initPTSetupForm();
    }
    if (document.getElementById('count-screen')?.classList.contains('active')) {
        renderCountingScreen();
    }
    if (document.getElementById('pt-count-screen')?.classList.contains('active')) {
        renderPTCountingScreen();
    }
    if (document.getElementById('results-screen')?.classList.contains('active') && currentSession) {
        showResults(currentSession);
    }
    if (document.getElementById('history-screen')?.classList.contains('active')) {
        showHistory();
    }
}

// ===== CONSTANTS =====
const DEFAULT_VEHICLE_TYPES = [
    { id: 'car', labelKey: 'veh_car' },
    { id: 'lgv', labelKey: 'veh_lgv' },
    { id: 'hgv', labelKey: 'veh_hgv' },
    { id: 'bus', labelKey: 'veh_bus' },
    { id: 'tram', labelKey: 'veh_tram' },
    { id: 'motorcycle', labelKey: 'veh_motorcycle' },
    { id: 'bicycle', labelKey: 'veh_bicycle' },
    { id: 'pedestrian', labelKey: 'veh_pedestrian' },
    { id: 'escooter', labelKey: 'veh_escooter' },
    { id: 'taxi', labelKey: 'veh_taxi' }
];

// Helper to get vehicle type label in current language
function getVehicleLabel(vtId) {
    const vt = DEFAULT_VEHICLE_TYPES.find(v => v.id === vtId);
    return vt ? t(vt.labelKey) : vtId;
}

const DEFAULT_APPROACH_KEYS = ['ap_north', 'ap_east', 'ap_south', 'ap_west'];

const DIRECTION_ARROWS = {
    left: '\u2B05',
    straight: '\u2B06',
    right: '\u27A1',
    uturn: '\u21A9'
};

function getDirectionLabel(movement) {
    const map = { left: 'dir_left', straight: 'dir_straight', right: 'dir_right', uturn: 'dir_uturn', crossing: 'dir_crossing' };
    return t(map[movement] || movement);
}

// English labels for CSV/XLSX export — keeps files language-independent
const DIRECTION_LABELS_EN = {
    left: 'Left Turn',
    straight: 'Straight',
    right: 'Right Turn',
    uturn: 'U-Turn',
    crossing: 'Crossing'
};
const VEHICLE_LABELS_EN = {
    car: 'Car', lgv: 'LGV', hgv: 'HGV', bus: 'Bus', tram: 'Tram',
    motorcycle: 'M/cycle', bicycle: 'Bicycle', pedestrian: 'Pedestr.',
    escooter: 'E-scoot', taxi: 'Taxi'
};

// Backwards-compat object — now returns current-language labels via getter
const DIRECTION_LABELS = new Proxy({}, {
    get(_, key) { return getDirectionLabel(key); }
});

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

// Merge state
let mergeMode = false;
let mergeSelected = new Set();

// Merge file state
let mergeFiles = []; // { name, session } objects pending merge

// PT-specific state
let ptLines = [];
let ptCurrentVehicle = null; // { line, boarding, alighting }
let ptUseNumberInput = false;

// ===== DOM ELEMENTS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    applyTranslations();
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
    container.innerHTML = '';
    DEFAULT_VEHICLE_TYPES.forEach(vt => {
        const label = document.createElement('label');
        label.className = 'toggle';
        label.innerHTML = `<input type="checkbox" value="${vt.id}" checked><span>${t(vt.labelKey)}</span>`;
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
        const defaultName = DEFAULT_APPROACH_KEYS[i] ? t(DEFAULT_APPROACH_KEYS[i]) : '';
        input.placeholder = `${t('ap_placeholder')} ${i + 1}${defaultName ? ' (' + defaultName + ')' : ''}`;
        input.value = defaultName;
        input.dataset.index = i;
        container.appendChild(input);
    }
}

function bindEvents() {
    // Language switcher
    $$('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
    });

    // Mode selector
    $$('.mode-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.mode-tab').forEach(otherTab => otherTab.classList.remove('active'));
            tab.classList.add('active');
            currentMode = tab.dataset.mode;
            $('#setup-form').style.display = currentMode === 'traffic' ? '' : 'none';
            $('#pt-setup-form').style.display = currentMode === 'pt' ? '' : 'none';
            $('#merge-form').style.display = currentMode === 'merge' ? '' : 'none';
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

    // Merge files
    $('#merge-file-input').addEventListener('change', handleMergeFileSelect);
    $('#btn-merge-files').addEventListener('click', mergeImportedFiles);

    // History
    $('#btn-history').addEventListener('click', showHistory);
    $('#btn-back-from-history').addEventListener('click', () => { mergeMode = false; showScreen('setup-screen'); });
    $('#btn-select-merge').addEventListener('click', enterMergeMode);
    $('#btn-cancel-merge').addEventListener('click', exitMergeMode);
    $('#btn-merge').addEventListener('click', mergeSelectedSessions);
    $('#btn-import-csv').addEventListener('click', () => $('#csv-file-input').click());
    $('#csv-file-input').addEventListener('change', handleCSVImport);

    // Traffic counting controls
    $('#btn-undo').addEventListener('click', undoLast);
    $('#btn-pause').addEventListener('click', togglePause);
    $('#btn-summary').addEventListener('click', showQuickSummary);
    $('#btn-end').addEventListener('click', endSession);

    // PT counting controls
    $('#btn-boarding').addEventListener('click', () => ptCount('boarding'));
    $('#btn-alighting').addEventListener('click', () => ptCount('alighting'));
    $('#btn-boarding-minus').addEventListener('click', () => ptDecrement('boarding'));
    $('#btn-alighting-minus').addEventListener('click', () => ptDecrement('alighting'));
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
    $('#btn-export-xlsx').addEventListener('click', exportXLSX);
    $('#btn-share').addEventListener('click', shareData);
    $$('.results-tab').forEach(tab => {
        tab.addEventListener('click', () => {
            $$('.results-tab').forEach(otherTab => otherTab.classList.remove('active'));
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
        alert(t('alert_no_movements'));
        return;
    }

    // Gather active vehicle types
    const vehicleTypes = Array.from($$('#vehicle-toggles input:checked')).map(cb => cb.value);
    if (vehicleTypes.length === 0) {
        alert(t('alert_no_vehicles'));
        return;
    }

    const soundAlert = $('#sound-alert').checked;

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
        soundAlert,
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

function playBeep() {
    try {
        const ctx = new (window.AudioContext || window.webkitAudioContext)();
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.frequency.value = 800;
        osc.type = 'sine';
        gain.gain.value = 0.3;
        osc.start();
        osc.stop(ctx.currentTime + 0.3);
        // Second beep after short pause
        const osc2 = ctx.createOscillator();
        const gain2 = ctx.createGain();
        osc2.connect(gain2);
        gain2.connect(ctx.destination);
        osc2.frequency.value = 1000;
        osc2.type = 'sine';
        gain2.gain.value = 0.3;
        osc2.start(ctx.currentTime + 0.4);
        osc2.stop(ctx.currentTime + 0.7);
    } catch (e) {
        // Audio not available — not critical
    }
}

function onIntervalEnd() {
    if (navigator.vibrate) {
        navigator.vibrate([200, 100, 200, 100, 200]);
    }
    if (currentSession?.soundAlert) {
        playBeep();
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
            btn.textContent = '\u25B6 ' + t('resume');
            btn.classList.add('paused');
        } else {
            btn.textContent = '\u23F8 ' + t('pause');
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
            <span class="vehicle-label">${getVehicleLabel(vtId)}</span>
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
    html += `<div class="summary-card"><div class="label">${t('current_interval_total')}</div><div class="value">${grandTotal}</div></div>`;
    html += `<div class="summary-card"><div class="label">${t('intervals_done')}</div><div class="value">${currentSession.intervals.length}</div></div>`;

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
    html += `<p style="margin-top:16px;text-align:center;font-size:0.9rem;color:var(--text-secondary)">${t('session_grand_total')}: <strong>${sessionTotal}</strong></p>`;

    body.innerHTML = html;
    $('#summary-modal').classList.add('active');
}

// ===== END SESSION =====
function endSession() {
    if (!confirm(t('confirm_end'))) return;

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

    // Update merge bar visibility
    $('#merge-bar').style.display = mergeMode ? '' : 'none';
    $('.history-actions').style.display = mergeMode ? 'none' : '';

    if (sessions.length === 0) {
        container.innerHTML = `<div class="empty-state"><p>${t('empty_history')}</p></div>`;
        $('.history-actions').style.display = 'none';
    } else {
        container.innerHTML = sessions.map(s => {
            const checkbox = mergeMode && s.mode !== 'pt'
                ? `<input type="checkbox" class="merge-cb" data-id="${s.id}" ${mergeSelected.has(s.id) ? 'checked' : ''}>`
                : '';
            return `<div class="history-item" data-id="${s.id}">
                ${checkbox}
                <div class="history-item-info">
                    <h3>${s.mode === 'pt' ? s.stopName : s.siteName}</h3>
                    <p>${s.mode === 'pt' ? t('pt_mode_tag') : t('traffic_mode_tag')} | ${s.date} | ${s.intervals.length}</p>
                </div>
                <div class="history-item-actions">
                    <button class="btn-delete-session" data-id="${s.id}" title="Delete">&times;</button>
                </div>
            </div>`;
        }).reverse().join('');

        // Bind events
        container.querySelectorAll('.history-item').forEach(item => {
            item.addEventListener('click', (e) => {
                if (e.target.closest('.btn-delete-session')) return;
                if (e.target.closest('.merge-cb')) return;
                if (mergeMode) {
                    const cb = item.querySelector('.merge-cb');
                    if (cb) { cb.checked = !cb.checked; cb.dispatchEvent(new Event('change')); }
                    return;
                }
                const session = sessions.find(s => s.id === item.dataset.id);
                if (session) showResults(session);
            });
        });

        container.querySelectorAll('.merge-cb').forEach(cb => {
            cb.addEventListener('change', () => {
                if (cb.checked) mergeSelected.add(cb.dataset.id);
                else mergeSelected.delete(cb.dataset.id);
                updateMergeBar();
            });
        });

        container.querySelectorAll('.btn-delete-session').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.stopPropagation();
                if (confirm(t('confirm_delete'))) {
                    deleteSession(btn.dataset.id);
                    showHistory();
                }
            });
        });
    }

    showScreen('history-screen');
}

function enterMergeMode() {
    mergeMode = true;
    mergeSelected.clear();
    showHistory();
}

function exitMergeMode() {
    mergeMode = false;
    mergeSelected.clear();
    showHistory();
}

function updateMergeBar() {
    $('#merge-count').textContent = t('n_selected', { n: mergeSelected.size });
    $('#btn-merge').disabled = mergeSelected.size < 2;
}

function mergeSelectedSessions() {
    const sessions = getSessions();
    const toMerge = sessions.filter(s => mergeSelected.has(s.id));

    if (toMerge.length < 2) return;

    // Validate: all must be traffic mode
    if (toMerge.some(s => s.mode === 'pt')) {
        alert(t('alert_merge_pt'));
        return;
    }

    // Validate: same interval length
    const intervalMins = toMerge[0].intervalMinutes;
    if (toMerge.some(s => s.intervalMinutes !== intervalMins)) {
        alert(t('alert_merge_interval_import'));
        return;
    }

    // Build merged session
    const base = toMerge[0];
    const allApproaches = [...new Set(toMerge.flatMap(s => s.approaches))];
    const allMovements = [...new Set(toMerge.flatMap(s => s.movements))];
    const allVehicleTypes = [...new Set(toMerge.flatMap(s => s.vehicleTypes))];

    // Find the max number of intervals across sessions
    const maxIntervals = Math.max(...toMerge.map(s => s.intervals.length));

    const mergedIntervals = [];
    for (let i = 0; i < maxIntervals; i++) {
        // Use timing from the first session that has this interval
        const refInterval = toMerge.find(s => s.intervals[i])?.intervals[i];
        if (!refInterval) continue;

        const counts = {};
        allApproaches.forEach(approach => {
            counts[approach] = {};
            allMovements.forEach(movement => {
                counts[approach][movement] = {};
                const motorTypes = allVehicleTypes.filter(vt => !CROSSING_TYPES.has(vt));
                motorTypes.forEach(vt => { counts[approach][movement][vt] = 0; });
            });
            const crossingTypes = allVehicleTypes.filter(vt => CROSSING_TYPES.has(vt));
            if (crossingTypes.length > 0) {
                counts[approach]['crossing'] = {};
                crossingTypes.forEach(vt => { counts[approach]['crossing'][vt] = 0; });
            }
        });

        // Sum counts from all sessions for this interval
        toMerge.forEach(s => {
            if (!s.intervals[i]) return;
            const intv = s.intervals[i];
            for (const approach of Object.keys(intv.counts)) {
                for (const movement of Object.keys(intv.counts[approach])) {
                    for (const vt of Object.keys(intv.counts[approach][movement])) {
                        if (!counts[approach]) counts[approach] = {};
                        if (!counts[approach][movement]) counts[approach][movement] = {};
                        counts[approach][movement][vt] = (counts[approach][movement][vt] || 0) + intv.counts[approach][movement][vt];
                    }
                }
            }
        });

        mergedIntervals.push({
            startTime: refInterval.startTime,
            endTime: refInterval.endTime,
            counts
        });
    }

    const mergedSession = {
        id: Date.now().toString(36),
        siteName: toMerge.map(s => s.siteName).filter((v, i, a) => a.indexOf(v) === i).join(' + '),
        date: base.date,
        startTime: base.startTime,
        intervalMinutes: intervalMins,
        approaches: allApproaches,
        movements: allMovements,
        vehicleTypes: allVehicleTypes,
        intervals: mergedIntervals,
        merged: true,
        createdAt: new Date().toISOString()
    };

    // Save
    const allSessions = getSessions();
    allSessions.push(mergedSession);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allSessions));

    exitMergeMode();
    showResults(mergedSession);
}

// ===== CSV IMPORT =====
function handleCSVImport(e) {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (evt) => {
        try {
            const session = parseTrafficCSV(evt.target.result);
            const sessions = getSessions();
            sessions.push(session);
            localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
            showHistory();
            alert(`Imported: ${session.siteName} (${session.intervals.length} intervals)`);
        } catch (err) {
            alert('Failed to import CSV: ' + err.message);
        }
    };
    reader.readAsText(file);
    e.target.value = '';
}

function parseTrafficCSV(csvText) {
    const lines = csvText.replace(/^\uFEFF/, '').split('\n').filter(l => l.trim());
    if (lines.length < 2) throw new Error('CSV has no data rows');

    const headers = lines[0].split(',').map(h => h.trim().replace(/"/g, ''));

    // Detect if this is a traffic or PT CSV
    if (headers.includes('Stop')) throw new Error('PT passenger CSV import not supported for merging');

    const siteIdx = headers.indexOf('Site');
    const dateIdx = headers.indexOf('Date');
    const startIdx = headers.indexOf('Interval Start');
    const endIdx = headers.indexOf('Interval End');
    const approachIdx = headers.indexOf('Approach');
    const dirIdx = headers.indexOf('Direction');

    if (siteIdx < 0 || approachIdx < 0) throw new Error('CSV format not recognized');

    // Vehicle type columns are between Direction and Total
    const totalIdx = headers.indexOf('Total');
    const vtHeaders = headers.slice(dirIdx + 1, totalIdx);

    // Reverse map labels to IDs (match English export labels)
    const labelToId = {};
    Object.entries(VEHICLE_LABELS_EN).forEach(([id, label]) => { labelToId[label] = id; });

    const vtIds = vtHeaders.map(h => labelToId[h] || h.toLowerCase().replace(/[^a-z]/g, ''));

    // Reverse map direction labels (English)
    const dirLabelToKey = {};
    for (const [key, label] of Object.entries(DIRECTION_LABELS_EN)) {
        dirLabelToKey[label] = key;
    }

    // Parse rows
    const rows = [];
    for (let i = 1; i < lines.length; i++) {
        const cols = lines[i].match(/(".*?"|[^,]+)/g)?.map(c => c.replace(/"/g, '').trim());
        if (!cols || cols.length < headers.length) continue;
        rows.push(cols);
    }

    const siteName = rows[0]?.[siteIdx] || 'Imported';
    const date = rows[0]?.[dateIdx] || new Date().toISOString().split('T')[0];

    // Gather unique approaches, movements, intervals
    const approaches = [...new Set(rows.map(r => r[approachIdx]))];
    const movementLabels = [...new Set(rows.map(r => r[dirIdx]))];
    const movements = movementLabels.map(l => dirLabelToKey[l] || l.toLowerCase());
    const intervalKeys = [...new Set(rows.map(r => `${r[startIdx]}|${r[endIdx]}`))];

    // Detect interval minutes from first interval
    const firstStart = rows[0]?.[startIdx];
    const firstEnd = rows[0]?.[endIdx];
    let intervalMinutes = 15;
    if (firstStart && firstEnd) {
        const [sh, sm] = firstStart.split(':').map(Number);
        const [eh, em] = firstEnd.split(':').map(Number);
        intervalMinutes = (eh * 60 + em) - (sh * 60 + sm);
        if (intervalMinutes <= 0) intervalMinutes = 15;
    }

    // Build intervals
    const intervals = intervalKeys.map(key => {
        const [intStart, intEnd] = key.split('|');
        const counts = {};
        approaches.forEach(a => {
            counts[a] = {};
            movements.forEach(m => { counts[a][m] = {}; vtIds.forEach(vt => { counts[a][m][vt] = 0; }); });
        });

        rows.filter(r => `${r[startIdx]}|${r[endIdx]}` === key).forEach(r => {
            const approach = r[approachIdx];
            const movLabel = r[dirIdx];
            const movement = dirLabelToKey[movLabel] || movLabel.toLowerCase();

            vtIds.forEach((vtId, vi) => {
                const val = parseInt(r[dirIdx + 1 + vi]) || 0;
                if (counts[approach]?.[movement]) {
                    counts[approach][movement][vtId] = val;
                }
            });
        });

        // Convert time strings to ISO
        const startDate = new Date(`${date}T${intStart}:00`);
        const endDate = new Date(`${date}T${intEnd}:00`);

        return { startTime: startDate.toISOString(), endTime: endDate.toISOString(), counts };
    });

    return {
        id: Date.now().toString(36),
        siteName,
        date,
        startTime: rows[0]?.[startIdx] || '00:00',
        intervalMinutes,
        approaches,
        movements,
        vehicleTypes: vtIds,
        intervals,
        imported: true,
        createdAt: new Date().toISOString()
    };
}

// ===== MERGE FILES FROM IMPORT =====

function handleMergeFileSelect(e) {
    const files = Array.from(e.target.files);
    if (!files.length) return;

    files.forEach(file => {
        const reader = new FileReader();
        reader.onload = (evt) => {
            try {
                let session;
                if (file.name.endsWith('.xlsx')) {
                    session = parseXLSXToSession(evt.target.result);
                } else if (file.name.endsWith('.csv')) {
                    session = parseTrafficCSV(evt.target.result);
                } else {
                    alert(`Unsupported file: ${file.name}`);
                    return;
                }
                mergeFiles.push({ name: file.name, session });
                renderMergeFileList();
            } catch (err) {
                alert(`Failed to read ${file.name}: ${err.message}`);
            }
        };
        if (file.name.endsWith('.xlsx')) {
            reader.readAsArrayBuffer(file);
        } else {
            reader.readAsText(file);
        }
    });

    e.target.value = '';
}

function parseXLSXToSession(arrayBuffer) {
    if (typeof XLSX === 'undefined') throw new Error('Excel library not loaded');

    const wb = XLSX.utils.book_read(arrayBuffer, { type: 'array' });

    // Read the "Raw Data" sheet
    const ws = wb.Sheets['Raw Data'];
    if (!ws) throw new Error('No "Raw Data" sheet found. Is this a Traffic Counter export?');

    const rows = XLSX.utils.sheet_to_json(ws, { header: 1 });
    if (rows.length < 2) throw new Error('Raw Data sheet is empty');

    const headers = rows[0].map(String);

    const siteIdx = headers.indexOf('Site');
    const dateIdx = headers.indexOf('Date');
    const startIdx = headers.indexOf('Interval Start');
    const endIdx = headers.indexOf('Interval End');
    const approachIdx = headers.indexOf('Approach');
    const dirIdx = headers.indexOf('Direction');
    const totalIdx = headers.indexOf('Total');

    if (siteIdx < 0 || approachIdx < 0 || dirIdx < 0) throw new Error('Unrecognized column headers');

    const vtHeaders = headers.slice(dirIdx + 1, totalIdx);
    const labelToId = {};
    Object.entries(VEHICLE_LABELS_EN).forEach(([id, label]) => { labelToId[label] = id; });
    const vtIds = vtHeaders.map(h => labelToId[h] || h.toLowerCase().replace(/[^a-z]/g, ''));

    const dirLabelToKey = {};
    for (const [key, label] of Object.entries(DIRECTION_LABELS_EN)) {
        dirLabelToKey[label] = key;
    }

    const dataRows = rows.slice(1).filter(r => r.length >= headers.length);
    const siteName = dataRows[0]?.[siteIdx] || 'Imported';
    const date = dataRows[0]?.[dateIdx] || '';

    const approaches = [...new Set(dataRows.map(r => String(r[approachIdx])))];
    const movementLabels = [...new Set(dataRows.map(r => String(r[dirIdx])))];
    const movements = movementLabels.map(l => dirLabelToKey[l] || l.toLowerCase()).filter(m => m !== 'crossing');
    const hasCrossing = movementLabels.some(l => dirLabelToKey[l] === 'crossing');

    const intervalKeys = [...new Set(dataRows.map(r => `${r[startIdx]}|${r[endIdx]}`))];

    // Detect interval minutes
    const firstStart = String(dataRows[0]?.[startIdx] || '');
    const firstEnd = String(dataRows[0]?.[endIdx] || '');
    let intervalMinutes = 15;
    if (firstStart && firstEnd) {
        const [sh, sm] = firstStart.split(':').map(Number);
        const [eh, em] = firstEnd.split(':').map(Number);
        const diff = (eh * 60 + em) - (sh * 60 + sm);
        if (diff > 0) intervalMinutes = diff;
    }

    const intervals = intervalKeys.map(key => {
        const [intStart, intEnd] = key.split('|');
        const counts = {};
        approaches.forEach(a => {
            counts[a] = {};
            movements.forEach(m => { counts[a][m] = {}; vtIds.forEach(vt => { counts[a][m][vt] = 0; }); });
            const crossingTypes = vtIds.filter(vt => CROSSING_TYPES.has(vt));
            if (crossingTypes.length > 0) {
                counts[a]['crossing'] = {};
                crossingTypes.forEach(vt => { counts[a]['crossing'][vt] = 0; });
            }
        });

        dataRows.filter(r => `${r[startIdx]}|${r[endIdx]}` === key).forEach(r => {
            const approach = String(r[approachIdx]);
            const movLabel = String(r[dirIdx]);
            const movement = dirLabelToKey[movLabel] || movLabel.toLowerCase();

            vtIds.forEach((vtId, vi) => {
                const val = parseInt(r[dirIdx + 1 + vi]) || 0;
                if (counts[approach]?.[movement]) {
                    counts[approach][movement][vtId] = val;
                }
            });
        });

        const startDate = new Date(`${date}T${intStart}:00`);
        const endDate = new Date(`${date}T${intEnd}:00`);
        return { startTime: startDate.toISOString(), endTime: endDate.toISOString(), counts };
    });

    return {
        id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
        siteName, date,
        startTime: String(dataRows[0]?.[startIdx] || '00:00'),
        intervalMinutes, approaches, movements, vehicleTypes: vtIds,
        intervals, imported: true,
        createdAt: new Date().toISOString()
    };
}

function renderMergeFileList() {
    const container = $('#merge-file-list');
    container.innerHTML = mergeFiles.map((f, i) => `
        <div class="merge-file-item">
            <div>
                <div class="file-name">${f.name}</div>
                <div class="file-info">${f.session.siteName} | ${f.session.approaches.join(', ')} | ${f.session.intervals.length} ${t('intervals_label').toLowerCase()}</div>
            </div>
            <button onclick="removeMergeFile(${i})">&times;</button>
        </div>
    `).join('');

    $('#btn-merge-files').disabled = mergeFiles.length < 2;
    $('#merge-file-label').textContent = mergeFiles.length > 0
        ? t('files_loaded', { n: mergeFiles.length })
        : t('tap_select_files');
}

function removeMergeFile(index) {
    mergeFiles.splice(index, 1);
    renderMergeFileList();
}

function mergeImportedFiles() {
    if (mergeFiles.length < 2) return;

    const sessions = mergeFiles.map(f => f.session);

    // Validate same interval length
    const intMin = sessions[0].intervalMinutes;
    if (sessions.some(s => s.intervalMinutes !== intMin)) {
        alert(t('alert_merge_interval'));
        return;
    }

    const allApproaches = [...new Set(sessions.flatMap(s => s.approaches))];
    const allMovements = [...new Set(sessions.flatMap(s => s.movements))];
    const allVehicleTypes = [...new Set(sessions.flatMap(s => s.vehicleTypes))];
    const maxIntervals = Math.max(...sessions.map(s => s.intervals.length));

    const mergedIntervals = [];
    for (let i = 0; i < maxIntervals; i++) {
        const refInterval = sessions.find(s => s.intervals[i])?.intervals[i];
        if (!refInterval) continue;

        const counts = {};
        allApproaches.forEach(a => {
            counts[a] = {};
            allMovements.forEach(m => {
                counts[a][m] = {};
                allVehicleTypes.filter(vt => !CROSSING_TYPES.has(vt)).forEach(vt => { counts[a][m][vt] = 0; });
            });
            const ct = allVehicleTypes.filter(vt => CROSSING_TYPES.has(vt));
            if (ct.length > 0) {
                counts[a]['crossing'] = {};
                ct.forEach(vt => { counts[a]['crossing'][vt] = 0; });
            }
        });

        sessions.forEach(s => {
            if (!s.intervals[i]) return;
            const intv = s.intervals[i];
            for (const a of Object.keys(intv.counts)) {
                for (const m of Object.keys(intv.counts[a])) {
                    for (const vt of Object.keys(intv.counts[a][m])) {
                        if (!counts[a]) counts[a] = {};
                        if (!counts[a][m]) counts[a][m] = {};
                        counts[a][m][vt] = (counts[a][m][vt] || 0) + intv.counts[a][m][vt];
                    }
                }
            }
        });

        mergedIntervals.push({
            startTime: refInterval.startTime,
            endTime: refInterval.endTime,
            counts
        });
    }

    const names = sessions.map(s => s.siteName).filter((v, i, a) => a.indexOf(v) === i);
    const mergedSession = {
        id: Date.now().toString(36),
        siteName: names.length === 1 ? names[0] + ' (merged)' : names.join(' + '),
        date: sessions[0].date,
        startTime: sessions[0].startTime,
        intervalMinutes: intMin,
        approaches: allApproaches,
        movements: allMovements,
        vehicleTypes: allVehicleTypes,
        intervals: mergedIntervals,
        merged: true,
        createdAt: new Date().toISOString()
    };

    // Save and show
    const allSessions = getSessions();
    allSessions.push(mergedSession);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(allSessions));

    mergeFiles = [];
    renderMergeFileList();
    showResults(mergedSession);
}

// ===== RESULTS =====
function showResults(session) {
    currentSession = session;

    const info = $('#results-info');
    if (session.mode === 'pt') {
        info.innerHTML = `
            <div class="site-title">${session.stopName}</div>
            <p>${t('mode_label')}: ${t('mode_pt_full')}</p>
            <p>${t('date')}: ${session.date}</p>
            <p>${t('intervals_label')}: ${session.intervals.length} x ${session.intervalMinutes} min</p>
            <p>${t('lines_label')}: ${session.lines.join(', ')}</p>
        `;
    } else {
        info.innerHTML = `
            <div class="site-title">${session.siteName}</div>
            <p>${t('date')}: ${session.date}</p>
            <p>${t('intervals_label')}: ${session.intervals.length} x ${session.intervalMinutes} min</p>
            <p>${t('approaches_label')}: ${session.approaches.join(', ')}</p>
        `;
    }

    // Show/hide diagram tab (only for traffic mode)
    $('#tab-diagram').style.display = session.mode === 'pt' ? 'none' : '';
    $('#tab-vehicle-split').style.display = session.mode === 'pt' ? 'none' : '';

    // Render analysis cards (traffic mode only)
    const analysisContainer = $('#results-analysis');
    if (session.mode !== 'pt') {
        renderAnalysis(analysisContainer, session);
    } else {
        analysisContainer.innerHTML = '';
    }

    // Reset to summary tab
    $$('.results-tab').forEach(tb => tb.classList.remove('active'));
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
        } else if (view === 'vehicle-split') {
            renderVehicleSplitTable(container, session);
        } else if (view === 'diagram') {
            renderTurningDiagram(container, session);
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
    const vtHeaders = session.vehicleTypes.map(vt => getVehicleLabel(vt));

    let html = `<table class="results-table"><thead><tr>
        <th>${t('approach')}</th><th>${t('direction')}</th>
        ${vtHeaders.map(h => `<th>${h}</th>`).join('')}
        <th>${t('total')}</th>
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
        <td colspan="2">${t('total').toUpperCase()}</td>
        ${session.vehicleTypes.map(vt => `<td>${grandTotals[vt]}</td>`).join('')}
        <td>${grandTotal}</td>
    </tr>`;

    if (grandTotal > 0) {
        html += `<tr class="total-row" style="font-style:italic;font-weight:400;">
            <td colspan="2">%</td>
            ${session.vehicleTypes.map(vt => {
                const pct = ((grandTotals[vt] / grandTotal) * 100).toFixed(1);
                return `<td>${grandTotals[vt] > 0 ? pct + '%' : ''}</td>`;
            }).join('')}
            <td>100%</td>
        </tr>`;
    }

    html += `</tbody></table>`;
    container.innerHTML = html;
}

function renderIntervalTables(container, session) {
    let html = '';
    const allMovements = getAllMovements(session);

    session.intervals.forEach((interval, idx) => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));

        html += `<h3 style="margin:16px 0 8px;font-size:0.95rem;">${t('interval_label')} ${idx + 1}: ${start} - ${end}</h3>`;

        const vtHeaders = session.vehicleTypes.map(vt => getVehicleLabel(vt));

        html += `<table class="results-table"><thead><tr>
            <th>${t('approach')}</th><th>${t('direction')}</th>
            ${vtHeaders.map(h => `<th>${h}</th>`).join('')}
            <th>${t('total')}</th>
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
    // Always export CSV headers in English for consistency with import/merge
    const vtHeaders = session.vehicleTypes.map(vt => {
        const enLabel = { car:'Car', lgv:'LGV', hgv:'HGV', bus:'Bus', tram:'Tram', motorcycle:'M/cycle', bicycle:'Bicycle', pedestrian:'Pedestr.', escooter:'E-scoot', taxi:'Taxi' };
        return enLabel[vt] || vt;
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
                    DIRECTION_LABELS_EN[movement] || movement,
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

async function shareData() {
    const session = currentSession;
    if (!session) return;

    const name = session.mode === 'pt' ? session.stopName : session.siteName;
    const title = `Traffic Count - ${name}`;
    const text = `Traffic count data: ${name}, ${session.date}, ${session.intervals.length} intervals`;

    // Try Excel first (has all sheets), fall back to CSV
    let file;

    if (typeof XLSX !== 'undefined') {
        try {
            const wb = XLSX.utils.book_new();
            if (session.mode === 'pt') {
                buildPTExcelSheets(wb, session);
            } else {
                buildTrafficExcelSheets(wb, session);
            }
            const xlsxName = `${name.replace(/\s+/g, '_')}_${session.date}.xlsx`;
            const xlsxData = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
            file = new File([xlsxData], xlsxName, { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        } catch (e) {
            // Excel failed, fall through to CSV
        }
    }

    if (!file) {
        const csv = buildCSV(session);
        file = new File(['\uFEFF' + csv], getCSVFilename(session), { type: 'text/csv' });
    }

    // Try sharing the file — test with canShare, try different MIME types if needed
    const shareFile = async (f) => {
        if (navigator.canShare && navigator.canShare({ files: [f] })) {
            await navigator.share({ title, text, files: [f] });
            return true;
        }
        return false;
    };

    try {
        // Try xlsx first
        if (!await shareFile(file)) {
            // iOS might reject the xlsx MIME type — retry with application/octet-stream
            const fallbackFile = new File([await file.arrayBuffer()], file.name, { type: 'application/octet-stream' });
            if (!await shareFile(fallbackFile)) {
                // Last resort: share CSV
                const csv = buildCSV(session);
                const csvFile = new File(['\uFEFF' + csv], getCSVFilename(session), { type: 'text/csv' });
                if (!await shareFile(csvFile)) {
                    alert(t('alert_share_unsupported'));
                }
            }
        }
    } catch (e) {
        if (e.name !== 'AbortError') {
            alert(t('alert_share_fail'));
        }
    }
}

// ===== EXCEL EXPORT =====

function exportXLSX() {
    const session = currentSession;
    if (!session) return;

    if (typeof XLSX === 'undefined') {
        alert(t('alert_excel_missing'));
        return;
    }

    const wb = XLSX.utils.book_new();

    if (session.mode === 'pt') {
        buildPTExcelSheets(wb, session);
    } else {
        buildTrafficExcelSheets(wb, session);
    }

    const name = session.mode === 'pt' ? session.stopName : session.siteName;
    const filename = `${name.replace(/\s+/g, '_')}_${session.date}.xlsx`;
    XLSX.writeFile(wb, filename);
}

function buildTrafficExcelSheets(wb, session) {
    const allMovements = getAllMovements(session);
    // Use English labels in exports for consistency and re-import support
    const vtLabels = session.vehicleTypes.map(vt => VEHICLE_LABELS_EN[vt] || vt);

    // Sheet 1: Raw Data
    const rawRows = [['Site', 'Date', 'Interval Start', 'Interval End', 'Approach', 'Direction', ...vtLabels, 'Total']];
    session.intervals.forEach(interval => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));
        session.approaches.forEach(approach => {
            allMovements.forEach(movement => {
                const values = session.vehicleTypes.map(vt => interval.counts[approach]?.[movement]?.[vt] || 0);
                const total = values.reduce((a, b) => a + b, 0);
                rawRows.push([session.siteName, session.date, start, end, approach, DIRECTION_LABELS_EN[movement] || movement, ...values, total]);
            });
        });
    });
    const wsRaw = XLSX.utils.aoa_to_sheet(rawRows);
    XLSX.utils.book_append_sheet(wb, wsRaw, 'Raw Data');

    // Sheet 2: Summary Table
    const summaryRows = [['Approach', 'Direction', ...vtLabels, 'Total']];
    let grandTotals = {};
    session.vehicleTypes.forEach(vt => grandTotals[vt] = 0);
    let grandTotal = 0;

    session.approaches.forEach(approach => {
        allMovements.forEach(movement => {
            const totals = {};
            session.vehicleTypes.forEach(vt => totals[vt] = 0);
            const vtForMov = getVehicleTypesForMovement(session, movement);
            session.intervals.forEach(interval => {
                vtForMov.forEach(vt => { totals[vt] += interval.counts[approach]?.[movement]?.[vt] || 0; });
            });
            const rowTotal = Object.values(totals).reduce((a, b) => a + b, 0);
            grandTotal += rowTotal;
            session.vehicleTypes.forEach(vt => grandTotals[vt] += totals[vt]);
            const arrow = DIRECTION_LABELS_EN[movement] || movement;
            summaryRows.push([approach, arrow, ...session.vehicleTypes.map(vt => totals[vt] || ''), rowTotal]);
        });
    });
    summaryRows.push(['TOTAL', '', ...session.vehicleTypes.map(vt => grandTotals[vt]), grandTotal]);
    if (grandTotal > 0) {
        summaryRows.push(['%', '', ...session.vehicleTypes.map(vt => grandTotals[vt] > 0 ? ((grandTotals[vt] / grandTotal) * 100).toFixed(1) + '%' : ''), '100%']);
    }
    const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
    XLSX.utils.book_append_sheet(wb, wsSummary, 'Summary');

    // Sheet 3: Vehicle % (per approach+movement)
    const vtRows = [['Approach', 'Movement', ...vtLabels, 'Total']];
    const data = {};
    session.approaches.forEach(a => {
        data[a] = {};
        allMovements.forEach(m => {
            data[a][m] = {};
            session.vehicleTypes.forEach(vt => data[a][m][vt] = 0);
        });
    });
    session.intervals.forEach(interval => {
        for (const a of Object.keys(interval.counts)) {
            for (const m of Object.keys(interval.counts[a])) {
                for (const vt of Object.keys(interval.counts[a][m])) {
                    data[a][m][vt] = (data[a][m][vt] || 0) + interval.counts[a][m][vt];
                }
            }
        }
    });

    session.approaches.forEach(approach => {
        allMovements.forEach(movement => {
            const vtForMov = getVehicleTypesForMovement(session, movement);
            const rowTotal = vtForMov.reduce((sum, vt) => sum + (data[approach][movement]?.[vt] || 0), 0);
            if (rowTotal === 0) return;

            // Count row
            vtRows.push([approach, DIRECTION_LABELS_EN[movement] || movement, ...session.vehicleTypes.map(vt => data[approach][movement]?.[vt] || ''), rowTotal]);
            // Percentage row
            vtRows.push(['', '% of row', ...session.vehicleTypes.map(vt => {
                const count = data[approach][movement]?.[vt] || 0;
                return count > 0 ? ((count / rowTotal) * 100).toFixed(1) + '%' : '';
            }), '100%']);
        });
    });
    const wsVt = XLSX.utils.aoa_to_sheet(vtRows);
    XLSX.utils.book_append_sheet(wb, wsVt, 'Vehicle %');

    // Sheet 4: Analysis
    const analysisRows = [['Traffic Analysis']];
    analysisRows.push([]);

    const peakData = calculatePeakHour(session);
    if (peakData) {
        const { peak15, peakHour } = peakData;
        analysisRows.push([`Peak ${session.intervalMinutes}-min Interval`]);
        analysisRows.push(['Volume', peak15.total]);
        analysisRows.push(['Time', `${formatTime(peak15.start)} - ${formatTime(peak15.end)}`]);
        analysisRows.push([]);

        if (peakHour) {
            analysisRows.push(['Peak Hour']);
            analysisRows.push(['Volume', peakHour.volume]);
            analysisRows.push(['Time', `${formatTime(peakHour.start)} - ${formatTime(peakHour.end)}`]);

            const phf = calculatePHF(session, peakData);
            if (phf !== null) {
                analysisRows.push(['PHF', phf.toFixed(3)]);
            }
            analysisRows.push([]);
        }
    }

    const split = calculateDirectionalSplit(session);
    if (split.grandTotal > 0) {
        analysisRows.push(['Directional Split']);
        analysisRows.push(['Approach', 'Volume', '%']);
        session.approaches.forEach(approach => {
            const total = split.approachTotals[approach];
            const pct = ((total / split.grandTotal) * 100).toFixed(1) + '%';
            analysisRows.push([approach, total, pct]);
        });
    }

    const wsAnalysis = XLSX.utils.aoa_to_sheet(analysisRows);
    XLSX.utils.book_append_sheet(wb, wsAnalysis, 'Analysis');
}

function buildPTExcelSheets(wb, session) {
    // Sheet 1: Raw Data
    const rawRows = [['Stop', 'Date', 'Interval Start', 'Interval End', 'Time', 'Line', 'Boarding', 'Alighting']];
    session.intervals.forEach(interval => {
        const intStart = formatTime(new Date(interval.startTime));
        const intEnd = formatTime(new Date(interval.endTime));
        if (interval.vehicles) {
            interval.vehicles.forEach(v => {
                rawRows.push([session.stopName, session.date, intStart, intEnd, formatTime(new Date(v.time)), v.line, v.boarding, v.alighting]);
            });
        }
    });
    const wsRaw = XLSX.utils.aoa_to_sheet(rawRows);
    XLSX.utils.book_append_sheet(wb, wsRaw, 'Raw Data');

    // Sheet 2: Summary by Line
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

    const summaryRows = [['Line', 'Vehicles', 'Boarding', 'Alighting', 'Net Change']];
    let gv = 0, gb = 0, ga = 0;
    for (const line of Object.keys(lineTotals)) {
        const lt = lineTotals[line];
        gv += lt.vehicles; gb += lt.boarding; ga += lt.alighting;
        summaryRows.push([line, lt.vehicles, lt.boarding, lt.alighting, lt.boarding - lt.alighting]);
    }
    summaryRows.push(['TOTAL', gv, gb, ga, gb - ga]);
    const wsSummary = XLSX.utils.aoa_to_sheet(summaryRows);
    XLSX.utils.book_append_sheet(wb, wsSummary, 'Summary');
}

// ===== VEHICLE SPLIT TABLE =====

function renderVehicleSplitTable(container, session) {
    const allMovements = getAllMovements(session);

    // Calculate totals per approach+movement+vehicleType
    const data = {}; // data[approach][movement][vt] = count
    session.approaches.forEach(approach => {
        data[approach] = {};
        allMovements.forEach(movement => {
            data[approach][movement] = {};
            session.vehicleTypes.forEach(vt => data[approach][movement][vt] = 0);
        });
    });

    session.intervals.forEach(interval => {
        for (const approach of Object.keys(interval.counts)) {
            for (const movement of Object.keys(interval.counts[approach])) {
                for (const vt of Object.keys(interval.counts[approach][movement])) {
                    data[approach][movement][vt] = (data[approach][movement][vt] || 0) + interval.counts[approach][movement][vt];
                }
            }
        }
    });

    const vtHeaders = session.vehicleTypes.map(vt => getVehicleLabel(vt));

    let html = `<h3 style="margin:12px 0 8px;font-size:0.95rem;">${t('traffic_proportions_title')}</h3>`;
    html += `<table class="results-table"><thead><tr>
        <th>${t('approach')}</th><th>${t('movement')}</th>
        ${vtHeaders.map(h => `<th>${h}</th>`).join('')}
        <th>${t('total')}</th>
    </tr></thead><tbody>`;

    let grandVt = {};
    session.vehicleTypes.forEach(vt => grandVt[vt] = 0);
    let grandTotal = 0;

    session.approaches.forEach(approach => {
        allMovements.forEach(movement => {
            const vtForMov = getVehicleTypesForMovement(session, movement);
            const rowTotal = vtForMov.reduce((sum, vt) => sum + (data[approach][movement]?.[vt] || 0), 0);
            if (rowTotal === 0) return;

            grandTotal += rowTotal;
            const arrow = DIRECTION_ARROWS[movement] || '\u{1F6B6}';

            html += `<tr><td>${approach}</td><td>${arrow} ${DIRECTION_LABELS[movement]}</td>`;
            session.vehicleTypes.forEach(vt => {
                const count = data[approach][movement]?.[vt] || 0;
                grandVt[vt] = (grandVt[vt] || 0) + count;
                if (count > 0 && rowTotal > 0) {
                    const pct = ((count / rowTotal) * 100).toFixed(1);
                    html += `<td>${count}<br><span style="font-size:0.7rem;color:var(--primary)">${pct}%</span></td>`;
                } else {
                    html += `<td></td>`;
                }
            });
            html += `<td><strong>${rowTotal}</strong></td></tr>`;
        });
    });

    // Grand total row
    html += `<tr class="total-row"><td colspan="2">${t('total').toUpperCase()}</td>`;
    session.vehicleTypes.forEach(vt => {
        const count = grandVt[vt] || 0;
        if (count > 0 && grandTotal > 0) {
            const pct = ((count / grandTotal) * 100).toFixed(1);
            html += `<td>${count}<br><span style="font-size:0.7rem">${pct}%</span></td>`;
        } else {
            html += `<td></td>`;
        }
    });
    html += `<td>${grandTotal}<br><span style="font-size:0.7rem">100%</span></td></tr>`;

    html += `</tbody></table>`;
    container.innerHTML = html;
}

// ===== TRAFFIC ANALYSIS =====

function getIntervalTotal(session, interval) {
    let total = 0;
    for (const approach of Object.keys(interval.counts)) {
        for (const movement of Object.keys(interval.counts[approach])) {
            for (const vt of Object.keys(interval.counts[approach][movement])) {
                total += interval.counts[approach][movement][vt];
            }
        }
    }
    return total;
}

function calculatePeakHour(session) {
    if (!session.intervals || session.intervals.length === 0) return null;

    const intervalTotals = session.intervals.map((intv, i) => ({
        index: i,
        total: getIntervalTotal(session, intv),
        start: new Date(intv.startTime),
        end: new Date(intv.endTime)
    }));

    // Peak 15-min (or whatever interval)
    const peak15 = intervalTotals.reduce((best, curr) => curr.total > best.total ? curr : best, intervalTotals[0]);

    // Peak hour: sliding window of consecutive intervals summing to ~60 min
    const intervalsPerHour = Math.round(60 / session.intervalMinutes);
    let peakHour = null;

    if (intervalTotals.length >= intervalsPerHour && intervalsPerHour > 1) {
        let maxSum = 0;
        let maxStart = 0;
        for (let i = 0; i <= intervalTotals.length - intervalsPerHour; i++) {
            let sum = 0;
            for (let j = i; j < i + intervalsPerHour; j++) {
                sum += intervalTotals[j].total;
            }
            if (sum > maxSum) {
                maxSum = sum;
                maxStart = i;
            }
        }
        peakHour = {
            startIndex: maxStart,
            endIndex: maxStart + intervalsPerHour - 1,
            volume: maxSum,
            start: intervalTotals[maxStart].start,
            end: intervalTotals[maxStart + intervalsPerHour - 1].end
        };
    }

    return { peak15, peakHour, intervalTotals };
}

function calculatePHF(session, peakHourData) {
    if (!peakHourData?.peakHour) return null;
    if (session.intervalMinutes !== 15) return null;

    const { startIndex, endIndex, volume } = peakHourData.peakHour;
    const intervalTotals = peakHourData.intervalTotals;

    // Find max 15-min within the peak hour
    let max15 = 0;
    for (let i = startIndex; i <= endIndex; i++) {
        if (intervalTotals[i].total > max15) max15 = intervalTotals[i].total;
    }

    if (max15 === 0) return null;
    return volume / (4 * max15);
}

function calculateDirectionalSplit(session) {
    const approachTotals = {};
    const approachMovements = {};
    let grandTotal = 0;

    const allMovements = getAllMovements(session);

    session.approaches.forEach(approach => {
        approachTotals[approach] = 0;
        approachMovements[approach] = {};

        allMovements.forEach(movement => {
            let movTotal = 0;
            const vtForMovement = getVehicleTypesForMovement(session, movement);

            session.intervals.forEach(interval => {
                vtForMovement.forEach(vt => {
                    movTotal += interval.counts[approach]?.[movement]?.[vt] || 0;
                });
            });

            approachMovements[approach][movement] = movTotal;
            approachTotals[approach] += movTotal;
        });

        grandTotal += approachTotals[approach];
    });

    return { approachTotals, approachMovements, grandTotal };
}

function renderAnalysis(container, session) {
    let html = '';

    // Peak hour & PHF
    const peakData = calculatePeakHour(session);
    if (peakData) {
        const { peak15, peakHour } = peakData;
        const phf = calculatePHF(session, peakData);

        html += '<div class="analysis-row">';

        // Peak interval
        html += `<div class="analysis-card">
            <div class="analysis-title">${t('peak_15')} ${session.intervalMinutes}-min</div>
            <div class="analysis-value">${peak15.total} ${t('peak_suffix')}</div>
            <div class="analysis-detail">${formatTime(peak15.start)} - ${formatTime(peak15.end)}</div>
        </div>`;

        // Peak hour
        if (peakHour) {
            html += `<div class="analysis-card">
                <div class="analysis-title">${t('peak_hour')}</div>
                <div class="analysis-value">${peakHour.volume} ${t('peak_suffix')}</div>
                <div class="analysis-detail">${formatTime(peakHour.start)} - ${formatTime(peakHour.end)}</div>
            </div>`;
        }

        html += '</div>';

        // PHF
        if (phf !== null) {
            html += `<div class="analysis-card">
                <div class="analysis-title">${t('phf')}</div>
                <div class="analysis-value">${phf.toFixed(3)}</div>
                <div class="analysis-detail">${t('phf_detail')}</div>
            </div>`;
        }
    }

    // Directional split
    const split = calculateDirectionalSplit(session);
    if (split.grandTotal > 0) {
        html += `<div class="analysis-card">
            <div class="analysis-title">${t('directional_split')}</div>
            <div class="split-grid">`;

        session.approaches.forEach(approach => {
            const total = split.approachTotals[approach];
            const pct = ((total / split.grandTotal) * 100).toFixed(1);

            // Movement percentages
            const movParts = [];
            const movements = Object.keys(split.approachMovements[approach]);
            movements.forEach(m => {
                const mTotal = split.approachMovements[approach][m];
                if (mTotal > 0 && total > 0) {
                    const mPct = ((mTotal / total) * 100).toFixed(0);
                    const arrow = DIRECTION_ARROWS[m] || '\u{1F6B6}';
                    movParts.push(`${arrow} ${mPct}%`);
                }
            });

            html += `<div class="split-card">
                <div class="split-label">${approach}</div>
                <div class="split-value">${total} <span class="split-pct">(${pct}%)</span></div>
                <div class="split-movements">${movParts.join(' | ')}</div>
            </div>`;
        });

        html += `</div></div>`;
    }

    // Vehicle type split PER APPROACH
    if (split.grandTotal > 0) {
        // Calculate totals per vehicle type per approach
        const vtByApproach = {};
        session.approaches.forEach(approach => {
            vtByApproach[approach] = {};
            session.vehicleTypes.forEach(vt => vtByApproach[approach][vt] = 0);
        });
        session.intervals.forEach(interval => {
            for (const approach of Object.keys(interval.counts)) {
                for (const movement of Object.keys(interval.counts[approach])) {
                    for (const vt of Object.keys(interval.counts[approach][movement])) {
                        vtByApproach[approach][vt] = (vtByApproach[approach][vt] || 0) + interval.counts[approach][movement][vt];
                    }
                }
            }
        });

        session.approaches.forEach(approach => {
            const approachTotal = split.approachTotals[approach];
            if (approachTotal === 0) return;

            // Only show vehicle types with counts > 0 for this approach
            const activeTypes = session.vehicleTypes.filter(vt => vtByApproach[approach][vt] > 0);
            if (activeTypes.length === 0) return;

            html += `<div class="analysis-card">
                <div class="analysis-title">${approach} — ${t('vehicle_type_split')} (${approachTotal} ${t('total').toLowerCase()})</div>
                <div class="split-grid">`;

            activeTypes.forEach(vtId => {
                const total = vtByApproach[approach][vtId];
                const pct = ((total / approachTotal) * 100).toFixed(1);
                html += `<div class="split-card">
                    <div class="split-label">${getVehicleLabel(vtId)}</div>
                    <div class="split-value">${total} <span class="split-pct">(${pct}%)</span></div>
                </div>`;
            });

            html += `</div></div>`;
        });
    }

    container.innerHTML = html;
}

// ===== TURNING MOVEMENT DIAGRAM =====

function renderTurningDiagram(container, session) {
    const split = calculateDirectionalSplit(session);
    const approaches = session.approaches;
    const n = approaches.length;

    const W = 520, H = 520;
    const cx = W / 2, cy = H / 2;
    const boxSize = 70;
    const roadLen = 170;
    const roadWidth = 56;

    // Find max volume for scaling stroke width
    let maxVol = 1;
    approaches.forEach(a => {
        Object.values(split.approachMovements[a] || {}).forEach(v => { if (v > maxVol) maxVol = v; });
    });
    const minStroke = 1.5, maxStroke = 8;
    const strokeFor = (vol) => vol === 0 ? minStroke : minStroke + (vol / maxVol) * (maxStroke - minStroke);

    let svg = `<div class="diagram-container"><svg viewBox="0 0 ${W} ${H}" width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">`;

    // Arrowhead markers for each color and multiple sizes
    svg += `<defs>`;
    ['#4285f4', '#34a853', '#ea4335'].forEach((color, ci) => {
        const name = ['Blue', 'Green', 'Red'][ci];
        svg += `<marker id="arrow${name}" markerWidth="10" markerHeight="7" refX="9" refY="3.5" orient="auto" markerUnits="strokeWidth">
            <polygon points="0 0, 10 3.5, 0 7" fill="${color}"/>
        </marker>`;
    });
    svg += `</defs>`;

    const colorToMarker = { '#4285f4': 'arrowBlue', '#34a853': 'arrowGreen', '#ea4335': 'arrowRed' };

    // Draw roads
    // Top
    svg += `<rect x="${cx - roadWidth / 2}" y="${cy - boxSize / 2 - roadLen}" width="${roadWidth}" height="${roadLen}" fill="#f3f4f6" stroke="#dadce0" stroke-width="1"/>`;
    // Bottom
    svg += `<rect x="${cx - roadWidth / 2}" y="${cy + boxSize / 2}" width="${roadWidth}" height="${roadLen}" fill="#f3f4f6" stroke="#dadce0" stroke-width="1"/>`;
    // Left
    svg += `<rect x="${cx - boxSize / 2 - roadLen}" y="${cy - roadWidth / 2}" width="${roadLen}" height="${roadWidth}" fill="#f3f4f6" stroke="#dadce0" stroke-width="1"/>`;
    // Right
    svg += `<rect x="${cx + boxSize / 2}" y="${cy - roadWidth / 2}" width="${roadLen}" height="${roadWidth}" fill="#f3f4f6" stroke="#dadce0" stroke-width="1"/>`;

    // Intersection box
    svg += `<rect x="${cx - boxSize / 2}" y="${cy - boxSize / 2}" width="${boxSize}" height="${boxSize}" fill="#e5e7eb" stroke="#9ca3af" stroke-width="2" rx="4"/>`;

    // Edge positions for each approach (where arrows start/end)
    const edge = boxSize / 2 + 16;
    const off = 16; // lane offset from center

    // For each approach: define start point and arrow paths for L/S/R
    // Approaches: 0=Top(comes from north), 1=Right(east), 2=Bottom(south), 3=Left(west)
    const reach = 90; // how far arrows extend beyond intersection edge
    const curveR = 30; // curve radius for turns

    const arrowDefs = [
        { // 0: Top - enters from top going down
            label: { x: cx, y: cy - boxSize / 2 - roadLen + 16, anchor: 'middle' },
            left: {
                path: () => `M ${cx - off} ${cy - edge - reach} L ${cx - off} ${cy - curveR} Q ${cx - off} ${cy}, ${cx - off - curveR} ${cy} L ${cx - edge - reach} ${cy - off}`,
                labelPos: { x: cx - edge - reach + 10, y: cy - off - 10 },
                color: '#4285f4'
            },
            straight: {
                path: () => `M ${cx} ${cy - edge - reach} L ${cx} ${cy + edge + reach}`,
                labelPos: { x: cx + 14, y: cy + edge + reach - 10 },
                color: '#34a853'
            },
            right: {
                path: () => `M ${cx + off} ${cy - edge - reach} L ${cx + off} ${cy - curveR} Q ${cx + off} ${cy}, ${cx + off + curveR} ${cy} L ${cx + edge + reach} ${cy + off}`,
                labelPos: { x: cx + edge + reach - 10, y: cy + off + 14 },
                color: '#ea4335'
            }
        },
        { // 1: Right - enters from right going left
            label: { x: cx + boxSize / 2 + roadLen - 12, y: cy + 5, anchor: 'end' },
            left: {
                path: () => `M ${cx + edge + reach} ${cy - off} L ${cx + curveR} ${cy - off} Q ${cx} ${cy - off}, ${cx} ${cy - off - curveR} L ${cx + off} ${cy - edge - reach}`,
                labelPos: { x: cx + off + 14, y: cy - edge - reach + 14 },
                color: '#4285f4'
            },
            straight: {
                path: () => `M ${cx + edge + reach} ${cy} L ${cx - edge - reach} ${cy}`,
                labelPos: { x: cx - edge - reach + 10, y: cy - 10 },
                color: '#34a853'
            },
            right: {
                path: () => `M ${cx + edge + reach} ${cy + off} L ${cx + curveR} ${cy + off} Q ${cx} ${cy + off}, ${cx} ${cy + off + curveR} L ${cx - off} ${cy + edge + reach}`,
                labelPos: { x: cx - off - 14, y: cy + edge + reach - 6 },
                color: '#ea4335'
            }
        },
        { // 2: Bottom - enters from bottom going up
            label: { x: cx, y: cy + boxSize / 2 + roadLen - 6, anchor: 'middle' },
            left: {
                path: () => `M ${cx + off} ${cy + edge + reach} L ${cx + off} ${cy + curveR} Q ${cx + off} ${cy}, ${cx + off + curveR} ${cy} L ${cx + edge + reach} ${cy + off}`,
                labelPos: { x: cx + edge + reach - 10, y: cy + off + 14 },
                color: '#4285f4'
            },
            straight: {
                path: () => `M ${cx} ${cy + edge + reach} L ${cx} ${cy - edge - reach}`,
                labelPos: { x: cx - 14, y: cy - edge - reach + 14 },
                color: '#34a853'
            },
            right: {
                path: () => `M ${cx - off} ${cy + edge + reach} L ${cx - off} ${cy + curveR} Q ${cx - off} ${cy}, ${cx - off - curveR} ${cy} L ${cx - edge - reach} ${cy - off}`,
                labelPos: { x: cx - edge - reach + 10, y: cy - off - 10 },
                color: '#ea4335'
            }
        },
        { // 3: Left - enters from left going right
            label: { x: cx - boxSize / 2 - roadLen + 12, y: cy + 5, anchor: 'start' },
            left: {
                path: () => `M ${cx - edge - reach} ${cy + off} L ${cx - curveR} ${cy + off} Q ${cx} ${cy + off}, ${cx} ${cy + off + curveR} L ${cx - off} ${cy + edge + reach}`,
                labelPos: { x: cx - off - 14, y: cy + edge + reach - 6 },
                color: '#4285f4'
            },
            straight: {
                path: () => `M ${cx - edge - reach} ${cy} L ${cx + edge + reach} ${cy}`,
                labelPos: { x: cx + edge + reach - 10, y: cy - 10 },
                color: '#34a853'
            },
            right: {
                path: () => `M ${cx - edge - reach} ${cy - off} L ${cx - curveR} ${cy - off} Q ${cx} ${cy - off}, ${cx} ${cy - off - curveR} L ${cx + off} ${cy - edge - reach}`,
                labelPos: { x: cx + off + 14, y: cy - edge - reach + 14 },
                color: '#ea4335'
            }
        }
    ];

    for (let i = 0; i < Math.min(n, 4); i++) {
        const approach = approaches[i];
        const def = arrowDefs[i];

        // Approach label
        svg += `<text x="${def.label.x}" y="${def.label.y}" text-anchor="${def.label.anchor}" font-size="13" font-weight="700" fill="#004f9f">${approach}</text>`;

        // Draw each movement arrow
        const movements = session.movements || [];
        movements.forEach(movement => {
            if (!def[movement]) return;
            const arrow = def[movement];
            const vol = split.approachMovements[approach]?.[movement] || 0;
            const sw = strokeFor(vol);
            const marker = colorToMarker[arrow.color];

            svg += `<path d="${arrow.path(sw)}" fill="none" stroke="${arrow.color}" stroke-width="${sw.toFixed(1)}" stroke-linecap="round" marker-end="url(#${marker})" opacity="${vol === 0 ? 0.2 : 0.85}"/>`;

            // Volume label
            svg += `<text x="${arrow.labelPos.x}" y="${arrow.labelPos.y}" text-anchor="middle" font-size="10" font-weight="700" fill="${arrow.color}">${vol}</text>`;
        });
    }

    // Legend
    const ly = H - 14;
    svg += `<text x="${cx - 80}" y="${ly}" font-size="9" fill="#4285f4" font-weight="600">&#9632; Left</text>`;
    svg += `<text x="${cx - 20}" y="${ly}" font-size="9" fill="#34a853" font-weight="600">&#9632; Straight</text>`;
    svg += `<text x="${cx + 55}" y="${ly}" font-size="9" fill="#ea4335" font-weight="600">&#9632; Right</text>`;

    svg += `</svg></div>`;
    container.innerHTML = svg;
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
        alert(t('alert_no_lines'));
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
        soundAlert: $('#pt-sound-alert').checked,
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
        $('#btn-toggle-input').textContent = ptUseNumberInput ? t('switch_tap_counting') : t('switch_number_entry');
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

function ptDecrement(type) {
    if (!ptCurrentVehicle) return;
    if (ptCurrentVehicle[type] > 0) {
        ptCurrentVehicle[type]--;
        if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
        $('#boarding-count').textContent = ptCurrentVehicle.boarding;
        $('#alighting-count').textContent = ptCurrentVehicle.alighting;
    }
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

    $('#btn-toggle-input').textContent = ptUseNumberInput ? t('switch_tap_counting') : t('switch_number_entry');
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
        container.innerHTML = `<p style="color:var(--text-secondary);font-size:0.85rem;text-align:center;padding:16px;">${t('no_vehicles_counted')}</p>`;
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
        <div class="summary-card"><div class="label">${t('vehicles_count')}</div><div class="value">${vehicleCount}</div></div>
        <div class="summary-card"><div class="label">${t('intervals_label')}</div><div class="value">${currentSession.intervals.length}</div></div>
        <div class="summary-card"><div class="label">${t('boarding_cap')}</div><div class="value" style="color:#188038">${totalBoarding}</div></div>
        <div class="summary-card"><div class="label">${t('alighting_cap')}</div><div class="value" style="color:#d93025">${totalAlighting}</div></div>
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
        ${t('session_totals')}: <strong>${sessionVehicles}</strong> ${t('vehicles_count').toLowerCase()},
        <strong style="color:#188038">+${sessionBoarding}</strong> ${t('boarding_cap').toLowerCase()},
        <strong style="color:#d93025">-${sessionAlighting}</strong> ${t('alighting_cap').toLowerCase()}
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
        <th>${t('line')}</th><th>${t('vehicles')}</th><th>${t('boarding_cap')}</th><th>${t('alighting_cap')}</th><th>${t('net_change')}</th>
    </tr></thead><tbody>`;

    for (const line of Object.keys(lineTotals)) {
        const lt = lineTotals[line];
        const net = lt.boarding - lt.alighting;
        grandVehicles += lt.vehicles;
        grandBoarding += lt.boarding;
        grandAlighting += lt.alighting;

        html += `<tr>
            <td><strong>${line}</strong></td>
            <td>${lt.vehicles}</td>
            <td style="color:#188038">${lt.boarding}</td>
            <td style="color:#d93025">${lt.alighting}</td>
            <td>${net >= 0 ? '+' : ''}${net}</td>
        </tr>`;
    }

    const grandNet = grandBoarding - grandAlighting;
    html += `<tr class="total-row">
        <td>${t('total').toUpperCase()}</td>
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

        html += `<h3 style="margin:16px 0 8px;font-size:0.95rem;">${t('interval_label')} ${idx + 1}: ${start} - ${end}</h3>`;

        if (!interval.vehicles || interval.vehicles.length === 0) {
            html += `<p style="color:var(--text-secondary);font-size:0.85rem;">${t('no_vehicles_interval')}</p>`;
            return;
        }

        html += `<table class="results-table"><thead><tr>
            <th>${t('start_time').replace(/\s.*/, '')}</th><th>${t('line')}</th><th>${t('boarding_cap')}</th><th>${t('alighting_cap')}</th>
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
            <td colspan="2">${t('subtotal')}</td>
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
