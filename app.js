const emailInput = document.getElementById('emailInput');
const errorMessage = document.getElementById('error');

emailInput.addEventListener('blur', function () {
  // Regular expression to check if the input is a valid email address
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/; // Updated regex to include ".com"

  if (!emailRegex.test(emailInput.value)) {
    emailInput.style.borderColor = 'red'; // Change the border color to red
    errorMessage.style.display = 'block'; // Display the error message
  } else {
    emailInput.style.borderColor = '#ccc'; // Reset the border color to default
    errorMessage.style.display = 'none'; // Hide the error message if it was displayed previously
  }
});
