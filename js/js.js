var headerHeight = document.querySelector("header").offsetHeight;
var aboutHeight = document.querySelector("#about");
aboutHeight.style.height = "calc(100vh - " + headerHeight + "px)";
aboutHeight.style.marginTop = headerHeight + "px";
