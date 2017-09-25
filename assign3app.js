var submit = document.getElementById("submit");
submit.onclick = function () {
    
    var NY = document.getElementById("NY");
    var capital = document.getElementById("capital");
    var lake = document.getElementById("lake");
    var correct = 0;
    var incorrect = 0;
    var message = document.getElementById("message");

    if(NY.value=="5"){
        correct = correct + 1;
        a1.innerText = "Good job!"
    }else{
        incorrect = incorrect + 1;
        a1.innerText = "Wrong answer. Please try again!"
    }
    if(capital.value=="Albany"){
        correct = correct + 1;
        a2.innerText = "Good job!"
    }else{
        incorrect = incorrect + 1;
        a2.innerText = "Wrong answer. Please try again!"
    }
    if(lake.value == "2"){
        correct = correct + 1;
        a3.innerText = "Good job!"
    }else{
        incorrect = incorrect + 1;
        a3.innerText = "Wrong answer. Please try again!"
    }
    
    message.innerText = "You got " + correct + " correct answers."
};