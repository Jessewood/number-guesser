var globalMin = 1;
var globalMax = 100;
var randomNum = getRandomInt(globalMin, globalMax)
var guessBtn = document.querySelector('.guess');
var guessInput = document.querySelector('.input-guess');
var clearBtn = document.querySelector('.clear');
var match = document.querySelector('.low-or-high');
var numberResult = document.querySelector('.result');
var instruction = document.querySelector('.last-guess');
var resetButton = document.querySelector('.reset-button');
var minValueUser = document.querySelector('.min-value')
var maxValueUser = document.querySelector('.max-value');
var userSet = document.querySelector('.user-button');


console.log(randomNum)

guessBtn.addEventListener('click', compare); 
guessInput.addEventListener('keyup', enableButton);
clearBtn.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetGame);
userSet.addEventListener("click", grabMinAndMax)
maxValueUser.addEventListener('input', enableSetButton)
minValueUser.addEventListener('input', enableSetButton)

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function enableSetButton(){
    if (minValueUser.value !== "" && maxValueUser.value !== ""){
        userSet.removeAttribute("disabled")
    } else {
        userSet.setAttribute("disabled", true)
    }
}

function grabMinAndMax(){
    globalMin = parseInt(minValueUser.value);
    globalMax = parseInt(maxValueUser.value);
    randomNum = getRandomInt(globalMin, globalMax);
    console.log(randomNum);
}

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
    if (numberGuessed > globalMax || numberGuessed < globalMin){
        match.innerHTML='<span class="errorText">Error</span>: Number must be between <span class="errorNumber">' + minValueUser.value + ' - ' + maxValueUser.value + '</span>';
        return;
    } else if 
        (numberGuessed < randomNum) {
            match.innerText='That is too low';
    } else if 
        (numberGuessed > randomNum) {
            match.innerText='That is too high';
    } else if(numberGuessed === randomNum) {
        match.innerHTML='<span class="winner">Winner!</span><p> Every time you win the range increases by 10 and -10' 
        increaseRange()
        } 
}

function increaseRange(){
    globalMax = globalMax + 10;
    globalMin = globalMin - 10;
    maxValueUser.value = (globalMax);
    minValueUser.value = (globalMin);
    randomNum = getRandomInt(globalMin, globalMax)
    console.log(randomNum)
}

function clearInput(){
    guessInput.value = ""; 
}

function resetGame(){
    window.location.reload()
}
