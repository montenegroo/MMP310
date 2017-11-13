var submit = document.getElementById("submit");
submit.onclick = function () {
    var username = getElementById("username").value;
    var keyword = getElementById("keyword").value;
    var chars = "abcdefghijklmnopqrstuvwxyz123456789";
    var pass = " ";
    
    

var pass= function generatePassword{
     for ( i=1; i<=number; i++) {
        var length = keyword.length;
        var i = Math.floor(Math.random() * length);
        pass += keyword.charAt(i);
    };
    return pass;
};

    document.getElementById("password").innerText = pass;

        