let randomNumber= Math.round(Math.random()*10)
let xAttempts=1
const screenOne= document.querySelector(".screenOne")
const screenTwo= document.querySelector(".screenTwo")
let msgfinal= document.querySelector(".screenTwo h2")

function handleClick(event){
const inputNumber= document.querySelector("#inputNumber")
event.preventDefault()

if(Number(inputNumber.value) === randomNumber){
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")
    document.querySelector(".screenTwo h2")
    msgfinal.innerText=`Acertou em ${xAttempts} tentativas!`
}
xAttempts++
}

function restarGame(){
    screenOne.classList.remove("hide")
    screenTwo.classList.add("hide")
    randomNumber= Math.round(Math.random()*10)
    xAttempts=1

}
