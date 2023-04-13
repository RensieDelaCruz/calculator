let inputNum1 = '';
let inputNum2 = '';
let inputOperator = null;
let total = null;
const displayNumber = document.querySelector('.number-display');
const displayOperator = document.querySelector('.operator-display');
const numberButtons = document.querySelectorAll('.number-button');
const operatorButtons = document.querySelectorAll('.operator-button');
const equalsButton = document.querySelector('.equals-button');
const acButton = document.getElementById('ac');
const pointButton = document.getElementById('point');

pointButton.addEventListener('click', function(e){
    if(displayNumber.textContent.includes('.')){
        e.target.disabled = true;
    }else{
        displayNumber.textContent += e.target.textContent;
        e.target.disabled = true;
    }
});

// EventListener for All Clear Button
acButton.addEventListener('click', function(e){
    allClear();
});

// EventListener for all operator buttons
operatorButtons.forEach((button) => {
    button.addEventListener('click', function () {
        changeDisplay(button);
    });
});

// EventListener for all number buttons
numberButtons.forEach((button) => {
    button.addEventListener('click', function () {
        changeDisplay(button);
    });
});

// Separate EventListener for "=" button
equalsButton.addEventListener('click', function (e) {
    changeDisplay(e.target);
});

// function that will change the display of the calculator based on the button that is clicked
function changeDisplay(button) {
    buttonClass = button.getAttribute('class');
    if (buttonClass === 'number-button') {

        // This will reset the calculator if the user enter a number 
        // right after pressing the equal button
        if (inputNum1 !== '' && inputOperator === null) {
            allClear();
        } else if (inputNum2 === null) {
            // This will delete the display once the user enter 
            //  the next input in a chain calculation 
            // after displaying the result of the previous calculation
            displayNumber.textContent = '';
            inputNum2 = '';
        }

        displayNumber.textContent += button.textContent;

    } else if (buttonClass === 'operator-button') {

        if (inputNum1 === '') {
            // this will assign the first input after pressing an operator button
            inputNum1 = displayNumber.textContent;
            displayNumber.textContent = '';
            pointButton.disabled = false;
        } else {
            // this will assign the next input in a chain calculation after pressing an operator
            // and will display the result before the user enter the next input
            inputNum2 = displayNumber.textContent;
            displayNumber.textContent = operate(inputOperator, inputNum1, inputNum2);
            inputOperator = button.textContent;
            inputNum1 = total;
            inputNum2 = null;
            pointButton.disabled = false;
        }

        displayOperator.textContent = button.textContent;
        inputOperator = displayOperator.textContent;

    } else if (buttonClass === 'equals-button') {
        // this will assign the second input and will calculate for the result
        // the result will be assigned to input number 1 
        // so it will be ready just in case the user wants to do more calculation on the result
        inputNum2 = displayNumber.textContent;
        if (inputNum1 !== '' && inputNum2 !== '' && inputOperator !== null) {
            operate(inputOperator, inputNum1, inputNum2);
            displayOperator.textContent = button.textContent;
            displayNumber.textContent = total;
            inputNum1 = total;
            inputNum2 = '';
            inputOperator = null;
            pointButton.disabled = false;
        }

    }

}

//This function will reset the whole calculator
function allClear() {
    displayNumber.textContent = '';
    displayOperator.textContent = '';
    inputNum1 = '';
    inputNum2 = '';
    inputOperator = null;
    total = null;
    pointButton.disabled = false;
}

// function to be called to perform the calculation
function operate(operator, num1, num2) {
    // when not used with boolean values, the logical OR 
    //will return which expression evaluated to true
    number1 = parseFloat(num1) || 0;
    number2 = parseFloat(num2) || 0;

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
    if (num2 === 0) {
        return "Yikeees! ERRRROR!";
    } else {
        return num1 / num2;
    }
}