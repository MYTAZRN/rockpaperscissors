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
        return "Tie";
    } else if (
        (humanChoice == "rock"  && computerChoice == "scissors")||
        (humanChoice == "scissors"  && computerChoice == "paper")||
        (humanChoice == "paper" && computerChoice == "rock")
    ){
            return "player1";
        }
        else {
            return "computer";
        }
   
}

function playRound(humanChoice,computerChoice) {
    const result = checkWinner(humanChoice,computerChoice);
    if (result == "Tie"){
        return "It's a Tie!";
    }
    else if (result == "player1"){
        return `You've Won! ${humanChoice} beats ${computerChoice}`;
    } else {
        return `Oh no! You Lost!${computerChoice} beats ${humanChoice}`;
    }
}

function getPlayerChoice(){
    let validateInput = false;
    while( validateInput == false){
        const choice = ["Rock Paper Scissors"]
      if(choice == null)
        continue;
    const choiceInLower=choice.toLowerCase();
    }

}

function playGame(){
    console.log("Play Rock,Paper,Scissors!")
    for (let i = 0; i < 5; i++);
    const humanChoice = "rock";
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice,computerChoice));

}

