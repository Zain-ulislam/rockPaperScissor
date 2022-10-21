const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorBtn = document.getElementById("scissor-btn");

const userChoice = document.getElementById("user-choice");
const computerChoice = document.getElementById("computer-choice");
const result = document.getElementById("result");

const userScore = document.getElementById("user-score");
const computerScore = document.getElementById("computer-score");

let cmpScore = 0;
let usrScore = 0;





 

const increment = (string)=>{
    if(string=="computer")
    {
        cmpScore++;
        computerScore.innerHTML=cmpScore;
    }
else if (string=="user")
{
    usrScore++;
    userScore.innerHTML=usrScore;
}
}

const rungame = (name) => {
  const userInput = name;
  const values = ["Rock", "Paper", "Scissor"];

  const randomNumber = Math.floor(Math.random()*3);

  const computerInput = values[randomNumber];





  userChoice.innerHTML="You pick: " + userInput;
  computerChoice.innerHTML="Computer pick: " + computerInput;






  if(userInput=="Rock")
  {
    if(computerInput=="Rock")
    {
        result.innerHTML = "Draw";
    }
  
  else if(computerInput=="Paper")
  {
    result.innerHTML = "You lose";
    increment("computer");
  }
  else{
    result.innerHTML = "You Won";
    increment("user");
  }
  }

  if(userInput=="Paper")
  {
    if(computerInput=="Paper")
    {
        result.innerHTML = "Draw";
    }
  
  else if(computerInput=="Scissor")
  {
    result.innerHTML = "You lose";
    increment("computer");
  }
  else{
    result.innerHTML = "You Won";
    increment("user");
  }}

  if(userInput=="Scissor")
  {
    if(computerInput=="Scissor")
    {
        result.innerHTML = "Draw";
    }
  
  else if(computerInput=="Rock")
  {
    result.innerHTML = "You lose";
    increment("computer");
  }
  else{
    result.innerHTML = "You Won";
    increment("user");
  }}

}
rockBtn.addEventListener("click",()=>{
    rungame("Rock");
})

paperBtn.addEventListener("click",()=>{
    rungame("Paper");
})

scissorBtn.addEventListener("click",()=>{
    rungame("Scissor");
})
