let getComputerChoise = function () {
  let randomNumber = Math.random() * 10;
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

let playRound = (humanChoise, computerChoise) => {
  if (humanChoise == computerChoise) {
    return console.log("It's a tie ! no points to anybody.");
  } else if (humanChoise == "rock" && computerChoise == "scissors") {
    humanScore++;
    console.log("Human Won !  rock beats scissors ");
    return;
  } else if (humanChoise == "paper" && computerChoise == "rock") {
    humanScore++;
    console.log("Human Won !  paper beats rock ");
    return;
  } else if (humanChoise == "scissors" && computerChoise == "paper") {
    humanScore++;
    console.log("Human Won !  scissors beats paper ");
    return;
  } else {
    computerScore++;
    console.log("computer won this round !");
  }
};
let playGame = () => {
  for (let i = 0; i < 5; i++) {
    playRound(getHumanChoise(), getComputerChoise());
    if (humanScore == 3) {
      console.log("Congrats ! Human won the Game ");
      return;
    } else if (computerScore == 3) {
      console.log("You lost to the computer !");
      return;
    }
  }
  if (humanScore > computerScore) {
    return console.log("Game Over: Human wins on points!");
  } else if (computerScore > humanScore) {
    console.log("Game Over: Computer wins on points!");
    return;
  } else {
    console.log("Game Over: It's an overall tie!");
    return;
  }
};

playGame();
console.log("humanScore: " + humanScore + ", computerScore: " + computerScore);
