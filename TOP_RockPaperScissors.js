/* Game of rock paper scissors against the computer. Player will play one round 


*/
let myPoints = 0; 
let pcPoints = 0;
const numberOfRounds = 5;

for (let i = 0 ; i < numberOfRounds; i++){       // Run the game for # rounds 
    const result = playGame();                  // result of each round is stored in playGame()
    console.log("Round ",i);                   // print round number in terminal 
    getPoints(result);                        // count points based on string returned in each round 
    console.log("Points: ",myPoints, pcPoints);
    if (result === "Unrecognized entry"){    // Dont consider round count if input is unrecognized 
        i--;
    }
}

pointDeclaration(); // Print game results in terminal 



function pointDeclaration(){
    if (myPoints > pcPoints){
        console.log("You win ", myPoints, " to ",pcPoints);
    } else if (myPoints === pcPoints){
        console.log("TIE !: ", myPoints, " to ",pcPoints);
    }
     else {
        console.log("You lost ", myPoints, " to ",pcPoints);
    }
}

function playGame(){  //this is 1 round of game 
    const playerSelection = prompt("Enter rock, paper, or scissors").toLowerCase();
    const computerSelection = getComputerChoice();

    function getComputerChoice(){      //this determines random choice for computer 
        const arrays = ["rock", "paper", "scissors"];
        return arrays[Math.floor(Math.random()*arrays.length)]
    }
 
    function playRound(playerSelection, computerSelection){    //rules
        if ((playerSelection === "paper" && computerSelection === "rock") || (playerSelection === "scissors" && computerSelection === "paper") || (playerSelection === "rock" && computerSelection === "scissors")){
            return("You win");
        } else if ((playerSelection === "rock" && computerSelection == "paper") || (playerSelection === "paper" && computerSelection === "scissors") || (playerSelection === "scissors" && computerSelection === "rock")){
            return("You lose");
        } else if (playerSelection === computerSelection){
            return("Its a Tie");
        } else {
            return("Unrecognized entry");
        }
    }
    const result = playRound(playerSelection, computerSelection); 
    console.log(result);
    return result;
}

function getPoints(result){
   if (result === "You win"){
        myPoints ++;
    } else if (result === "You lose"){
       pcPoints ++;
    }
}