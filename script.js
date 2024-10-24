let questions = [{
"question": "Was ist kein Content Management System (CMS)",
"answer_1": "Javascript",
"answer_2": "Joomla",
"answer_3": "TYPO3",
"answer_4": "cURL",
"right_answer": 4
},
{
"question": "Wie nennt man den Text in dem Computerprogramme geschrieben werden?",
"answer_1": "Geheimtext",
"answer_2": "Quelltext",
"answer_3": "Ausführungstext",
"answer_4": "Funktionstext",
"right_answer": 2 
},
{
"question": "In welche Jahr wurde die erste höhere Programmiersprache Plankalkül eingeführt?",
"answer_1": "1954",
"answer_2": "1958",
"answer_3": "1946",
"answer_4": "1961",
"right_answer": 3 
},
{
"question": "Wofür steht die Abkürzung HTML?",
"answer_1": "Hypertext Message Language",
"answer_2": "Hypertext Meta Language",
"answer_3": "Hypertext Model Language",
"answer_4": "Hypertext Markup Language",
"right_answer": 4    
},
{
"question": "Welchen Wert hat die vorzeichenlose Binärzahl 11111110 im Dezimalsystem?",
"answer_1": "127",
"answer_2": "254",
"answer_3": "1",
"answer_4": "15",
"right_answer": 2  
}
];

let currentQuestion = 0;

function init(){
    document.getElementById('all-questions').innerHTML = questions.length;
showQuestion()
}

function showQuestion(){
    if(currentQuestion >= questions.length){
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none';
    }else{
let question = questions[currentQuestion];
document.getElementById("question-number").innerHTML = currentQuestion +1;
document.getElementById('questiontext').innerHTML = question['question'];
document.getElementById('answer_1').innerHTML = question['answer_1'];
document.getElementById('answer_2').innerHTML = question['answer_2'];
document.getElementById('answer_3').innerHTML = question['answer_3'];
document.getElementById('answer_4').innerHTML = question['answer_4'];
    }
}

function answer(selection){ //selection definiere ich hier neu und kommt aus dem HTML onclick="answer('answer_1')"
    let question = questions[currentQuestion]; // übersetzt bedeutet das, dass ich in mein JSON Array gehe und currentQuestion also 0 auswähle (1. Datenblock Frage)
    let selectedQuestionNumber = selection.slice(-1) // ich nehme aus meinem html "answer_x" den letzten Buchstaben 1 bis 4
    let idOfRightAnswer = `answer_${question['right_answer']}`

    if(selectedQuestionNumber == question['right_answer']){
        console.log('richtig!')
        document.getElementById(selection).parentNode.classList.add('bg-success')
    }
    else{
        console.log('falsch!')
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
    
}

function nextQuestion(){
    currentQuestion++
    showQuestion();
    resetAnswerButtons();
}

function resetAnswerButtons(){
    document.getElementById('next-button').disabled = true;
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_1').parentNode.classList.remove('bg-success');
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_2').parentNode.classList.remove('bg-success');
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_3').parentNode.classList.remove('bg-success');
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer_4').parentNode.classList.remove('bg-success');
}