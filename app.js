/*!
 * Traffic Counter
 * Copyright (c) 2026 Karlo Babojelić
 * University of Zagreb, Faculty of Transport and Traffic Sciences
 *
 * Licensed under the Creative Commons Attribution-NonCommercial 4.0
 * International License (CC BY-NC 4.0).
 * https://creativecommons.org/licenses/by-nc/4.0/
 *
 * Live: https://karloba.github.io/traffic_counting/
 * Source: https://github.com/karloba/traffic_counting
 */

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
        pt_submode: 'Counting method',
        pt_submode_stop: 'At a stop',
        pt_submode_ride: 'On board (ride-check)',
        pt_ride_hint: 'Ride a single bus/tram line from start to end. Enter the line name, departure time, and the list of stations. At each station tap Entry / Exit for boarding / alighting passengers, then tap "Next station" when the vehicle leaves. The current load (Sum) is calculated automatically.',
        line_name: 'Line',
        line_name_ph: 'e.g. Tram 6',
        departure_time: 'Departure time',
        stations: 'Stations',
        station_ph: 'e.g. Glavni kolodvor, Trg bana Jelačića',
        current_station: 'Current station',
        entry: 'Entry',
        exit: 'Exit',
        on_board: 'On board',
        next_station: 'Next station',
        finish_ride: 'Finish ride',
        ride_progress: 'Progress',
        confirm_finish_ride: 'Finish the ride and view results?',
        alert_no_stations: 'Please add at least 2 stations.',
        alert_no_line: 'Please enter the line name.',
        ride_check_label: 'Ride-check',
        station_label: 'Station',
        time: 'Time',
        sum: 'Sum',
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
        credit: '© 2026 Karlo Babojelić · University of Zagreb, Faculty of Transport and Traffic Sciences · CC BY-NC 4.0',
        team_lang_note: 'Tip for team counts: when multiple students count the same intersection, agree on one language beforehand. Approach names you type (e.g. "North" vs "Sjever") must match exactly across files for the merge feature to combine them cleanly.',
        noise_enable: 'Measure traffic noise (microphone)',
        noise_calibration: 'Calibration',
        noise_calibration_offset: 'Calibration offset (dB)',
        noise_calibration_hint: 'Add or subtract dB to roughly match a real sound level meter. Saved per device.',
        noise_disclaimer: 'Uncalibrated reference for relative comparison and educational use only. Not valid for legal compliance measurements. Microphone audio is processed locally and never recorded or uploaded.',
        noise_live: 'Live',
        noise_section_title: 'Traffic Noise',
        noise_laeq: 'LAeq',
        noise_lamax: 'LAmax',
        noise_lamin: 'LAmin',
        noise_la10: 'LA10',
        noise_la50: 'LA50',
        noise_la90: 'LA90',
        noise_permission_denied: 'Microphone permission denied. The session will continue without noise measurement.',
        noise_loudest_interval: 'Loudest interval',
        noise_unit_db: 'dB(A)',
        noise_interval_stats: 'Interval noise statistics',
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
        crossings_tab: 'Crossings',
        reset: 'Reset',
        confirm_reset_section: 'Reset all counts in this section to 0?',
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
        pt_submode: 'Način brojanja',
        pt_submode_stop: 'Na stajalištu',
        pt_submode_ride: 'U vozilu (ride-check)',
        pt_ride_hint: 'Vozite se jednom linijom autobusa/tramvaja od početka do kraja. Unesite naziv linije, vrijeme polaska i popis stajališta. Na svakom stajalištu tapnite Ulaz / Izlaz za putnike koji ulaze/izlaze, zatim tapnite "Sljedeće stajalište" kad vozilo krene. Trenutni broj putnika (Suma) se izračunava automatski.',
        line_name: 'Linija',
        line_name_ph: 'npr. Tramvaj 6',
        departure_time: 'Vrijeme polaska',
        stations: 'Stajališta',
        station_ph: 'npr. Glavni kolodvor, Trg bana Jelačića',
        current_station: 'Trenutno stajalište',
        entry: 'Ulaz',
        exit: 'Izlaz',
        on_board: 'U vozilu',
        next_station: 'Sljedeće stajalište',
        finish_ride: 'Završi vožnju',
        ride_progress: 'Napredak',
        confirm_finish_ride: 'Završiti vožnju i prikazati rezultate?',
        alert_no_stations: 'Dodajte barem 2 stajališta.',
        alert_no_line: 'Unesite naziv linije.',
        ride_check_label: 'Ride-check',
        station_label: 'Stajalište',
        time: 'Vrijeme',
        sum: 'Suma',
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
        credit: '© 2026 Karlo Babojelić · Sveučilište u Zagrebu, Fakultet prometnih znanosti · CC BY-NC 4.0',
        team_lang_note: 'Savjet za timsko brojanje: kada više studenata broji isto raskrižje, dogovorite zajednički jezik prije početka. Nazivi privoza koje upisujete (npr. "Sjever" vs "North") moraju biti potpuno isti u svim datotekama da bi se uspješno spojile.',
        noise_enable: 'Mjeri buku prometa (mikrofon)',
        noise_calibration: 'Kalibracija',
        noise_calibration_offset: 'Korekcija kalibracije (dB)',
        noise_calibration_hint: 'Dodajte ili oduzmite dB kako bi približno odgovaralo pravom mjeraču buke. Spremljeno po uređaju.',
        noise_disclaimer: 'Nekalibrirana referenca samo za relativnu usporedbu i obrazovnu uporabu. Nije važeća za pravna mjerenja sukladnosti. Zvuk se obrađuje lokalno i nikada se ne snima niti šalje.',
        noise_live: 'Trenutno',
        noise_section_title: 'Buka prometa',
        noise_laeq: 'LAeq',
        noise_lamax: 'LAmax',
        noise_lamin: 'LAmin',
        noise_la10: 'LA10',
        noise_la50: 'LA50',
        noise_la90: 'LA90',
        noise_permission_denied: 'Pristup mikrofonu odbijen. Sesija će se nastaviti bez mjerenja buke.',
        noise_loudest_interval: 'Najbučniji interval',
        noise_unit_db: 'dB(A)',
        noise_interval_stats: 'Statistika buke po intervalima',
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
        crossings_tab: 'Prelasci',
        reset: 'Obriši',
        confirm_reset_section: 'Resetirati sve brojeve u ovom odjeljku na 0?',
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

// Theme: 'light' | 'dark'. Default follows system preference if not set.
let currentTheme = localStorage.getItem('tc_theme')
    || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');

function applyTheme() {
    document.documentElement.setAttribute('data-theme', currentTheme);
    const btn = document.getElementById('btn-theme');
    if (btn) {
        // Show the icon for the theme you'll switch TO
        btn.textContent = currentTheme === 'dark' ? '☀' : '\u{1F319}'; // ☀ in dark mode, 🌙 in light
        btn.title = currentTheme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
    }
}

function setTheme(theme) {
    currentTheme = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem('tc_theme', currentTheme);
    applyTheme();
}

function toggleTheme() {
    setTheme(currentTheme === 'dark' ? 'light' : 'dark');
}

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
    { id: 'car', labelKey: 'veh_car', icon: '\u{1F697}' },         // 🚗
    { id: 'lgv', labelKey: 'veh_lgv', icon: '\u{1F690}' },         // 🚐
    { id: 'hgv', labelKey: 'veh_hgv', icon: '\u{1F69A}' },         // 🚚
    { id: 'bus', labelKey: 'veh_bus', icon: '\u{1F68C}' },         // 🚌
    { id: 'tram', labelKey: 'veh_tram', icon: '\u{1F68A}' },       // 🚊
    { id: 'motorcycle', labelKey: 'veh_motorcycle', icon: '\u{1F3CD}' }, // 🏍
    { id: 'bicycle', labelKey: 'veh_bicycle', icon: '\u{1F6B2}' }, // 🚲
    { id: 'pedestrian', labelKey: 'veh_pedestrian', icon: '\u{1F6B6}' }, // 🚶
    { id: 'escooter', labelKey: 'veh_escooter', icon: '\u{1F6F4}' }, // 🛴
    { id: 'taxi', labelKey: 'veh_taxi', icon: '\u{1F696}' }        // 🚖
];

// Helper to get vehicle type label in current language
function getVehicleLabel(vtId) {
    const vt = DEFAULT_VEHICLE_TYPES.find(v => v.id === vtId);
    return vt ? t(vt.labelKey) : vtId;
}

// Helper to get the emoji icon for a vehicle type
function getVehicleIcon(vtId) {
    const vt = DEFAULT_VEHICLE_TYPES.find(v => v.id === vtId);
    return vt ? (vt.icon || '') : '';
}

