// Popular Card data:
function redirectToHome() {
    window.location.href = "#explore-more";
}
// handle to booking category tabs click
const tabs = document.querySelectorAll('.tab');
    const forms = document.querySelectorAll('.form-container');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove('active'));
        // Add active class to the clicked tab
        tab.classList.add('active');

        // Show the corresponding form
        const category = tab.getAttribute('data-category');
        forms.forEach(form => {
          form.classList.remove('active');
          if (form.getAttribute('data-category') === category) {
            form.classList.add('active');
          }
        });
      });
    });

const places = [
  {
    title: "Dawki River",
    location: "Meghalaya, India",
    imgSrc: "/Photos/dawki.png",
    description: "Visit Dawki River and enjoy the serene beauty with a 25% discount!",
  },
  {
    title: "Tawang",
    location: "Arunchal Pradesh, India",
    imgSrc: "/Photos/arunachal.jpg",
    description: "Explore the beauty of Tawang in Arunchal Pradesh.",
  },
  {
    title: "Dzoku Valley",
    location: "Nagaland, India",
    imgSrc: "/Photos/nagaland.jpg",
    description: "Discover the natural beauty of Dzoku Valley.",
  },
  {
    title: "Tripura Sundari Temple",
    location: "Tripura, India",
    imgSrc: "/Photos/tripura.jpg",
    description: "Experience the spiritual beauty of Tripura Sundari Temple.",
  },
  {
    title: "Loktak Lake",
    location: "Manipur, India",
    imgSrc: "/Photos/manipur.jpg",
    description: "Visit the beautiful Loktak Lake.",
  },
];

const popularPlaceCard = document.querySelector(".popular-place-card");

// Generate the cards
places.forEach((place) => {
  // Create card element
  const card = document.createElement("div");
  card.classList.add("card");

  // Create inner container for flip effect
  const cardInner = document.createElement("div");
  cardInner.classList.add("card-inner");

  // Create front side
  const cardFront = document.createElement("div");
  cardFront.classList.add("card-front");

  const badge = document.createElement("div");
  badge.classList.add("discount-badge");
  badge.textContent = "25% OFF";

  const cardImg = document.createElement("div");
  cardImg.classList.add("card-img");

  const img = document.createElement("img");
  img.src = place.imgSrc;
  img.alt = place.title;
  cardImg.appendChild(img);

  const cardInfo = document.createElement("div");
  cardInfo.classList.add("card-info");

  const title = document.createElement("h4");
  title.textContent = place.title;

  const locationInfo = document.createElement("p");
  locationInfo.innerHTML = `<i class="fa-solid fa-location-dot"></i> ${place.location}`;

  cardInfo.appendChild(title);
  cardInfo.appendChild(locationInfo);
  cardFront.appendChild(badge);
  cardFront.appendChild(cardImg);
  cardFront.appendChild(cardInfo);

  // Create back side
  const cardBack = document.createElement("div");
  cardBack.classList.add("card-back");

  const description = document.createElement("p");
  description.textContent = place.description;
  cardBack.appendChild(description);

  // Append front and back to inner container
  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);

  // Append inner container to card
  card.appendChild(cardInner);

  // Append card to the container
  popularPlaceCard.appendChild(card);
});

// Scroll Down
const exploreButton = document.getElementById("explore-btn");
const exploreSection = document.getElementById("explore-more");

exploreButton.addEventListener("click", () => {
  exploreSection.scrollIntoView({ behavior: "smooth" });
});

// About Me
document.addEventListener("DOMContentLoaded", function () {
  const closeButton = document.querySelector(".about .close-btn");
  const menu = document.querySelector(".about");
  const aboutButton = document.querySelector("#about-me .about-me-btn");

  aboutButton.addEventListener("click", function () {
    menu.style.top = "0%";
    closeButton.style.display = "block"; // Show close button
    aboutButton.style.display = "none"; // Hide menu button
  });

  closeButton.addEventListener("click", function () {
    menu.style.top = "-100%";
    closeButton.style.display = "none"; // Hide close button
    aboutButton.style.display = "block"; // Show menu button
  });
});

