/*
    Copyright 2018 - Samuel Dominic Chukwuemeka (SamDom For Peace)
    www.samuelchukwuemeka.com
    www.chukwuemekasamuel.com
    www.chukwuemeka-samuel.appspot.com
    www.samdomforpeace.com
    www.trigonometry.appspot.com/angles.html
    message 1
*/

// Modal: Using the Escape Key
document.addEventListener("DOMContentLoaded", () => {
  const modal = document.getElementById("modal");

  // Clicking anywhere on the overlay opens the website.
  modal.addEventListener("click", () => {
    window.open("https://examssuccess.github.io/", "_blank");
    // If you prefer to navigate in the same tab, use:
    // window.location.href = "https://examssuccess.github.io/";
  });

  // Prevent clicks on the modal content from triggering the overlay’s event.
  const modalContent = document.querySelector(".modal-content");
  modalContent.addEventListener("click", (event) => {
    event.stopPropagation();
  });

  // Listen for the Escape key to dismiss the modal.
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      modal.style.display = "none";
    }
  });
});
