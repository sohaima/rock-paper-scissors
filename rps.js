function computerPlay() {
    arr = ['Rock','Paper','Scissors'];
    return arr[getRndInteger(0,2)];
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }
function playRound(playerSelection,computerSelection) {
    const p = playerSelection.toLowerCase();
    const c = computerSelection.toLowerCase();
    if (p==c) {
        return "Draw!";
    } else if (p=="rock" && c=="paper") {
        return "You lose! Paper beats Rock";
    } else if (p=="rock" && c=="scissors") {
        return "You win! Rock beats Scissors";
    }else if (p=="paper" && c=="scissors") {
        return "You lose! Scissors beats Paper";
    }else if (p=="paper" && c=="rock") {
        return "You win! Paper beats Rock";
    }else if (p=="scissors" && c=="paper") {
        return "You win! Scissors beats Paper";
    }else {
        return "You lose! Rock beats Scissors";
    }
}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));