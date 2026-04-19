# HornbillGo – Authentic North East India Exploration

HornbillGo is a static frontend travel platform showcasing **26 destinations across North East India**. It lets users explore curated listings, view live weather, find local food and hotels, and interact with a modern responsive interface.

---

## Project Overview

Built with plain **HTML, CSS, and Vanilla JavaScript** — no frameworks, no build step. The platform dynamically renders destination data from a shared `data.js` source and fetches real-time weather from [WeatherAPI.com](https://www.weatherapi.com).

---

## Features

### Explore Page (`index.html`)
- 26 flip-card destination listings across 8 states
- Category-based filtering (mountains, villages, wildlife, culture, waterfalls, nature, cities, spiritual)
- Hero section with LCP-optimised preloaded cover image
- Booking widget with tabs for Flights, Hotels, Trains, Buses, and Cars — "coming soon" toast on submit

### Destination Details (`details.html`)
- Fully dynamic — driven by `?name=` URL parameter
- Live weather via WeatherAPI.com with monthly breakdown chart
- Dynamic best time to visit pill per destination
- Destination-category-specific food and hotel recommendation cards
- AQI display, price estimate, and star rating
- Booking widget with "coming soon" toast

### Authentication
| Page | Features |
|------|----------|
| `login.html` | Password show/hide toggle, inline error messages, remember me checkbox |
| `signup.html` | Password strength meter, show/hide for both password fields, inline validation errors, no `alert()` for errors |

### Technical
- **Shared data source** — `data.js` is the single source of truth for all 26 destinations; loaded before both `script.js` and `details.js`
- **No Font Awesome dependency** — all icons are inline SVGs
- **iOS Safari fix** — `background-attachment: fixed` falls back to `scroll` on iOS via `@supports`
- **Accessibility** — decorative SVGs have `aria-hidden="true"`, toast uses `aria-live="polite"`

---

## Destinations (26)

| State | Destinations |
|-------|-------------|
| Arunachal Pradesh | Tawang, Ziro Valley, Bomdila, Pasighat |
| Assam | Majuli, Kaziranga, Manas National Park, Tezpur |
| Meghalaya | Cherrapunji, Shillong, Dawki, Mawlynnong |
| Nagaland | Kohima, Dimapur, Hornbill Festival, Dzukou Valley |
| Sikkim | Gangtok, Tsomgo Lake, Pelling, Yumthang Valley |
| Mizoram | Aizawl, Champhai |
| Manipur | Loktak Lake, Imphal |
| Tripura | Unakoti, Agartala |

---

## Tech Stack

- **HTML5** — structure and semantic markup
- **CSS3** — custom properties, flexbox, grid, `@supports`
- **JavaScript (ES6+)** — DOM manipulation, `URLSearchParams`, `fetch`
- **WeatherAPI.com** — live weather data

---

## Folder Structure

```
HornbillGo/
├── index.html       # Homepage — explore grid & booking widget
├── details.html     # Dynamic destination details page
├── login.html       # Login page
├── signup.html      # Signup page
│
├── style.css        # Styles for index.html
├── details.css      # Styles for details.html
│
├── script.js        # Homepage logic (filter, flip cards)
├── details.js       # Details page logic (weather, cards, render)
├── data.js          # Shared destinations data (single source of truth)
│
├── Photos/          # Destination images and UI assets
└── README.md
```

---

## Setup

```bash
git clone https://github.com/ryan-skt/HornbillGo.git
cd HornbillGo
# Open index.html directly in a browser, or serve with any static server:
python3 -m http.server 8080
```

No installation or build step required.

---

## Limitations

- No backend — authentication is UI-only with no real validation
- WeatherAPI.com key is embedded in `details.js` (client-side only)
- Booking functionality shows a "coming soon" toast; no real booking integration

---

## Future Improvements

- Backend for real authentication and user accounts
- Live travel booking and payment integration
- Search and filtering on the explore page
- User reviews and ratings
- Expand beyond North East India

---

## Author

**Ryan Sivakoti** — Frontend Developer  
GitHub: [ryan-skt](https://github.com/ryan-skt) | LinkedIn: [ryansivakoti](https://linkedin.com/in/ryansivakoti)

---

*HornbillGo aims to bring the unexplored beauty of North East India closer to travelers through a clean and interactive digital experience.*
