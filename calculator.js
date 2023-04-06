// Create a Calculator that will accept an operators and input numbers

// User will input numbers and operators with the buttons
// a function will accept the numbers and operator the process it and display the result
// then store the result in a variable when the user press another operation


// Calculator should contain all basic math operation add, subtract and multiplication
// Create a function operate() that takes an operator and 2 numbers and then call one of the above function on the numbers
// Create a functions that will populate the display when you click the number buttons, should be storing the vaue in a variable somewhere to use later
// Need to store the first number that is input into the calculator when a user presses an operator and save which operator has been chosen and then operate() when the user preesses "="
// User should be able to chain operations, 12 + 7 - 5 * 3 = should yield 42

let operator;
let number1;
let number2;
let total;

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            total = add(num1, num2);
            return total;
        case '-':
            total = subtract(num1, num2);
            return total;
        case '*':
            total = multiply(num1, num2);
            return total;
        case '/':
            total = divide(num1, num2);
            return total;
    }

}


function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}