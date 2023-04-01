//Add function
let add = (a, b) => a + b;

//Subtract function
let subtract = (a, b) => a - b;

//Multiply function
let multiply = (a, b) => a * b;

//Divide function
let divide = (a, b) => a / b;

// Variables to represent number, operator, number
let number1;
let number2;
let operator;

// Operate function
let operate = function (a, b, operator) {
    return operator (parseInt(a, 10), parseInt(b, 10));
};

// Basic HTML Calc (Done)

// Create functions to populate calc display when numbers pressed
// **Note: should be storing 'display value' in variable, for future use
let numberChain = document.querySelector('.displayHistory');
let display = document.querySelector('.display');
let displayValue = '';
let buttonDigitsArray = [];

for (let i = 0; i <= 9; i++) {
    buttonDigitsArray[i] = document.querySelector(`[type="${i}"]`);
};

for (let i = 1; i < buttonDigitsArray.length; i++) {
    buttonDigitsArray[i].addEventListener('click', function () {
        displayValue += i;
        display.innerHTML = displayValue;
        document.querySelector('[type="+"]').disabled = false;
        document.querySelector('[type="-"]').disabled = false;
        document.querySelector('[type="*"]').disabled = false;
        document.querySelector('[type="%"]').disabled = false;
    });
};

buttonDigitsArray[0].addEventListener('click', function () {
    if (displayValue.length === 0){
        display.innerHTML = 0;
        displayValue = 0;
    };
    displayValue += 0;
    console.log(displayValue);
    display.innerHTML = displayValue;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
});

//Operator Buttons

let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    
    numberChain.innerHTML = numberChain.innerHTML + displayValue + ' + ';
    displayValue = 0;
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
});

let subtractButton = document.querySelector('[type="-"]');
subtractButton.addEventListener('click', function () {
    numberChain.innerHTML = numberChain.innerHTML + displayValue + ' - ';
    displayValue = 0;   
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
});
// Multiply Button
let multiplyButton = document.querySelector('[type="*"]');
multiplyButton.addEventListener('click', function () {
    operator = multiply;
    if (number1 !== undefined) {
        number2 = displayValue;
        number1 = operate (number1, number2, multiply);
        display.innerHTML = number1;
        console.log(number1);
    };
    // Store displayValue into number1
    if (number1 === undefined) {
        number1 = displayValue;
    };
    /* numberChain.innerHTML = numberChain.innerHTML + displayValue + ' * '; */
    displayValue = 0;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    /* if (displayValue.length !== 0) {
        number1Exists = true;
    }; */
    console.log(number1 + ' Number1');
    console.log(number2 + ' Number2');
    console.log(displayValue + ' DisplayValue');
});

let divideButton = document.querySelector('[type="%"]');
divideButton.addEventListener('click', function () {
    // Divide the previous number with the next number and store into array!
    /* numberChain.innerHTML = numberChain.innerHTML + displayValue + ' % '; */
    displayValue = 0;
    document.querySelector('[type="%"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
});

// Compute Total
let computeButton = document.querySelector('[type="="]');
computeButton.addEventListener('click', function () {
    
});

// Clear button TODO:
// number1Exists set to false!


