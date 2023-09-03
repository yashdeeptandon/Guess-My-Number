'use strict';
let secretNumber = Math.trunc(Math.random() * 20) + 1; //trunc the number to only integer part.

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value); //converting string to number for comparison
  console.log(guess, typeof guess);
  if (!guess) {
    displayMessage('No Number !');
  }
  // When number is high
  else if (guess > secretNumber) {
    if (score > 1) {
      displayMessage('Too High !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game !');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // When number is Low
  else if (guess < secretNumber) {
    if (score > 1) {
      displayMessage('Too Low !');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You Lost the Game !');
      score--;
      document.querySelector('.score').textContent = score;
    }
  }
  // When you have WON
  else {
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('You Won the Game !');
    document.querySelector('body').style.backgroundColor = ' #60b347';
    document.querySelector('.number').style.width = '30rem';
  }
});

// Restoring the game
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  document.querySelector('body').style.backgroundColor = ' #222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.highscore').textContent = highScore;
});
