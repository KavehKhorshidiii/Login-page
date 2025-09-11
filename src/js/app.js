let PassInput = document.getElementsByClassName("PassInput")
let showPassBtn = document.getElementsByClassName("showPassBtn")
let loginBtn = document.getElementById("loginBtn")
let eyeSVG = document.getElementById("eye")
let closeEyeSVG = document.getElementById("closeEye")


// open eye icon for password
eyeSVG.addEventListener("click" , () => {
    eyeSVG.classList.toggle("hidden")
    if(closeEyeSVG.classList.contains("hidden")){
        closeEyeSVG.classList.remove("hidden")
    }
})

// open eye icon for password
closeEyeSVG.addEventListener("click" , () => {
    closeEyeSVG.classList.add("hidden")
    eyeSVG.classList.remove("hidden")
})

//show password 
showPassBtn[0].addEventListener("click" , () => {
    PassInput[0].type = PassInput[0].type === 'password' ? 'text' : "password"
    console.log(PassInput[0].type)
})