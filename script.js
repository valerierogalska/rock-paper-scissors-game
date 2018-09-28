let possibleChoices = [
  'Rock',
  'Paper',
  'Scissors'];

function computerPlay() {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

let playerSelection = prompt('Rock, paper or scissors?', '');
let computerSelection = console.log(computerPlay());
