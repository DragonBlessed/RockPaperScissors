function getComputerChoice() {
    var Choices = [
        'Scissors',
        'Rock',
        'Paper'
    ];
    var randomChoice = Math.floor(Math.random()*Choices.length);
    return randomChoice;
}


function playRound(playerSelection, computerSelection) {
    getComputerChoice()
    for (choice in Choices) {
        if (playerSelection == 'Scissors') {
            if (computerSelection == 'Paper') {
                return "You win! Paper beats scissors!"
            }
            else if (computerSelection == 'Rock') {
                return "You lose! Rock beats scissors!"
            }
            else if (computerSelection == 'Scissors') {
                return "Tie! Scissors + Scissors are too evenly matched!"
            }
        }
        else if (playerSelection == 'Paper') {
            if (computerSelection == 'Scissors') {
                return "You lose! Scissors beats paper!"
            }
            else if (computerSelection == 'Rock') {
                return "You win! Paper beats rock!"
            }
            else if (computerSelection == 'Paper') {
                return "Tie! Paper + Paper are too evenly matched!"
            }    
        }
        else if (playerSelection == 'Rock') {
            if (computerSelection == 'Scissors') {
                return "You win! Rock beats scissors!"
            }
            else if (computerSelection == 'Paper') {
                return "You lose! Paper beats rock!"
            }
            else if (computerSelection == 'Rock') {
                return "Tie! Rock + Rock are too evenly matched!"
            }    
        }
    }}


let playerSelection = prompt('What do you throw?')
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


function game() {
    for (let i = 0; i < 5; i++) { 
        getComputerChoice()
        playRound(playerSelection, computerSelection)
    }
}
