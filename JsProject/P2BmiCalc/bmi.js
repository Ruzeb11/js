const form = document.querySelector('form');
const result = document.querySelector('#result');
const condition = document.querySelector('#condition')
console.log(result);


form.addEventListener('submit',function (e){
    e.preventDefault();

    const heightin = document.querySelector(".height input").value;
    const weightin = document.querySelector(".weight input").value;
    
    const height = parseFloat(heightin)
    const weight = parseFloat(weightin)    

    if(isNaN(height) || height <= 0){
        result.innerHTML = `Please Enter Valid Value height ${height}`;
    }else if(isNaN(weight) || weight <= 0 ){
        result.innerHTML = `Please Enter Valid Value weight ${weight}`}
    else{
    const bmi = (weight/((height*height)/10000)).toFixed(2);

    result.innerHTML = `<span>${bmi}</span>`}

    if(result <= 18.6) {
        condition.innerHTML = "Underweight"
    }else if(result > 18.6 && result <= 24.9){
        condition.innerHTML = "Normal Range"}
    else{
        condition.innerHTML="Overweight"
    }
})

