// swiper.js
export function navigateToSwiper() {
    // Navigate to the swiper page
    window.location.href = 'swiper.html';
}
import { moodPlaylistMap } from './data.js';

// Initialize Swiper
const swiper = new Swiper('#swiper', {
  direction: 'horizontal',
  loop: true,
  // Other Swiper options
});

// Get the selected mood from the localStorage
const selectedMood = localStorage.getItem('selectedMood');

// Get the playlist for the selected mood
const playlist = moodPlaylistMap[selectedMood];

// Create the Swiper slides based on the playlist
playlist.forEach((item, index) => {
  const card = createCard(item.imageUrl, index);
  swiper.wrapper.appendChild(card);
});

// Function to create a card element
function createCard(imageUrl, index) {
  const card = document.createElement('div');
  card.classList.add('card');
  card.style.setProperty('--i', index);

  const img = document.createElement('img');
  img.src = `img/${imageUrl}`;
  card.appendChild(img);

  return card;
}