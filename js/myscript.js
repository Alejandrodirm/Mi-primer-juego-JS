//https://codepen.io/Draimy/pen/BQBBqL
var score = 0;
function clickBtn() {
  score++;
  document.getElementById("score").innerHTML="Poder Cultivado: " + score;
  if(score>100){
    document.body.style.backgroundColor = "#33E0FF";
  }
  if(score>1000){
    document.body.style.backgroundColor = "#AF33FF";
  }
  if(score>10000){
    document.body.style.backgroundColor = "#FFB833";
  }
}

