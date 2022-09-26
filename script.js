let computerScore = 0;
let playerScore = 0;
var result = '';

let getComputerChoice = () => {
    let arr = ["rock", "paper", "scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissor") {
        result = 'yeaaa you won!!!';
        playerScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        result = 'yeaaa you won!!!';
        playerScore++;
    } else if (playerChoice == "scissor" && computerChoice == "paper") {
        result = 'yeaaa you won!!!';
        playerScore++;
    } else if (playerChoice == computerChoice) {
        result = 'draw';
    } else {
        result = `You lose ${computerChoice} beats ${playerChoice}`;
        computerScore++;
    }

    updateScore(playerScore, computerScore);
    document.getElementById("result-text").textContent = result;


    if (playerScore === 5 || computerScore === 5) {
        winner = playerScore > computerScore ? "You" : "Computer";
        console.log(winner);
        gameOver(winner);
        return;
    }
}

function updateScore(playerScore, computerScore) {
    const pScore = document.querySelector('.player-score-number');
    const cScore = document.querySelector('.computer-score-number');

    pScore.textContent = playerScore;
    cScore.textContent = computerScore;
}

let playerChoice;
const btn = document.querySelectorAll('button');
btn.forEach((button) => {
    button.addEventListener('click', function (e) {
        playRound(button.id, getComputerChoice());
    });
})

function gameOver(winner) {
    const mainScreen = document.getElementById('main');
    mainScreen.remove();

    const finalMess = document.querySelector('.final-game-result');
    finalMess.textContent = 'Game Over!!';
    finalMess.textContent += ` ${winner} won`;

    const finalScore = document.querySelector('.final-score');

    finalScore.textContent += `Computer Score: ${computerScore}\r\n`;
    finalScore.textContent += `Your Score: ${playerScore}`;

    const finalHolder = document.querySelector('.winner-page');
    const restartButton = document.createElement('button');
    restartButton.textContent = `Restart`;
    finalHolder.appendChild(restartButton);
    restartButton.classList.add('restart-button');

    restartButton.addEventListener('click', resetGame)
}

function resetGame() {
    const winnerScreen = document.querySelector('.winner-page');
    winnerScreen.remove();
    location.reload();
}