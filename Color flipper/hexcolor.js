const hexcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

const buttons = document.querySelectorAll(".btn");
const value = document.querySelector(".value");

buttons.forEach(function(ans){
    ans.addEventListener('click', function(f){
        let colorValue = '#';
        // const RandomNumber = randomColor();
        const styles = f.currentTarget.classList;
        if(styles.contains('change')){
            for(let i=0;i<6;i++){
                colorValue += hexcolor[randomColor()]
            }
            value.textContent = colorValue;
        }else if(styles.contains('reset')) {
            document.body.style.backgroundColor = '#fff';
            value.textContent = '#fff';
        }
        document.body.style.backgroundColor = colorValue;
    });   
});

function randomColor(){
    return Math.floor(Math.random() * hexcolor.length);
}
