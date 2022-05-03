'use strict';


function getSecretNum () {
    return Math.trunc(Math.random() * 20) + 1
}

let secretNum = getSecretNum ();
let score = 20;
let highScore = 0;
function message (message) {
    document.querySelector('#message').textContent = message;
}

function clear () {
    document.querySelector('#btn-cont').classList.add('btn-hide');
    document.querySelector('#btn-check').classList.remove('btn-hide');
    document.querySelector('#input').value = '';
    document.querySelector('body').style.backgroundColor = '#FCFCFC';
    document.querySelector('#secret-box').style.width = '90px';
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('#secret-num').textContent = '?';
    message(`🧐 Type a number...`);
}

// Событие на кнопку
document.querySelector('#btn-check').addEventListener('click', function (){
let input = Number(document.querySelector('#input').value);
    if (!input || input > 20) {
        message('🛑 Between 1 and 20');
        } else if (score > 0) {
            // WRONG
            if (input !== secretNum) {
                let wrong = input > secretNum ? message('📈 Too high') : message('📉 Too low');
                score--;
                document.querySelector('#score').textContent = score;
                return wrong;

            // WIN
            } else if (input === secretNum) {
                message(`😎 Correct number!`);
                highScore++;
                document.querySelector('#highscore').textContent = highScore;
                document.querySelector('#secret-num').textContent = secretNum;
                document.querySelector('body').style.backgroundColor = '#00c968';
                document.querySelector('#secret-box').style.width = '180px';
                document.querySelector('#btn-cont').classList.remove('btn-hide');
                document.querySelector('#btn-check').classList.add('btn-hide');
            }
            // GAME OVER
        } else if (score < 1) {
            message('😞 Game over!');
            document.querySelector('body').style.backgroundColor = '#a60024';
        };        
    });
    

// CONTINUE BUTTON
document.querySelector('#btn-cont').addEventListener('click', function (){
    clear();
});


// RESET BUTTON
document.querySelector('#btn-reset').addEventListener('click', function (){
    clear();
    score = 20;
    highScore = 0;
    document.querySelector('#score').textContent = score;
    document.querySelector('#highscore').textContent = highScore;
});