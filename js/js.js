function stickySidebar() {
  var sidebar = document.getElementById("sidebar");
  var sidebarHeight = sidebar.offsetTop - sidebar.offsetHeight;

  if (window.scrollY > sidebarHeight) {
    sidebar.classList.add("sticky");
    sidebar.style.top = "155" / 16 + "rem";
  } else {
    sidebar.classList.remove("sticky");
    sidebar.style.top = "50vh";
  }
}

window.onscroll = function () {
  stickySidebar();
};
