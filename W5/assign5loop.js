var submit = document.getElementById("submit"); 
    submit.onclick = function () {
    
    var username = prompt("Please Enter Username");
    var charset = prompt("Enter Number Of Characters");
    var keyword = prompt("Enter Keyword")
    var pass = "";
        
//    var length = 8;
//    var charset = "abcdefghijklmnopqrstuvwxyz123456789";
        
    
function genderatePassword{
    for(var i = 0; i < length; i++;){
       var i =(Math.floor(Math.random() * charset.length ));
        pass += keyword.charAt(charset);
    }
     return pass;   
    }
function generate(){
    document.getElementById("password").innerHTML = generatePassword();
    
    };
        
};