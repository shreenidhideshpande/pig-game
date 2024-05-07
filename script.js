'use strict';

const rollDice = document.querySelector('.btn--roll');
const hold = document.querySelector('.btn--hold');
const newGame = document.querySelector('.btn--new');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
let current0 = document.querySelector('#current--0');
let current1 = document.querySelector('#current--1');
let score0 = document.querySelector('#score--0');
let score1 = document.querySelector('#score--1');
const diceEl = document.querySelector('.dice');

// console.log(score0.textContent);
score0.textContent = 0;
score1.textContent = 0;

let active = 0;

let c0 = 0;
let c1 = 0;
diceEl.classList.add('hidden');

const roll0 = function () {
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  if (diceRoll === 1) {
    current0.textContent = 0;
    diceEl.src = `dice-${diceRoll}.png`;
    active = 1;
  } else {
    c0 = c0 + diceRoll;
    document.querySelector('#current--0').textContent = c0;
    diceEl.src = `dice-${diceRoll}.png`;
    diceRoll = Math.trunc(Math.random() * 6 + 1);
  }
};

const roll1 = function () {
  player1.classList.add('player--active');
  player0.classList.remove('player--active');
  let diceRoll = Math.trunc(Math.random() * 6 + 1);
  diceEl.classList.remove('hidden');
  if (diceRoll === 1) {
    current1.textContent = 0;
    diceEl.src = `dice-${diceRoll}.png`;
    active = 0;
  } else {
    c1 = c1 + diceRoll;
    document.querySelector('#current--1').textContent = c1;
    diceEl.src = `dice-${diceRoll}.png`;
    diceRoll = Math.trunc(Math.random() * 6 + 1);
  }
};

let s0 = Number(score0.textContent);
let s1 = Number(score1.textContent);
// console.log(hold.textContent);
const holdScore0 = function () {
  player1.classList.add('player--active');
  player0.classList.remove('player--active');
  //console.log(s0, c0);
  s0 = s0 + c0;
  score0.textContent = s0;
  c0 = 0;
  document.querySelector('#current--0').textContent = c0;
  active = 1;
};

const holdScore1 = function () {
  //console.log(s1, c1);
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  s1 = s1 + c1;
  score1.textContent = s1;
  c1 = 0;
  document.querySelector('#current--1').textContent = c1;
  active = 0;
};

const reset = function () {
  diceEl.classList.add('hidden');
  current0.textContent = 0;
  c0 = 0;
  score0.textContent = 0;
  s0 = 0;
  current1.textContent = 0;
  c1 = 0;
  score1.textContent = 0;
  s1 = 0;
};

rollDice.addEventListener('click', function () {
  if (active === 0) {
    roll0();
  } else if (active === 1) {
    roll1();
  }
});
hold.addEventListener('click', function () {
  if (active === 0) {
    holdScore0();
  } else if (active === 1) {
    holdScore1();
  }
});
newGame.addEventListener('click', reset);

// newGame.addEventListener('click', newGameStart);
