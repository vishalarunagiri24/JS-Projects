const calculateButton = document.querySelector('form');

calculateButton.addEventListener('submit',function(event){
    // event.preventDefault();
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#results');

    if(height===''||height<0||isNaN(height)){
        result.innerHTML = "Please Enter a Valid Height";
    }
    else if(weight===''||weight<0||isNaN(weight)){
        result.innerHTML = "Please Enter a Valid Weight";
    }
    else{
        const BMI = (weight/((height*height)/10000)).toFixed(2);
        if(BMI<18.6){
            result.innerHTML = `<strong>Your BMI Weight is ${BMI}</strong></br> <p><strong>Under Weight</strong></p> `;
        }
        else if(BMI>18.6 && BMI<24.9){
            result.innerHTML = `<strong>Your BMI Weight is ${BMI}</strong></br> <p><strong>Normal Range</strong></p> `;
        }
        else if(BMI>=24.9){
            result.innerHTML = `<strong>Your BMI Weight is ${BMI}</strong></br> <p><strong>Over Weight</strong></p> `;
        }
    }
}); 
