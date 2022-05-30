let headerHeight = document.getElementById("top");
let headerMenu = document.getElementById("menuModal");
let bodyWrapper = document.getElementById("wrapContent");
headerMenu.style.top = headerHeight.offsetHeight / 16 + 3.25 + "rem";
headerMenu.style.width = bodyWrapper.offsetWidth / 16 - 3 + "rem";

function toggleMenu() {
  var menu = document.getElementById("menuModal");
  var menuButton = document.getElementById("headerMenu");
  var body = document.getElementById("body");
  if (menu.style.display == "none") {
    menu.style.display = "grid";
    menuButton.children[0].style.transform = "rotate(180deg)";
    body.classList.toggle("blurBody");
    setTimeout(() => {
      menu.style.opacity = "1";
    });
  } else {
    menu.style.opacity = 0;
    menuButton.children[0].style.transform = "rotate(0deg)";
    body.classList.toggle("blurBody");
    setTimeout(() => {
      menu.style.display = "none";
    }, 300);
  }
}
