const hexcolor = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.getElementById('btn');
const colors = document.querySelector('.colors');

btn.addEventListener('click', function(){
    let hexvalue = '#';
    for(let i=0;i<6;i++){
        hexvalue += hexcolor[randomColor()];
    }

    colors.textContent = hexvalue;
    document.body.style.backgroundColor = hexvalue;
});

function randomColor(){
    return Math.floor(Math.random()*hexcolor.length);
}
