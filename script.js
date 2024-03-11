let enterName = prompt("Please enter your name");
let playerGuess;
let playerFeedback = "test";
let computerGuess;
loadDIV ();

if (enterName =="Aidan Vu")
    enterName = "Shortass"

function loadDIV () {
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "<H1>"
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML +
document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML +



}



















function loadDIV () {
    document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName + "<H1><H2>Guess a number from 1 to 10 please<H2>"
}
else { 
document.getElementById("ScriptThisDIV").innerHTML = "<H1>Hello " + enterName +"<H1><H2>Guess a number from 1 to 10 please<H2>"
}