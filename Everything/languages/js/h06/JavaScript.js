let cards = document.querySelectorAll(".cards");

cardShuffle();

let isCardFlipped = false;

let firstCard, secondCard;

function cardFlip() {
    this.classList.add('flip');
    if (isCardFlipped === false) {
        isCardFlipped = true;
        firstCard = this;
    } else {
        isCardFlipped = false;
        secondCard = this;

        cardMatch();
    }
}

function cardMatch() {
    if (firstCard.dataset.matching === secondCard.dataset.matching) {
        disableCards();
    } else {
        cardUnflip();
        cardLock();
        cardUnlock();
    }
}

function disableCards() {
    firstCard.removeEventListener("click", cardFlip);
    secondCard.removeEventListener("click", cardFlip);
}

function cardUnflip() {
    setTimeout(function () {
        firstCard.classList.remove('flip');
        secondCard.classList.remove('flip');
    }, 1500);
}

function cardLock() {
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        card.removeEventListener("click", cardFlip)
    }
}

function cardUnlock() {
    setTimeout(function () {
        for (let i = 0; i < cards.length; i++) {
            let card = cards[i];
            card.addEventListener("click", cardFlip)
        }
    }, 1500)
}

function cardShuffle() {
    cards.forEach(function(card) {
        card.style.order = Math.floor(Math.random() * 18);
    })
}

for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.addEventListener("click", cardFlip)
}




