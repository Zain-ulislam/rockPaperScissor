const rockBtn = document.getElementById("rock-btn");
const paperbtn = document.getElementById("paper-btn");
const scissorbtn = document.getElementById("scissor-btn");

const userchoice = document.getElementById("user-choice");
const computerchoice = document.getElementById("computer-choice");
const result = document.getElementById("result");

const userscore = document.getElementById("user-score");
const computerscore = document.getElementById("computer-score");

let cmpscore = 0;
let usrscore = 0;





 

const increment = (string) => {
    if(string=="computer")
    {
        cmpscore++;
        computerscore.innerHTML=cmpscore;
    }
else if (string=="user")
{
    usrscore++;
    userscore.innerHTML=usrscore;
}
}

const rungame = (name) => {
  const userinput = name;
  const values = ["Rock", "Paper", "Scissor"];

  const randomnumber = Math.floor(Math.random() * 3);

  const computerinput = values[randomnumber];





  userchoice.innerHTML="You pick: " + userinput;
  computerchoice.innerHTML="Computer pick: " + computerinput;






  if(userinput=="Rock")
  {
    if(computerinput=="Rock")
    {
        result.innerHTML = "Draw";
    }
  }
  else if(computerinput=="Paper")
  {
    result.innerHTML = "You lose";
    increment("Computer");
  }
  else{
    result.innerHTML = "You Won";
    increment("user");
  }


  if(userinput=="Paper")
  {
    if(computerinput=="Paper")
    {
        result.innerHTML = "Draw";
    }
  }
  else if(computerinput=="Scissor")
  {
    result.innerHTML = "You lose";
    increment("Computer");
  }
  else{
    result.innerHTML = "You Won";
    increment("user");
  }

  if(userinput=="Scissor")
  {
    if(computerinput=="Scissor")
    {
        result.innerHTML = "Draw";
    }
  }
  else if(computerinput=="Rock")
  {
    result.innerHTML = "You lose";
    increment("Computer");
  }
  else{
    result.innerHTML = "You Won";
    increment("user");
  }

}
rockBtn.addEventListener("click",()=>{
    rungame("Rock");
})

paperbtn.addEventListener("click",()=>{
    rungame("Paper");
})

scissorbtn.addEventListener("click",()=>{
    rungame("Scissor");
})
