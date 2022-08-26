function play(){
    getQuote();
    document.getElementById("score-number").innerHTML = "0"
}

async function getQuote()
{
  const api_url ="https://cors-anywhere.herokuapp.com/https://zenquotes.io?api=random";
  const response = await fetch(api_url);
  var data = await response.json();
  document.getElementById("p1").innerHTML = data["0"]["q"];
}

function checkAnswer(score){
  answer = document.getElementById("answer").value.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
  control = document.getElementById("p1").innerHTML.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()\s]/g,"").toLowerCase();
  if(control == answer){
    document.getElementById("answer-status").style.color = "Green";
    document.getElementById("answer-status").innerHTML = "Correct!";
    incrementScore();
    getQuote();
    document.getElementById("answer").value = "";
  }
  else{
    document.getElementById("answer-status").style.color = "Red";
    document.getElementById("answer-status").innerHTML = "Wrong!";

  }
}

function incrementScore(score){
    score = parseInt(document.getElementById("score-number").innerHTML);
    score++;
    document.getElementById("score-number").innerHTML = `${score}`
}