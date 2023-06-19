let value1 = [];
let value2 = [];
let operator = '';

// basic arithmetic functions
function add(num1,num2){
    return num1 + num2;
}
function subtract(){
    return num1 - num2;
}
function multiply(){
    return num1 * num2;
}
function divide(){
    return num1 / num2;
}
function percent(num1,num2){
    return (num1 / num2) *100;
}

// function to call the arithmetic functions
function operate(val1, operator, val2){
    if (operator === "+"){
        add(val1, val2);
    }
    else if (operator === "-"){
        subtract(val1,val2);
    }
    else if (operator === "*"){
        multiply(val1, val2);
    }
    else if (operator === "/"){
        divide(val1,val2);
    }
    else if (operator === "%"){
        percent(val1, val2)
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
});
}

// function to store numerals
let btn = document.getElementsByClassName('num');
for (let i = 0; i < btn.length;i++){
    btn[i].addEventListener('click',function(){
        if (operator != ''){
            value1 = btn[i].value;
            display.textContent += btn[i].value;
        } 
        else{
        value2 = btn[i].value;
        display.textContent += btn[i].value;
        }
    });
}

// let del = getElementById('del');
// del.addEventListner('onclick',function(){

// });
let clear = document.getElementById('clear');
clear.addEventListener('click', clr('output'));
function clr(elementId){
    let div = document.getElementById(elementId);
    div.textContent = ' ';
}
let equals = document.getElementById('result');
equals.addEventListener('click',operate(value1, operator,value2));