// Map a count to a tier class (used for visual intensity scaling)
function getCountTierClass(count) {
    if (count >= 50) return 'count-tier-4';
    if (count >= 25) return 'count-tier-3';
    if (count >= 10) return 'count-tier-2';
    if (count >= 1)  return 'count-tier-1';
    return '';
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

// Track the most recent tap so we can briefly highlight that button after re-render
let lastTappedKey = null;
let lastTappedAt = 0;

// Merge state
let mergeMode = false;
let mergeSelected = new Set();

// Merge file state
let mergeFiles = []; // { name, session } objects pending merge

// PT-specific state
let ptLines = [];
let ptStations = [];
let ptSubmode = 'stop'; // 'stop' | 'ride'
let ptCurrentVehicle = null; // { line, boarding, alighting }
let ptUseNumberInput = false;

// Ride-check live counting state (within an active ride session)
let rideCurrentStationIdx = 0;
let rideCurrentEntry = 0;
let rideCurrentExit = 0;

// ===== DOM ELEMENTS =====
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    applyTheme();
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
    // Theme toggle
    const themeBtn = document.getElementById('btn-theme');
    if (themeBtn) themeBtn.addEventListener('click', toggleTheme);

    // Noise enable toggle: reveal/hide options + remember calibration
    const noiseEnableBox = document.getElementById('noise-enable');
    const noiseOptions = document.getElementById('noise-options');
    if (noiseEnableBox) {
        noiseEnableBox.addEventListener('change', () => {
            noiseOptions.style.display = noiseEnableBox.checked ? '' : 'none';
        });
    }
    const noiseOffsetInput = document.getElementById('noise-offset');
    if (noiseOffsetInput) {
        // Restore last saved offset
        const saved = localStorage.getItem('tc_noise_offset');
        if (saved !== null && saved !== '') noiseOffsetInput.value = saved;
        noiseOffsetInput.addEventListener('change', () => {
            localStorage.setItem('tc_noise_offset', noiseOffsetInput.value);
        });
    }

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
        if (ptSubmode === 'ride') {
            startPTRideSession();
        } else {
            startPTSession();
        }
    });
    $('#btn-add-line').addEventListener('click', addPTLine);
    $('#pt-line-input').addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); addPTLine(); }
    });

    // PT sub-mode radio toggle
    document.querySelectorAll('input[name="pt-submode"]').forEach(radio => {
        radio.addEventListener('change', () => setPTSubmode(radio.value));
    });

    // PT ride-check fields
    const stationBtn = document.getElementById('btn-add-station');
    if (stationBtn) stationBtn.addEventListener('click', addPTStation);
    const stationInput = document.getElementById('pt-station-input');
    if (stationInput) stationInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') { e.preventDefault(); addPTStation(); }
    });

    // Ride-check counting controls
    const btnEntry = document.getElementById('btn-ride-entry');
    if (btnEntry) btnEntry.addEventListener('click', () => rideCount('entry'));
    const btnExit = document.getElementById('btn-ride-exit');
    if (btnExit) btnExit.addEventListener('click', () => rideCount('exit'));
    const btnEntryMinus = document.getElementById('btn-ride-entry-minus');
    if (btnEntryMinus) btnEntryMinus.addEventListener('click', () => rideDecrement('entry'));
    const btnExitMinus = document.getElementById('btn-ride-exit-minus');
    if (btnExitMinus) btnExitMinus.addEventListener('click', () => rideDecrement('exit'));
    const btnNextStation = document.getElementById('btn-ride-next');
    if (btnNextStation) btnNextStation.addEventListener('click', rideNextStation);
    const btnRideEnd = document.getElementById('btn-ride-end');
    if (btnRideEnd) btnRideEnd.addEventListener('click', endSession);
    const btnRideUndo = document.getElementById('btn-ride-undo');
    if (btnRideUndo) btnRideUndo.addEventListener('click', rideUndo);

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

    const noiseEnabled = $('#noise-enable')?.checked || false;
    const calibrationOffset = parseFloat($('#noise-offset')?.value) || 94;

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
        noiseEnabled,
        noiseCalibrationOffset: calibrationOffset,
        intervals: [],
        createdAt: new Date().toISOString()
    };

    currentApproachIndex = 0;
    undoStack = [];
    isPaused = false;

    // Request microphone & start noise logger if enabled
    if (noiseEnabled) {
        NoiseLogger.start(calibrationOffset, updateNoiseUI)
            .then(() => {
                renderNoiseStrip();
            })
            .catch(() => {
                currentSession.noiseDenied = true;
                alert(t('noise_permission_denied'));
                renderNoiseStrip();
            });
    }

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
        // Crossings split into 2 perpendicular directions
        if (crossingTypes.length > 0) {
            ['crossing_a', 'crossing_b'].forEach(key => {
                counts[approach][key] = {};
                crossingTypes.forEach(vt => { counts[approach][key][vt] = 0; });
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

    // Finalize noise stats for the just-completed interval
    if (currentSession?.noiseEnabled && NoiseLogger.enabled) {
        const interval = getCurrentInterval();
        if (interval) {
            const stats = NoiseLogger.finalizeInterval();
            if (stats) interval.noiseStats = stats;
        }
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
    renderApproachTotalStrip();
    renderNoiseStrip();
    renderCountGrid();
}

// Show/hide the noise strip based on session state
function renderNoiseStrip() {
    const strip = $('#noise-strip');
    if (!strip || !currentSession) return;
    if (currentSession.noiseEnabled && !currentSession.noiseDenied) {
        strip.style.display = '';
    } else {
        strip.style.display = 'none';
    }
}

// Called by NoiseLogger on each sample to update the live UI
function updateNoiseUI(dbA) {
    const valueEl = $('#noise-current-value');
    if (valueEl) valueEl.innerHTML = `${round1(dbA)} <small>dB(A)</small>`;

    // Update LAeq chip from running interval samples
    const stats = NoiseLogger.computeStats(NoiseLogger.intervalSamples);
    const laeqEl = $('#noise-laeq-value');
    if (laeqEl) laeqEl.textContent = stats ? `${stats.LAeq.toFixed(1)} dB` : '—';

    // Draw sparkline
    drawNoiseSparkline();
}

function drawNoiseSparkline() {
    const canvas = $('#noise-spark');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const w = canvas.width, h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const samples = NoiseLogger.sparkBuffer;
    if (!samples || samples.length === 0) return;

    // Compute min/max for the visible buffer for autoscale (with a small floor for stability)
    let min = Infinity, max = -Infinity;
    for (const v of samples) {
        if (v < min) min = v;
        if (v > max) max = v;
    }
    if (max - min < 5) { max = min + 5; }

    const color = getComputedStyle(canvas).getPropertyValue('color') || '#8b5cf6';
    ctx.strokeStyle = '#8b5cf6';
    ctx.fillStyle = 'rgba(139, 92, 246, 0.18)';
    ctx.lineWidth = 1.5;

    ctx.beginPath();
    for (let i = 0; i < samples.length; i++) {
        const x = (i / (NoiseLogger.sparkBufferMax - 1)) * w;
        const y = h - ((samples[i] - min) / (max - min)) * (h - 4) - 2;
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Fill under the line
    ctx.lineTo(w, h);
    ctx.lineTo(0, h);
    ctx.closePath();
    ctx.fill();
}

// Render the approach summary strip above the count grid:
// big total + L/S/R/Crossing pills with sub-totals
function renderApproachTotalStrip() {
    const strip = $('#approach-total-strip');
    if (!strip || !currentSession) return;

    const approach = currentSession.approaches[currentApproachIndex];
    const total = getApproachTotal(approach);

    if (total === 0) {
        strip.style.display = 'none';
        strip.innerHTML = '';
        return;
    }

    const interval = getCurrentInterval();
    if (!interval || !interval.counts[approach]) {
        strip.style.display = 'none';
        return;
    }

    // Compute per-movement subtotals (including both crossings merged)
    const subtotals = {};
    for (const movement of Object.keys(interval.counts[approach])) {
        let s = 0;
        for (const vt of Object.keys(interval.counts[approach][movement])) {
            s += interval.counts[approach][movement][vt];
        }
        if (movement === 'crossing_a' || movement === 'crossing_b' || movement === 'crossing') {
            subtotals['crossing'] = (subtotals['crossing'] || 0) + s;
        } else {
            subtotals[movement] = s;
        }
    }

    const pillFor = (mv, label) => {
        const v = subtotals[mv] || 0;
        if (v === 0) return '';
        return `<span class="total-pill total-pill-${mv}">${label} ${v}</span>`;
    };

    const pills = [
        pillFor('left', DIRECTION_ARROWS.left),
        pillFor('straight', DIRECTION_ARROWS.straight),
        pillFor('right', DIRECTION_ARROWS.right),
        pillFor('uturn', DIRECTION_ARROWS.uturn),
        pillFor('crossing', '\u{1F6B6}')
    ].filter(Boolean).join('');

    strip.innerHTML = `
        <div class="approach-total-number">${total}</div>
        <div class="approach-total-pills">${pills}</div>
    `;
    strip.style.display = 'flex';
}

function renderApproachTabs() {
    const container = $('#approach-tabs');
    container.innerHTML = '';

    currentSession.approaches.forEach((approach, i) => {
        const btn = document.createElement('button');
        btn.className = 'approach-tab' + (i === currentApproachIndex ? ' active' : '');

        const total = getApproachTotal(approach);
        btn.innerHTML = `${approach}<span class="tab-count">${total}</span>`;

        btn.addEventListener('click', () => {
            currentApproachIndex = i;
            renderCountingScreen();
        });
        container.appendChild(btn);
    });
}

// Returns the two perpendicular approach indices for a 4-leg intersection
// For other configurations, returns whatever "other" approaches exist
function getPerpendicularApproaches(approachIndex) {
    const n = currentSession.approaches.length;
    if (n === 4) {
        // Standard: indices 0 and 2 are opposite, 1 and 3 are opposite
        return [(approachIndex + 1) % 4, (approachIndex + 3) % 4];
    }
    if (n === 3) {
        // 3-leg: show the other two approaches
        return [(approachIndex + 1) % 3, (approachIndex + 2) % 3];
    }
    if (n === 2) {
        // 2-leg: just the other one (single direction crossing)
        return [(approachIndex + 1) % 2];
    }
    return [];
}

function renderCountGrid() {
    const container = $('#count-grid');
    container.innerHTML = '';
    const interval = getCurrentInterval();
    if (!interval) return;

    const motorTypes = currentSession.vehicleTypes.filter(vt => !CROSSING_TYPES.has(vt));
    const crossingTypes = currentSession.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));

    const approach = currentSession.approaches[currentApproachIndex];
    if (!interval.counts[approach]) interval.counts[approach] = {};

    // Migrate old `crossing` data to `crossing_a` if present
    if (interval.counts[approach]['crossing'] && !interval.counts[approach]['crossing_a']) {
        interval.counts[approach]['crossing_a'] = interval.counts[approach]['crossing'];
        delete interval.counts[approach]['crossing'];
    }

    // Ensure crossing_a and crossing_b are initialized
    if (crossingTypes.length > 0) {
        ['crossing_a', 'crossing_b'].forEach(key => {
            if (!interval.counts[approach][key]) {
                interval.counts[approach][key] = {};
                crossingTypes.forEach(vt => { interval.counts[approach][key][vt] = 0; });
            }
        });
    }

    // Render vehicle turning movements
    currentSession.movements.forEach(movement => {
        if (motorTypes.length === 0) return;
        renderDirectionSection(container, approach, movement, motorTypes, interval);
    });

    // Render crossing sections per perpendicular direction
    if (crossingTypes.length > 0) {
        const perp = getPerpendicularApproaches(currentApproachIndex);
        const keys = ['crossing_a', 'crossing_b'];
        perp.forEach((perpIdx, i) => {
            const dirName = currentSession.approaches[perpIdx];
            const movementKey = keys[i];
            renderCrossingDirectionSection(container, approach, movementKey, dirName, crossingTypes, interval);
        });
    }
}

// Render a crossing section labelled with the destination approach name
function renderCrossingDirectionSection(container, approach, movementKey, destApproachName, vehicleTypeIds, interval) {
    const section = document.createElement('div');
    section.className = 'direction-section';

    const header = document.createElement('div');
    header.className = `direction-header crossing`;
    header.innerHTML = `<span class="arrow">\u{1F6B6}</span> ${t('dir_crossing')} → ${destApproachName}`;

    // Reset button
    const resetBtn = document.createElement('button');
    resetBtn.className = 'section-reset-btn';
    resetBtn.textContent = t('reset');
    resetBtn.title = t('reset');
    resetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(t('confirm_reset_section'))) {
            vehicleTypeIds.forEach(vt => { interval.counts[approach][movementKey][vt] = 0; });
            saveSession();
            renderCountingScreen();
        }
    });
    header.appendChild(resetBtn);
    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'vehicle-buttons';

    vehicleTypeIds.forEach(vtId => {
        const count = interval.counts[approach][movementKey][vtId] || 0;
        const btn = document.createElement('button');
        const tierClass = getCountTierClass(count);
        btn.className = 'count-btn' + (count > 0 ? ' has-count' : '') + (tierClass ? ' ' + tierClass : '');
        btn.innerHTML = `
            <span class="count-btn-reset" title="${t('reset')}">&times;</span>
            <span class="vehicle-icon">${getVehicleIcon(vtId)}</span>
            <span class="count-value">${count}</span>
            <span class="vehicle-label">${getVehicleLabel(vtId)}</span>
        `;
        // Per-button reset badge
        btn.querySelector('.count-btn-reset').addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            resetCount(approach, movementKey, vtId);
        });
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            incrementCount(approach, movementKey, vtId);
        });
        let longPressTimer;
        btn.addEventListener('touchstart', () => {
            longPressTimer = setTimeout(() => decrementCount(approach, movementKey, vtId), 500);
        }, { passive: true });
        btn.addEventListener('touchend', () => clearTimeout(longPressTimer));
        btn.addEventListener('touchmove', () => clearTimeout(longPressTimer));

        // Restore "just-tapped" animation if this is the most recent tap
        if (lastTappedKey === `${approach}|${movementKey}|${vtId}` && Date.now() - lastTappedAt < 1400) {
            btn.classList.add('just-tapped');
            setTimeout(() => btn.classList.remove('just-tapped'), 1500 - (Date.now() - lastTappedAt));
        }

        grid.appendChild(btn);
    });

    section.appendChild(grid);
    container.appendChild(section);
}

function renderDirectionSection(container, approach, movement, vehicleTypeIds, interval) {
    const section = document.createElement('div');
    section.className = 'direction-section';

    const header = document.createElement('div');
    header.className = `direction-header ${movement}`;
    const arrow = DIRECTION_ARROWS[movement] || '\u{1F6B6}';
    header.innerHTML = `<span class="arrow">${arrow}</span> ${DIRECTION_LABELS[movement]}`;

    // Reset button for the section
    const resetBtn = document.createElement('button');
    resetBtn.className = 'section-reset-btn';
    resetBtn.textContent = t('reset');
    resetBtn.title = t('reset');
    resetBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(t('confirm_reset_section'))) {
            vehicleTypeIds.forEach(vt => { interval.counts[approach][movement][vt] = 0; });
            saveSession();
            renderCountingScreen();
        }
    });
    header.appendChild(resetBtn);

    section.appendChild(header);

    const grid = document.createElement('div');
    grid.className = 'vehicle-buttons';

    vehicleTypeIds.forEach(vtId => {
        const vt = DEFAULT_VEHICLE_TYPES.find(v => v.id === vtId);
        const count = interval.counts[approach][movement][vtId];

        const btn = document.createElement('button');
        const tierClass = getCountTierClass(count);
        btn.className = 'count-btn' + (count > 0 ? ' has-count' : '') + (tierClass ? ' ' + tierClass : '');
        btn.innerHTML = `
            <span class="count-btn-reset" title="${t('reset')}">&times;</span>
            <span class="vehicle-icon">${getVehicleIcon(vtId)}</span>
            <span class="count-value">${count}</span>
            <span class="vehicle-label">${getVehicleLabel(vtId)}</span>
        `;

        // Per-button reset badge
        btn.querySelector('.count-btn-reset').addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            resetCount(approach, movement, vtId);
        });

        // Tap to increment
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            incrementCount(approach, movement, vtId);
        });

        // Restore "just-tapped" highlight
        if (lastTappedKey === `${approach}|${movement}|${vtId}` && Date.now() - lastTappedAt < 1400) {
            btn.classList.add('just-tapped');
            setTimeout(() => btn.classList.remove('just-tapped'), 1500 - (Date.now() - lastTappedAt));
        }

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

    // Track the last tapped button so the re-render can highlight it briefly
    lastTappedKey = `${approach}|${movement}|${vehicleType}`;
    lastTappedAt = Date.now();

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

