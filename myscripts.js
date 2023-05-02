let playerScore = function() {
  i = 0;
  return(i)
}
let computerScore = 0;
let draws = 0;


// to get computer choice
let choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  const choose = Math.floor(Math.random() * choices.length);
  return choices[choose];
}

//function to play a round
function playRound(PlayerSelection, computerSelection) {
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
function game(playerChoice) {
    
    const computerSelection = getComputerChoice(); //if not inside only calls once instead of each
    let roundResult = playRound(playerChoice, computerSelection);
    gameScore(roundResult);
    document.getElementById("playerscore").innerHTML = playerScore;
    document.getElementById("cpuscore").innerHTML = computerScore;
    document.getElementById("playerReturn").innerHTML = "You: " + playerChoice;
    document.getElementById("cpuReturn").innerHTML = "CPU: " + computerSelection;

  
   //if (playerScore === 5 || computerScore === 5 ) {
    //  break;
   // }
  }
  //to keep score of game
  function gameScore(result) {
  
    if (result === playerWinRound) {
      playerScore++;
      document.getElementById("winnerdiv").innerHTML = "YOU WIN THIS ROUND!"
    } else if (result === draw) {
      draws++;
      document.getElementById("winnerdiv").innerHTML = "DRAW THIS ROUND!"
    } else {
      computerScore++;
      document.getElementById("winnerdiv").innerHTML = "YOU LOSE THIS ROUND!"
    }
  }  

  //changes affecting UI - updated version
  //rock button
  let a = "rock"
  document.getElementById("rockbtn").addEventListener("click", function() {
    game(a);
  });
  let b = "paper"
  document.getElementById("paperbtn").addEventListener("click", function() {
    game(b);
  });
  let c = "scissors"
  document.getElementById("scissorsbtn").addEventListener("click", function() {
    game(c);
  });
if (playerScore === "5") {
    const element1 = document.getElementById("choicediv");
    element1.replaceChildren();
  }
  
  
  
