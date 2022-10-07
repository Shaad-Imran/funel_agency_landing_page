const menuToggleBtn = document.querySelector(".navbar-menu-btn");
const navbar = document.querySelector(".navbar");

// Toggling
menuToggleBtn.addEventListener("click", () =>
  navbar.classList.toggle("active")
);

// go to top
const goTopBtn = document.querySelector(".go-top");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 800) {
    goTopBtn.classList.add("active");
  } else {
    goTopBtn.classList.remove("active");
  }
});
