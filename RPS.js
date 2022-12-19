function getComputerChoice() {
    const number = getRandomNumber()

    switch (number) {
        case 0:
            return 'ROCK';
            break;
        case 1:
            return 'PAPER';
            break;
        case 2:
            return 'SCISSORS';
            break;
        default:
            console.log("Sorry! Something went wrong!")
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection = 'ROCK' && (computerSelection = 'ROCK')) {
    return "Tie. Both used rock."}

}

const playerSelection = string1.toUpperCase("rock") === string2.toUpperCase("ROCK");
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));