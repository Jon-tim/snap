const menuBtn = document.querySelector(".menu");
const closeMenuBtn = document.querySelector(".close-menu");
const navList = document.querySelector(".nav-list");
const blackScreen = document.querySelector(".black-screen");
const companyDropDown = document.querySelector(".company");
const featuresDropDown = document.querySelector(".features");
const featSubMenu = document.querySelector(".feature-sub-menu");
const companySubMenu = document.querySelector(".company-sub-menu");
const featArrow = document.querySelector(".feature-arrow-down");
const companyArrow = document.querySelector(".company-arrow-down");

menuBtn.addEventListener("click", () => {
  navList.style.display = "block";
  //   navList.style.transistionDuration = "10s";
  if ((navList.style.display = "block")) {
    blackScreen.addEventListener("click", () => {
      navList.style.display = "none";
    });
  }
});

closeMenuBtn.addEventListener("click", () => {
  navList.style.display = "none";

  if (true) {
    companySubMenu.classList.add("hidden");
    featSubMenu.classList.add("hidden");
    companyArrow.classList.remove("rotate-180");
    featArrow.classList.remove("rotate-180");
  }
});

// sub-menu events. Set display to flex and arrow should rotate to a facing up:

companyDropDown.addEventListener("click", () => {
  //set display
  companySubMenu.classList.toggle("hidden");

  //rotate icon is front of the link/menu button
  companyArrow.classList.toggle("rotate-180");
});

featuresDropDown.addEventListener("click", () => {
  featSubMenu.classList.toggle("hidden");
  featArrow.classList.toggle("rotate-180");
});
