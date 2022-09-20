const api_url ="https://zenquotes.io/api/random/";

function play(){
  getQuote();
  document.getElementById("p1").style.fontFamily = "Mxnster";
  document.getElementById("score-number").innerHTML = "0"
}

async function getapi(url)
{
  const response = await fetch(url, {mode: 'cors'});
  var data = await response.json();
  console.log(data);
}


async function getQuote()
{
  quote = getapi(api_url)["q"];
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

// function pickQuote(){
//   let item = quotes[Math.floor(Math.random()*quotes.length)]["quote"];
//   return item;
// }

function switchFont(){
       font = document.getElementById("p1").style.fontFamily;
       font == "Mxnster" ? document.getElementById("p1").style.fontFamily = "sans-serif" : document.getElementById("p1").style.fontFamily = "Mxnster";
}