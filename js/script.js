// breaking the game down. first need to get the computer's choice of either rock, paper or scissors
const choices = ["rock", "paper", "scissor"];

function getComputerChoice() {
  let index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// now getting user input

function getUserChoice() {
  let userChoice = prompt("Choose rock, paper or scissors", "rock");
  userChoice = userChoice.toLowerCase();
  if (choices.includes(userChoice)) {
    return userChoice;
  }
  return null;
}

//this function takes the computer and player choices and returns the winner.
function playRound(computerSelection, playerSelection) {
  if (computerSelection === playerSelection) {
    return "draw";
  }
  // checking condition for computer being rock
  if (computerSelection === choices[0]) {
    if (playerSelection === choices[1]) {
      return "player";
    } else if (playerSelection === choices[2]) {
      return "computer";
    }
  }
  // checking condition for computer being paper
  if (computerSelection === choices[1]) {
    if (playerSelection === choices[0]) {
      return "computer";
    } else if (playerSelection == choices[2]) {
      return "player";
    }
  }
  //checking condition for computer being scissors
  if (computerSelection === choices[2]) {
    if (playerSelection === choices[1]) {
      return "computer";
    } else if (playerSelection === choices[0]) {
      return "player";
    }
  }
}

function game() {
  let computer_wins = 0;
  let player_wins = 0;
  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerChoice();
    let playerSelection = getUserChoice();
    console.log("The computer choice was ", computerSelection);
    if (playerSelection) {
      let winner = playRound(computerSelection, playerSelection);
      console.log("Thw winner was", winner);
      if (winner === "draw") {
        i--;
        continue;
      } else if (winner === "computer") {
        computer_wins++;
        console.log("Computer won this round");
        setTimeout(() => {
          console.log("Computer");
        }, 5000);
      } else if (winner === "player") {
        player_wins++;
        console.log("Player won this round");
        setTimeout(() => {
          console.log("Player");
        }, 5000);
      }
    } else {
      console.log("The user choice was incorrect. Replay the game");
    }
  }
  if (player_wins > computer_wins) {
    console.log("Player wins as ", player_wins, "greater than", computer_wins);
  } else {
    console.log("Player wins", player_wins);
  }
}

game();
