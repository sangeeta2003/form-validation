let username = document.getElementById("User-Name");
let password = document.getElementById("password");
let flag = 1;
function validateFrom(){
   if(username.value == ""){
    document.getElementById("usererror").innerHTML = "user name is empty";
flag = 0;
   }else if(username.value.length < 3){
    document.getElementById("usererror").innerHTML = "user name require min 3 char";
flag = 0;
   }else{
    document.getElementById("usererror").innerHTML = "";
    flag = 1;
   }
   if(password.value == ""){
    document.getElementById("passerror").innerHTML = "password is empty";
flag = 0;
   }else{
    document.getElementById("passerror").innerHTML = "";
    flag = 1;
   }
   if(flag){
    return true;
   }else{
    return false;
   }
}