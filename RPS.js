function getComputerChoice() {
    var Choices = [
        'Scissors',
        'Rock',
        'Paper'
    ];
    var randomChoice = Math.floor(Math.random()*Choices.length);
    var chosen;
    if (randomChoice == 0) {
        chosen = 'Scissors'
    }
    else if (randomChoice == 1) {
        chosen = 'Rock'
    }
    else if (randomChoice == 2) {
        chosen = 'Paper'
    }
    return chosen;
}



function playRound(playerSelection, computerSelection, playerPoints, computerPoints) {
    if (playerSelection === 'Scissors') {
      if (computerSelection === 'Paper') {
        playerPoints++;
        return {
          message: "You win! Scissors beats Paper!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      } else if (computerSelection === 'Rock') {
        computerPoints++;
        return {
          message: "You lose! Scissors loses to Rock!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      } else if (computerSelection === 'Scissors') {
        return {
          message: "Tie! Scissors + Scissors are too evenly matched!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      }
    } else if (playerSelection === 'Paper') {
      if (computerSelection === 'Scissors') {
        computerPoints++;
        return {
          message: "You lose! Paper loses to Scissors!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      } else if (computerSelection === 'Rock') {
        playerPoints++;
        return {
          message: "You win! Paper beats rock!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      } else if (computerSelection === 'Paper') {
        return {
          message: "Tie! Paper + Paper are too evenly matched!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      }
    } else if (playerSelection === 'Rock') {
      if (computerSelection === 'Scissors') {
        playerPoints++;
        return {
          message: "You win! Rock beats scissors!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      } else if (computerSelection === 'Paper') {
        computerPoints++;
        return {
          message: "You lose! Rock loses to Paper!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      } else if (computerSelection === 'Rock') {
        return {
          message: "Tie! Rock + Rock are too evenly matched!",
          playerPoints: playerPoints,
          computerPoints: computerPoints
        };
      }
    }
  }

var playerSelection;
var playerPoints = 0;
var computerPoints = 0;
var  gameOver = false;


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (!gameOver) { 
        playerSelection = button.id;
        var computerSelection = getComputerChoice();
        var result = playRound(playerSelection, computerSelection, playerPoints, computerPoints);
        playerPoints = result.playerPoints;
        computerPoints = result.computerPoints;
        displayResult(result.message);
        displayScore(playerPoints, computerPoints);
        if (playerPoints === 5 || computerPoints === 5) {
            gameOver = true;
            if (playerPoints > computerPoints) {
              winGame();
            }
            else {
              loseGame();
            }
            buttons.forEach((btn) => {
              btn.removeEventListener('click');
            
            
            });
    }
    }
});
});

function displayResult(result) {
    var resultContainer = document.getElementById('result');
    resultContainer.textContent = result;
  }

function displayScore(playerPoints, computerPoints) {
    var scoreContainer = document.getElementById('score');
    scoreContainer.textContent = "The score is now " + playerPoints + " - " + computerPoints + "!";
  }

  function winGame() {
    const h1 = document.createElement("h1");
    const ending = document.createTextNode("GAME OVER!");
    const lineBreak = document.createElement("br");
    const result = document.createTextNode("YOU WIN!");
    h1.appendChild(ending);
    h1.appendChild(lineBreak);
    h1.appendChild(result);
    document.getElementById("endgame").appendChild(h1);
  }
  function loseGame() {
    const h1 = document.createElement("h1");
    const ending = document.createTextNode("GAME OVER!");
    const lineBreak = document.createElement("br");
    const result = document.createTextNode("YOU LOSE!");
    h1.appendChild(ending);
    h1.appendChild(lineBreak);
    h1.appendChild(result);
    document.getElementById("endgame").appendChild(h1);
  }