// Reset a single (approach, movement, vehicleType) count to 0. Records the
// previous value in the undo stack so Undo can restore it.
function resetCount(approach, movement, vehicleType) {
    const interval = getCurrentInterval();
    if (!interval) return;
    const prevValue = interval.counts[approach]?.[movement]?.[vehicleType] || 0;
    if (prevValue === 0) return;
    interval.counts[approach][movement][vehicleType] = 0;
    undoStack.push({ approach, movement, vehicleType, action: 'reset', prevValue });
    if (navigator.vibrate) navigator.vibrate([40, 40, 40]);
    saveSession();
    renderCountingScreen();
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
    } else if (last.action === 'reset') {
        interval.counts[last.approach][last.movement][last.vehicleType] = last.prevValue;
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
    const confirmMsg = currentSession?.mode === 'pt-ride' ? t('confirm_finish_ride') : t('confirm_end');
    if (!confirm(confirmMsg)) return;

    if (timerInterval) clearInterval(timerInterval);
    releaseWakeLock();

    // Finalize noise stats on the final partial interval, then stop the logger
    if (currentSession?.noiseEnabled && NoiseLogger.enabled) {
        const interval = getCurrentInterval();
        if (interval) {
            const stats = NoiseLogger.finalizeInterval();
            if (stats) interval.noiseStats = stats;
        }
        NoiseLogger.stop();
    }

    // For ride-check, also log the current in-progress station if any counts exist
    if (currentSession?.mode === 'pt-ride' && (rideCurrentEntry > 0 || rideCurrentExit > 0)) {
        const previousSum = rideOnBoardSoFar();
        const newSum = Math.max(0, previousSum + rideCurrentEntry - rideCurrentExit);
        currentSession.stationLogs.push({
            index: rideCurrentStationIdx,
            station: currentSession.stations[rideCurrentStationIdx] || `Station ${rideCurrentStationIdx + 1}`,
            entry: rideCurrentEntry,
            exit: rideCurrentExit,
            sum: newSum,
            time: new Date().toISOString()
        });
        rideCurrentEntry = 0;
        rideCurrentExit = 0;
    } else {
        // Trim end time of last interval to now (traffic/PT-stop modes)
        const lastInterval = getCurrentInterval();
        if (lastInterval) {
            lastInterval.endTime = new Date().toISOString();
        }
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
            let title, tag, sub;
            if (s.mode === 'pt-ride') {
                title = s.line || 'Ride';
                tag = t('ride_check_label');
                sub = `${(s.stationLogs || []).length} ${t('station_label').toLowerCase()}`;
            } else if (s.mode === 'pt') {
                title = s.stopName;
                tag = t('pt_mode_tag');
                sub = s.intervals.length;
            } else {
                title = s.siteName;
                tag = t('traffic_mode_tag');
                sub = s.intervals.length;
            }
            return `<div class="history-item" data-id="${s.id}">
                ${checkbox}
                <div class="history-item-info">
                    <h3>${title}</h3>
                    <p>${tag} | ${s.date} | ${sub}</p>
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

    // Gather unique approaches
    const approaches = [...new Set(rows.map(r => r[approachIdx]))];

    // Map a label to a movement key, given the approach context (for crossing → X labels)
    const labelToMovement = (label, approach) => {
        if (dirLabelToKey[label]) return dirLabelToKey[label];
        // Crossing direction: "Crossing → North" etc.
        const m = label.match(/^Crossing\s*[→\->]+\s*(.+)$/i);
        if (m) {
            const destName = m[1].trim();
            const approachIdx = approaches.indexOf(approach);
            const n = approaches.length;
            if (approachIdx >= 0 && n >= 2) {
                let perpA, perpB;
                if (n === 4) {
                    perpA = approaches[(approachIdx + 1) % 4];
                    perpB = approaches[(approachIdx + 3) % 4];
                } else if (n === 3) {
                    perpA = approaches[(approachIdx + 1) % 3];
                    perpB = approaches[(approachIdx + 2) % 3];
                } else {
                    perpA = approaches[(approachIdx + 1) % 2];
                }
                if (destName === perpA) return 'crossing_a';
                if (destName === perpB) return 'crossing_b';
            }
            return 'crossing_a';
        }
        return label.toLowerCase();
    };

    const movementsSet = new Set();
    rows.forEach(r => movementsSet.add(labelToMovement(r[dirIdx], r[approachIdx])));
    const movements = Array.from(movementsSet);
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
            const movement = labelToMovement(r[dirIdx], approach);
            // Ensure target exists (for crossings, vehicle types must be crossing types)
            if (!counts[approach][movement]) {
                counts[approach][movement] = {};
                vtIds.forEach(vt => { counts[approach][movement][vt] = 0; });
            }

            vtIds.forEach((vtId, vi) => {
                const val = parseInt(r[dirIdx + 1 + vi]) || 0;
                if (counts[approach][movement]) {
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

    const wb = XLSX.read(arrayBuffer, { type: 'array' });

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

    // Helper: map a direction label (incl. "Crossing → X") to a movement key
    const labelToMovement = (label, approach) => {
        if (dirLabelToKey[label]) return dirLabelToKey[label];
        const m = String(label).match(/^Crossing\s*[→\->]+\s*(.+)$/i);
        if (m) {
            const destName = m[1].trim();
            const approachIdx = approaches.indexOf(approach);
            const n = approaches.length;
            if (approachIdx >= 0 && n >= 2) {
                let perpA, perpB;
                if (n === 4) {
                    perpA = approaches[(approachIdx + 1) % 4];
                    perpB = approaches[(approachIdx + 3) % 4];
                } else if (n === 3) {
                    perpA = approaches[(approachIdx + 1) % 3];
                    perpB = approaches[(approachIdx + 2) % 3];
                } else {
                    perpA = approaches[(approachIdx + 1) % 2];
                }
                if (destName === perpA) return 'crossing_a';
                if (destName === perpB) return 'crossing_b';
            }
            return 'crossing_a';
        }
        return String(label).toLowerCase();
    };

    const movementsSet = new Set();
    dataRows.forEach(r => movementsSet.add(labelToMovement(String(r[dirIdx]), String(r[approachIdx]))));
    const movements = Array.from(movementsSet).filter(m => !isCrossingMovement(m));
    const hasCrossingTypes = vtIds.some(vt => CROSSING_TYPES.has(vt));

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
                ['crossing_a', 'crossing_b'].forEach(ck => {
                    counts[a][ck] = {};
                    crossingTypes.forEach(vt => { counts[a][ck][vt] = 0; });
                });
            }
        });

        dataRows.filter(r => `${r[startIdx]}|${r[endIdx]}` === key).forEach(r => {
            const approach = String(r[approachIdx]);
            const movement = labelToMovement(String(r[dirIdx]), approach);
            if (!counts[approach][movement]) {
                counts[approach][movement] = {};
                vtIds.forEach(vt => { counts[approach][movement][vt] = 0; });
            }

            vtIds.forEach((vtId, vi) => {
                const val = parseInt(r[dirIdx + 1 + vi]) || 0;
                if (counts[approach][movement]) {
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
    if (session.mode === 'pt-ride') {
        info.innerHTML = `
            <div class="site-title">${session.line}</div>
            <p>${t('mode_label')}: ${t('ride_check_label')}</p>
            <p>${t('date')}: ${session.date}</p>
            <p>${t('departure_time')}: ${session.departureTime || '—'}</p>
            <p>${t('stations')}: ${session.stations.length}</p>
        `;
    } else if (session.mode === 'pt') {
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

    const isTraffic = session.mode !== 'pt' && session.mode !== 'pt-ride';
    $('#tab-diagram').style.display = isTraffic ? '' : 'none';
    $('#tab-vehicle-split').style.display = isTraffic ? '' : 'none';

    const analysisContainer = $('#results-analysis');
    if (isTraffic) {
        renderAnalysis(analysisContainer, session);
    } else {
        analysisContainer.innerHTML = '';
    }

    $$('.results-tab').forEach(tb => tb.classList.remove('active'));
    $('.results-tab[data-view="summary"]').classList.add('active');

    renderResults('summary');
    showScreen('results-screen');
}

function renderResults(view) {
    const container = $('#results-content');
    const session = currentSession;

    if (session.mode === 'pt-ride') {
        renderRideResults(container, session);
        return;
    }
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

function renderRideResults(container, session) {
    const logs = session.stationLogs || [];
    let totalEntry = 0, totalExit = 0;

    let html = `<h3 style="margin:12px 0 8px;font-size:1rem;font-weight:700;">${session.line} — ${session.departureTime || ''}</h3>`;
    html += `<table class="results-table"><thead><tr>
        <th>#</th>
        <th>${t('station_label')}</th>
        <th>${t('time')}</th>
        <th>${t('entry')}</th>
        <th>${t('exit')}</th>
        <th>${t('sum')}</th>
    </tr></thead><tbody>`;

    logs.forEach((log, i) => {
        totalEntry += log.entry;
        totalExit += log.exit;
        const time = formatTime(new Date(log.time));
        html += `<tr>
            <td>${log.index + 1}</td>
            <td style="text-align:left">${log.station}</td>
            <td>${time}</td>
            <td style="color:#188038">${log.entry}</td>
            <td style="color:#d93025">${log.exit}</td>
            <td><strong>${log.sum}</strong></td>
        </tr>`;
    });

    html += `<tr class="total-row">
        <td colspan="3">${t('total').toUpperCase()}</td>
        <td>${totalEntry}</td>
        <td>${totalExit}</td>
        <td>${Math.max(0, totalEntry - totalExit)}</td>
    </tr>`;
    html += `</tbody></table>`;

    container.innerHTML = html;
}

function getAllMovements(session) {
    // Return all movement keys that exist in the data (turning movements + crossings)
    const movementSet = new Set(session.movements);
    const crossingTypes = session.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));
    if (crossingTypes.length > 0) {
        // Two crossing directions per approach
        movementSet.add('crossing_a');
        movementSet.add('crossing_b');
    }
    return Array.from(movementSet);
}

function isCrossingMovement(movement) {
    return movement === 'crossing' || movement === 'crossing_a' || movement === 'crossing_b';
}

function getVehicleTypesForMovement(session, movement) {
    if (isCrossingMovement(movement)) {
        return session.vehicleTypes.filter(vt => CROSSING_TYPES.has(vt));
    }
    return session.vehicleTypes.filter(vt => !CROSSING_TYPES.has(vt));
}

// Get the label for a crossing direction within the context of an approach
// Returns "Crossing → North" style label using the perpendicular approach name
function getCrossingDirectionLabel(session, approach, movementKey) {
    if (!isCrossingMovement(movementKey)) return DIRECTION_LABELS[movementKey] || movementKey;

    const approachIdx = session.approaches.indexOf(approach);
    if (approachIdx < 0) return t('dir_crossing');

    const n = session.approaches.length;
    let perpIdx;
    if (n === 4) {
        perpIdx = movementKey === 'crossing_a' ? (approachIdx + 1) % 4 : (approachIdx + 3) % 4;
    } else if (n === 3) {
        perpIdx = movementKey === 'crossing_a' ? (approachIdx + 1) % 3 : (approachIdx + 2) % 3;
    } else if (n === 2) {
        perpIdx = (approachIdx + 1) % 2;
    } else {
        return t('dir_crossing');
    }

    const destName = session.approaches[perpIdx] || '?';
    return `${t('dir_crossing')} → ${destName}`;
}

// English-only version for CSV/XLSX exports — label is language-independent so files import cleanly
function getCrossingDirectionLabelEN(session, approach, movementKey) {
    if (!isCrossingMovement(movementKey)) return DIRECTION_LABELS_EN[movementKey] || movementKey;

    const approachIdx = session.approaches.indexOf(approach);
    if (approachIdx < 0) return 'Crossing';

    const n = session.approaches.length;
    let perpIdx;
    if (n === 4) {
        perpIdx = movementKey === 'crossing_a' ? (approachIdx + 1) % 4 : (approachIdx + 3) % 4;
    } else if (n === 3) {
        perpIdx = movementKey === 'crossing_a' ? (approachIdx + 1) % 3 : (approachIdx + 2) % 3;
    } else if (n === 2) {
        perpIdx = (approachIdx + 1) % 2;
    } else {
        return 'Crossing';
    }

    const destName = session.approaches[perpIdx] || '?';
    return `Crossing → ${destName}`;
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
            const dirLabel = isCrossingMovement(movement)
                ? getCrossingDirectionLabel(session, approach, movement)
                : DIRECTION_LABELS[movement];
            html += `<tr>
                <td>${approach}</td>
                <td>${arrow} ${dirLabel}</td>
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

        // Noise summary line below the table for this interval
        if (interval.noiseStats) {
            const ns = interval.noiseStats;
            html += `<div class="interval-noise-line">
                <strong>${t('noise_section_title')}:</strong>
                LAeq ${ns.LAeq.toFixed(1)} ·
                LAmax ${ns.LAmax.toFixed(1)} ·
                LAmin ${ns.LAmin.toFixed(1)} ·
                LA10 ${ns.LA10.toFixed(1)} · LA50 ${ns.LA50.toFixed(1)} · LA90 ${ns.LA90.toFixed(1)} dB(A)
            </div>`;
        }
    });

    container.innerHTML = html;
}

