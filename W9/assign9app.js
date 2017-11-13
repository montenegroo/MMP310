var submit = document.getElementById("submit");
submit.onclick = function () 
    {
    /*itterate through questions*/    
    if(i>allQuestions.length -1){/*go to first when reached last*/
       i=0;       
    }    
    populateQuestion(i);
    i++;
};
    var allQuestions = [{
    question: 'How many boroughs are there in NYC?',
    choices: [6,5,3],
    correctAnswer: 1
},
{
    question: 'What is the capital of New York ',
    choices: ['Albany', 'NYC', 'Buffalo'],
    correctAnswer: 0
},
{
    question: 'How many great lakes border New York State',
    choices: [4,1,2],
    correctAnswer: 2
}];  

    var selectionList = document.getElementById('selectionList');
    
    var i = 0;
var length1 = allQuestions.length;
var correctAnswer = 0;

    
    
function populateQuestion(qNum) {
    var individualQuestion = allQuestions[i];
    questionTitle.innerText = individualQuestion.question;

  
}
function createLi(name, choiceText) {
        var e = document.createElement('li');
        var radioHtml = '<input type="radio" name="' + name + '"';    
        radioHtml += '/>';
        radioHtml += choiceText;        
        e.innerHTML = radioHtml;        
        return e;
    }
//    function Quiz (Q1,Q2,Q3){
//     this.Q1 = option1, option2, option3;
//        return this.Q1.option1;
//     this.Q2 = option1, option2, option3;
//        return this.Q1.option1;
//     this.Q3 = option1, option2, option3;
//    };
//    var Q1Quiz = new quiz( 6, 5, 3);
//    var Q2Quiz = new quiz("Albany","NYC","Buffalo");
//    var Q3Quiz = new quiz( 4, 1, 2);
//    
//    
//     
//    var NY = document.getElementById("NY");
//    var capital = document.getElementById("capital");
//    var lake = document.getElementById("lake");
//    var correct = 0;
//    var incorrect = 0;
//    var message = document.getElementById("message");
//
//    if(NY.value=="5"){
//        correct = correct + 1;
//        a1.innerText = "Good job!"
//    }else{
//        incorrect = incorrect + 1;
//        a1.innerText = "Wrong answer. Please try again!"
//    }
//    if(capital.value=="Albany"){
//        correct = correct + 1;
//        a2.innerText = "Good job!"
//    }else{
//        incorrect = incorrect + 1;
//        a2.innerText = "Wrong answer. Please try again!"
//    }
//    if(lake.value == "2"){
//        correct = correct + 1;
//        a3.innerText = "Good job!"
//    }else{
//        incorrect = incorrect + 1;
//        a3.innerText = "Wrong answer. Please try again!"
//    }
//    
//    message.innerText = "You got " + correct + " correct answers."
//function () {};