const destinations = [
  {
    name: "Tawang",
    price: "₹12,000/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "/Photos/tawang.jpg"
  },
  {
    name: "Ziro Valley",
    price: "₹10,500/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.8",
    category: "villages",
    img: "/Photos/ziro-valley.jpg"
  },
  {
    name: "Bomdila",
    price: "₹9,500/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.7",
    category: "mountains",
    img: "/Photos/bomdila.jpg"
  },
  {
    name: "Pasighat",
    price: "₹8,800/Pax",
    location: "📍 Arunachal Pradesh",
    rating: "⭐ 4.6",
    category: "nature",
    img: "/Photos/pasighat.jpg"
  },
  {
    name: "Majuli",
    price: "₹9,000/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.8",
    category: "villages",
    img: "/Photos/majuli.jpg"
  },
  {
    name: "Kaziranga",
    price: "₹11,500/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.9",
    category: "wildlife",
    img: "/Photos/kaziranga.jpg"
  },
  {
    name: "Manas National Park",
    price: "₹10,800/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.8",
    category: "wildlife",
    img: "/Photos/manas.jpg"
  },
  {
    name: "Tezpur",
    price: "₹8,500/Pax",
    location: "📍 Assam",
    rating: "⭐ 4.6",
    category: "culture",
    img: "/Photos/tezpur.jpg"
  },
  {
    name: "Cherrapunji",
    price: "₹10,000/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.9",
    category: "waterfalls",
    img: "/Photos/cherrapunji.jpg"
  },
  {
    name: "Shillong",
    price: "₹8,500/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.7",
    category: "culture",
    img: "/Photos/shillong.jpg"
  },
  {
    name: "Dawki",
    price: "₹9,500/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.8",
    category: "waterfalls",
    img: "/Photos/dawki-river.jpg"
  },
  {
    name: "Mawlynnong",
    price: "₹7,800/Pax",
    location: "📍 Meghalaya",
    rating: "⭐ 4.9",
    category: "villages",
    img: "/Photos/mawlynnong.jpg"
  },
  {
    name: "Kohima",
    price: "₹10,000/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 4.8",
    category: "culture",
    img: "/Photos/kohima.jpg"
  },
  {
    name: "Dimapur",
    price: "₹9,000/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 4.6",
    category: "cities",
    img: "/Photos/dimapur.jpg"
  },
  {
    name: "Hornbill Festival",
    price: "₹7,500/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 5.0",
    category: "culture",
    img: "/Photos/hornbill.jpg"
  },
  {
    name: "Dzukou Valley",
    price: "₹9,800/Pax",
    location: "📍 Nagaland",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "/Photos/dzukou-valley.jpg"
  },
  {
    name: "Gangtok",
    price: "₹11,000/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "/Photos/gangtok.jpg"
  },
  {
    name: "Tsomgo Lake",
    price: "₹9,800/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.9",
    category: "mountains",
    img: "/Photos/tsomgo.jpeg"
  },
  {
    name: "Pelling",
    price: "₹9,200/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.8",
    category: "mountains",
    img: "/Photos/pelling.jpg"
  },
  {
    name: "Yumthang Valley",
    price: "₹10,500/Pax",
    location: "📍 Sikkim",
    rating: "⭐ 4.9",
    category: "nature",
    img: "/Photos/yumthang-valley.jpeg"
  },
  {
    name: "Aizawl",
    price: "₹9,200/Pax",
    location: "📍 Mizoram",
    rating: "⭐ 4.7",
    category: "villages",
    img: "/Photos/aizawl.jpg"
  },
  {
    name: "Champhai",
    price: "₹8,800/Pax",
    location: "📍 Mizoram",
    rating: "⭐ 4.6",
    category: "nature",
    img: "/Photos/champhai.jpg"
  },
  {
    name: "Loktak Lake",
    price: "₹10,500/Pax",
    location: "📍 Manipur",
    rating: "⭐ 4.9",
    category: "nature",
    img: "/Photos/loktak-lake.jpg"
  },
  {
    name: "Imphal",
    price: "₹9,000/Pax",
    location: "📍 Manipur",
    rating: "⭐ 4.7",
    category: "cities",
    img: "/Photos/imphal.jpg"
  },
  {
    name: "Unakoti",
    price: "₹8,500/Pax",
    location: "📍 Tripura",
    rating: "⭐ 4.8",
    category: "spiritual",
    img: "/Photos/unakoti.jpg"
  },
  {
    name: "Agartala",
    price: "₹8,200/Pax",
    location: "📍 Tripura",
    rating: "⭐ 4.6",
    category: "cities",
    img: "/Photos/agartala.jpg"
  }
];
// Render cards dynamically
const cardContainer = document.getElementById('data-destination');

function renderCards(category = 'all') {
  cardContainer.innerHTML = ''; // Clear existing cards

  destinations
    .filter((dest) => category === 'all' || dest.category === category)
    .forEach((dest) => {
      const card = document.createElement('div');
      card.classList.add('card2');
      card.innerHTML = `
        <img src="${dest.img}" alt="${dest.name}">
        <h3>${dest.name}</h3>
        <p>${dest.location}</p>
        <p>${dest.price}</p>
        <p>${dest.rating}</p>
      `;
      card.addEventListener('click', () => {
        window.location.href = `details.html?name=${encodeURIComponent(
          dest.name
        )}`;
      });
      cardContainer.appendChild(card);
    });
}

// Handle category button clicks
const categoryButtons = document.querySelectorAll('.category-buttons button');
categoryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    categoryButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderCards(button.dataset.category);
  });
});

// Initial render
renderCards();

// JavaScript to toggle the visibility of cards
const cardContainer2 = document.getElementById('data-destination');
const showMoreButton = document.getElementById('show-more-button');

// Initially display only the first 8 cards
let isShowingAll = false;

function toggleCards() {
  if (isShowingAll) {
    // Collapse to show only 8 cards
    cardContainer2.style.maxHeight = '57rem';
    showMoreButton.textContent = 'Show More';
  } else {
    // Expand to show all cards
    cardContainer2.style.maxHeight = 'none';
    showMoreButton.textContent = 'Show Less';
  }
  isShowingAll = !isShowingAll;
}

// Add event listener to the button
showMoreButton.addEventListener('click', toggleCards);
