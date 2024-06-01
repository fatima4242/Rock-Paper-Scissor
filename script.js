let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".image");
const message = document.querySelector("#msg");
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#computer-score");

const genComputerChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
}

const drawGame = () => {
    console.log("Game was draw");
    message.innerText = "Game was draw. Try again."
    message.style.backgroundColor = "#081b31";
}

const showWinner = (userWin, userChoice, computerChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        message.innerText = `You win! Your ${userChoice} beats ${computerChoice}`;
        message.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScorePara.innerText = compScore;
        message.innerText = `You lost! ${computerChoice} beats your ${userChoice}`;
        message.style.backgroundColor = "red";
    }
}

const playGame = (userChoice) =>{
    console.log("user choice = ",userChoice);
    const computerChoice = genComputerChoice();
    console.log("computer choice = ",computerChoice);
    if(userChoice === computerChoice)
        drawGame(); 
    else{
        let userWin = true;
        if(userChoice === "rock")
            userWin = computerChoice === "paper" ? false : true;
        else if(userChoice === "paper")
            userWin = computerChoice === "scissors" ? false : true;
        else
            userWin = computerChoice === "rock" ? false : true;
        showWinner(userWin, userChoice, computerChoice);
        } 
    }

choices.forEach((image) => {
    image.addEventListener("click", () => {
        const userChoice = image.getAttribute("id");
        console.log("Choice was clicked", userChoice);
        playGame(userChoice);
    })
})