// ===== CSV EXPORT & SHARE =====
function buildCSV(session) {
    if (session.mode === 'pt-ride') return buildRideCSV(session);
    if (session.mode === 'pt') return buildPTCSV(session);
    return buildTrafficCSV(session);
}

function buildRideCSV(session) {
    const headers = ['Line', 'Date', 'Departure', 'Station #', 'Station', 'Time', 'Entry', 'Exit', 'Sum'];
    const rows = [headers.join(',')];
    (session.stationLogs || []).forEach(log => {
        rows.push([
            `"${session.line}"`,
            session.date,
            session.departureTime || '',
            log.index + 1,
            `"${log.station}"`,
            formatTime(new Date(log.time)),
            log.entry,
            log.exit,
            log.sum
        ].join(','));
    });
    return rows.join('\n');
}

function buildTrafficCSV(session) {
    // Always export CSV headers in English for consistency with import/merge
    const vtHeaders = session.vehicleTypes.map(vt => {
        const enLabel = { car:'Car', lgv:'LGV', hgv:'HGV', bus:'Bus', tram:'Tram', motorcycle:'M/cycle', bicycle:'Bicycle', pedestrian:'Pedestr.', escooter:'E-scoot', taxi:'Taxi' };
        return enLabel[vt] || vt;
    });

    const noiseHeaders = session.noiseEnabled
        ? ['LAeq dB(A)', 'LAmin dB(A)', 'LAmax dB(A)', 'LA10 dB(A)', 'LA50 dB(A)', 'LA90 dB(A)']
        : [];

    const headers = ['Site', 'Date', 'Interval Start', 'Interval End', 'Approach', 'Direction',
        ...vtHeaders, 'Total', ...noiseHeaders];
    const rows = [headers.join(',')];

    const allMovements = getAllMovements(session);

    session.intervals.forEach(interval => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));
        const noiseCols = session.noiseEnabled && interval.noiseStats
            ? [interval.noiseStats.LAeq, interval.noiseStats.LAmin, interval.noiseStats.LAmax,
               interval.noiseStats.LA10, interval.noiseStats.LA50, interval.noiseStats.LA90]
            : (session.noiseEnabled ? ['', '', '', '', '', ''] : []);

        session.approaches.forEach(approach => {
            allMovements.forEach(movement => {
                const values = session.vehicleTypes.map(vt =>
                    interval.counts[approach]?.[movement]?.[vt] || 0
                );
                const total = values.reduce((a, b) => a + b, 0);

                const dirLabel = isCrossingMovement(movement)
                    ? getCrossingDirectionLabelEN(session, approach, movement)
                    : (DIRECTION_LABELS_EN[movement] || movement);
                rows.push([
                    `"${session.siteName}"`,
                    session.date,
                    start,
                    end,
                    `"${approach}"`,
                    `"${dirLabel}"`,
                    ...values,
                    total,
                    ...noiseCols
                ].join(','));
            });
        });
    });

    return rows.join('\n');
}

