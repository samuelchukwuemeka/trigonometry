/*
    Copyright 2018 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    
    www.samdomforpeace.com
    https://samuelchukwuemeka.github.io/trigonometry/angles.html
    message 1
*/

// Modal: Using the Timer
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  // If the overlay is clicked before auto-dismiss, open the website.
  modal.addEventListener("click", () => {
    window.open("https://examssuccess.github.io/", "_blank");
  });

  // Prevent click events within the modal content from propagating.
  const modalContent = document.querySelector(".modal-content");
  modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Auto-dismiss the modal after 5 seconds (5000 milliseconds).
  setTimeout(() => {
    modal.style.display = "none";
  }, 5000);
});
