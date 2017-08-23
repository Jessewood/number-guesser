var randomNum = Math.floor(Math.random() * 100)+1;
var guessBtn = document.getElementById('guess');
var guessInput = document.getElementById('input-guess');
var clearBtn = document.querySelector('.clear');
var match = document.querySelector('.low-or-high');
var numberResult = document.querySelector('.result');
var instruction = document.querySelector('.last-guess');
var resetButton = document.querySelector('.reset-button');


console.log(randomNum)

guessBtn.addEventListener('click', compare); 
guessInput.addEventListener('keyup', enableButton);
clearBtn.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetGame);


 function enableButton(){
    if (guessInput.value !== ""){
        guessBtn.removeAttribute("disabled")
        clearBtn.removeAttribute("disabled")
     } else {
        guessBtn.setAttribute("disabled", true)
        clearBtn.setAttribute("disabled", true)
    }
}


function compare() {

    var numberGuessed = parseInt(guessInput.value);
    console.log(numberGuessed);
    numberResult.innerText = numberGuessed;
    instruction.innerText = 'Your last guess was';
    resetButton.removeAttribute("disabled")
    guessInput.value = "";
    enableButton()
    guessInput.focus();
    if (numberGuessed > 100 || numberGuessed < 1){
        match.innerHTML='<span class="errorText">Error</span>: Number must be between <span class="errorNumber">0 - 100</span>';
        return;
    }
    if(numberGuessed === randomNum) {
        match.innerHTML='<span class="winner">BOOM!</span>';

    } else if 
        (numberGuessed < randomNum) {
            match.innerText='That is too low';
        } else if 
        (numberGuessed > randomNum) {
            match.innerText='That is too high';
        } 
}

function clearInput(){
    guessInput.value = "";
}


// function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//     console.log(getRandomInt)
// }


function resetGame(){
    window.location.reload()
}
