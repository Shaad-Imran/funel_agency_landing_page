const menuToggleBtn = document.querySelector(".navbar-menu-btn");
const navbar = document.querySelector(".navbar");

// Toggling
menuToggleBtn.addEventListener("click", () =>
  navbar.classList.toggle("active")
);
