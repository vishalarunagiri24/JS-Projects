const buttons = document.querySelectorAll('.box');
const body = document.querySelector('body');

buttons.forEach((button)=>{
    button.addEventListener('click',function(e){
        const targetColor = e.target.id;
        if(targetColor==='grey'){
            body.style.backgroundColor = 'grey';
        }
        else if(targetColor==='white'){
            body.style.backgroundColor = 'white';
        }
        else if(targetColor==='blue'){
            body.style.backgroundColor = 'blue';
        }
        else if(targetColor==='yellow'){
            body.style.backgroundColor = 'yellow';
        }
        else if(targetColor==='purple'){
            body.style.backgroundColor = 'purple';
        }
    });
})