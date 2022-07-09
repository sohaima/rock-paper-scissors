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
        return 0;
    } else if (p=="rock" && c=="paper") {
        return -1;
    } else if (p=="rock" && c=="scissors") {
        return 1;
    }else if (p=="paper" && c=="scissors") {
        return -1;
    }else if (p=="paper" && c=="rock") {
        return 1;
    }else if (p=="scissors" && c=="paper") {
        return 1;
    }else {
        return -1;
    }
}

function game() {
    let playerScore = 0;
    for (let i=1;i<=5;i++) {
        const computerSelection = computerPlay();
        const playerSelection = prompt("Enter your choice: ");
        console.log("You play " + playerSelection + ".");
        console.log("Computer plays " + computerSelection + ".");
        if (playRound(playerSelection,computerSelection) == 1) {
            playerScore++;
            console.log("Round " + i + ": You win!");
        } else if (playRound(playerSelection,computerSelection) == -1) {
            console.log("Round " + i + ": You lose!");
        } else {
            console.log("Round " + i + ": Draw!");
        }
    }
    console.log("Game over. Your score is: " + playerScore + ".");
}

game()