console.log("Lets Get Started..!!!");
const button = document.getElementById('btn-1');

button.addEventListener('click', function(){
let height = document.querySelector('#height').value;

let weight = document.querySelector('#weight').value;
 
if( height == ' ' || weight == ' '){

    alert('Fill the input fields..');
    return;
    
  }
  height = height/100
  let BMI = (weight/(height*height));
  BMI = BMI.toFixed(2);
  document.querySelector('#result').innerHTML = BMI;

  let com = '';

  if(BMI < 18.5){
    com= "UnderWeight";
  }

  if(BMI>=18.5 && BMI < 25){
    com= "Healthy";
  }
  
  
  if(BMI>=25 && BMI < 30){
    com= "OverWeight";
  }

  
  if(BMI>=30){
    com= "Obese";
  }

  document.querySelector('.comment').innerHTML = `Comment : You are <span>
  ${com}.</span>`;
})