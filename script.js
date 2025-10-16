
// get the elements
const form = document.querySelector(".input-container");
const emailInput = document.getElementById("email");
const errorMessage = document.querySelector(".error-message");

// Add event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();                  // prevent the form from refreshing the page
  const emailValue = emailInput.value.trim();       // get the value of the email input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Basic email regex (simple and effective)

  // Check if email is not valid, display error message and input styles
  if (!emailRegex.test(emailValue)) {    
    errorMessage.style.display = "block";
    emailInput.style.backgroundColor = "hsl(4, 100%, 92%)";  
    emailInput.style.border = "1px solid hsl(4, 100%, 67%)";
    emailInput.style.color = "hsl(4, 100%, 67%)";
  } else {
    // if Valid email, hide error message and reset input styles
    errorMessage.style.display = "none";
    emailInput.style.backgroundColor = "";
    emailInput.style.border = "1px solid var(--grey)";
    emailInput.style.color = "black";

    // Save email to localStorage so we can access it on success page
    localStorage.setItem("userEmail", emailValue);

    // Redirect to success page
    window.location.href = "success.html";
  }
});
