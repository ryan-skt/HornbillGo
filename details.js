const destinations = [
  {
    name: "Tawang",
    price: "₹12,000/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "Photos/tawang.jpg"
  },
  {
    name: "Ziro Valley",
    price: "₹10,500/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.8",
    category: "villages",
    img: "Photos/ziro-valley.jpg"
  },
  {
    name: "Bomdila",
    price: "₹9,500/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.7",
    category: "mountains",
    img: "Photos/bomdila.jpg"
  },
  {
    name: "Pasighat",
    price: "₹8,800/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.6",
    category: "nature",
    img: "Photos/pasighat.jpg"
  },
  {
    name: "Majuli",
    price: "₹9,000/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.8",
    category: "villages",
    img: "Photos/majuli.jpg"
  },
  {
    name: "Kaziranga",
    price: "₹11,500/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.9",
    category: "wildlife",
    img: "Photos/kaziranga.jpg"
  },
  {
    name: "Manas National Park",
    price: "₹10,800/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.8",
    category: "wildlife",
    img: "Photos/manas.jpg"
  },
  {
    name: "Tezpur",
    price: "₹8,500/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.6",
    category: "culture",
    img: "Photos/tezpur.jpg"
  },
  {
    name: "Cherrapunji",
    price: "₹10,000/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.9",
    category: "waterfalls",
    img: "Photos/cherrapunji.jpg"
  },
  {
    name: "Shillong",
    price: "₹8,500/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.7",
    category: "culture",
    img: "Photos/shillong.jpg"
  },
  {
    name: "Dawki",
    price: "₹9,500/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.8",
    category: "waterfalls",
    img: "Photos/dawki-river.jpg"
  },
  {
    name: "Mawlynnong",
    price: "₹7,800/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.9",
    category: "villages",
    img: "Photos/mawlynnong.jpg"
  },
  {
    name: "Kohima",
    price: "₹10,000/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 4.8",
    category: "culture",
    img: "Photos/kohima.jpg"
  },
  {
    name: "Dimapur",
    price: "₹9,000/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 4.6",
    category: "cities",
    img: "Photos/dimapur.jpg"
  },
  {
    name: "Hornbill Festival",
    price: "₹7,500/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 5.0",
    category: "culture",
    img: "Photos/hornbill.jpg"
  },
  {
    name: "Dzukou Valley",
    price: "₹9,800/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "Photos/dzukou-valley.jpg"
  },
  {
    name: "Gangtok",
    price: "₹11,000/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "Photos/gangtok.jpg"
  },
  {
    name: "Tsomgo Lake",
    price: "₹9,800/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "Photos/tsomgo.jpeg"
  },
  {
    name: "Pelling",
    price: "₹9,200/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.8",
    category: "mountains",
    img: "Photos/pelling.jpg"
  },
  {
    name: "Yumthang Valley",
    price: "₹10,500/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.9",
    category: "nature",
    img: "Photos/yumthang-valley.jpeg"
  },
  {
    name: "Aizawl",
    price: "₹9,200/Pax",
    location: "📍 Mizoram",
    rating: "⭐ 4.7",
    category: "villages",
    img: "Photos/aizawl.jpg"
  },
  {
    name: "Champhai",
    price: "₹8,800/Pax",
    location: "📍 Mizoram",
    rating: "⭐ 4.6",
    category: "nature",
    img: "Photos/champhai.jpg"
  },
  {
    name: "Loktak Lake",
    price: "₹10,500/Pax",
    location: "📍 Manipur",
    rating: "⭐ 4.9",
    category: "nature",
    img: "Photos/loktak-lake.jpg"
  },
  {
    name: "Imphal",
    price: "₹9,000/Pax",
    location: "📍 Manipur",
    rating: "⭐ 4.7",
    category: "cities",
    img: "Photos/imphal.jpg"
  },
  {
    name: "Unakoti",
    price: "₹8,500/Pax",
    location: "📍 Tripura",
    rating: "⭐ 4.8",
    category: "spiritual",
    img: "Photos/unakoti.jpg"
  },
  {
    name: "Agartala",
    price: "₹8,200/Pax",
    location: "📍 Tripura",
    rating: "⭐ 4.6",
    category: "cities",
    img: "Photos/agartala.jpg"
  }
];

// 1. URL Parameters handling
const params = new URLSearchParams(window.location.search);
const name = params.get("name");

// 2. Find selected destination
const destination = destinations.find((d) => d.name === name);

if (!destination) {
  document.body.innerHTML = "<div class='main'><h1 style='text-align:center;'>Destination not found</h1><p style='text-align:center;'><a href='index.html'>Go back to Home</a></p></div>";
} else {
  // Update Hero Section
  const destImg = document.getElementById("destination-img");
  destImg.src = destination.img;
  destImg.onerror = () => { destImg.src = "Photos/placeholder.jpg"; }; // Fallback image if source is missing

  document.getElementById("destination-name").textContent = destination.name;
  document.getElementById("destination-location").textContent = destination.location;
  document.getElementById("destination-price").textContent = destination.price;
  document.getElementById("destination-rating").textContent = destination.rating;

  // Update Weather Title using the unique ID
  const weatherTitle = document.getElementById("weather-city-name");
  if (weatherTitle) {
    weatherTitle.textContent = `Weather in ${destination.name}`;
  }

  // Update Booking Title using the unique ID
  const bookingTitle = document.getElementById("booking-dest-name");
  if (bookingTitle) {
    bookingTitle.textContent = `Book a trip to ${destination.name}`;
  }
}

// 3. Tab Switching Logic for Booking Section
const tabs = document.querySelectorAll(".tab");
const forms = document.querySelectorAll(".form-container");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // Remove active state from all tabs and forms
    tabs.forEach((t) => t.classList.remove("active"));
    forms.forEach((form) => form.classList.remove("active"));

    // Set current tab to active
    tab.classList.add("active");

    // Display the form matching the data-category
    const category = tab.getAttribute("data-category");
    const targetForm = document.querySelector(`.form-container[data-category="${category}"]`);
    
    if (targetForm) {
      targetForm.classList.add("active");
    }
  });
});