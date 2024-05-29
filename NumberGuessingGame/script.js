'use strict';
/*
console.log(document.querySelector('.highscore').textContent);

document.querySelector('.highscore').textContent = 999;
document.querySelector('.check').textContent = 'lol';
*/
//function for setting message
const setMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

//generate random number
let randomNum = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;

//implementing again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNum = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  setMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.check').disabled = false;
});

//implementing check button
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  //no input case
  if (!guess) {
    setMessage('No number inputted!!');
  }
  //correct input case
  else if (guess === randomNum) {
    setMessage('Correct');
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    document.querySelector('.number').textContent = randomNum;
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.check').disabled = true;
  }
  //incorrect input
  else if (guess !== randomNum) {
    if (score > 1) {
      //displaying high or low
      setMessage(guess > randomNum ? 'Too high' : 'Too low');

      score--;
      document.querySelector('.score').textContent = score;
    } else {
      setMessage('You lost. Game Over');
      document.querySelector('.score').textContent = 0;
      document.querySelector('.check').disabled = true;
    }
  }
});
