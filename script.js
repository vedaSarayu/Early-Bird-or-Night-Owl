//Store Variables

var dayScore = 0;
var nightScore = 0;

var result =  document.getElementById("result")
var restart = 
  document.getElementById("restart")
var count = 0;


var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");


var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");

//Interactive buttons. This is where buttons get the "click"
q1a1.addEventListener("click", day);
q1a2.addEventListener("click", night);

q2a1.addEventListener("click", night);
q2a2.addEventListener("click", day);

q3a1.addEventListener("click", day);
q3a2.addEventListener("click", night);

restart.addEventListener("click", restart);

//Function
function day() {
  dayScore += 1;
  count += 1;
  console.log("count = " + count + "dayScore =" + dayScore);

  if (count == 3) {
    console.log("done");
   updateResult();

  }
}

function night() {
  nightScore += 1;
  count += 1;
  console.log("count = " + count + "nightScore = " + nightScore);
  if (count == 3) {
    console.log("done");
    updateResult();
  }
}

function updateResult(){
 if (dayScore>=2 ){
  result.innerHTML = "You are a Morning Person!";
   console.log("You are a Morning Person");
}else if (nightScore>=2) {
  console.log("You are a Night Owl");
   result.innerHTML = "You are a Night Person!";
} 
}


  


