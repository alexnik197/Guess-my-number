'use strict';


function getSecretNum () {
    return Math.trunc(Math.random() * 20) + 1
}

let secretNum = getSecretNum ();
let score = 20;
let highScore = 0;

// Событие на кнопку
document.querySelector('#btn-check').addEventListener('click', function (){
let input = Number(document.querySelector('#input').value);
    if (!input || input > 20) {
        document.querySelector('.main-message__text').textContent = '🛑 Between 1 and 20';
        } else if (score > 0) {
            // WRONG
            if (input > secretNum) {
                document.querySelector('.main-message__text').textContent = `📈 Too high!`;
                score--;
                document.querySelector('.main-score__score-num').textContent = score;
            } else if (input < secretNum) {
                document.querySelector('.main-message__text').textContent = '📉 Too low!';
                score--;
                document.querySelector('.main-score__score-num').textContent = score;

            // WIN
            } else if (input === secretNum) {
                document.querySelector('.main-message__text').textContent = `😎 Correct number!`;
                highScore++;
                document.querySelector('.main-score__highscore-num').textContent = highScore;
                document.querySelector('.main-check__secret-num').textContent = secretNum;
                document.querySelector('body').style.backgroundColor = '#00c968';
                document.querySelector('.main-check__secret').style.width = '180px';
                document.querySelector('#btn-cont').classList.remove('btn-hide');
                document.querySelector('#btn-check').classList.add('btn-hide');
            }
            // GAME OVER
        } else if (score < 1) {
            document.querySelector('.main-message__text').textContent = '😞 Game over!';
            document.querySelector('body').style.backgroundColor = '#a60024';
        };        
    });
    

// CONTINUE BUTTON
document.querySelector('#btn-cont').addEventListener('click', function (){
    document.querySelector('#btn-cont').classList.add('btn-hide');
    document.querySelector('#btn-check').classList.remove('btn-hide');
    document.querySelector('#input').value = '';
    document.querySelector('body').style.backgroundColor = '#FCFCFC';
    document.querySelector('.main-check__secret').style.width = '90px';
    secretNum = Math.trunc(Math.random() * 20) + 1;
    document.querySelector('.main-check__secret-num').textContent = '?';
});


// RESET BUTTON
document.querySelector('.main-message__btn-reset').addEventListener('click', function (){
    document.querySelector('#btn-cont').classList.add('btn-hide');
    document.querySelector('#btn-check').classList.remove('btn-hide');
    document.querySelector('#input').value = '';
    document.querySelector('body').style.backgroundColor = '#FCFCFC';
    document.querySelector('.main-check__secret').style.width = '90px';
    document.querySelector('.main-check__secret-num').textContent = '?';
    secretNum = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.main-score__score-num').textContent = score;
    highScore = 0;
    document.querySelector('.main-score__highscore-num').textContent = highScore;
    document.querySelector('.main-message__text').textContent = `🧐 Type a number...`;
});