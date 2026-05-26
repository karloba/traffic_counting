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
- 10 vehicle types: Car, LGV, HGV, Bus, Tram, Motorcycle, Bicycle, Pedestrian, E-scooter, Taxi
- Pedestrian/bicycle/e-scooter crossings split into two perpendicular directions per approach
- Configurable time intervals (5, 10, 15, 30, 60 min) with auto-advance and audible/haptic alerts
- Reset button per direction section for quick correction of miscounts
- Long-press to decrement individual counts; Undo button reverses the last tap
- Pause/resume and session history

### PT Passenger Counting Mode
- Count boarding/alighting passengers at a stop
- Track per line (e.g., Tram 6, Bus 268)
- Tap-counting and number-entry modes
- ±1 quick correction buttons
- Vehicle log with delete

### Analysis & Export
- Peak hour and Peak 15-min auto-detection
- Peak Hour Factor (PHF) calculation
- Directional split (% per approach + per turning movement)
- Vehicle type breakdown per approach + movement
- SVG turning movement diagram with curved arrows and volume-weighted thickness
- Export to CSV (universal)
- Export to Excel (.xlsx) with auto-generated charts:
  - Approach totals bar chart
  - Movement distribution stacked bar
  - Vehicle type composition doughnut chart
  - Flow over time line chart
  - PT boarding/alighting bar chart
- Native Share button (iOS/Android) sends Excel file to email, WhatsApp, etc.

### Data Management
- Local storage (no server required, works offline after first load)
- Session history with delete
- Merge Files mode: import multiple .xlsx files from different students and merge approaches/intervals automatically
- All data stays on the device — nothing is sent to any server

### Languages
- 🇬🇧 English
- 🇭🇷 Croatian (Hrvatski)

## Technical

- 100% client-side: HTML + CSS + vanilla JavaScript
- No backend, no accounts, no tracking
- Libraries used (loaded via CDN):
  - [SheetJS](https://sheetjs.com/) — CSV/Excel parsing for import
  - [ExcelJS](https://github.com/exceljs/exceljs) — Excel generation with embedded images
  - [Chart.js](https://www.chartjs.org/) — chart rendering
- Hosted on GitHub Pages

## How to access

1. Open https://karloba.github.io/traffic_counting/ in any modern mobile browser (Safari on iOS, Chrome on Android)
2. For app-like behaviour, use **Share → Add to Home Screen** on your phone — the app then opens fullscreen from a home-screen icon

## Citation

If you use this app in academic work, please cite it as:

> Babojelić, K. (2026). *Traffic Counter — Mobile web application for traffic counting at signalized intersections.* University of Zagreb, Faculty of Transport and Traffic Sciences. Available at: https://karloba.github.io/traffic_counting/

---

© 2026 Karlo Babojelić — Faculty of Transport and Traffic Sciences, University of Zagreb
