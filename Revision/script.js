'use strict';
let highscore = 0;
let score = 100;
let tries = 20;
const generateNumber = function () {
  return Math.trunc(Math.random() * 100) + 1;
};
let randomNum = generateNumber();
console.log(randomNum);
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setScore = function (score) {
  document.querySelector('.score').textContent = Number(score);
};
const setTries = function (tries) {
  document.querySelector('.tries').textContent = Number(tries);
};

document.querySelector('.tries').textContent = tries;

document.querySelector('.newgame').addEventListener('click', function () {
  score = 100;
  tries = 20;
  randomNum = generateNumber();
  console.log(randomNum);
  document.querySelector('.circle').textContent = '?';
  setMessage('Start guessing...');
  setScore(score);
  setTries(tries);
  document.querySelector('.guess').value = '';
  document.querySelector('.enter').disabled = false;
});

document.querySelector('.enter').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    setMessage('No input detected!!');
  } else if (guess === randomNum) {
    setMessage('Congrats!! Correct guess');
    document.querySelector('.circle').textContent = randomNum;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.enter').disabled = true;
  } else if (guess !== randomNum) {
    if (tries > 1) {
      setMessage(guess > randomNum ? 'Too high' : 'Too low');
      score = score - 4;
      tries--;
      setScore(score);
      setTries(tries);
    } else {
      setMessage('GAME OVER!!');
      setTries(0);
      document.querySelector('.enter').disabled = true;
    }
  }
});
