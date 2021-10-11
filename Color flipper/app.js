
const color = ["orange", "blue", "pink", "violet", "yellow", "rgba(135,122,210)", "#f8458e"];

const buttons = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

buttons.forEach(function(ans){
    ans.addEventListener('click', function(f){
        const RandomNumber = randomColor();
        const styles = f.currentTarget.classList;
        if(styles.contains('change')){
            document.body.style.backgroundColor = color[RandomNumber];
            value.textContent = color[RandomNumber];
        }else if(styles.contains('reset')) {
            document.body.style.backgroundColor = '#fff';
            value.textContent = '#fff';
        }
    });   
});

function randomColor(){
    return Math.floor(Math.random() * color.length);
}
