let playerScore = 0;
let computerScore = 0;
let draws = 0;


// to get computer choice
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choose = Math.floor(Math.random() * choices.length);
  return choices[choose];
}

//function to play a round
//function playRound(PlayerSelection, computerSelection) {
  if (PlayerSelection === computerSelection) {
    return draw;
  } else if (PlayerSelection === "rock" && computerSelection === "scissors") {
    return playerWinRound;
  } else if (PlayerSelection === "scissors" && computerSelection === "paper") {
    return playerWinRound;
  } else if (PlayerSelection === "paper" && computerSelection === "rock") {
    return playerWinRound;
  } else {
    return computerWinRound;
  }
}
// setting variables which are returned
let playerWinRound = "Player wins this round!"
let computerWinRound = "Computer wins this round!"
let draw = "Draw!"
let playerWin = "Player wins the game! Congratulations!"
let computerWin = "Computer wins the game! Congratulations!"

// loop to play the game 5 times
for (let i = 0; i < 5; i++) {
    let playerChoice = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice(); //if not inside only calls once instead of each
    let roundResult = playRound(playerChoice, computerSelection);
    console.log(roundResult);
    gameScore(roundResult);
    console.log("Your score is " + playerScore);
    console.log("The computer's score is " + computerScore);
  }
  
  //to keep score of game
  function gameScore(result) {
  
    if (result === playerWinRound) {
      playerScore++;
    } else if (result === draw) {
      draws++;
    } else {
      computerScore++;
    }
  }  
  
  
