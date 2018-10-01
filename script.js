const possibleChoices = [
  'Rock',
  'Paper',
  'Scissors'];

// Get randomly computer's selection
function computerPlay(possibleChoices) {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

const computerSelection = computerPlay(possibleChoices);
const askPlayerSelection = prompt('Rock, paper or scissors?', '');
let playerSelection;

function getPlayerSelection (askPlayerSelection) {
  if (askPlayerSelection.search(/rock/i) !== -1) {
    if (askPlayerSelection.search(/paper/i) !== -1 || askPlayerSelection.search(/scissors/i) !== -1) {
      alert('You can only select one option!');
      window.location.reload();
    }
    else {
      playerSelection = possibleChoices[0];
    }
  }
  else if (askPlayerSelection.search(/paper/i) !== -1) {
    if (askPlayerSelection.search(/rock/i) !== -1 || askPlayerSelection.search(/scissors/i) !== -1) {
      alert('You can only select one option!');
      window.location.reload();
    }
    else {
      playerSelection = possibleChoices[1];
    }
  }
  else if (askPlayerSelection.search(/scissors/i) !== -1) {
    if (askPlayerSelection.search(/rock/i) !== -1 || askPlayerSelection.search(/paper/i) !== -1) {
      alert('You can only select one option!');
      window.location.reload();
    }
    else {
      playerSelection = possibleChoices[2];
    }
  }
  else {
    alert('You have to select either rock, paper or scissors! Try again ;)');
    window.location.reload();
  }
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return(`It\'s a tie! You both chose ${playerSelection}`);
  }
  else if ((playerSelection === 'Rock' && computerSelection === 'Scissors') || (playerSelection === 'Paper' && computerSelection === 'Rock') || (playerSelection === 'Scissors' && computerSelection === 'Paper')) {
    return(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else {
    return(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

getPlayerSelection(askPlayerSelection);
console.log(playRound(playerSelection, computerSelection));
