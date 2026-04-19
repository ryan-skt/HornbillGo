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
    title: "Tawang",
    location: "Arunachal Pradesh, India",
    imgSrc: "/Photos/tawang.jpg",
    description: "Visit the majestic Tawang Monastery and serene alpine meadows high in the Himalayas.",
  },
  {
    title: "Dawki",
    location: "Meghalaya, India",
    imgSrc: "/Photos/dawki-river.jpg",
    description: "Drift on the crystal-clear Umngot River — so transparent you can see the riverbed below.",
  },
  {
    title: "Dzukou Valley",
    location: "Nagaland, India",
    imgSrc: "/Photos/dzukou-valley.jpg",
    description: "Trek through Nagaland's Valley of Flowers, carpeted in lilies and seasonal blooms.",
  },
  {
    title: "Kaziranga",
    location: "Assam, India",
    imgSrc: "/Photos/kaziranga.jpg",
    description: "Home to the world's largest population of Indian one-horned rhinoceroses.",
  },
  {
    title: "Loktak Lake",
    location: "Manipur, India",
    imgSrc: "/Photos/loktak-lake.jpg",
    description: "Float over the world's only floating national park on the phumdis of Loktak.",
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
  const pinSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:.85rem;height:.85rem;vertical-align:middle;margin-right:.25rem;color:#318CE7"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>`;
  locationInfo.innerHTML = `${pinSVG} ${place.location}`;

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

  const exploreLink = document.createElement("a");
  const arrowSVG = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="width:.85rem;height:.85rem;vertical-align:middle"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
  exploreLink.classList.add("explore-link");
  exploreLink.innerHTML = `${arrowSVG} View Details`;
  exploreLink.href = `details.html?name=${encodeURIComponent(place.title)}`;

  const backTitle = document.createElement("h4");
  backTitle.textContent = place.title;

  cardBack.appendChild(backTitle);
  cardBack.appendChild(description);
  cardBack.appendChild(exploreLink);

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

// Render cards dynamically
const cardContainer = document.getElementById('data-destination');

function renderCards(category = 'all') {
  cardContainer.innerHTML = '';

  destinations
    .filter((dest) => category === 'all' || dest.category === category)
    .forEach((dest) => {
      const card = document.createElement('div');
      card.classList.add('card2');
      card.innerHTML = `
        <img src="${dest.img}" alt="${dest.name}" loading="lazy">
        <div class="card2-body">
          <span class="card2-category">${dest.category}</span>
          <div class="card2-name">${dest.name}</div>
          <div class="card2-location"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:.8rem;height:.8rem;vertical-align:middle;margin-right:.2rem"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg> ${dest.location}</div>
          <div class="card2-meta">
            <span class="card2-price">${dest.price}</span>
            <span class="card2-rating"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#f59e0b" style="width:.8rem;height:.8rem;vertical-align:middle;margin-right:.2rem"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/></svg> ${dest.rating}</span>
          </div>
        </div>
      `;
      card.addEventListener('click', () => {
        window.location.href = `details.html?name=${encodeURIComponent(dest.name)}`;
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

// Scroll reveal
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); revealObserver.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.popular-place, .mem-title, .memories, .explore-more, .quote-card, .booking-container').forEach(el => {
  el.classList.add('reveal');
  revealObserver.observe(el);
});
