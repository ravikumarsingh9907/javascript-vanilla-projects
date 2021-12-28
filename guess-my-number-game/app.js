const Btn = document.querySelector('.submit');
const Input = document.querySelector('.input-sec');
const Result = document.querySelector('.result');
const Left = document.querySelector('.left');
const HighScore = document.querySelector('.high-score');
const Container = document.querySelector('.container');
const playAgain = document.querySelector('.again');

let SecretNumber = Math.trunc(Math.random()*20 + 1);
let score = 20;
let HScore = 0;

Btn.addEventListener('click', function() {
    if(Input.value == SecretNumber) {
        Result.textContent = "U're winner 🎉🎉🎉"
        Left.textContent = score;
        Container.style.backgroundColor = 'hsl(120, 73%, 75%)';
        if(score > HScore) {
            HScore = score;
            HighScore.textContent = HScore;
        }

    }else if(Input.value < SecretNumber) {
        Result.textContent = "Too low 😔, Guess Again 🙂";
        score--;
        Left.textContent = score;

    }else if(Input.value > SecretNumber && Input.value < 20) {
        Result.textContent = "Too High 😔, Guess Again";
        score--;
        Left.textContent = score;

    }else if(Input.value > 20) {
        window.alert('Enter value between 1 to 20');
    }
});

playAgain.addEventListener('click', function() {
    score = 20;
    SecretNumber = Math.trunc(Math.random()*20 + 1);
    Input.value = null;
    Result.textContent = 'Pending.....';
    Left.textContent = score;
    Container.style.backgroundColor = 'yellow';
});
