/*
Create new for computer function
code function to return rock,paper,scissors randomly when user inputs a selection
math.random randomizes numbers. 


 */

const options= ["rock","paper","scissors"];

function getComputerChoice() {
    const compOptions = options [Math.floor(Math.random() * options.length)];
    return compOptions;
}

getComputerChoice()

function checkWinner(humanChoice,computerChoice) {
    if (humanChoice == computerChoice){
        return "Tie!"
    } else if (
        (humanChoice == "rock"  && computerChoice == "scissors")||
        (humanChoice == "scissors"  && computerChoice == "paper")||
        (humanChoice == "paper" && computerChoice == "rock")||
        ){
            return "player1";
        }
        else {
            return "computer";
        }
   
}

function playRound(humanChoice,computerChoice) {

}

