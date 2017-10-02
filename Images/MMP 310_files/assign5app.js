var submit = document.getElementById("submit");
submit.onclick = function () {
    
    var 1 = ["dogs","birds","monkeys"];
    var 2 = ["ocean", "mountain","bed"];
    var 3 = ["music","sound", "bass"];
    var 4=["on fire","limitless","go to hell"];
    var getRandomAnswer = function(){
     return 1[Math.floor(Math.random() * possible.length)]; 
    };
     return 2[Math.floor(Math.random() * possible.length)]; 
    };
 return 3[Math.floor(Math.random() * possible.length)]; 
    };
 return 4[Math.floor(Math.random() * possible.length)]; 
    };
    message.innerText = getRandomAnswer();
};