function getCSVFilename(session) {
    let name, prefix;
    if (session.mode === 'pt-ride') {
        name = session.line;
        prefix = 'ride_check';
    } else if (session.mode === 'pt') {
        name = session.stopName;
        prefix = 'pt_passengers';
    } else {
        name = session.siteName;
        prefix = 'traffic_count';
    }
    return `${prefix}_${(name || 'session').replace(/\s+/g, '_')}_${session.date}.csv`;
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

// ===== CHART RENDERING =====
// Render a Chart.js config to a base64 PNG string
async function renderChartAsPNG(config, width = 800, height = 500) {
    if (typeof Chart === 'undefined') throw new Error('Chart.js not loaded');

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.style.display = 'none';
    document.body.appendChild(canvas);

    // Force animations off so toDataURL captures the final frame
    const finalConfig = JSON.parse(JSON.stringify(config));
    finalConfig.options = finalConfig.options || {};
    finalConfig.options.animation = false;
    finalConfig.options.responsive = false;
    finalConfig.options.maintainAspectRatio = false;
    finalConfig.options.devicePixelRatio = 2;

    const chart = new Chart(canvas, finalConfig);
    // Chart.js renders synchronously for animation:false — but wait a tick to be safe
    await new Promise(resolve => setTimeout(resolve, 50));

    const dataUrl = canvas.toDataURL('image/png');
    const base64 = dataUrl.replace(/^data:image\/png;base64,/, '');

    chart.destroy();
    canvas.remove();

    return base64;
}

// Color palette for charts
const CHART_COLORS = ['#004f9f', '#4285f4', '#34a853', '#ea4335', '#fbbc04', '#9c27b0', '#00acc1', '#f57c00', '#795548', '#607d8b'];

// ===== CHART CONFIG BUILDERS =====

function buildApproachTotalsChart(session, split) {
    return {
        type: 'bar',
        data: {
            labels: session.approaches,
            datasets: [{
                label: t('vehicles_count'),
                data: session.approaches.map(a => split.approachTotals[a] || 0),
                backgroundColor: '#004f9f',
                borderColor: '#003b78',
                borderWidth: 1
            }]
        },
        options: {
            indexAxis: 'y',
            plugins: {
                legend: { display: false },
                title: { display: true, text: `${t('directional_split')} — ${session.siteName}`, font: { size: 16 } }
            },
            scales: {
                x: { beginAtZero: true, title: { display: true, text: t('vehicles_count') } }
            }
        }
    };
}

function buildMovementsChart(session) {
    const allMovements = getAllMovements(session).filter(m => m !== 'crossing');
    const datasets = allMovements.map(mv => {
        const color = mv === 'left' ? '#4285f4' : mv === 'straight' ? '#34a853' : mv === 'right' ? '#ea4335' : '#fbbc04';
        return {
            label: DIRECTION_LABELS_EN[mv] || mv,
            data: session.approaches.map(approach => {
                let total = 0;
                const vtForMov = getVehicleTypesForMovement(session, mv);
                session.intervals.forEach(interval => {
                    vtForMov.forEach(vt => { total += interval.counts[approach]?.[mv]?.[vt] || 0; });
                });
                return total;
            }),
            backgroundColor: color
        };
    });

    return {
        type: 'bar',
        data: { labels: session.approaches, datasets },
        options: {
            plugins: {
                title: { display: true, text: t('turning_movements'), font: { size: 16 } },
                legend: { position: 'top' }
            },
            scales: {
                x: { stacked: true, title: { display: true, text: t('approach') } },
                y: { stacked: true, beginAtZero: true, title: { display: true, text: t('vehicles_count') } }
            }
        }
    };
}

function buildVehicleTypesChart(session) {
    const vtTotals = {};
    session.vehicleTypes.forEach(vt => vtTotals[vt] = 0);
    session.intervals.forEach(interval => {
        for (const a of Object.keys(interval.counts)) {
            for (const m of Object.keys(interval.counts[a])) {
                for (const vt of Object.keys(interval.counts[a][m])) {
                    vtTotals[vt] = (vtTotals[vt] || 0) + interval.counts[a][m][vt];
                }
            }
        }
    });

    // Filter out zero-count types
    const activeTypes = session.vehicleTypes.filter(vt => vtTotals[vt] > 0);

    return {
        type: 'doughnut',
        data: {
            labels: activeTypes.map(vt => getVehicleLabel(vt)),
            datasets: [{
                data: activeTypes.map(vt => vtTotals[vt]),
                backgroundColor: activeTypes.map((_, i) => CHART_COLORS[i % CHART_COLORS.length])
            }]
        },
        options: {
            plugins: {
                title: { display: true, text: t('vehicle_type_split'), font: { size: 16 } },
                legend: { position: 'right' }
            }
        }
    };
}

function buildFlowChart(session) {
    const intervalLabels = session.intervals.map(intv => formatTime(new Date(intv.startTime)));

    const datasets = session.approaches.map((approach, i) => ({
        label: approach,
        data: session.intervals.map(intv => {
            let total = 0;
            for (const m of Object.keys(intv.counts[approach] || {})) {
                for (const vt of Object.keys(intv.counts[approach][m])) {
                    total += intv.counts[approach][m][vt];
                }
            }
            return total;
        }),
        borderColor: CHART_COLORS[i % CHART_COLORS.length],
        backgroundColor: CHART_COLORS[i % CHART_COLORS.length] + '33',
        tension: 0.2,
        borderWidth: 2,
        pointRadius: 4
    }));

    return {
        type: 'line',
        data: { labels: intervalLabels, datasets },
        options: {
            plugins: {
                title: { display: true, text: t('peak_hour') + ' / Flow Over Time', font: { size: 16 } },
                legend: { position: 'top' }
            },
            scales: {
                x: { title: { display: true, text: t('start_time') } },
                y: { beginAtZero: true, title: { display: true, text: t('vehicles_count') } }
            }
        }
    };
}

function buildPTFlowChart(session) {
    const intervalLabels = session.intervals.map(intv =>
        formatTime(new Date(intv.startTime)) + ' - ' + formatTime(new Date(intv.endTime))
    );

    const boardingPerInterval = session.intervals.map(intv =>
        (intv.vehicles || []).reduce((sum, v) => sum + v.boarding, 0)
    );
    const alightingPerInterval = session.intervals.map(intv =>
        (intv.vehicles || []).reduce((sum, v) => sum + v.alighting, 0)
    );

    return {
        type: 'bar',
        data: {
            labels: intervalLabels,
            datasets: [
                { label: t('boarding_cap'), data: boardingPerInterval, backgroundColor: '#188038' },
                { label: t('alighting_cap'), data: alightingPerInterval, backgroundColor: '#d93025' }
            ]
        },
        options: {
            plugins: {
                title: { display: true, text: t('boarding_cap') + ' / ' + t('alighting_cap'), font: { size: 16 } },
                legend: { position: 'top' }
            },
            scales: {
                x: { title: { display: true, text: t('time_interval') } },
                y: { beginAtZero: true, title: { display: true, text: t('vehicles_count') } }
            }
        }
    };
}

// ===== EXCEL HELPERS =====
// Style header rows with bold + background
function styleHeaderRow(row) {
    row.font = { bold: true, color: { argb: 'FFFFFFFF' } };
    row.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF004F9F' } };
    row.alignment = { horizontal: 'center', vertical: 'middle' };
    row.height = 22;
}

function autoSizeColumns(ws, minWidth = 10) {
    ws.columns.forEach(col => {
        let maxLen = minWidth;
        col.eachCell && col.eachCell({ includeEmpty: false }, cell => {
            const len = String(cell.value == null ? '' : cell.value).length;
            if (len > maxLen) maxLen = len;
        });
        col.width = Math.min(maxLen + 2, 30);
    });
}

// Add a chart sheet: chart image at top, data table below
async function addChartSheet(wb, name, chartConfig, dataRows) {
    const ws = wb.addWorksheet(name);
    try {
        const pngBase64 = await renderChartAsPNG(chartConfig);
        const imgId = wb.addImage({ base64: pngBase64, extension: 'png' });
        ws.addImage(imgId, {
            tl: { col: 1, row: 1 },
            ext: { width: 800, height: 500 }
        });
    } catch (e) {
        ws.getCell('B2').value = 'Chart rendering failed: ' + e.message;
    }

    // Place data table starting at row 30 (below the 500-px image)
    const startRow = 30;
    if (dataRows && dataRows.length > 0) {
        dataRows.forEach((row, i) => {
            const xlRow = ws.getRow(startRow + i);
            row.forEach((value, j) => {
                xlRow.getCell(j + 2).value = value;
            });
            if (i === 0) styleHeaderRow(xlRow);
        });
    }
    autoSizeColumns(ws);
}

// ===== XLSX EXPORT (ExcelJS-based with charts) =====
async function exportXLSX() {
    const session = currentSession;
    if (!session) return;

    // If ExcelJS or Chart.js aren't loaded, fall back to SheetJS without charts
    if (typeof ExcelJS === 'undefined' || typeof Chart === 'undefined') {
        exportXLSXFallback(session);
        return;
    }

    try {
        const wb = new ExcelJS.Workbook();
        wb.creator = 'Traffic Counter';
        wb.created = new Date();

        if (session.mode === 'pt-ride') {
            await buildRideExcelSheets(wb, session);
        } else if (session.mode === 'pt') {
            await buildPTExcelSheets(wb, session);
        } else {
            await buildTrafficExcelSheets(wb, session);
        }

        let name;
        if (session.mode === 'pt-ride') name = session.line;
        else if (session.mode === 'pt') name = session.stopName;
        else name = session.siteName;
        const filename = `${(name || 'session').replace(/\s+/g, '_')}_${session.date}.xlsx`;

        const buffer = await wb.xlsx.writeBuffer();
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        a.click();
        URL.revokeObjectURL(url);
    } catch (e) {
        alert('Excel export failed: ' + e.message);
        console.error(e);
    }
}

// Fallback using SheetJS if ExcelJS/Chart.js didn't load
function exportXLSXFallback(session) {
    if (typeof XLSX === 'undefined') {
        alert(t('alert_excel_missing'));
        return;
    }
    const wb = XLSX.utils.book_new();
    if (session.mode === 'pt') {
        buildPTSheetsSheetJS(wb, session);
    } else {
        buildTrafficSheetsSheetJS(wb, session);
    }
    const name = session.mode === 'pt' ? session.stopName : session.siteName;
    const filename = `${name.replace(/\s+/g, '_')}_${session.date}.xlsx`;
    XLSX.writeFile(wb, filename);
}

// ===== TRAFFIC EXCEL SHEETS (ExcelJS) =====
async function buildTrafficExcelSheets(wb, session) {
    const allMovements = getAllMovements(session);
    const vtLabels = session.vehicleTypes.map(vt => VEHICLE_LABELS_EN[vt] || vt);
    const noiseHeaders = session.noiseEnabled
        ? ['LAeq dB(A)', 'LAmin dB(A)', 'LAmax dB(A)', 'LA10 dB(A)', 'LA50 dB(A)', 'LA90 dB(A)']
        : [];

    // --- Sheet 1: Raw Data ---
    const wsRaw = wb.addWorksheet('Raw Data');
    wsRaw.addRow(['Site', 'Date', 'Interval Start', 'Interval End', 'Approach', 'Direction', ...vtLabels, 'Total', ...noiseHeaders]);
    styleHeaderRow(wsRaw.getRow(1));

    session.intervals.forEach(interval => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));
        const noiseCols = session.noiseEnabled && interval.noiseStats
            ? [interval.noiseStats.LAeq, interval.noiseStats.LAmin, interval.noiseStats.LAmax,
               interval.noiseStats.LA10, interval.noiseStats.LA50, interval.noiseStats.LA90]
            : (session.noiseEnabled ? ['', '', '', '', '', ''] : []);
        session.approaches.forEach(approach => {
            allMovements.forEach(movement => {
                const values = session.vehicleTypes.map(vt => interval.counts[approach]?.[movement]?.[vt] || 0);
                const total = values.reduce((a, b) => a + b, 0);
                const dirLabel = isCrossingMovement(movement)
                    ? getCrossingDirectionLabelEN(session, approach, movement)
                    : (DIRECTION_LABELS_EN[movement] || movement);
                wsRaw.addRow([session.siteName, session.date, start, end, approach, dirLabel, ...values, total, ...noiseCols]);
            });
        });
    });
    autoSizeColumns(wsRaw);

    // --- Sheet 2: Summary Table ---
    const wsSummary = wb.addWorksheet('Summary');
    wsSummary.addRow(['Approach', 'Direction', ...vtLabels, 'Total']);
    styleHeaderRow(wsSummary.getRow(1));

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
            const dirLabel = isCrossingMovement(movement)
                ? getCrossingDirectionLabelEN(session, approach, movement)
                : (DIRECTION_LABELS_EN[movement] || movement);
            wsSummary.addRow([approach, dirLabel, ...session.vehicleTypes.map(vt => totals[vt] || 0), rowTotal]);
        });
    });
    const totalRow = wsSummary.addRow(['TOTAL', '', ...session.vehicleTypes.map(vt => grandTotals[vt]), grandTotal]);
    totalRow.font = { bold: true };
    totalRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0EAF5' } };
    if (grandTotal > 0) {
        const pctRow = wsSummary.addRow(['%', '', ...session.vehicleTypes.map(vt => grandTotals[vt] > 0 ? ((grandTotals[vt] / grandTotal) * 100).toFixed(1) + '%' : ''), '100%']);
        pctRow.font = { italic: true };
    }
    autoSizeColumns(wsSummary);

    // --- Sheet 3: Vehicle % ---
    const wsVt = wb.addWorksheet('Vehicle %');
    wsVt.addRow(['Approach', 'Movement', ...vtLabels, 'Total']);
    styleHeaderRow(wsVt.getRow(1));

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

            const dirLabelVt = isCrossingMovement(movement)
                ? getCrossingDirectionLabelEN(session, approach, movement)
                : (DIRECTION_LABELS_EN[movement] || movement);
            wsVt.addRow([approach, dirLabelVt, ...session.vehicleTypes.map(vt => data[approach][movement]?.[vt] || 0), rowTotal]);
            wsVt.addRow(['', '% of row', ...session.vehicleTypes.map(vt => {
                const count = data[approach][movement]?.[vt] || 0;
                return count > 0 ? ((count / rowTotal) * 100).toFixed(1) + '%' : '';
            }), '100%']);
        });
    });
    autoSizeColumns(wsVt);

    // --- Sheet 4: Analysis ---
    const wsAnalysis = wb.addWorksheet('Analysis');
    wsAnalysis.addRow(['Traffic Analysis']);
    wsAnalysis.getRow(1).font = { bold: true, size: 14 };
    wsAnalysis.addRow([]);

    const peakData = calculatePeakHour(session);
    if (peakData) {
        const { peak15, peakHour } = peakData;
        const h1 = wsAnalysis.addRow([`Peak ${session.intervalMinutes}-min Interval`]);
        h1.font = { bold: true };
        wsAnalysis.addRow(['Volume', peak15.total]);
        wsAnalysis.addRow(['Time', `${formatTime(peak15.start)} - ${formatTime(peak15.end)}`]);
        wsAnalysis.addRow([]);

        if (peakHour) {
            const h2 = wsAnalysis.addRow(['Peak Hour']);
            h2.font = { bold: true };
            wsAnalysis.addRow(['Volume', peakHour.volume]);
            wsAnalysis.addRow(['Time', `${formatTime(peakHour.start)} - ${formatTime(peakHour.end)}`]);

            const phf = calculatePHF(session, peakData);
            if (phf !== null) {
                wsAnalysis.addRow(['PHF', phf.toFixed(3)]);
            }
            wsAnalysis.addRow([]);
        }
    }

    const split = calculateDirectionalSplit(session);
    if (split.grandTotal > 0) {
        const h3 = wsAnalysis.addRow(['Directional Split']);
        h3.font = { bold: true };
        const hdr = wsAnalysis.addRow(['Approach', 'Volume', '%']);
        hdr.font = { bold: true };
        session.approaches.forEach(approach => {
            const total = split.approachTotals[approach];
            const pct = ((total / split.grandTotal) * 100).toFixed(1) + '%';
            wsAnalysis.addRow([approach, total, pct]);
        });
    }
    autoSizeColumns(wsAnalysis);

    // --- Chart Sheets ---

    // Chart 1: Approach totals
    const approachChartData = [['Approach', 'Volume', '%']];
    session.approaches.forEach(a => {
        const vol = split.approachTotals[a] || 0;
        const pct = split.grandTotal > 0 ? ((vol / split.grandTotal) * 100).toFixed(1) + '%' : '';
        approachChartData.push([a, vol, pct]);
    });
    approachChartData.push(['TOTAL', split.grandTotal, '100%']);
    await addChartSheet(wb, 'Chart - Approaches', buildApproachTotalsChart(session, split), approachChartData);

    // Chart 2: Movements
    const movementsChartData = [['Approach', 'Left', 'Straight', 'Right', 'Total']];
    session.approaches.forEach(a => {
        const totals = { left: 0, straight: 0, right: 0 };
        ['left', 'straight', 'right'].forEach(mv => {
            const vtForMov = getVehicleTypesForMovement(session, mv);
            session.intervals.forEach(interval => {
                vtForMov.forEach(vt => { totals[mv] += interval.counts[a]?.[mv]?.[vt] || 0; });
            });
        });
        movementsChartData.push([a, totals.left, totals.straight, totals.right, totals.left + totals.straight + totals.right]);
    });
    await addChartSheet(wb, 'Chart - Movements', buildMovementsChart(session), movementsChartData);

    // Chart 3: Vehicle Types
    const vtTotals = {};
    session.vehicleTypes.forEach(vt => vtTotals[vt] = 0);
    session.intervals.forEach(interval => {
        for (const a of Object.keys(interval.counts)) {
            for (const m of Object.keys(interval.counts[a])) {
                for (const vt of Object.keys(interval.counts[a][m])) {
                    vtTotals[vt] = (vtTotals[vt] || 0) + interval.counts[a][m][vt];
                }
            }
        }
    });
    const vtChartData = [['Vehicle Type', 'Count', '%']];
    const vtGrand = Object.values(vtTotals).reduce((a, b) => a + b, 0);
    session.vehicleTypes.forEach(vt => {
        const c = vtTotals[vt] || 0;
        if (c > 0) {
            const pct = vtGrand > 0 ? ((c / vtGrand) * 100).toFixed(1) + '%' : '';
            vtChartData.push([VEHICLE_LABELS_EN[vt] || vt, c, pct]);
        }
    });
    vtChartData.push(['TOTAL', vtGrand, '100%']);
    await addChartSheet(wb, 'Chart - Vehicle Types', buildVehicleTypesChart(session), vtChartData);

    // Chart 4: Flow over time
    const flowChartData = [['Interval Start', ...session.approaches, 'Total']];
    session.intervals.forEach(interval => {
        const row = [formatTime(new Date(interval.startTime))];
        let intTotal = 0;
        session.approaches.forEach(a => {
            let aTotal = 0;
            for (const m of Object.keys(interval.counts[a] || {})) {
                for (const vt of Object.keys(interval.counts[a][m])) {
                    aTotal += interval.counts[a][m][vt];
                }
            }
            row.push(aTotal);
            intTotal += aTotal;
        });
        row.push(intTotal);
        flowChartData.push(row);
    });
    await addChartSheet(wb, 'Chart - Flow Over Time', buildFlowChart(session), flowChartData);

    // --- Data Tables sheet (pivot-friendly, chart-ready) ---
    addTrafficDataTablesSheet(wb, session);

    // --- Noise sheets (only if session had noise enabled) ---
    if (session.noiseEnabled) {
        const noisyIntervals = session.intervals.filter(i => i.noiseStats);
        if (noisyIntervals.length > 0) {
            // Sheet: Noise
            const wsNoise = wb.addWorksheet('Noise');
            // Disclaimer as first visible row, italic small
            const disclaimerRow = wsNoise.addRow(['Disclaimer: uncalibrated reference for relative comparison and educational use only. Not valid for legal compliance measurements.']);
            disclaimerRow.font = { italic: true, size: 9, color: { argb: 'FF666666' } };
            wsNoise.addRow([]);
            wsNoise.addRow(['Interval Start', 'Interval End', 'LAeq dB(A)', 'LAmin', 'LAmax', 'LA10', 'LA50', 'LA90', 'Samples']);
            styleHeaderRow(wsNoise.getRow(3));
            session.intervals.forEach(intv => {
                if (!intv.noiseStats) return;
                const ns = intv.noiseStats;
                wsNoise.addRow([
                    formatTime(new Date(intv.startTime)),
                    formatTime(new Date(intv.endTime)),
                    ns.LAeq, ns.LAmin, ns.LAmax, ns.LA10, ns.LA50, ns.LA90, ns.sampleCount
                ]);
            });
            // Append summary row
            const ns = computeSessionNoiseSummary(session);
            if (ns) {
                wsNoise.addRow([]);
                const sumRow = wsNoise.addRow(['Session LAeq', '', ns.sessionLAeq, '', '', '', '', '', '']);
                sumRow.font = { bold: true };
            }
            autoSizeColumns(wsNoise);

            // Chart sheet: Noise vs flow
            const chartData = [['Interval Start', 'LAeq dB(A)', 'Vehicle flow']];
            noisyIntervals.forEach(intv => {
                // total vehicles in this interval
                let flow = 0;
                for (const a of Object.keys(intv.counts || {})) {
                    for (const m of Object.keys(intv.counts[a] || {})) {
                        for (const vt of Object.keys(intv.counts[a][m] || {})) {
                            flow += intv.counts[a][m][vt];
                        }
                    }
                }
                chartData.push([formatTime(new Date(intv.startTime)), intv.noiseStats.LAeq, flow]);
            });
            try {
                await addChartSheet(wb, 'Chart - Noise', buildNoiseChart(session, noisyIntervals), chartData);
            } catch (e) { /* chart failed, sheet still has data */ }
        }
    }
}

