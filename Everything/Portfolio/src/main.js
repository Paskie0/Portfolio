let header = document.querySelector("header");
let headerHeight = header.offsetHeight;
header.style.marginTop = -headerHeight + "px";

let intro = document.querySelector("#intro");
intro.style.marginTop = headerHeight / 16 + 2 + "rem";
