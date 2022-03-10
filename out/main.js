"use strict";
const balance = document.querySelector('#balance');
const play = document.querySelector('#play');
const bet = document.querySelector('#bet');
const cards = document.querySelectorAll('.card');
let counter = 0;
cards.forEach(card => {
    card.onclick = () => {
        if (counter < 3) {
            card.classList.add('is-flipped');
            counter++;
            let number = card.querySelector('.number');
            if (number.innerHTML === '$') {
                setTimeout(() => {
                    alert('yutding!');
                }, 1000);
                counter = 4;
            }
        }
    };
});
cards.forEach(card => {
    let number = card.querySelector('.number');
    number.innerHTML = 'X';
});
let r = random(0, 8);
let card = cards[r];
let number = card.querySelector('.number');
number.innerHTML = '$';
function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