function buildNoiseChart(session, noisyIntervals) {
    const labels = noisyIntervals.map(intv => formatTime(new Date(intv.startTime)));
    const laeq = noisyIntervals.map(intv => intv.noiseStats.LAeq);
    const flow = noisyIntervals.map(intv => {
        let f = 0;
        for (const a of Object.keys(intv.counts || {})) {
            for (const m of Object.keys(intv.counts[a] || {})) {
                for (const vt of Object.keys(intv.counts[a][m] || {})) {
                    f += intv.counts[a][m][vt];
                }
            }
        }
        return f;
    });
    return {
        type: 'line',
        data: {
            labels,
            datasets: [
                { label: 'LAeq dB(A)', data: laeq, borderColor: '#8b5cf6', backgroundColor: 'rgba(139,92,246,0.15)', borderWidth: 3, fill: true, tension: 0.3, yAxisID: 'y' },
                { label: 'Vehicle flow', data: flow, borderColor: '#004f9f', borderWidth: 2, tension: 0.3, yAxisID: 'y1', type: 'line' }
            ]
        },
        options: {
            plugins: {
                title: { display: true, text: 'Traffic noise vs flow per interval', font: { size: 16 } },
                legend: { position: 'top' }
            },
            scales: {
                x: { title: { display: true, text: 'Interval start' } },
                y: { type: 'linear', position: 'left', title: { display: true, text: 'LAeq dB(A)' } },
                y1: { type: 'linear', position: 'right', grid: { drawOnChartArea: false }, title: { display: true, text: 'Vehicles' } }
            }
        }
    };
}

// ===== DATA TABLES SHEET =====
// Adds a single "Data Tables" sheet containing several labelled, wide-format
// tables (rows × columns) that are ready to be turned into charts by the
// student using Excel's Insert → Chart. Each table is surrounded by blank
// rows and a bold title so blocks are easy to select.
function addTrafficDataTablesSheet(wb, session) {
    const ws = wb.addWorksheet('Data Tables');
    const allMovements = getAllMovements(session);
    const vtLabels = session.vehicleTypes.map(vt => VEHICLE_LABELS_EN[vt] || vt);

    let currentRow = 1;

    // Helper to add a section title row
    const addTitle = (text) => {
        const row = ws.getRow(currentRow);
        row.getCell(1).value = text;
        row.font = { bold: true, size: 12, color: { argb: 'FF004F9F' } };
        currentRow++;
    };

    // Helper to add header row + data rows, then add blank rows after
    const addBlock = (header, rows) => {
        const hRow = ws.getRow(currentRow);
        header.forEach((h, i) => { hRow.getCell(i + 1).value = h; });
        hRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        hRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF004F9F' } };
        hRow.alignment = { horizontal: 'center' };
        currentRow++;
        rows.forEach(r => {
            const dRow = ws.getRow(currentRow);
            r.forEach((v, i) => { dRow.getCell(i + 1).value = v; });
            currentRow++;
        });
        currentRow += 2; // blank rows between tables
    };

    // -- Table 1: Flow per interval per approach -------------------------------
    addTitle('1. Flow per interval per approach (rows = time, cols = approach)');
    {
        const header = ['Interval Start', ...session.approaches, 'Total'];
        const rows = session.intervals.map(intv => {
            const start = formatTime(new Date(intv.startTime));
            const approachTotals = session.approaches.map(a => {
                let total = 0;
                for (const m of Object.keys(intv.counts[a] || {})) {
                    for (const vt of Object.keys(intv.counts[a][m] || {})) {
                        total += intv.counts[a][m][vt];
                    }
                }
                return total;
            });
            const intTotal = approachTotals.reduce((a, b) => a + b, 0);
            return [start, ...approachTotals, intTotal];
        });
        addBlock(header, rows);
    }

    // -- Table 2: Vehicle types per approach -----------------------------------
    addTitle('2. Vehicle types per approach (rows = approach, cols = vehicle type)');
    {
        const header = ['Approach', ...vtLabels, 'Total'];
        const rows = session.approaches.map(approach => {
            const vtTotals = session.vehicleTypes.map(vt => {
                let total = 0;
                for (const m of Object.keys(allMovements)) {
                    const movement = allMovements[m];
                    session.intervals.forEach(intv => {
                        total += intv.counts[approach]?.[movement]?.[vt] || 0;
                    });
                }
                return total;
            });
            const rowTotal = vtTotals.reduce((a, b) => a + b, 0);
            return [approach, ...vtTotals, rowTotal];
        });
        addBlock(header, rows);
    }

    // -- Table 3: Movements per approach ---------------------------------------
    addTitle('3. Movements per approach (rows = approach, cols = movement)');
    {
        // Deduplicate crossing_a/crossing_b into a single "Crossing" column
        const vehicleMovements = allMovements.filter(m => !isCrossingMovement(m));
        const hasCrossing = allMovements.some(m => isCrossingMovement(m));
        const displayMovements = vehicleMovements.slice();
        if (hasCrossing) displayMovements.push('__crossing__');

        const movementHeaders = displayMovements.map(m =>
            m === '__crossing__' ? 'Crossing' : (DIRECTION_LABELS_EN[m] || m)
        );
        const header = ['Approach', ...movementHeaders, 'Total'];
        const rows = session.approaches.map(approach => {
            const movTotals = displayMovements.map(movement => {
                let total = 0;
                if (movement === '__crossing__') {
                    ['crossing_a', 'crossing_b', 'crossing'].forEach(ck => {
                        const vtForMov = getVehicleTypesForMovement(session, ck);
                        session.intervals.forEach(intv => {
                            vtForMov.forEach(vt => {
                                total += intv.counts[approach]?.[ck]?.[vt] || 0;
                            });
                        });
                    });
                } else {
                    const vtForMov = getVehicleTypesForMovement(session, movement);
                    session.intervals.forEach(intv => {
                        vtForMov.forEach(vt => {
                            total += intv.counts[approach]?.[movement]?.[vt] || 0;
                        });
                    });
                }
                return total;
            });
            const rowTotal = movTotals.reduce((a, b) => a + b, 0);
            return [approach, ...movTotals, rowTotal];
        });
        addBlock(header, rows);
    }

    // -- Table 4: Vehicle types per interval (summed across all approaches) ----
    addTitle('4. Vehicle types per interval (rows = time, cols = vehicle type)');
    {
        const header = ['Interval Start', ...vtLabels, 'Total'];
        const rows = session.intervals.map(intv => {
            const start = formatTime(new Date(intv.startTime));
            const vtTotals = session.vehicleTypes.map(vt => {
                let total = 0;
                session.approaches.forEach(a => {
                    for (const m of Object.keys(intv.counts[a] || {})) {
                        total += intv.counts[a][m][vt] || 0;
                    }
                });
                return total;
            });
            const intTotal = vtTotals.reduce((a, b) => a + b, 0);
            return [start, ...vtTotals, intTotal];
        });
        addBlock(header, rows);
    }

    // -- Table 5: Movements per interval ---------------------------------------
    addTitle('5. Movements per interval (rows = time, cols = movement)');
    {
        // Deduplicate crossing_a/crossing_b into a single "Crossing" column
        const vehicleMovements = allMovements.filter(m => !isCrossingMovement(m));
        const hasCrossing = allMovements.some(m => isCrossingMovement(m));
        const displayMovements = vehicleMovements.slice();
        if (hasCrossing) displayMovements.push('__crossing__');

        const movementHeaders = displayMovements.map(m =>
            m === '__crossing__' ? 'Crossing' : (DIRECTION_LABELS_EN[m] || m)
        );
        const header = ['Interval Start', ...movementHeaders, 'Total'];
        const rows = session.intervals.map(intv => {
            const start = formatTime(new Date(intv.startTime));
            const movTotals = displayMovements.map(movement => {
                let total = 0;
                if (movement === '__crossing__') {
                    ['crossing_a', 'crossing_b', 'crossing'].forEach(ck => {
                        const vtForMov = getVehicleTypesForMovement(session, ck);
                        session.approaches.forEach(a => {
                            vtForMov.forEach(vt => {
                                total += intv.counts[a]?.[ck]?.[vt] || 0;
                            });
                        });
                    });
                } else {
                    const vtForMov = getVehicleTypesForMovement(session, movement);
                    session.approaches.forEach(a => {
                        vtForMov.forEach(vt => {
                            total += intv.counts[a]?.[movement]?.[vt] || 0;
                        });
                    });
                }
                return total;
            });
            const intTotal = movTotals.reduce((a, b) => a + b, 0);
            return [start, ...movTotals, intTotal];
        });
        addBlock(header, rows);
    }

    // -- Table 6: Noise vs flow per interval (only if noise enabled) -----------
    if (session.noiseEnabled) {
        const noisyIntervals = session.intervals.filter(i => i.noiseStats);
        if (noisyIntervals.length > 0) {
            addTitle('6. Noise vs flow per interval (LAeq + total vehicles)');
            const header = ['Interval Start', 'LAeq dB(A)', 'LAmax dB(A)', 'Vehicle flow'];
            const rows = noisyIntervals.map(intv => {
                const start = formatTime(new Date(intv.startTime));
                let flow = 0;
                session.approaches.forEach(a => {
                    for (const m of Object.keys(intv.counts[a] || {})) {
                        for (const vt of Object.keys(intv.counts[a][m] || {})) {
                            flow += intv.counts[a][m][vt];
                        }
                    }
                });
                return [start, intv.noiseStats.LAeq, intv.noiseStats.LAmax, flow];
            });
            addBlock(header, rows);
        }
    }

    // Footer tip
    ws.getRow(currentRow).getCell(1).value = 'Tip: select any block (header + data rows) and use Excel\'s Insert → Chart to create your own figures.';
    ws.getRow(currentRow).font = { italic: true, size: 10, color: { argb: 'FF666666' } };

    autoSizeColumns(ws);
}

