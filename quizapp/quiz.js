var Questions = [
    {"question":" How many computer languages are in use?",
      "option1": "2000",
      "option2": "5000",
      "option3":  "50",
      "option4":  "20",
       "answer":  "1"
    },
    {"question": "Which of these is not an early computer?",
     "option1" : "ENIAC",
     "option2" :"UNIVAC",
     "option3" :"NASA",
     "option4" :"SAGE",
    "answer"  : "3",
    },
    {"question":"Who founded Apple Computer?",
    "option1":"Stephen Fry",
    "option2":"Bill Gates",
    "option3":"Steve Jobs",
    "option4":"Stephen Hawking",
    "answer":"3",
    },
    {"question":"Which of these is not a peripheral, in computer terms?",
    "option1":" Keyboard",
    "option2":"Monitor",
    "option3":"Mouse",
    "option4":"Motherboard",
    "answers":"4",
    
    },
    {"question":"Which of the following is not one of the early “protocols,” or ways to use the Internet?",
    "option1":"Blogging",
    "option2":"Telnet",
    "option3":"Gopher",
    "option4":"FTP",
    "answer":"1",
    },
    ]

var currentQuestion = 0;
var Score = 0;
var totQuestions = Questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question').textContent;
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextbutton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');

function loadQuestion (questionIndex) {
    var q = Questions[questionIndex];
    console.log(q);
    questionEl.textContent = (questionIndex + 1)+ '.'+ q.question;
    opt1.textContent=q.option1;
    opt2.textContent=q.option2;
    opt3.textContent=q.option3;
    opt4.textContent=q.option4;
};

function loadNextQuestion () {
    var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select u r answer');
        return;
    }
    var answer = selectedOption.Value;
    if(questions[currentQuestion].answer==answer){
        score += 1;
    }
    selectedOption.checked=false;
    currentQuestion++;
   if(currentQuestion== totQuestions - 1){
        nextButton.textContent = 'finish';
    }
    if(currentQuestion == totQuestions){
        container.style.display="none"
        resultCont.style.display='';
     resultCont.textContent= 'Your Score: '+ score;
        return;
    }
    loadQuestion(currentQuestion);


}
loadQuestion(currentQuestion);
console.log(loadQuestion)