let userScore=0;
let compScore=0;

const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");

const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getCompchoices(){
    const choices = ['r','p','s'];
    const randomNumber =  Math.floor(Math.random()*3);
    return choices[randomNumber];
}

function convertToWord(letter){
if(letter === "r") return "Rock";
if(letter === "p") return "Paper";
return "Scissors";
}

function win(userChoice, compChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    smalluserWord = "USER".fontsize(3).sup();
    smallcompWord = "COMP".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) +smalluserWord +" Beats " +convertToWord(compChoice) +smallcompWord +" You wins!"; 
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('green-glow'),400);
}

function lose(userChoice, compChoice){
    compScore++;
    userScore_span.innerHTML=userScore;
    compScore_span.innerHTML=compScore;
    smalluserWord = "USER".fontsize(3).sup();
    smallcompWord = "COMP".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) +smalluserWord +" Loses to " +convertToWord(compChoice) +smallcompWord +" You lost!";
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('red-glow'),400);         
}

function draw(userChoice, compChoice){
    smalluserWord = "USER".fontsize(3).sup();
    smallcompWord = "COMP".fontsize(3).sup();
    result_p.innerHTML = convertToWord(userChoice) +smalluserWord +" Equals to " +convertToWord(compChoice) +smallcompWord +" You draw!";
    document.getElementById(userChoice).classList.add('gray-glow');
    setTimeout(() => document.getElementById(userChoice).classList.remove('gray-glow'),400); 
}

function game(userChoice){
    const compChoice = getCompchoices();
    switch(userChoice + compChoice){
        case "rs":
        case "sp":
        case "pr":
        win(userChoice, compChoice);
        break;
        case "sr":
        case "ps":
        case "rp":
        lose(userChoice, compChoice);
        break;
        case "ss":
        case "pp":
        case "rr":
        draw(userChoice, compChoice);
        break;
    }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
    console.log("You click rock");
})

paper_div.addEventListener('click',function(){
    game("p");
    console.log("You click paper");
})

scissors_div.addEventListener('click',function(){
    game("s");
    console.log("You click scissors");
})
}

main();