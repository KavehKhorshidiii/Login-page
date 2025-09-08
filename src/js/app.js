let PassInput = document.getElementsByClassName("PassInput")
let showPassBtn = document.getElementsByClassName("showPassBtn")
//login button
let loginBtn = document.getElementById("loginBtn")
//show Password
let eyeSVG = document.getElementById("eye")
let closeEyeSVG = document.getElementById("closeEye")


eyeSVG.addEventListener("click" , () => {
    eyeSVG.classList.toggle("hidden")
    if(closeEyeSVG.classList.contains("hidden")){
        closeEyeSVG.classList.remove("hidden")
    }
})
closeEyeSVG.addEventListener("click" , () => {
    closeEyeSVG.classList.add("hidden")
    eyeSVG.classList.remove("hidden")

})


console.log( closeEyeSVG.classList.contains("hidden") )


//show password 
showPassBtn[0].addEventListener("click" , () => {
    PassInput[0].type = PassInput[0].type === 'password' ? 'text' : "password"
    console.log(PassInput[0].type)
})