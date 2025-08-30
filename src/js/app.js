let PassInput = document.getElementsByClassName("PassInput")
let showPassBtn = document.getElementsByClassName("showPassBtn")

showPassBtn[0].addEventListener("click" , () => {

    PassInput[0].type = PassInput[0].type === 'password' ? 'text' : "password"
    console.log(PassInput[0].type)
})