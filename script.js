function login(){

let username = document.getElementById("username").value;
let password = document.getElementById("password").value;

let correctUsername = "admin";
let correctPassword = "1234";

if(username === correctUsername && password === correctPassword){
document.getElementById("message").innerHTML = "Login Successful!";
document.getElementById("message").style.color = "green";
}
else{
document.getElementById("message").innerHTML = "Invalid Username or Password";
document.getElementById("message").style.color = "red";
}


}
