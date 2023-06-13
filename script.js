let value1 = 0;
let value2 = 0;
let operator = '';

function add(num1,num2){
    return num1 + num2;
}
console.log(add(num1,num2));
function subtract(){
    return num1 - num2;
}
console.log(subtract(num1, num2));
function multiply(){
    return num1 * num2;
}
function divide(){
    return num1 / num2;
}

function operate(value1, operator, value2){
    if (operator === "+"){
        add(value1, value2);
    }
    else if (operator === "-"){
        subtract(value1,value2);
    }
    else if (operator === "*"){
        multiply(value1, value2);
    }
    else if (operator === "/"){
        divide(value1,value2);
    }
    else {
        return "Error!";
    }

}