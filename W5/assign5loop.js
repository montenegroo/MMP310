    var username = getElementById("username").value;
    var keyword = getElementById("keyword").value;
    var chars = "abcdefghijklmnopqrstuvwxyz123456789";
    var pass= " ";
    var submit = document.getElementById("submit"); 
    
    

var generatePassword = function (){
     for (i=1; i<=number; i++) {
        var length = keyword.length;
        var i = Math.floor(Math.random() * length);
        pass += keyword.charAt(i);
    }
    return pass;
};
submit.onclick = function () {
    document.getElementById("password").innerText = pass;
    
    };
        