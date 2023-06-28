let value1 = [];
let value2 = [];
let operator = " ";

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
        if(value2 === 0){
            return "ZeroDivisionError!";
        }else{
        return divide(val1,val2);
        }
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

//function to store numerical input from the user
 let numbers = document.getElementsByClassName('num');
 for(let i = 0; i < numbers.length; i++){
    numbers[i].addEventListener('click', function(){
        if (operator === " "){
            value1 += numbers[i].textContent;
            console.log(value1);
        }else{
            value2 += numbers[i].textContent;
            console.log(value2);
        }
        display.textContent += numbers[i].textContent;
    });
 }

//  function to store operator value
let operators = document.getElementsByClassName('oper');
for (let i =0; i < operators.length; i++){
    operators[i].addEventListener('click',function(){
        operator = operators[i].textContent;
        display.textContent += operators[i].textContent;
    })
}
// function to delete a single element
let del = document.getElementById('del');
del.addEventListener('click',function(){
    let outputdiv = document.getElementById('output'); 
    let currentContent = outputdiv.textContent; 
    let newContent = currentContent.slice(0, -1); 
    outputdiv.textContent = newContent; 

});

// function to clear contents
let clear = document.getElementById('clear');
clear.addEventListener('click', function(){
    display.textContent = '';
    value1 = [];
    value2 = [];
    operator = " ";
});

// function to call operate function
let equals = document.getElementById('result');
equals.addEventListener('click',function(){
    display.textContent = operate(value1, operator,value2)
});
