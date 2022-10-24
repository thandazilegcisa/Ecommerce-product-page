const navElement = document.querySelector("nav");
const menuIcon = document.querySelector(".menu-icon");
const buttonClose = document.querySelector(".close-button");

function displayNav() {
  if (navElement.classList.contains("nav-desktop-active")) {
    navElement.classList.remove("nav-mobile-active");
    buttonClose.style.display = "none";
  }
}
displayNav();

menuIcon.addEventListener("click", function () {
  navElement.classList.replace("nav-desktop-active", "nav-mobile-active");
  if (navElement.classList.contains("nav-mobile-active")) {
    buttonClose.style.display = "block";
    buttonClose.addEventListener("click", function () {
      navElement.classList.replace("nav-mobile-active", "nav-desktop-active");
      if (navElement.className === "nav-desktop-active") {
        buttonClose.style.display = "none";
      }
    });
  }
});

console.log(navElement);
