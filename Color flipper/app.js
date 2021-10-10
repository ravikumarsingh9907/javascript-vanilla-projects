const color = ["red", "green", "pink", "violet", "yellow", "rgba(135,122,210)", "#f1f5f8"];

const btn = document.getElementById('btn');
const colors = document.querySelector('.colors');

btn.addEventListener('click', function(){
    const RandomNumber = randomColor();
    document.body.style.backgroundColor = color[RandomNumber];
    colors.textContent = color[RandomNumber];
});

function randomColor(){
    return Math.floor(Math.random() * color.length);
}
