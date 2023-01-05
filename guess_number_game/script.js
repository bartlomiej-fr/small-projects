'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = document.querySelector('.score');
const guessInput = document.querySelector('.guess');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(guessInput.value);
  if (!guess) {
    displayMessage('🛑 Insert the number higher than zero!');
  } else if (guess === randomNumber) {
    displayMessage('🎉 Correct number!');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('body').style.backgroundColor = '#60b347';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      displayMessage(guess > randomNumber ? '📈 Too high!' : '📉 Too low!');
      score--;
      displayScore.textContent = score;
    } else {
      displayMessage('💥 You lost the game!');
      displayScore.textContent = 0;
    }
  }
});

const reset = () => {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  displayScore.textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage('Start guessing...');
  document.querySelector('.number').textContent = '?';
  guessInput.value = '';
};

document.querySelector('.again').addEventListener('click', reset);
