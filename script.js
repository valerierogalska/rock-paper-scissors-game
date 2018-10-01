const possibleChoices = [
  'Rock',
  'Paper',
  'Scissors'];

// Get randomly computer's selection
function computerPlay(possibleChoices) {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

const computerSelection = computerPlay(possibleChoices);
const playerSelection = prompt('Rock, paper or scissors?', '');
let playerSelectionFinal;

function playRound(playerSelection, computerSelection) {
  if (playerSelection.search(/rock/i) !== -1) {
    return (playerSelectionFinal = possibleChoices[0]);
  }
  else if (playerSelection.search(/paper/i) !== -1) {
    return (playerSelectionFinal = possibleChoices[1]);
  }
  else if (playerSelection.search(/scissors/i) !== -1) {
    return (playerSelectionFinal = possibleChoices[2]);
  }
  else {
    alert('You have to select either rock, paper or scissors! Try again ;)');
    window.location.reload();
  }
}

playRound(playerSelection, computerSelection);
console.log(playerSelectionFinal);
