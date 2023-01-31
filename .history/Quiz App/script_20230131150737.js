const quizData = [
  {
    question: "How Old is Taj Mahal?",
    a: "200 Years",
    b: "250 Years",
    c: "300 Years",
    d: "374 Years",
    Correct: "d",
  },
  {
    question: "Which is most used programming language in 2023?",
    a: "Java",
    b: "Python",
    c: "Javascript",
    d: "C++",
    Correct: "c",
  },
  {
    question: "Who is President of India ?",
    a: "Ram Nath Kovind",
    b: "Narendra Modi",
    c: "Draupadi Murmu",
    d: "Mamata Banarjee",
    Correct: "c",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Made Language",
    c: "High Transfer Markup Language",
    d: "None of these",
    Correct: "a",
  },
  {
    question: "In which Year javascript was launched?",
    a: "2000",
    b: "1996",
    c: "1994",
    d: "None of these",
    Corerct: "d",
  },
];

const questionEl =document.getElementById('question');

const a_text = doucment.getElementById('a_text');
const b_text = doucment.getElementById('b_text');
const c_text = doucment.getElementById('c_text');
const d_text = doucment.getElementById('d_text');


let currentQuestion =0;
loadQuiz();
function loadQuiz(){
const currentQuizData = quizData[currentQuestion];
questionEl.innerText=currentQuizData.question;
a_text.innerText= currentQuizData.a;
b_text.innerText= currentQuizData.b;
a_text.innerText= currentQuizData.a;
a_text.innerText= currentQuizData.a;
}