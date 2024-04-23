document.addEventListener('DOMContentLoaded', function() {
  // Get references to all mood buttons
  const moodBtns = document.querySelectorAll('.mood-btn');

  // Add click event listener to each mood button
  moodBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Get the selected mood from the data-mood attribute
      const selectedMood = this.dataset.mood;

      // Based on the selected mood, redirect to the respective HTML page
      switch(selectedMood) {
        case 'happy':
          window.location.href = 'happy.html';
          break;
        case 'neutral':
          window.location.href = 'neutral.html';
          break;
        case 'sad':
          window.location.href = 'sad.html';
          break;
        case 'angry':
          window.location.href = 'angry.html';
          break;
        case 'in love':
          window.location.href = 'love.html';
          break;
        case 'confident':
          window.location.href = 'confident.html';
          break;
        // Add more cases for additional mood options as needed
        default:
          // Handle default case if needed
          break;
      }
    });
  });
});
