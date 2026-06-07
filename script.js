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
