let value1 = '';
let value2 = '';
let operator = '';

// basic arithmetic functions
function add(num1,num2){
    return num1 + num2;
}
function subtract(num1,num2){
    return num1 - num2;
}
function multiply(num1,num2){
    return num1 * num2;
}
function divide(num1,num2){
    return num1 / num2;
}
function percent(num1,num2){
    return (num1 / num2) *100;
}

// function to call the arithmetic functions
function operate(val1, operator, val2){
    if (operator === "+"){
       return add(val1, val2);
    }
    else if (operator === "-"){
        return subtract(val1,val2);
    }
    else if (operator === "*"){
       return multiply(val1, val2);
    }
    else if (operator === "/"){
        return divide(val1,val2);
    }
    else if (operator === "%"){
       return  percent(val1, val2);
    }
    else {
        return "Error!";
    }

}

// function to turn on the calculator
let start = document.getElementById('start-btn');
let display = document.getElementById('output');
start.addEventListener('click',function(){
     display.style.backgroundColor = 'white';
    });

// function to stop operator
let oper = document.getElementsByClassName('oper');
for (let i = 0; i < oper.length; i++){
    oper[i].addEventListener('click',function(){
        operator = oper[i].value;
        console.log(operator);
        display.textContent += oper[i].value; 
});
}

// function to store numerals
// const btns = document.getElementsByClassName('.num');
const btns = document.querySelectorAll('num');
for (let i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function(){
    value1 = btns[i].value;
    display.textContent = btns[i].value;
  });
}
// let del = getElementById('del');
// del.addEventListner('onclick',function(){

// });
let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    display.textContent = '';
});
let equals = document.getElementById('result');
equals.addEventListener('click',function(){
    display.textContent = operate(value1, operator,value2)
});
