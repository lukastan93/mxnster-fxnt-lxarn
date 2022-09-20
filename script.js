const api_url ="https://api.quotable.io/random";
var previousFont = "sans-serif";

function play(){
  getQuote();
  document.getElementById("p1").style.fontFamily = "Mxnster";
  document.getElementById("score-number").innerHTML = "0"
}

async function getapi(url)
{
  const response = await fetch(url, {mode: 'cors'});
  var data = await response.json();
  text = data["content"];
  return text;
}


async function getQuote()
{
  quote = await getapi(api_url);
  document.getElementById("p1").innerHTML = quote;
}

function checkAnswer(score){
  answer = document.getElementById("answer").value.replace(/[\W]+/g,"").toLowerCase();
  control = document.getElementById("p1").innerHTML.replace(/[\W]+/g,"").toLowerCase();
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

function switchFont(){
       font = document.getElementById("p1").style.fontFamily;
       previousFont == "sans-serif" ? document.getElementById("p1").style.fontFamily = "sans-serif" : document.getElementById("p1").style.fontFamily = previousFont;
       previousFont = font;
}

function switchMxnster(){
  document.getElementById("p1").style.fontFamily = "Mxnster";
  previousFont = "sans-serif";
}

function switchDemxn(){
  document.getElementById("p1").style.fontFamily = "Demxn";
  previousFont = "sans-serif";
}

function switchAlixn(){
  document.getElementById("p1").style.fontFamily = "Alixn";
  previousFont = "sans-serif";
}