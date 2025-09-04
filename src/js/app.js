let PassInput = document.getElementsByClassName("PassInput")
let showPassBtn = document.getElementsByClassName("showPassBtn")
//login button
let loginBtn = document.getElementById("loginBtn")
//show Password
let eyeSVG = document.getElementById("eye")
let closeEyeSVG = document.getElementById("closeEye")

console.log(eyeSVG)
console.log(closeEyeSVG)

//eyeSVG.addEventListener("click" , () => {
//    eyeSVG.classList.toggle("hidden")
//})
//closeEyeSVG.addEventListener("click" , () => {
//})


console.log( closeEyeSVG.classList.contains )


//show password 
showPassBtn[0].addEventListener("click" , () => {
    PassInput[0].type = PassInput[0].type === 'password' ? 'text' : "password"
    console.log(PassInput[0].type)
})