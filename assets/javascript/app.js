function init() {

  z = 0;
  y = 0;
}

var correctAnswers = 0;

var incorrectAnswers = 0;

var playerKey = document.getElementById("answer");

document.onkeyup = function (event) {

  var e = event.key;

      playerKey.value = e;

};

$("#hideDirections").click(function() {
  $("#hidden").slideToggle("slow");
})
$("#exit").click(function () {
  $("#hidden").slideToggle("slow");
})

var n = 60;

var intervalId;

function countDown() {

  if (!intervalId) {

      intervalId = setInterval(decrement, 1000);
  }
}

function decrement() {
  n--;

  $('#countdown').fadeOut(300, function () {
       $('#countdown').text(n);
       $('#countdown').show();
   });


  if (n === 0) {

      reset();

  }
}

countDown();


var questions = [

  {

      q: "If the electronegativity difference between 2 atoms is higher than __________ it is an ionic bond?",
      a: { 0: "1.67", 1: "2.10", 2: "3.21", 3: "0.5" },
      ca : 1

  },

  {

      q: "For an electron with an angular momentum quantum number equal to 4, which of the following is a plausible set for the other three quantum numbers for a given atom??",
      a: { 0: "n = 3 , ml = 2 , s = 1/2", 1: "n = 5 , ml = -5 , s = -1/2", 2: "n = 6 , ml = 0 , s = -1", 3 : "n = 7 , ml = -3 , s = 1/2" },
      ca: 4

  },

  {

      q: "Which of the following molecules contains an ionic bond?",
      a: { 0: "O2", 1: "NaCN", 2: "H2O", 3: "CH4" },
      ca: 2

  },

  {

      q: "Which of the following is the hybridization for the nitrogen in HNO3?",
      a: { 0: "sp", 1: "sp2", 2: "sp3", 3: "sp4" },
      ca: 2

  },

  {

      q: "Which of the following is the hybridization of the oxygen in H3O+?",
      a: {  0: "sp", 1: "sp2", 2: "sp3", 3: "sp4" },
      ca: 3

  },

  {

      q: "What is the relationship between two vectors if one is a nonzero multiple of the other?",
      a: { 0: "They are parallel", 1: "They are perpendicular", 2: "They are 'Alabama cousins'...", 3: "No relationship" },
      ca: 1

  },

  {

    q: "Write: the limit as x approaches 'a' of the function of 'x' is equal to 'L'?",
    a: { 0: "lim(x->a) f(x)=L", 1: "lim[f(x)=L(x->a)]", 2: "lim(f(x)=L)(x->a)" },
    ca: 1

  },

  {

      q: "Solve the following: lim (x->-2) (x^3+8)/(x+2) ?",
      a: { 0: "22.00", 1: "2.50", 2: "12.00", 3: "7.72" },
      ca: 3

  },

  {

      q: "The function f(x) = 2x^2 + x - 5 has exactly one real zero. It is between:",
      a: { 0: "1 and 2", 1: "3 and 4", 2: "5 and" },
      ca: 1

  },
]
var lastQuestion = questions[questions.length - 1];

var questionObject = questions.length;
z = 0;

var gq = function() {

  if(z < questionObject) {

      $("#game-question").text(questions[z].q);

  } else {

      $('#countdown').text("");

      clearInterval(intervalId);

      setTimeout(function () { flip(); }, 1000);

      $("#so").on("click", function() {

          window.location.reload(false);
      })
  }

}

gq();

function clearList() {

  $("#answers").empty();

  playerKey.value = "";
}



y = 0;

var ga = function() {

  clearList();

  var size = Object.keys(questions[y].a).length;

  for(i = 0; i < size; i++) {

      $("#answers").append("<li>" + questions[y].a[i] + "</li>");

  }
}

ga();

function resetClock() {

  clearInterval(intervalId);

  intervalId = null;

  n=60;

  countDown();
}

function checkAnswer() {


  if (playerKey.value == questions[y].ca) {

      correctAnswers++;

      $("#solution").text("Correct!").css({"display" : "block", "color" : "black"});;

      setTimeout(function () {

          $("#solution").text("").css("display", "none");

      }, 1000);

  } else {

      incorrectAnswers++;

      $("#solution").html("Incorrect!<br>The correct answer is: " + questions[y].ca).css({"display" : "block", "color" : "red"});

      setTimeout(function () {

          $("#solution").text("").css("display", "none");

      }, 5000);
    }
}

$("#result").on("click", function () {

  checkAnswer();

  z++;

  gq();

  y++;

  ga();

  resetClock();

})
function reset() {
  checkAnswer();

  z++;

  gq();

  y++;

  ga();

  resetClock();
}

function flip() {

  $('.screen-1,.screen-2').toggle();

  $("#correct").text("Correct Answers: " + correctAnswers);

  $("#incorrect").text("Incorrect Answers: " + incorrectAnswers);
}