// ===== RIDE-CHECK EXCEL SHEETS =====
async function buildRideExcelSheets(wb, session) {
    const ws = wb.addWorksheet('Ride-check');
    ws.addRow(['Line', 'Date', 'Departure', 'Station #', 'Station', 'Time', 'Entry', 'Exit', 'Sum']);
    styleHeaderRow(ws.getRow(1));

    let totalEntry = 0, totalExit = 0;
    (session.stationLogs || []).forEach(log => {
        ws.addRow([
            session.line,
            session.date,
            session.departureTime || '',
            log.index + 1,
            log.station,
            formatTime(new Date(log.time)),
            log.entry,
            log.exit,
            log.sum
        ]);
        totalEntry += log.entry;
        totalExit += log.exit;
    });

    const totalRow = ws.addRow(['', '', '', '', 'TOTAL', '', totalEntry, totalExit, Math.max(0, totalEntry - totalExit)]);
    totalRow.font = { bold: true };
    totalRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE0EAF5' } };

    autoSizeColumns(ws);

    // Build a chart for boarding/alighting per station
    if (typeof Chart !== 'undefined' && session.stationLogs && session.stationLogs.length > 0) {
        try {
            const chartConfig = buildRideChart(session);
            const dataRows = [['Station #', 'Station', 'Entry', 'Exit', 'Sum']];
            session.stationLogs.forEach(log => {
                dataRows.push([log.index + 1, log.station, log.entry, log.exit, log.sum]);
            });
            await addChartSheet(wb, 'Chart - Ride', chartConfig, dataRows);
        } catch (e) {
            // chart failed, that's OK
        }
    }
}

function buildRideChart(session) {
    const labels = session.stationLogs.map(log => log.station);
    return {
        type: 'bar',
        data: {
            labels,
            datasets: [
                { label: 'Entry', data: session.stationLogs.map(l => l.entry), backgroundColor: '#188038' },
                { label: 'Exit', data: session.stationLogs.map(l => l.exit), backgroundColor: '#d93025' },
                { label: 'On board (Sum)', data: session.stationLogs.map(l => l.sum), type: 'line', borderColor: '#004f9f', backgroundColor: 'rgba(0,79,159,0.1)', borderWidth: 3, fill: true, tension: 0.3, yAxisID: 'y' }
            ]
        },
        options: {
            plugins: {
                title: { display: true, text: `${session.line} ${session.departureTime || ''} — ${session.date}`, font: { size: 16 } },
                legend: { position: 'top' }
            },
            scales: {
                x: { title: { display: true, text: 'Station' } },
                y: { beginAtZero: true, title: { display: true, text: 'Passengers' } }
            }
        }
    };
}

// ===== PT EXCEL SHEETS (ExcelJS) =====
async function buildPTExcelSheets(wb, session) {
    // --- Sheet 1: Raw Data ---
    const wsRaw = wb.addWorksheet('Raw Data');
    wsRaw.addRow(['Stop', 'Date', 'Interval Start', 'Interval End', 'Time', 'Line', 'Boarding', 'Alighting']);
    styleHeaderRow(wsRaw.getRow(1));

    session.intervals.forEach(interval => {
        const intStart = formatTime(new Date(interval.startTime));
        const intEnd = formatTime(new Date(interval.endTime));
        if (interval.vehicles) {
            interval.vehicles.forEach(v => {
                wsRaw.addRow([session.stopName, session.date, intStart, intEnd, formatTime(new Date(v.time)), v.line, v.boarding, v.alighting]);
            });
        }
    });
    autoSizeColumns(wsRaw);

    // --- Sheet 2: Summary by Line ---
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

    const wsSummary = wb.addWorksheet('Summary');
    wsSummary.addRow(['Line', 'Vehicles', 'Boarding', 'Alighting', 'Net Change']);
    styleHeaderRow(wsSummary.getRow(1));

    let gv = 0, gb = 0, ga = 0;
    for (const line of Object.keys(lineTotals)) {
        const lt = lineTotals[line];
        gv += lt.vehicles; gb += lt.boarding; ga += lt.alighting;
        wsSummary.addRow([line, lt.vehicles, lt.boarding, lt.alighting, lt.boarding - lt.alighting]);
    }
    const totalRow = wsSummary.addRow(['TOTAL', gv, gb, ga, gb - ga]);
    totalRow.font = { bold: true };
    autoSizeColumns(wsSummary);

    // --- Chart Sheet: PT Flow ---
    const flowData = [['Interval', 'Boarding', 'Alighting']];
    session.intervals.forEach(interval => {
        const label = formatTime(new Date(interval.startTime)) + ' - ' + formatTime(new Date(interval.endTime));
        const b = (interval.vehicles || []).reduce((sum, v) => sum + v.boarding, 0);
        const a = (interval.vehicles || []).reduce((sum, v) => sum + v.alighting, 0);
        flowData.push([label, b, a]);
    });
    await addChartSheet(wb, 'Chart - PT Flow', buildPTFlowChart(session), flowData);

    // --- Data Tables: PT boarding/alighting per line per interval (wide format) ---
    addPTDataTablesSheet(wb, session);
}

// Adds a pivot-friendly "Data Tables" sheet for PT-stop sessions
function addPTDataTablesSheet(wb, session) {
    const ws = wb.addWorksheet('Data Tables');
    let currentRow = 1;

    const addTitle = (text) => {
        const row = ws.getRow(currentRow);
        row.getCell(1).value = text;
        row.font = { bold: true, size: 12, color: { argb: 'FF004F9F' } };
        currentRow++;
    };

    const addBlock = (header, rows) => {
        const hRow = ws.getRow(currentRow);
        header.forEach((h, i) => { hRow.getCell(i + 1).value = h; });
        hRow.font = { bold: true, color: { argb: 'FFFFFFFF' } };
        hRow.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF004F9F' } };
        hRow.alignment = { horizontal: 'center' };
        currentRow++;
        rows.forEach(r => {
            const dRow = ws.getRow(currentRow);
            r.forEach((v, i) => { dRow.getCell(i + 1).value = v; });
            currentRow++;
        });
        currentRow += 2;
    };

    // Table 1: Boarding per interval per line (rows = time, cols = line)
    addTitle('1. Boarding per interval per line (rows = time, cols = line)');
    {
        const header = ['Interval Start', ...session.lines, 'Total'];
        const rows = session.intervals.map(intv => {
            const start = formatTime(new Date(intv.startTime));
            const lineTotals = session.lines.map(line => {
                return (intv.vehicles || []).filter(v => v.line === line)
                    .reduce((sum, v) => sum + v.boarding, 0);
            });
            const intTotal = lineTotals.reduce((a, b) => a + b, 0);
            return [start, ...lineTotals, intTotal];
        });
        addBlock(header, rows);
    }

    // Table 2: Alighting per interval per line
    addTitle('2. Alighting per interval per line (rows = time, cols = line)');
    {
        const header = ['Interval Start', ...session.lines, 'Total'];
        const rows = session.intervals.map(intv => {
            const start = formatTime(new Date(intv.startTime));
            const lineTotals = session.lines.map(line => {
                return (intv.vehicles || []).filter(v => v.line === line)
                    .reduce((sum, v) => sum + v.alighting, 0);
            });
            const intTotal = lineTotals.reduce((a, b) => a + b, 0);
            return [start, ...lineTotals, intTotal];
        });
        addBlock(header, rows);
    }

    // Table 3: Vehicles per interval per line
    addTitle('3. Vehicles per interval per line (rows = time, cols = line)');
    {
        const header = ['Interval Start', ...session.lines, 'Total'];
        const rows = session.intervals.map(intv => {
            const start = formatTime(new Date(intv.startTime));
            const lineTotals = session.lines.map(line =>
                (intv.vehicles || []).filter(v => v.line === line).length
            );
            const intTotal = lineTotals.reduce((a, b) => a + b, 0);
            return [start, ...lineTotals, intTotal];
        });
        addBlock(header, rows);
    }

    // Footer tip
    ws.getRow(currentRow).getCell(1).value = 'Tip: select any block (header + data rows) and use Excel\'s Insert → Chart to create your own figures.';
    ws.getRow(currentRow).font = { italic: true, size: 10, color: { argb: 'FF666666' } };

    autoSizeColumns(ws);
}

// ===== SheetJS fallback builders (used if ExcelJS/Chart.js fail to load) =====
function buildTrafficSheetsSheetJS(wb, session) {
    const allMovements = getAllMovements(session);
    const vtLabels = session.vehicleTypes.map(vt => VEHICLE_LABELS_EN[vt] || vt);

    const rawRows = [['Site', 'Date', 'Interval Start', 'Interval End', 'Approach', 'Direction', ...vtLabels, 'Total']];
    session.intervals.forEach(interval => {
        const start = formatTime(new Date(interval.startTime));
        const end = formatTime(new Date(interval.endTime));
        session.approaches.forEach(approach => {
            allMovements.forEach(movement => {
                const values = session.vehicleTypes.map(vt => interval.counts[approach]?.[movement]?.[vt] || 0);
                const total = values.reduce((a, b) => a + b, 0);
                const dirLabelFb = isCrossingMovement(movement)
                    ? getCrossingDirectionLabelEN(session, approach, movement)
                    : (DIRECTION_LABELS_EN[movement] || movement);
                rawRows.push([session.siteName, session.date, start, end, approach, dirLabelFb, ...values, total]);
            });
        });
    });
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rawRows), 'Raw Data');
}

function buildPTSheetsSheetJS(wb, session) {
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
    XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(rawRows), 'Raw Data');
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
            const dirLabel = isCrossingMovement(movement)
                ? getCrossingDirectionLabel(session, approach, movement)
                : DIRECTION_LABELS[movement];

            html += `<tr><td>${approach}</td><td>${arrow} ${dirLabel}</td>`;
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

// ===== NOISE LOGGER =====
// Captures ambient sound via microphone, applies A-weighting, computes dB(A),
// maintains a ring buffer for the sparkline and accumulates per-interval stats.
// IMPORTANT: phone microphones are uncalibrated — values are valid for relative
// comparison only, not for legal compliance measurements.

