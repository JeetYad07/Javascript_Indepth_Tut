// const height = document.querySelector('#height')
// const weight = document.querySelector('#weight')

// This will give empty value once form get loaded
// height.addEventListener('input',(e)=>{
//     console.log(e.target.value)
// })

// weight.addEventListener('input',(e)=>{
//     console.log(e.target.value)
// })
// console.log(`Height: ${height} and weight: ${weight}`);

const form = document.querySelector('form')
form.addEventListener('submit',(e) => {
    e.preventDefault()

    const height = document.querySelector('#height').value
    const weight = document.querySelector('#weight').value
    const result = document.querySelector('#result');

    if(height === '' || height <0 || isNaN(height) ){
        result.innerHTML = `Please give a valid height ${height}`;
    }else if(weight === '' || weight < 0 || isNan(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`;
    }else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2)
        result.innerHTML = `Your BMI is ${bmi}`
    }

})