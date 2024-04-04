// Get all mood buttons
const moodButtons = document.querySelectorAll('.mood-btn');

// Add event listeners to the mood buttons
moodButtons.forEach((btn) => {
  btn.addEventListener('click', handleMoodButtonClick);
});

// Function to handle mood button clicks
function handleMoodButtonClick(event) {
  const mood = event.target.dataset.mood;
  console.log(`Selected mood: ${mood}`);
  // Here, you can add the logic to navigate to the swiper page or update the swiper
}