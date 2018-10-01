const possibleChoices = [
  'Rock',
  'Paper',
  'Scissors'];

// Get randomly computer's selection
function computerPlay(possibleChoices) {
  return possibleChoices[Math.floor(Math.random() * possibleChoices.length)];
}

const computerSelection = computerPlay(possibleChoices);
let playerInput;
let playerSelection;
let roundsWonPlayer = 0;
let roundsWonComputer = 0;
let counter = 0;

function getPlayerSelection (playerInput) {
  if (playerInput.search(/rock/i) !== -1) {
    if (playerInput.search(/paper/i) !== -1 || playerInput.search(/scissors/i) !== -1) {
      alert('You can only select one option!');
      window.location.reload();
    }
    else {
      playerSelection = possibleChoices[0];
    }
  }
  else if (playerInput.search(/paper/i) !== -1) {
    if (playerInput.search(/rock/i) !== -1 || playerInput.search(/scissors/i) !== -1) {
      alert('You can only select one option!');
      window.location.reload();
    }
    else {
      playerSelection = possibleChoices[1];
    }
  }
  else if (playerInput.search(/scissors/i) !== -1) {
    if (playerInput.search(/rock/i) !== -1 || playerInput.search(/paper/i) !== -1) {
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
    roundsWonPlayer++;
    return(`You Win! ${playerSelection} beats ${computerSelection}`);
  }
  else {
    roundsWonComputer++;
    return(`You Lose! ${computerSelection} beats ${playerSelection}`);
  }
}

function game() {
  while (counter < 5) {
    playerInput = prompt('Rock, paper or scissors?', '');
    getPlayerSelection(playerInput);
    console.log(playRound(playerSelection, computerSelection));
    counter++;
  }
  if (counter === 5) {
    if (roundsWonPlayer === roundsWonComputer) {
      return(`It looks like you ended up in a tie ${roundsWonPlayer} to ${roundsWonComputer}! What about a rematch?`);
    }
    else if (roundsWonPlayer > roundsWonComputer) {
      return(`Weehee! You defeated the machine ${roundsWonPlayer} to ${roundsWonComputer}!`);
    }
    else if (roundsWonPlayer < roundsWonComputer) {
      return(`Shoot! You lost ${roundsWonPlayer} to ${roundsWonComputer} this time, maybe give it another try?`);
    }
    else {
      return('Something went terribly wrong!');
    }
  }
}

console.log(game());
