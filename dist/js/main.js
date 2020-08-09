// Selelct DOM Items

const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const icons = document.querySelectorAll("icon-img");
const navItems = document.querySelectorAll(".nav-item");

//  Set Initial state of the menu

let showmenu = false;
menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  if (!showmenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //  Set Menu state
    showmenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //  Set Menu state
    showmenu = false;
  }
}
