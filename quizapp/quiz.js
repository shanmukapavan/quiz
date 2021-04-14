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
var storage=0;
var Score = 0;
var totQuestions = Questions.length;
var container = document.getElementById('quizContainer');
var questionEl = document.getElementById('question');
var opt1 = document.getElementById('opt1');
var opt2 = document.getElementById('opt2');
var opt3 = document.getElementById('opt3');
var opt4 = document.getElementById('opt4');
var nextbutton = document.getElementById('nextButton');
var resultCont = document.getElementById('result');
var timerBox = document.getElementById('time');

function loadQuestion (questionIndex) {
    var q = Questions[questionIndex];
    questionEl.innerText = (questionIndex + 1)+ '.'+ q.question;
    opt1.innerText=q.option1;
    opt2.innerText=q.option2;
    opt3.innerText=q.option3;
    opt4.innerText=q.option4;
};

function loadNextQuestion () {
     var selectedOption = document.querySelector('input[type=radio]:checked');
    if(!selectedOption){
        alert('please select u r answer');
        return;
    }
    var answer = selectedOption.value;
    console.log("myanswer",answer)
    if(Questions[currentQuestion].answer===answer){
        Score +=1;
    }
    selectedOption.checked=false;
    currentQuestion++;
   if(currentQuestion== totQuestions ){
       sessionStorage.setItem("time",JSON.stringify({m:minutes,s:seconds}))
       storage=JSON.parse(sessionStorage.getItem("time"))
       console.log(storage.m,storage.s);
       nextButton.textContent = 'finish';
       clearInterval(mytime);
    }
    if(currentQuestion == totQuestions){

        container.style.display="none"
        resultCont.style.display='';
        timerBox.style.display='';
       resultCont.innerHTML= 'Your Score: '+ Score;
       timerBox.innerHTML='Time taken:'+ storage.m+":"+storage.s;
        return;
    }
    loadQuestion(currentQuestion);

};

let dt=new Date(new Date().setTime(0));
let time = dt.getTime();
let seconds = Math.floor((time % (100 * 60))/1000);
let minutes = Math.floor((time % (1000* 60 * 60))/1000*60);
let timex = 0;

let mytime=setInterval(function(){
    if(seconds < 59){
        seconds++;
    }
        else{
            minutes++;
            seconds = 0;
        }


    

    // console.log(seconds,minutes);
    let formatted_sec =seconds < 10 ? `0${seconds}` : `${seconds}`;
    let formatted_min =minutes < 10? `0${minutes}`:`${minutes}`;
    document.querySelector("#time").innerHTML=`${formatted_min}:${formatted_sec}`
},1000);


loadQuestion(currentQuestion);
