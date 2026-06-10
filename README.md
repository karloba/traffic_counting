# Traffic Counter / Brojač prometa

A mobile-friendly web app for manual traffic counting at signalized intersections, designed for use by traffic engineering students during field surveys.

**Live app:** https://karloba.github.io/traffic_counting/

## Author

**Karlo Babojelić**
University of Zagreb, Faculty of Transport and Traffic Sciences
*Sveučilište u Zagrebu, Fakultet prometnih znanosti*

## License

This work is licensed under the **Creative Commons Attribution-NonCommercial 4.0 International License (CC BY-NC 4.0)**.

You are free to use, share, and adapt this software for **non-commercial purposes**, including academic and educational use, provided that you give appropriate credit to the original author.

Full license text: see [LICENSE](LICENSE)
Human-readable summary: https://creativecommons.org/licenses/by-nc/4.0/

If you use, fork, or adapt this app for your own teaching, **please keep the author credit visible** in the source code and the application's footer.

## Features

### Traffic Counting Mode
- Up to 4 intersection approaches with custom names
- Turning movements: Left / Straight / Right / U-turn
- 10 vehicle types: Car, LGV, HGV, Bus, Tram, Motorcycle, Bicycle, Pedestrian, E-scooter, Taxi (each with intuitive emoji icons)
- Pedestrian/bicycle/e-scooter crossings split into two perpendicular directions per approach
- Configurable time intervals (5, 10, 15, 30, 60 min) with auto-advance and audible/haptic alerts
- Reset button per direction section + small × badge per individual count for quick corrections
- Long-press to decrement individual counts; Undo button reverses the last tap
- Sticky approach total strip with running L/S/R/Crossing breakdown pills
- Pause/resume and session history

### PT Passenger Counting Mode
Two complementary sub-modes inside the PT tab:

**At a stop** — stand at one stop, count passengers per arriving vehicle
- Track per line (e.g., Tram 6, Bus 268)
- Tap-counting and number-entry modes for low- or high-volume stops
- ±1 quick correction buttons
- Vehicle log with delete

**On board (ride-check)** — ride one bus/tram from start to end, count at each station
- Enter line, departure time, and the list of stations
- Big Entry / Exit buttons with −1 corrections; running "on board" load
- "Next station" button advances through the route and auto-records timestamps
- Sum (current passenger load) auto-calculated as previous sum + entry − exit
- Per-station history with Entry / Exit / Sum pills

### Traffic Noise Measurement (optional, traffic mode)
- Optional microphone toggle; when enabled the phone measures ambient sound
  alongside the vehicle counts
- A-weighting filter implemented from the IEC 61672 closed-form formula
  (validated within 0.1 dB of published reference values at 31.5 / 100 / 1k / 10 kHz)
- Live `dB(A)` value + 30-second sparkline on the counting screen
- Per-interval statistics computed: LAeq (energy-averaged) + LAmin, LAmax,
  LA10, LA50, LA90 percentiles
- Session LAeq + loudest interval shown as an analysis card on the results screen
- A calibration offset (default 94 dB, saved per device) lets students who
  have access to a real sound level meter calibrate their phone
- Microphone audio is processed **entirely locally** with the Web Audio API
  and never recorded or transmitted — only the computed dB(A) values are
  stored
- **Academic disclaimer**: phone microphones are not calibrated to Class 1/2
  sound level meter standards. Results are valid for relative comparison and
  educational use only, **not** for legal compliance measurements.

### Analysis & Export
- Peak hour and Peak 15-min auto-detection
- Peak Hour Factor (PHF) calculation
- Directional split (% per approach + per turning movement)
- Vehicle type breakdown per approach + movement
- SVG turning movement diagram with curved arrows and volume-weighted thickness
- Export to CSV (universal)
- Export to Excel (.xlsx) with auto-generated charts (10 sheets total when noise
  is enabled, 8 otherwise):
  - Approach totals bar chart
  - Movement distribution stacked bar
  - Vehicle type composition doughnut chart
  - Flow over time line chart
  - Traffic noise vs. flow dual-axis chart (when noise enabled)
  - PT boarding/alighting bar chart (PT modes)
  - Ride-check passenger flow chart (ride-check mode)
- Native Share button (iOS/Android) sends Excel file to email, WhatsApp, etc.

### Data Management
- Local storage (no server required, works offline after first load)
- Session history with delete
- Merge Files mode: import multiple .xlsx files from different students and merge approaches/intervals automatically
- Tip banner reminds team members to agree on one UI language before counting,
  since approach names must match exactly across files for merge to work
- All data stays on the device — nothing is sent to any server

### Interface
- 🌙 Light + dark themes with a toggle in the header (defaults to system
  preference)
- 🇬🇧 English and 🇭🇷 Croatian translations of every screen
- Mobile-first responsive layout; works equally well on tablets and desktops
- Faculty colours (RGB 0, 79, 159 blue + 148, 155, 164 gray) used as the
  default brand palette

## Technical

- 100% client-side: HTML + CSS + vanilla JavaScript
- No backend, no accounts, no tracking
- Libraries used (loaded via CDN):
  - [SheetJS](https://sheetjs.com/) — CSV/Excel parsing for import
  - [ExcelJS](https://github.com/exceljs/exceljs) — Excel generation with embedded images
  - [Chart.js](https://www.chartjs.org/) — chart rendering
- Browser APIs used:
  - **Web Audio API** (`getUserMedia` + `AnalyserNode`) — traffic noise measurement
  - **Wake Lock API** — keep the screen alive during long counting sessions
  - **Web Share API** — native Share button (iOS / Android)
  - **localStorage** — session persistence
- Hosted on GitHub Pages

## How to access

1. Open https://karloba.github.io/traffic_counting/ in any modern mobile browser (Safari on iOS, Chrome on Android)
2. For app-like behaviour, use **Share → Add to Home Screen** on your phone — the app then opens fullscreen from a home-screen icon

## Citation

If you use this app in academic work, please cite it as:

> Babojelić, K. (2026). *Traffic Counter — Mobile web application for traffic counting at signalized intersections.* University of Zagreb, Faculty of Transport and Traffic Sciences. Available at: https://karloba.github.io/traffic_counting/

---

© 2026 Karlo Babojelić — Faculty of Transport and Traffic Sciences, University of Zagreb
