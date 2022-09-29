const screenOne= document.querySelector(".screenOne")
const screenTwo= document.querySelector(".screenTwo")
const msgfinal= document.querySelector(".screenTwo h2")
const msgWrong= document.querySelector(".msgwrong")
const wrongMsg= document.querySelector(".msgwrong2")
let randomNumber= Math.round(Math.random()*10)
let xAttempts=1


function handleClick(event){
const inputNumber= document.querySelector("#inputNumber")
event.preventDefault()

if(Number(inputNumber.value) === randomNumber){
    screenOne.classList.add("hide")
    screenTwo.classList.remove("hide")
    document.querySelector(".screenTwo h2")
    msgfinal.innerText=`Acertou em ${xAttempts} tentativas!`
}

if(Number(inputNumber.value) !==randomNumber){
if(msgWrong.classList.contains("hide")){
    wrongMsg.classList.add("hide")          
    msgWrong.classList.remove("hide")
}else{
    wrongMsg.classList.remove("hide")          
    msgWrong.classList.add("hide")
}


}

xAttempts++
}

function restarGame(){
    screenOne.classList.remove("hide")
    screenTwo.classList.add("hide")
    randomNumber= Math.round(Math.random()*10)
    xAttempts=1

}
