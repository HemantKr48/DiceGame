const newgame = document.getElementById("new_game");
const rolldicebtn = document.getElementById("roll_dice");
const holdbtn = document.getElementById("hold");
const firstPlayerCurrentScore = document.getElementById("1");
const secondPlayerCurrentScore = document.getElementById("2");
const player1score = document.getElementById("player1_score");
const player2score = document.getElementById("player2_score");
const player1=document.querySelector(".player1");
const player2=document.querySelector(".player2");
const dice = [1, 2, 3, 4, 5, 6];
let randomNumber1 = Math.trunc(Math.random() * 2) + 1;

console.log(randomNumber1);

let score1 = 0;
let score2 = 0;

rolldicebtn.addEventListener("click", function () {
  let randomNumber = Math.trunc(Math.random() * dice.length) + 1;

  console.log(randomNumber);
  if (randomNumber1 === 1) {
    if (randomNumber === 1) {
      firstPlayerCurrentScore.textContent = 0;
      score1 = 0;
    } else {
        
      score1 += randomNumber;
      player1win();
      firstPlayerCurrentScore.textContent = score1;
    }
  } else {
    if (randomNumber === 1) {
      secondPlayerCurrentScore.textContent = 0;
      score2 = 0;
    } else {
        
      score2 += randomNumber;
      player2win();
      secondPlayerCurrentScore.textContent = score2;
    }
  }
});

holdbtn.addEventListener("click", function () {
  if (randomNumber1 == 1) {
    randomNumber1 = 2;
    firstPlayerCurrentScore.textContent = 0;
    player1score.textContent = score1;
  } else {
    randomNumber1 = 1;
    player2score.textContent = score2;
    secondPlayerCurrentScore.textContent = 0;
  }
});

function player1win(){
    if(score1>20){
console.log("player1 wins");
player1.style.backgroundColor="black";
    }
}

function player2win(){
    if(score2>20){
        console.log("player2 wins");
        player2.style.backgroundColor="black";
    }
}

newgame.addEventListener("click",function(){
  if(randomNumber1===1){
    score1=0;
    firstPlayerCurrentScore.textContent=score1;
    player1score.textContent=score1;
    player1.style.backgroundColor="aqua";
  }
  else{
    score2=0;
    secondPlayerCurrentScore.textContent=score2;
    player2score.textContent=score2;
    player2.style.backgroundColor="aquamarine";
  }
})
