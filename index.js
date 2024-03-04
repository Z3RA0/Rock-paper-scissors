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

 let computerChoice;

// Score
let playerScore = 0;
let computerScore = 0;

// Loops rounds until player or computer gets 5 points
do{
  getComputerChoice();
  computerChoice = getComputerChoice();
  console.log(computerChoice);
  playerSelection = window.prompt('Enter your choice between: rock, paper and scissors');
  getRoundsResult();
}while (playerScore < 5 && computerScore < 5)

// Game Results
if (playerScore === 5) {
    alert('Congrats !! You are the winner !')
  } else if (computerScore === 5) {
    alert('Oh no you lost...')
}

// Result of the rounds
function getRoundsResult(){
  if (playerSelection.toLowerCase() === computerChoice) {
    alert('It is a tie - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore)
  } else if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'paper') {
    computerScore++;
    alert('You lost against Paper - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore );
    playerSelection;
  } else if (playerSelection.toLowerCase() === 'rock' && computerChoice === 'scissors') {
    playerScore++;
    alert('You won against Scissors - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore);
    playerSelection;
  } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'scissors') {
    computerScore++;
    alert('You lost against Scissors - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore);
    playerSelection;
  } else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'rock') {
    playerScore++;
    alert('You won against Rock - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore);
    playerSelection;
  } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'rock') {
    computerScore++;
    alert('You lost against Rock - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore);
    playerSelection;
  } else if (playerSelection.toLowerCase() === 'scissors' && computerChoice === 'paper') {
    playerScore++;
    alert('You won against Paper - ' + 'Player Score : ' + playerScore + ' | ' + 'Computer Score : ' + computerScore);
    playerSelection;
  } else {
    alert('Invalid input');
  }
}
