var img1 = [1,2,3];
var teller1 = 0;
var slideholder1 = document.getElementById("slideholder1");
slideholder1.style.margin = "auto";
slideholder1.style.backgroundColor = "#ffffff";
slideholder1.style.backgroundImage = "url('img/head3.jpg')";
slideholder1.addEventListener("click", function () {
    slideholder1.style.backgroundImage = "url('img/head" + getHead() + ".jpg')";
});

function getHead() {
    if (teller1 >= img1.length) {
        teller1 = 1;
    } else {
        teller1 ++;
    }
    console.log(teller1);
    return teller1;
}

var img2 = [1,2,3];
var teller2 = 0;
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.margin = "auto";
slideholder2.style.backgroundColor = "#ffffff";
slideholder2.style.backgroundImage = "url('img/body3.jpg')";
slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('img/body" + getBody() + ".jpg')";
});

function getBody() {
    if (teller2 >= img2.length) {
        teller2 = 1;
    } else {
        teller2 ++;
    }
    console.log(teller2);
    return teller2;
}

var img3 = [1,2,3];
var teller3 = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.margin = "auto";
slideholder3.style.backgroundColor = "#ffffff";
slideholder3.style.backgroundImage = "url('img/legs2.jpg')";
slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('img/legs" + getLegs() + ".jpg')";
});

function getLegs() {
    if (teller3 >= img3.length) {
        teller3 = 1;
    } else {
        teller3 ++;
    }
    console.log(teller3);
    return teller3;
}