var highScore = document.getElementById("high-scores");
 var questionEl = document.getElementById("questions");
 var startButton = document.getElementById("start-button");
 var beginEl = document.getElementById("start-screen");
 var questionChoice = document.getElementById("choices");
 var endscreen = document.getElementById("end-screen")
 var currentQuestion = 0
 var score = 0;
 var answerEl = document.getElementById("answer");
 var timeLeft = 75;
 var timerEl = document.getElementById("time"); 
 var submitScore = document.getElementById("scores")
 var scores = document.getElementById("score");
 var highScores = document.getElementById("high-scores");
 var header = document.getElementById("header");
 var back = document.getElementById("back");
 var clear = document.getElementById("clear");
 var initials = document.getElementById("initials");
 var storedScore = document.getElementById("stored-score")

 var count =  localStorage.getItem("scores")
 
 
 function checkAnswer(){
    console.log(this.dataset.value)
    //answerEl.textContent = ""
    if (this.dataset.value === questions[currentQuestion].answer){
        
                 //answerEl.textContent = "Correct!"
                 currentQuestion+=1
                 updateQuestion()
             } else {
                
                // answerEl.textContent = "Wrong!"
                 currentQuestion+=1
                 updateQuestion()
                 timeLeft-=10
             }
 }

 function updateQuestion() {
    questionChoice.textContent = questions[currentQuestion].question;
    for (let index = 0; index < questions[currentQuestion].choices.length; index++) {
        
        var button = document.createElement("button")
        button.textContent = questions[currentQuestion].choices[index]
        button.setAttribute("data-value",questions[currentQuestion].choices[index])
        button.addEventListener("click",checkAnswer)
        questionChoice.appendChild(button)
    }
   if (currentQuestion === questions.length-1){
    lastScreen()
   }

//     questionAns1.textContent = questions[currentQuestion].choices[0];
//     questionAns2.textContent = questions[currentQuestion].choices[1];
//     questionAns3.textContent = questions[currentQuestion].choices[2];
//     questionAns4.textContent = questions[currentQuestion].choices[3];
//     finalQuestion.textContent = questions[currentQuestion].choices[4];
// 
 }

function lastScreen (){
   questionEl.classList.add("hide")
   endscreen.classList.remove("hide") 
} 

function startTimer() {
   timeInterval = setInterval(function () {
       timeLeft--;
       timerEl.textContent = "Time: " + timeLeft;

       if (timeLeft < 0) {
           displayScore(score);
           clearInterval(timeInterval);
       }
   }, 1000);
}

startButton.onclick = startTimer


function totalScore() {
   if (timeLeft < 0) {
       timeLeft === 0;
   }
   console.log(timeLeft);
   return score = timeLeft;
}


function displayScore(s) {
   questionEl.classList.add("hide")
   submitScore.classList.remove("hide")
}

function storeScore(s) { 
   submitScore.classList.add("hide")
   highScores.classList.remove("hide")
}


 
 startButton.addEventListener("click", function(event){
     beginEl.classList.add("hide");
     questionEl.classList.remove("hide");
     updateQuestion()
 })
 
//  questionAns1.addEventListener("click", function(event){
//      console.log("clicked1")
//      if (0 === questions[currentQuestion].answer){
//          answerEl.textContent = "Correct!"
//          currentQuestion+=1
//          updateQuestion()
//      } else {
//          answerEl.textContent = "Wrong!"
//          currentQuestion+=1
//          updateQuestion()
//          timeLeft-=10
//      }
//  });
//  questionAns2.addEventListener("click", function(event){
//      console.log("clicked2") 
//      if (1 === questions[currentQuestion].answer){
//          answerEl.textContent = "Correct!"
//          currentQuestion+=1
//          updateQuestion()
//      } else {
//          answerEl.textContent = "Wrong!"
//          currentQuestion+=1
//          updateQuestion()
//          timeLeft-=10
//      }
//  });
//  questionAns3.addEventListener("click", function(event){
//      console.log("clicked3") 
//      if (2 === questions[currentQuestion].answer){
//          answerEl.textContent = "Correct!"
//          currentQuestion+=1
//          updateQuestion()
//      } else {
//          answerEl.textContent = "Wrong!"
//          currentQuestion+=1
//          timeLeft-=10
//          updateQuestion()
//      }
//  });
//  questionAns4.addEventListener("click", function(event){
//      console.log("clicked4") 
//      if (3 === questions[currentQuestion].answer){
//          answerEl.textContent = "Correct!"
//          currentQuestion+=1
//          updateQuestion()
//      } else {
//          answerEl.textContent = "Wrong!"
//          currentQuestion+=1
//          timeLeft-=10
//          updateQuestion()
//      }
//  });
//  finalQuestion.addEventListener("click", function(event){
//      console.log("clicked5")
//      if (4 === questions[currentQuestion].answer){
//          answerEl.textContent = "Correct!"
//          displayScore()
//      } else {
//          answerEl.textContent = "Wrong!"
//          timeLeft-=10
//          displayScore()
//      }
//  });
 
 
