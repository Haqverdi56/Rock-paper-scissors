const buttons = document.querySelectorAll('.user-choice');
const scoreValue = document.getElementById('score-count');
const mainDiv = document.querySelector('.main');
const gameDiv = document.querySelector('.game');
const gameRestart = document.querySelector('.play-again');

let userPick = document.querySelector('.pick-user')
let compPick = document.querySelector('.pick-comp')

let choices = ['paper', 'rock', 'scissors']
let userChoice;
let score = 0;
let compChoice;

gameDiv.style.display = 'none'

buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        mainDiv.style.display = 'none'
        gameDiv.style.display = 'flex'
        userChoice = button.getAttribute('data-choice');
        compChoice = randomChoice()

        userPick.className = `pick-${userChoice}`
        let path = userPick.className.substring(5)
        document.getElementById('pick-img').src = `assests/${path}.svg`

        let compClass = compPick.className = `pick-${compChoice}`;
        document.getElementById('comp-img').src = `assests/${compChoice}.svg`
        console.log(compClass);
        gameStart()
    })
});

gameRestart.addEventListener('click',function() {
    playAgain()
})

function gameStart() {
    if(userChoice === compChoice) {
        //draw
        document.getElementById('win').innerText = 'DRAW'
        console.log(userChoice, compChoice);
    } else if (userChoice === 'paper' && compChoice === 'rock' ||
    userChoice === 'rock' && compChoice === 'scissors' 
    || userChoice === 'scissors' && compChoice === 'paper'){
        //user win
        document.getElementById('win').innerText = 'WIN'
        scoreFunc(2)
        console.log(userChoice, compChoice);
    } else {
        //lose
        document.getElementById('win').innerText = 'LOSE'
        scoreFunc(-1)
        console.log(userChoice, compChoice);
    }
}

function randomChoice() {
    return choices[Math.floor(Math.random() * choices.length)]
}

function scoreFunc(number) {
    score += number;

    scoreValue.innerText = score
}

function playAgain() {
    mainDiv.style.display = 'flex'
    gameDiv.style.display = 'none'
}