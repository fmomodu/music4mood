// mood.js
import { navigateToSwiper } from './swiper.js';

document.addEventListener('DOMContentLoaded', function() {
  // Get references to all mood buttons
  const moodBtns = document.querySelectorAll('.mood-btn');

  // Add click event listener to each mood button
  moodBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Get the selected mood from the data-mood attribute
      const selectedMood = this.dataset.mood;

      // Store the selected mood in localStorage
      localStorage.setItem('selectedMood', selectedMood);

      // Redirect to the swiper page
      navigateToSwiper();
    });
  });
});