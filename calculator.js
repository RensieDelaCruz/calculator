let inputNum1 = null;
let inputNum2 = null;
let inputOperator = null;
let total = null;
const displayNumber = document.querySelector('.number-display');
const displayOperator = document.querySelector('.operator-display');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');

// adding EventListener to all operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener('click', function () {
        changeDisplay(button);
    });
});

// adding an EventListener to all number buttons
numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
        changeDisplay(button);
    });
});

// function that will take a button as a parameter update
// the display in the display section
function changeDisplay(button) {
    buttonClass = button.getAttribute('class');
    if (buttonClass === 'number-button') {
        if (total === null) {
            displayNumber.textContent += button.textContent;
        } else {
            displayNumber.textContent = '';
            displayNumber.textContent += button.textContent;
        }
    } else if (buttonClass === 'operator-button') {
        if (inputNum1 === null || inputOperator === null) {
            inputNum1 = displayNumber.textContent;
            displayNumber.textContent = '';
        } else  {
            inputNum2 = displayNumber.textContent;
            operate(inputOperator, inputNum1, inputNum2);
            displayNumber.textContent = total;
            inputNum1 = total;
        }
        displayOperator.textContent = button.textContent;
        inputOperator = displayOperator.textContent;
    }
}

// function to be called to perform the calculation
function operate(operator, num1, num2) {
    number1 = parseFloat(num1);
    number2 = parseFloat(num2);

    switch (operator) {
        case '+':
            total = add(number1, number2);
            return total;
        case '-':
            total = subtract(number1, number2);
            return total;
        case 'x':
            total = multiply(number1, number2);
            return total;
        case '/':
            total = divide(number1, number2);
            return total;
    }

}


// four basic math operations
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