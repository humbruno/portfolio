const menuToggle = document.querySelector("button");
const navMenu = document.querySelector(".navMenu");
const navLinks = document.querySelectorAll(".navMenu a");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  menuToggle.classList.toggle("open");
});

for (const navLink of navLinks) {
  navLink.addEventListener("click", () => {
    navMenu.classList.remove("active");
    menuToggle.classList.remove("open");
  });
}
