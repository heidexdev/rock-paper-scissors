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

let playRound = (humanChoise, computerChoise) => {
  if (humanChoise == computerChoise) {
    return "It's a tie ! no points to anybody.";
  } else if (humanChoise == "rock" && computerChoise == "scissors") {
    humanScore++;
    return "Human Won ! | rock beats scissors ";
  } else if (humanChoise == "paper" && computerChoise == "rock") {
    humanScore++;
    return "Human Won ! | paper beats rock ";
  } else if (humanChoise == "scissors" && computerChoise == "paper") {
    humanScore++;
    return "Human Won ! | scissors beats paper ";
  } else {
    computerScore++;
    return "computer won this round !";
  }
};

