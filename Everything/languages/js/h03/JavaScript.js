// h1
document.getElementById("shuffle").innerHTML = "MonkeyShuffle";
document.getElementById("shuffle").style.textAlign = "center";
document.getElementById("shuffle").style.fontFamily = "Copse, serif";
// div
document.getElementById("div1").style.width = "900px";
document.getElementById("div1").style.height = "900px";
document.getElementById("div1").style.margin = "auto";
document.getElementById("div1").style.fontSize = "0px";
document.getElementById("div1").style.border = "solid 1px black";
// img
document.getElementById("dier1").src = "img/dier1.jpg";
document.getElementById("dier2").src = "img/dier2.jpg";
document.getElementById("dier3").src = "img/dier3.jpg";
document.getElementById("dier4").src = "img/dier4.jpg";
document.getElementById("dier5").src = "img/dier5.jpg";
document.getElementById("dier6").src = "img/dier6.jpg";
document.getElementById("dier7").src = "img/dier7.jpg";
document.getElementById("dier8").src = "img/dier8.jpg";
document.getElementById("dier9").src = "img/dier9.jpg";
// shuffle
var plaatjes = document.getElementsByTagName("img");
var random = 0;
var randomNumbers = [];
while (randomNumbers.length < 9) {
    random = Math.floor(Math.random() * 9) + 1;
    if(randomNumbers.lastIndexOf(random) === -1) {
        randomNumbers.push(random);
    }
}
random = 0;
for (var plaatje in plaatjes) {
    plaatjes[plaatje].src = "img/dier" + randomNumbers[random] + ".jpg";
    random++;
}