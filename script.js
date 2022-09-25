let computerScore = 0;
let playerScore = 0;


//console.log(playerChoice());


let getComputerChoice = () => {
    let arr = ["rock", "paper", "scissor"];
    return arr[Math.floor(Math.random() * arr.length)];
};

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "rock" && computerChoice == "scissor") {
        console.log("yeaaa you won!!!");
        playerScore++;
    } else if (playerChoice == "paper" && computerChoice == "rock") {
        console.log("yeaaa you won!!!");
        playerScore++;
    } else if (playerChoice == "scissor" && computerChoice == "paper") {
        console.log("yeaaa you won!!!");
        playerScore++;
    } else if (playerChoice == computerChoice) {
        console.log("draw")
    } else {
        console.log(`You lose ${computerChoice} beats ${playerChoice}`);
        computerScore++;
    }
}



function game() {
    while (computerScore < 5 && playerScore < 5) {
        let gamerChoice = prompt("your choice: ");
        let computerChoice = getComputerChoice();
        playRound(gamerChoice.toLowerCase(), computerChoice);
    }
    console.log("computer score: " + computerScore);
    console.log("player score: " + playerScore);

    if (computerScore == 5) {
        console.log("computer won");
        return;

    } else {
        console.log("player won");
        return;
    }
}

game();