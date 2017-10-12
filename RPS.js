var playerScore = 0;
var computerScore = 0;
var playerChoice;
var computerChoice = Math.floor(Math.random() *3);
var choiceP = document.getElementById("choice");


function showChoice() {
    choiceP.innerText = "You chose " + playerChoice + ", the computer chose" + computerChoice + "."
}
function playerWins() {
    paragraph.innerText = "You won!"
    playerScore++
}
function computerWins() {
    paragraph.innerText = "Computer won!"
    computerScore++
}
function tie() {
    paragraph.innerText = "It's a tie"
}

function playRPS() {


    computerChoice = Math.floor(Math.random() *3);
    showChoice()

    var choices = {
        '0': 'Rock',
        '1': 'Paper',
        '2': 'Scissors'
    };

    computerChoice = choices[computerChoice];

    if (playerChoice === 'Rock') {
        if (computerChoice === 'Scissors') {
            playerWins();
        } else if(computerChoice === 'Paper') {
            computerWins();
        } else if(computerChoice === 'Rock')
        tie();
    }

    if (playerChoice === 'Paper') {
        if(computerChoice === 'Rock') {
            playerWins();
        } else if(computerChoice === 'Scissors') {
            computerWins();
        } else if(computerChoice === 'Paper')
        tie();
    }

    if (playerChoice === 'Scissors') {
        if (computerChoice === 'Paper') {
            playerWins();
        } else if(computerChoice === 'Rock') {
            computerWins();
        } else if(computerChoice === 'Scissors')
        tie();
    }
}

var choiceP = document.getElementById("choice");
var paragraph = document.getElementById("result");
var scoreP = document.getElementById("score");
var rockIMG = document.getElementById("rock");
var paperIMG = document.getElementById("paper");
var scissorsIMG = document.getElementById("scissors");

rockIMG.addEventListener("click", function() {
    playerChoice = 'Rock'
    playRPS();
    scoreP.innerText = "Player score: " + playerScore + ' Computer score: ' + computerScore
})

paperIMG.addEventListener("click", function() {
    playerChoice = 'Paper'
    playRPS();
    scoreP.innerText = "Player score: " + playerScore + ' Computer score: ' + computerScore
})

scissorsIMG.addEventListener("click", function() {
    playerChoice = 'Scissors'
    playRPS();
    scoreP.innerText = "Player score: " + playerScore + ' Computer score: ' + computerScore
})
