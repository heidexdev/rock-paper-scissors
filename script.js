let getComputerChoise = function () {
  let randomNumber = Math.random() * 10 + 1;
  if (randomNumber >= 6.66) {
    return "rock";
  } else if (randomNumber >= 3.33) {
    return "paper";
  } else {
    return "scissors";
  }
};

let getHumanChoise = () => {
  let input = prompt("rock/paper/scissors ?", "");
  input = input.toLowerCase();
  return input;
};

let humanScore = 0;
let computerScore = 0;

let playGame = () => {
  let playRound = (humanChoise, computerChoise) => {
    if (humanChoise == computerChoise) {
      return console.log("It's a tie ! no points to anybody.");
    } else if (humanChoise == "rock" && computerChoise == "scissors") {
      humanScore++;
      return console.log("Human Won !  rock beats scissors ");
    } else if (humanChoise == "paper" && computerChoise == "rock") {
      humanScore++;
      return console.log("Human Won !  paper beats rock ");
    } else if (humanChoise == "scissors" && computerChoise == "paper") {
      humanScore++;
      return console.log("Human Won !  scissors beats paper ");
    } else {
      computerScore++;
      return console.log("computer won this round !");
    }
  };

  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoise(), getComputerChoise());
    if (humanScore == 3) {
      return console.log("Congrats ! Human won the Game ");
    } else if (computerScore == 3) {
      return console.log("You lost to the computer !");
    }
  }
  if (humanScore > computerScore) {
    return console.log("Game Over: Human wins on points!");
  } else if (computerScore > humanScore) {
    return console.log("Game Over: Computer wins on points!");
  } else {
    return console.log("Game Over: It's an overall tie!");
  }
};

playGame();
console.log("humanScore: " + humanScore + ", computerScore: " + computerScore);
