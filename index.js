//Variables
let computerChoice;
let playerSelection;

const btnRock = document.querySelector('#rock');
const btnPaper = document.querySelector('#paper');
const btnScissors = document.querySelector('#scissors');
const description = document.querySelector('.description');
const roundDescription = document.querySelector('.roundDescription');
const gameDescription = document.querySelector('.gameResultDescription');
const playerScoreTracker = document.querySelector('#playerScoreTracker');
const computerScoreTracker = document.querySelector('#computerScoreTracker');

const restartBtn = document.createElement('button');
restartBtn.textContent = 'Restart';

// Computer random choice
function getComputerChoice() {
  let ComputerNum = Math.floor(Math.random() * 3); 
  if (ComputerNum === 0) {
    return 'rock'
  } 
  else if (ComputerNum === 1) {
    return 'paper'
  }
  else if (ComputerNum === 2) {
    return 'scissors'
  }
 };

//a round
function playRound() {
  getComputerChoice();
  computerChoice = getComputerChoice();
  getRoundsResult();
}

// The game
btnRock.addEventListener('click', () => {
 playerSelection = 'rock';
 playRound();
 getGameResult();
 computerScoreTracker.textContent = computerScore;
 playerScoreTracker.textContent = playerScore;
});

btnPaper.addEventListener('click', () => {
 playerSelection = 'paper';
 playRound();
 getGameResult();
 computerScoreTracker.textContent = computerScore;
 playerScoreTracker.textContent = playerScore;
});

btnScissors.addEventListener('click', () => {
 playerSelection = 'scissors';
 playRound();
 getGameResult();
 computerScoreTracker.textContent = computerScore;
 playerScoreTracker.textContent = playerScore;
});

restartBtn.addEventListener('click', () => {
  playerScore = 0;
  computerScore = 0;
  computerScoreTracker.textContent = computerScore;
  playerScoreTracker.textContent = playerScore;
  roundDescription.textContent = '';
  gameDescription.textContent = '';
  description.removeChild(restartBtn);
 });

// Score
let playerScore = 0;
let computerScore = 0;
playerScoreTracker.textContent = playerScore;
computerScoreTracker.textContent = computerScore;

// Game Results
function getGameResult() {
  if (playerScore === 5) {
      gameDescription.textContent = 'Congrats !! You are the winner !';
      description.appendChild(roundDescription);
      restartBtn;
      description.appendChild(restartBtn);
    } else if (computerScore === 5) {
      gameDescription.textContent = 'Oh no you lost...';
      description.appendChild(roundDescription);
      restartBtn;
      description.appendChild(restartBtn);
  }
}

// Result of the rounds
function getRoundsResult(){
  if (playerSelection === computerChoice) {
    roundDescription.textContent = 'It is a tie !';
    description.appendChild(roundDescription);
  } else if (playerSelection === 'rock' && computerChoice === 'paper') {
    computerScore++;
    roundDescription.textContent = 'You lost against Paper';
    description.appendChild(roundDescription);
  } else if (playerSelection === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    roundDescription.textContent = 'You won against Scissors';
    description.appendChild(roundDescription);
  } else if (playerSelection === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    roundDescription.textContent ='You lost against Scissors';
    description.appendChild(roundDescription);
  } else if (playerSelection === 'paper' && computerChoice === 'rock') {
    playerScore++;
    roundDescription.textContent ='You won against Rock';
    description.appendChild(roundDescription);
  } else if (playerSelection === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    roundDescription.textContent ='You lost against Rock';
    description.appendChild(roundDescription);
  } else if (playerSelection === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    roundDescription.textContent ='You won against Paper';
    description.appendChild(roundDescription);
  }
}
 