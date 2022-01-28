let username = document.getElementById("username");
let usermail = document.getElementById("usermail");
let userphone = document.getElementById("userphone");
let usermessage = document.getElementById("usermessage");
let flag = 1;
function validateform(x){
if(username.value == ""){
    document.getElementById("nameerror").innerHTML = "Please enter your name";
    flag = 0;
} else if(username.value.length < 3){
    document.getElementById("nameerror").innerHTML = "user name is must be in 3 charchator";
    flag = 0;
} else{
    document.getElementById("nameerror").innerHTML = "";
    flag = 1;
}
if(usermail.value == ""){
    document.getElementById("mailerror").innerHTML = "Please enter your Mail id";
    flag = 0;
} else if(usermail.value.length < 3){
    document.getElementById("mailerror").innerHTML = "user name is must be in 3 charchator";
    flag = 0;
} else{
    document.getElementById("mailerror").innerHTML = "";
    flag = 1;
}
if(userphone.value == ""){
    document.getElementById("phoneerror").innerHTML = "Please enter your number";
    flag = 0;
} else if(userphone.value.length < 10){
    document.getElementById("phoneerror").innerHTML = "message is must be in 10 charchator";
    flag = 0;
} else{
    document.getElementById("phoneerror").innerHTML = "";
    flag = 1;
}
if(usermessage.value == ""){
    document.getElementById("messageerror").innerHTML = "Please enter your message";
    flag = 0;
} else if(usermessage.value.length < 3){
    document.getElementById("messageerror").innerHTML = "user name is must be in 3 charchator";
    flag = 0;
} else{
    document.getElementById("messageerror").innerHTML = "";
    flag = 1;
}
if(flag){
    return true;
} else{
    return false;
}
}