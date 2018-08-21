let targetNumber = Math.floor(Math.random() * 10) + 1;
let guesses = 1;

function init () {
    console.log(targetNumber);
	document.getElementById("submitBtn").onclick = function(){
	   var number = document.getElementById("number").value;
	   check(number);
	};
}

function check (value) {
  console.log("Checking...");
  if (value == targetNumber) {
      showWin();
  }else if(value != targetNumber && guesses > 4){
      showLoss();
  }else if (value != targetNumber){
      showError();
      guesses++;
  }
}

function showWin () {
  console.log("You Win!");
  document.body.innerHTML = "<p>You Win!</p>";
}

function showError () {
  console.log("Wrong Number!");
  document.getElementById("message").innerHTML = "Wrong Number!";
}

function showLoss () {
  console.log("You Lose!");
  document.body.innerHTML = "<p>You Lose!</p>";
}

window.onload = function(){
    init();
}
