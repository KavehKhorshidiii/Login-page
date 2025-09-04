let PassInput = document.getElementsByClassName("PassInput")
let showPassBtn = document.getElementsByClassName("showPassBtn")
let loginBtn = document.getElementById("loginBtn")
let eyeSVG = document.getElementById("eye")
let closeEyeSVG = document.getElementById("closeEye")

//show password 
showPassBtn[0].addEventListener("click" , () => {
    PassInput[0].type = PassInput[0].type === 'password' ? 'text' : "password"
    console.log(PassInput[0].type)
})