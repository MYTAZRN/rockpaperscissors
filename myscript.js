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

function playRound(humanChoice,computerChoice) {
    
}

