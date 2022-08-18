const displayEl = document.getElementById('display');
const numberPress =function(number){
    const displayValue = displayEl.value;
    displayEl.value = displayValue + number;
}
//number press callbacks
document.getElementById('btn-1').addEventListener('click', function(){
    numberPress('1');
})
document.getElementById('btn-2').addEventListener('click', function(){
    numberPress('2');
})
document.getElementById('btn-3').addEventListener('click', function(){
    numberPress('3');
})
document.getElementById('btn-4').addEventListener('click', function(){
    numberPress('4');
})
document.getElementById('btn-5').addEventListener('click', function(){
    numberPress('5');
})
document.getElementById('btn-6').addEventListener('click', function(){
    numberPress('6');
})
document.getElementById('btn-7').addEventListener('click', function(){
    numberPress('7');
})
document.getElementById('btn-8').addEventListener('click', function(){
    numberPress('8');
})
document.getElementById('btn-9').addEventListener('click', function(){
    numberPress('9');
})
document.getElementById('btn-0').addEventListener('click', function(){
    numberPress('0');
})
document.getElementById('btn-.').addEventListener('click', function(){
    numberPress('.');
})
document.getElementById('btn-c').addEventListener('click', function(){
    document.getElementById('display').value='';
})
//opoeration callbacks

const opoerationKeyPress = function(symbol){
    const displayValue = displayEl.value;
   
    
    if(!(displayValue.includes('+') || displayValue.includes('−') || displayValue.includes('×') || displayValue.includes('÷') || displayValue == '')){
        displayEl.value =  displayValue + symbol ;
    }
    
}
document.getElementById('btn-+').addEventListener('click', function(){
    opoerationKeyPress('+');
})
document.getElementById('btn--').addEventListener('click', function(){
    opoerationKeyPress('−');
})
document.getElementById('btn-x').addEventListener('click', function(){
    opoerationKeyPress('×');
})
document.getElementById('btn-/').addEventListener('click', function(){
    opoerationKeyPress('÷');
})
document.getElementById('btn-√').addEventListener('click', function(){
    if(!(displayEl.value.includes('√'))){
        const displayValue = displayEl.value;
        displayEl.value = displayValue + '√';

    }
})

//calculating result;
document.getElementById('btn-=').addEventListener('click',function(){
    let result;
    const displayValue = displayEl.value;
    if(displayValue.includes('+')){
        const numbers = displayValue.split('+');
        result = Number(numbers[0]) + Number(numbers[1]);
    }
    else if(displayValue.includes('−')){
        const numbers = displayValue.split('−');
        result = Number(numbers[0]) - Number(numbers[1]);
    }
    else if(displayValue.includes('×')){
        const numbers = displayValue.split('×');
        result = Number(numbers[0]) * Number(numbers[1]);
    }
    else if(displayValue.includes('÷')){
        const numbers = displayValue.split('÷');
        result = Number(numbers[0]) / Number(numbers[1]);
    }
    displayEl.value = result;
})