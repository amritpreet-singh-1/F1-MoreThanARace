const d_username = "Amrit@proj.ca";
const d_password = "123";

// cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}


function getCookie(cname) {
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1);
    if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
}
return "";
}


// login buton
$(document).ready(function(){
    $("#btnLogin").click(function(){ 
        let username = $("#usernameLogin").val();
        let password = $("#passwordLogin").val();

        if((username == "") || (password == "")){
            alert("Please enter the username and password");
        }
            else if(username == d_username && password == d_password){
                //alert("Success");
                //setCookie("username: ", username, 1 ); // setting cookie
                window.open("../pages/home.html", "_self", true);
            }
            else{
                alert("try again");
            }  
        
           
    }); 
});