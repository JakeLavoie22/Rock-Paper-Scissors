
const startBtn = document.querySelector(".startGame");

startBtn.addEventListener("click", fiveRoundGame);

const playerScore = document.createElement("p");
const computerScore = document.createElement("p");
const announcement = document.createElement("span");
const choiceButtons = document.querySelectorAll(".choiceBtn");   //select all the buttons that have the .choiceBtn class


function fiveRoundGame(){
    
    resetGame();

    const numberOfRounds = 5;
    let myPoints = 0; 
    let pcPoints = 0;
    let round = 0;   
    let playerSelection = "";  //empty variable for Player's Selection


    const pScoring = document.querySelector("#pScore");
    const pcScoring = document.querySelector("#cScore");
    pScoring.appendChild(playerScore);
    pcScoring.appendChild(computerScore);


    const infoCompliment = document.querySelector(".pointInfoCompliment");
    infoCompliment.appendChild(announcement);


    
    choiceButtons.forEach(button => {             //each time one of the three R,P,S buttons is pressed, attribute its value to playerSelection
        button.addEventListener('click', () => {
        playerSelection = button.id;
        console.log(playerSelection);
        console.log("Round :", round);
        const gameResult = playRound();                    //run a round of the game and attribute the return value to gameResult
        round++;                                           //add a round to the counter
        announcement.textContent = "ROUND " + round;
        getPoints(gameResult);                             //count points
        gameEnd();                                         //run this function after 5th round
        
    })
})


function playRound(){                                          //this is 1 round of the game 

    const computerSelection = getComputerChoice();
    function getComputerChoice(){                              //This determines random choice between R, P, S for computer 
        const arrays = ["rock", "paper", "scissors"];
        return arrays[Math.floor(Math.random()*arrays.length)];
    }
    console.log(computerSelection);
 
    function rules(playerSelection, computerSelection){                            //Game general rules
        if ((playerSelection === "paper" && computerSelection === "rock")
        || (playerSelection === "scissors" && computerSelection === "paper")
        || (playerSelection === "rock" && computerSelection === "scissors")){
            return("You win");
        } else if ((playerSelection === "rock" && computerSelection == "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")){
            return("You lose");
        } else if (playerSelection === computerSelection){
            return("Its a Tie");
        }
    }
    const result = rules(playerSelection, computerSelection); 
    console.log(result);
    return result;
}

function getPoints(gameResult){              //Count points after each round 
    if (gameResult === "You win"){
         myPoints ++;
     } else if (gameResult === "You lose"){
        pcPoints ++;
     }
     playerScore.textContent = myPoints;
     computerScore.textContent = pcPoints;
     console.log(myPoints, pcPoints);
 }


function gameEnd(){                  //Announce end of game, the final outcome, and also disable R, P, S buttons 
    if (numberOfRounds === round){
        console.log("END")
        pointDeclaration();
        choiceButtons.forEach(button => {    //disable all buttons with class ".choiceBtn" (choiceButton variable attributed to this class on line 11)
            button.disabled = true;
        })
    }
}


function pointDeclaration(){                                              //Announce outcome of whole game
    if (myPoints > pcPoints){
        announcement.textContent = "You won this game " + myPoints + " to " + pcPoints;
        console.log("You win this game ", myPoints, " to ", pcPoints);
    } else if (myPoints === pcPoints){
        announcement.textContent = "It's a Tie: " + myPoints + " to " + pcPoints;
        console.log("This game is a TIE !: ", myPoints, " to ",pcPoints);
    }
     else {
        announcement.textContent = "You lost this game " + myPoints + " to " + pcPoints;
        console.log("You lost this game ", myPoints, " to ",pcPoints);
    }
}

}

function resetGame(){
    choiceButtons.forEach(button => {    //re-enable all buttons with class ".choiceBtn" (choiceButton variable attributed to this class on line 11)
        button.disabled = false;
    })
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    announcement.textContent = "";
    myPoints = 0;
    pcPoints = 0;
}






 

