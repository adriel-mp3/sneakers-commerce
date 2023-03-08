export default function initMenuMobile() {
  const menuBtn = document.querySelector('[data-menu="btn"]');
  const menuBtnImg = document.querySelector('[data-menu="btn"] img');
  const menuNav = document.querySelector('[data-menu="content"]');
  const darken = document.querySelector(".darken");

  function handleClick() {
    menuNav.classList.toggle("active");
    if (menuNav.classList.contains("active")) {
      menuBtnImg.src = "./assets/images/icon-close.svg";
    }
    if (!menuNav.classList.contains("active")) {
      menuBtnImg.src = "./assets/images/icon-menu.svg";
    }
    darken.classList.toggle("active");
    darken.addEventListener("click", toggleMenu);
  }

  function toggleMenu() {
    menuBtnImg.src = "./assets/images/icon-menu.svg";
    menuNav.classList.remove("active");
    darken.classList.remove("active");
  }

  menuBtn.addEventListener("click", handleClick);
}
