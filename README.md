# 🌏 HornbillGo – Authentic North East India Exploration

HornbillGo is a frontend travel platform focused on showcasing the beauty of **North East India**. It allows users to explore destinations, view detailed travel information, and interact with a modern, responsive interface designed for an engaging user experience.

---

## 📌 Project Overview

HornbillGo is a static frontend web application built using **HTML, CSS, and JavaScript**. The platform provides curated destination listings and dynamically renders detailed information such as pricing, ratings, weather conditions, AQI, and nearby amenities like restaurants and hotels.

The project demonstrates strong fundamentals in UI design, DOM manipulation, and client-side routing using URL parameters.

---

## ✨ Features

- 🏞️ **Explore Destinations**  
  Browse multiple destinations across North East India via interactive cards.

- 📄 **Dynamic Details Page**  
  View destination-specific details using URL parameters (`details.html?name=...`).

- 🔐 **Authentic UI**  
  Clean and responsive login and signup pages (UI only).

- 🧳 **Booking Section**  
  Tab-based booking interface including:
  - Flights
  - Hotels
  - Trains
  - Buses
  - Cars

- 🌦️ **Weather Insights**  
  Monthly weather data displayed for better travel planning.

- 📊 **Additional Information**  
  Includes:
  - Price estimates
  - Ratings
  - Air Quality Index (AQI)
  - Nearby restaurants and hotels

- 📱 **Responsive Design**  
  Fully responsive layout for mobile, tablet, and desktop devices.

---

## 🛠️ Tech Stack

- **HTML5** – Structure and layout  
- **CSS3** – Styling and responsiveness  
- **JavaScript (Vanilla JS)** – Dynamic rendering and interactivity  

---

## 📁 Folder Structure
HornbillGo/
│
├── index.html # Homepage with destination cards
├── details.html # Dynamic destination details page
├── login.html # Login UI
├── signup.html # Signup UI
│
├── css/
│ └── styles.css # Main stylesheet
│
├── js/
│ ├── script.js # Homepage logic
│ ├── details.js # Dynamic rendering logic
│ └── data.js # Destination data source
│
├── assets/
│ ├── images/ # Destination and UI images
│ └── icons/ # Icons and UI assets
│
└── README.md


---

## ⚙️ How It Works

### 🔗 URL Parameters & Dynamic Rendering

The `details.html` page dynamically loads destination data based on URL parameters.

Example:

details.html?name=Shillong


### Workflow:
1. User clicks on a destination card from `index.html`.
2. The destination name is passed via the URL query string.
3. JavaScript (`details.js`) extracts the parameter using `URLSearchParams`.
4. Matching data is retrieved from a local dataset (`data.js`).
5. Content is dynamically rendered onto the page using DOM manipulation.

---

## 🚀 Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-ryan-skt/HornbillGo.git

Navigate to the project folder

cd HornbillGo
Open in browser
Simply open index.html in your preferred browser
(No server setup required)
⚠️ Limitations
No backend integration (static frontend only)
Authentication is UI-based (no real user validation)
Data is locally stored (no real-time API integration)
Booking functionality is non-functional (UI demonstration only)
🔮 Future Improvements::
🔗 Integrate real APIs (weather, travel, maps)
🧠 Add backend for authentication and booking
💳 Enable real booking and payment features
🌍 Expand destinations beyond North East India
🔍 Add search and filtering functionality
⭐ User reviews and ratings system
👤 Author

Your Name
Frontend Developer

GitHub: https://github.com/ryan-skt
LinkedIn: https://linkedin.com/in/ryansivakoti


You are free to use and modify it with proper attribution.

✨ HornbillGo aims to bring the unexplored beauty of North East India closer to travelers through a clean and interactive digital experience.
