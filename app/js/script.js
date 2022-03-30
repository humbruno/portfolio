const menuToggle = document.querySelector("button");
const navMenu = document.querySelector(".navMenu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});
