let value1 = [];
let value2 = [];
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


// // let del = getElementById('del');
// del.addEventListner('onclick',function(){

    let outputdiv = document.getElementById('output'); 
    let currentContent = outputdiv.textContent; 
    let newContent = currentContent.slice(0, -1); 
    outputdiv.textContent = newContent; 

// });

// function to clear contents
let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    display.textContent = '';
});

// function to call operate function
let equals = document.getElementById('result');
equals.addEventListener('click',function(){
    display.textContent = operate(value1, operator,value2)
});
