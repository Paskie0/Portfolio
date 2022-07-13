var img = [1,2,3,4,5,6,7,8,9];
var teller = 0;
var slideholder = document.getElementById("slideholder");
slideholder.style.margin = "auto";
slideholder.style.backgroundColor = "#808080";
slideholder.style.backgroundImage = "url('img/dier1.jpg')";
slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('img/dier" + getAap() + ".jpg')";
});

function getAap() {
    if (teller >= img.length) {
        teller = 1;
    } else {
        teller ++;
    }
    console.log(teller);
    return teller;
}