const NoiseLogger = {
    enabled: false,
    audioContext: null,
    analyser: null,
    sourceNode: null,
    stream: null,
    sampleTimer: null,
    sparkBuffer: [],         // dB(A) values, last ~300 samples (30s at 10 Hz)
    sparkBufferMax: 300,
    intervalSamples: [],     // dB(A) values for the active interval (cleared on interval end)
    calibrationOffset: 0,    // dB to add to dBFS to get dB(A) SPL
    onUpdate: null,          // callback(currentDb) for UI updates
    aWeightCache: null,      // cached A-weighting curve for the current sample rate / FFT size

    // Convert frequency (Hz) to A-weighting gain in dB (IEC 61672 closed form)
    aWeighting(f) {
        if (f <= 0) return -Infinity;
        const f2 = f * f;
        const numerator = (12194 * 12194) * (f2 * f2);
        const denominator = (f2 + 20.6 * 20.6) *
            Math.sqrt((f2 + 107.7 * 107.7) * (f2 + 737.9 * 737.9)) *
            (f2 + 12194 * 12194);
        const RA = numerator / denominator;
        return 20 * Math.log10(RA) + 2.00;
    },

    // Pre-compute A-weighting gain per bin (in linear power) once per analyser config
    buildAWeightCache(sampleRate, fftSize) {
        const binCount = fftSize / 2;
        const cache = new Float32Array(binCount);
        const binWidth = sampleRate / fftSize;
        for (let i = 0; i < binCount; i++) {
            const freq = i * binWidth;
            const gainDb = this.aWeighting(freq);
            // Convert dB gain to linear power factor
            cache[i] = Math.pow(10, gainDb / 10);
        }
        this.aWeightCache = cache;
    },

    async start(calibrationOffset, onUpdate) {
        this.calibrationOffset = calibrationOffset || 0;
        this.onUpdate = onUpdate || null;
        this.sparkBuffer = [];
        this.intervalSamples = [];

        try {
            this.stream = await navigator.mediaDevices.getUserMedia({
                audio: {
                    echoCancellation: false,
                    noiseSuppression: false,
                    autoGainControl: false
                }
            });
        } catch (e) {
            this.enabled = false;
            throw e;
        }

        // Use webkitAudioContext as fallback for older iOS
        const Ctx = window.AudioContext || window.webkitAudioContext;
        this.audioContext = new Ctx();
        this.sourceNode = this.audioContext.createMediaStreamSource(this.stream);
        this.analyser = this.audioContext.createAnalyser();
        this.analyser.fftSize = 4096;
        this.analyser.smoothingTimeConstant = 0;
        this.sourceNode.connect(this.analyser);

        this.buildAWeightCache(this.audioContext.sampleRate, this.analyser.fftSize);

        this.enabled = true;

        // Sample at ~10 Hz
        const buffer = new Float32Array(this.analyser.frequencyBinCount);
        this.sampleTimer = setInterval(() => {
            if (!this.enabled || !this.analyser) return;
            this.analyser.getFloatFrequencyData(buffer);

            // Sum A-weighted power across all bins
            let totalPower = 0;
            for (let i = 1; i < buffer.length; i++) { // skip DC bin
                const dBFS = buffer[i];
                if (!isFinite(dBFS)) continue;
                const power = Math.pow(10, dBFS / 10);     // power per bin (linear, normalised)
                totalPower += power * this.aWeightCache[i]; // apply A-weighting
            }

            if (totalPower <= 0 || !isFinite(totalPower)) return;
            const dBFS_A = 10 * Math.log10(totalPower);
            const dbA = dBFS_A + this.calibrationOffset;

            // Ring buffer for sparkline
            this.sparkBuffer.push(dbA);
            if (this.sparkBuffer.length > this.sparkBufferMax) this.sparkBuffer.shift();

            // Accumulator for current interval
            this.intervalSamples.push(dbA);

            if (this.onUpdate) this.onUpdate(dbA);
        }, 100); // 10 Hz
    },

    // Compute statistics for the samples array. Returns null if empty.
    computeStats(samples) {
        if (!samples || samples.length === 0) return null;

        // LAeq: energy mean → log
        let energySum = 0;
        let lamin = Infinity, lamax = -Infinity;
        for (const v of samples) {
            energySum += Math.pow(10, v / 10);
            if (v < lamin) lamin = v;
            if (v > lamax) lamax = v;
        }
        const LAeq = 10 * Math.log10(energySum / samples.length);

        // Percentiles: LAx = level exceeded x% of the time → x-th percentile from the top
        // i.e. for LA10 we want the value that 10% of samples exceed
        const sorted = [...samples].sort((a, b) => a - b);
        const percentile = (p) => {
            // LAp: take the value at (1 - p/100) position in ascending sorted array
            const pos = (1 - p / 100) * (sorted.length - 1);
            const lo = Math.floor(pos);
            const hi = Math.ceil(pos);
            if (lo === hi) return sorted[lo];
            return sorted[lo] + (sorted[hi] - sorted[lo]) * (pos - lo);
        };

        return {
            LAeq: round1(LAeq),
            LAmin: round1(lamin),
            LAmax: round1(lamax),
            LA10: round1(percentile(10)),
            LA50: round1(percentile(50)),
            LA90: round1(percentile(90)),
            sampleCount: samples.length
        };
    },

    // Finalize the current interval: compute stats and reset the sample buffer
    finalizeInterval() {
        const stats = this.computeStats(this.intervalSamples);
        this.intervalSamples = [];
        return stats;
    },

    stop() {
        this.enabled = false;
        if (this.sampleTimer) clearInterval(this.sampleTimer);
        this.sampleTimer = null;
        if (this.stream) {
            this.stream.getTracks().forEach(t => t.stop());
            this.stream = null;
        }
        if (this.audioContext) {
            this.audioContext.close().catch(() => {});
            this.audioContext = null;
        }
        this.analyser = null;
        this.sourceNode = null;
        this.aWeightCache = null;
    }
};

function round1(v) {
    return Math.round(v * 10) / 10;
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

    // Traffic noise card
    const noiseSummary = computeSessionNoiseSummary(session);
    if (noiseSummary) {
        html += `<div class="analysis-card">
            <div class="analysis-title">${t('noise_section_title')}</div>
            <div class="analysis-value">${noiseSummary.sessionLAeq.toFixed(1)} dB(A)</div>
            <div class="analysis-detail">LAeq · ${t('noise_loudest_interval')}: ${noiseSummary.loudestTime} (${noiseSummary.loudestLAeq.toFixed(1)} dB)</div>
        </div>`;
    }

    container.innerHTML = html;
}

// Aggregate noise stats across all intervals in a session
function computeSessionNoiseSummary(session) {
    if (!session.noiseEnabled) return null;
    const noisy = session.intervals.filter(i => i.noiseStats);
    if (noisy.length === 0) return null;

    // Session LAeq = energy mean across all interval LAeqs, weighted equally per interval
    let energySum = 0;
    let loudest = noisy[0];
    noisy.forEach(intv => {
        energySum += Math.pow(10, intv.noiseStats.LAeq / 10);
        if (intv.noiseStats.LAeq > loudest.noiseStats.LAeq) loudest = intv;
    });
    const sessionLAeq = 10 * Math.log10(energySum / noisy.length);

    return {
        sessionLAeq,
        loudestLAeq: loudest.noiseStats.LAeq,
        loudestTime: formatTime(new Date(loudest.startTime)) + '–' + formatTime(new Date(loudest.endTime))
    };
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
    ptStations = [];

    // Default departure to start time
    if ($('#pt-ride-departure')) {
        $('#pt-ride-departure').value = $('#pt-start-time').value;
    }
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

// Station helpers (ride-check mode)
function addPTStation() {
    const input = $('#pt-station-input');
    const val = input.value.trim();
    if (!val) return;
    const newStations = val.split(',').map(s => s.trim()).filter(s => s);
    ptStations.push(...newStations);
    input.value = '';
    renderPTStations();
    input.focus();
}

function removePTStation(index) {
    ptStations.splice(index, 1);
    renderPTStations();
}

function renderPTStations() {
    const container = $('#pt-stations-list');
    if (!container) return;
    container.innerHTML = ptStations.map((s, i) =>
        `<div class="pt-line-chip"><span class="pt-station-idx">${i + 1}.</span> ${s}<button type="button" onclick="removePTStation(${i})">&times;</button></div>`
    ).join('');
}

function setPTSubmode(mode) {
    ptSubmode = mode;
    document.querySelectorAll('.submode-option').forEach(opt => {
        opt.classList.toggle('active', opt.querySelector('input').value === mode);
    });
    $('#pt-stop-fields').style.display = mode === 'stop' ? '' : 'none';
    $('#pt-ride-fields').style.display = mode === 'ride' ? '' : 'none';
    // Time interval only applies to stop mode
    $('#pt-sound-alert-wrap').style.display = mode === 'stop' ? '' : 'none';
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

// ===== RIDE-CHECK (on-board PT) =====
function startPTRideSession() {
    const line = $('#pt-ride-line').value.trim();
    if (!line) {
        alert(t('alert_no_line'));
        return;
    }
    if (ptStations.length < 2) {
        alert(t('alert_no_stations'));
        return;
    }

    const date = $('#pt-date').value;
    const departureTime = $('#pt-ride-departure').value || $('#pt-start-time').value;

    currentSession = {
        id: Date.now().toString(36),
        mode: 'pt-ride',
        line,
        date,
        departureTime,
        stations: [...ptStations],
        // stationLogs is the recorded data per visited station
        stationLogs: [],
        createdAt: new Date().toISOString()
    };

    rideCurrentStationIdx = 0;
    rideCurrentEntry = 0;
    rideCurrentExit = 0;
    undoStack = [];
    isPaused = false;

    renderRideScreen();
    showScreen('ride-screen');
    requestWakeLock();
}

function rideCount(type) {
    if (type === 'entry') rideCurrentEntry++;
    else rideCurrentExit++;
    if (navigator.vibrate) navigator.vibrate(30);
    $('#ride-entry-count').textContent = rideCurrentEntry;
    $('#ride-exit-count').textContent = rideCurrentExit;
    updateRideOnBoardDisplay();
}

function rideDecrement(type) {
    if (type === 'entry' && rideCurrentEntry > 0) rideCurrentEntry--;
    else if (type === 'exit' && rideCurrentExit > 0) rideCurrentExit--;
    if (navigator.vibrate) navigator.vibrate([30, 50, 30]);
    $('#ride-entry-count').textContent = rideCurrentEntry;
    $('#ride-exit-count').textContent = rideCurrentExit;
    updateRideOnBoardDisplay();
}

function rideOnBoardSoFar() {
    let sum = 0;
    currentSession.stationLogs.forEach(log => { sum += log.entry - log.exit; });
    return Math.max(0, sum);
}

function updateRideOnBoardDisplay() {
    const previousSum = rideOnBoardSoFar();
    const projected = Math.max(0, previousSum + rideCurrentEntry - rideCurrentExit);
    $('#ride-on-board-num').textContent = projected;
}

function rideNextStation() {
    if (!currentSession || currentSession.mode !== 'pt-ride') return;

    const previousSum = rideOnBoardSoFar();
    const newSum = Math.max(0, previousSum + rideCurrentEntry - rideCurrentExit);

    const stationName = currentSession.stations[rideCurrentStationIdx];
    currentSession.stationLogs.push({
        index: rideCurrentStationIdx,
        station: stationName,
        entry: rideCurrentEntry,
        exit: rideCurrentExit,
        sum: newSum,
        time: new Date().toISOString()
    });

    undoStack.push({ type: 'ride-station', stationIdx: rideCurrentStationIdx });
    saveSession();

    rideCurrentStationIdx++;
    rideCurrentEntry = 0;
    rideCurrentExit = 0;

    // If we've recorded the last station, end the ride
    if (rideCurrentStationIdx >= currentSession.stations.length) {
        if (confirm(t('confirm_finish_ride'))) {
            currentSession.endTime = new Date().toISOString();
            saveSession();
            releaseWakeLock();
            showResults(currentSession);
            return;
        } else {
            // Allow going beyond the list (extra stations) — just rewind to last
            rideCurrentStationIdx = currentSession.stations.length - 1;
        }
    }

    renderRideScreen();
}

function rideUndo() {
    if (undoStack.length === 0) return;
    const last = undoStack.pop();
    if (last.type !== 'ride-station') return;

    // Restore the last station's counts into the live counters and step back
    const lastLog = currentSession.stationLogs.pop();
    if (!lastLog) return;
    rideCurrentStationIdx = lastLog.index;
    rideCurrentEntry = lastLog.entry;
    rideCurrentExit = lastLog.exit;
    saveSession();
    renderRideScreen();
}

function renderRideScreen() {
    if (!currentSession) return;
    $('#ride-line-display').textContent = currentSession.line;
    $('#ride-departure-display').textContent = currentSession.departureTime || '';

    const currentName = currentSession.stations[rideCurrentStationIdx] || '—';
    $('#ride-current-station').textContent = currentName;

    const progress = `${t('station_label')} ${rideCurrentStationIdx + 1} / ${currentSession.stations.length}`;
    $('#ride-progress-line').textContent = progress;

    $('#ride-entry-count').textContent = rideCurrentEntry;
    $('#ride-exit-count').textContent = rideCurrentExit;
    updateRideOnBoardDisplay();

    const historyList = $('#ride-history-list');
    if (historyList) {
        if (currentSession.stationLogs.length === 0) {
            historyList.innerHTML = '';
        } else {
            historyList.innerHTML = currentSession.stationLogs.map((log, i) => {
                const time = formatTime(new Date(log.time));
                return `<div class="ride-history-entry">
                    <span class="h-idx">${log.index + 1}.</span>
                    <span class="h-station" title="${log.station}">${log.station}</span>
                    <span class="h-entry">+${log.entry}</span>
                    <span class="h-exit">-${log.exit}</span>
                    <span class="h-sum">${log.sum}</span>
                    <span class="h-time">${time}</span>
                </div>`;
            }).reverse().join('');
        }
    }
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
