const choice = ["rock", "paper", "scissors"];

let PlayerChoice = prompt("Choose Rock, Paper or Scissors")

function PlayerSelection(PlayerChoice) {
return PlayerChoice.toLowerCase()
}

const getComputerChoice = Math.floor(Math.random() * choice.length);
console.log(getComputerChoice, choice[getComputerChoice]);

function game (PlayerSelection,getComputerChoice) 
{
    if (PlayerSelection === getComputerChoice)
    {
    console.log("You DRAW")
    }
    else if (PlayerSelection === "rock" && getComputerChoice === "scissors") {
        {
            console.log("You Win!")
        }
    }
    else if (PlayerSelection === "scissors") {
        if (getComputerChoice === "paper") {
            console.log("You Win!")
        }
        }
    else if (PlayerSelection === "paper") {
        if (getComputerChoice === "rock"){
            console.log("You Win!")
        }
        }
        else {
            console.log("You Lose")
        }
    }



