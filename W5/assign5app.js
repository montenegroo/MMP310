var submit = document.getElementById("submit");
   
    
   
submit.onclick = function () {
 
    
     var x = ["dogs"," birds","monkeys","the waves"];
    var y= ["ocean", " mountain","bed"];
    var z = ["music"," sound", "bass"];
    var z2=["on fire","limitless","go to hell"];

    
  var getRandomAnswer = function(){
        return  x[Math.floor(Math.random() * x.length)];
      
  };
   var getRandomAnswer2 = function(){
     return y[Math.floor(Math.random() * y.length)]; 
   };
    var getRandomAnswer3 = function(){
    return z[Math.floor(Math.random() * z.length)]; 
    };
     var getRandomAnswer4 = function(){
     return z2[Math.floor(Math.random() * z2.length)]; 
   };
    
    document.getElementById("a").innerHTML = getRandomAnswer();
    document.getElementById("b").innerHTML = getRandomAnswer2();
    document.getElementById("c").innerHTML = getRandomAnswer3();
    document.getElementById("d").innerHTML = getRandomAnswer4();
//    a.innerText = getRandomAnswer();
//    b.innerText = getRandomAnswer2();
//    c.innerText = getRandomAnswer3();
//    d.innerText = getRandomAnswer4();
    
};