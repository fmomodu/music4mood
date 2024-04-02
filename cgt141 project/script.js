// Get references to the form and input fields
const form = document.getElementById('myForm');
const firstNameInput = document.getElementById('fname');
const lastNameInput = document.getElementById('lname');

// Add an event listener to the form's submit event
form.addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get the values of the input fields
  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;

  // Save the values to a JavaScript object or perform any other desired actions
  const userData = {
    firstName: firstName,
    lastName: lastName
  };

  // Log the user data to the console for demonstration
  console.log('User Data:', userData);

  // Redirect to the loading page
  window.location.href = 'loading.html';
});
document.addEventListener('DOMContentLoaded', function() {
  // Get references to all mood buttons
  const moodBtns = document.querySelectorAll('.mood-btn');

  // Add click event listener to each mood button
  moodBtns.forEach(btn => {
    btn.addEventListener('click', function() {
      // Get the selected mood from the data-mood attribute
      const selectedMood = this.dataset.mood;
      
      // Store the selected mood in localStorage if needed
      localStorage.setItem('selectedMood', selectedMood);

      // Redirect to the loading songs page
      window.location.href = 'loading_songs.html';
    });
  });
});
