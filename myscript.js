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
        const choice = prompt ("Rock Paper Scissors")
      if(choice == null){
        continue;
    }
    const choiceInLower = choice.toLowerCase();
      if( options.includes (choiceInLower) ){
        validateInput == true;
        return choiceInLower;
      }
    }

}

function playGame(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    console.log("Play Rock,Paper,Scissors!")
    for (let i = 0; i < 5; i++); {
    const humanChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    console.log(playRound(humanChoice,computerChoice));
    console.log("-------");
    if (checkWinner(humanChoice,computerChoice) == "Player1"){
        scorePlayer++;
    } 
    else if (checkWinner(humanChoice,computerChoice) == "computer"){
        scoreComputer++;
    }
    console.log("Game Over!")
    if (scorePlayer > scoreComputer){
        console.log("Player was the winner!");}
    else if (scorePlayer < scoreComputer){
        console.log("Computer was the winner!");}     
    else {
        console.log("We have a tie!");
    }
 }
}


playGame()