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
    return operator (parseInt(a), parseInt(b));
};

// Basic HTML Calc (Done)

// Create functions to populate calc display when numbers pressed
// **Note: should be storing 'display value' in variable, for future use
let numberChain = document.querySelector('.displayHistory');
let display = document.querySelector('.display');
let displayValue = '';
let displayValueInt = 0;
let buttonDigitsArray = [];
// ***MIGHT NEED TO MAKE THIS BOOLEAN THE SAME FOR DIVISION, NOT SURE***
let nextNumberIsMultiplied = false;



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
    })
};

buttonDigitsArray[0].addEventListener('click', function () {
    if (displayValue !== '') {
        displayValue += '0';
        display.innerHTML = displayValue;
        document.querySelector('[type="+"]').disabled = false;
        document.querySelector('[type="-"]').disabled = false;
        document.querySelector('[type="*"]').disabled = false;
        document.querySelector('[type="%"]').disabled = false;
    }
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
});

//Operator Buttons

let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    numberChain.innerHTML = numberChain.innerHTML + displayValue + ' + ';
    displayValue = '';
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="%"]').disabled = true;
});

let subtractButton = document.querySelector('[type="-"]');
subtractButton.addEventListener('click', function () {
    numberChain.innerHTML = numberChain.innerHTML + displayValue + ' - ';
    displayValue = '';
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="%"]').disabled = true;
});

let multiplyButton = document.querySelector('[type="*"]');
multiplyButton.addEventListener('click', function () {
    // *** NEED TO REMOVE PREVIOUS NUMBER STORED IN numberCHAIN (i.e 2 + 3 + 5 * 2 needs
    // to show as 2 + 3 + 10) !!! Remember to implement this on division as well.
    // ^^ Consider an array instead of string chain? Which is easier to remove previous 
    // **Can keep numberchain to show on upper display BUT need to create an element to store
    // **every element, so that when * or % is pressed, the last element is removed! VERY IMPORTANT!

    // Store displayValue into number1
    if (nextNumberIsMultiplied === false) {
        number1 = displayValue;
    }
    // Change operator value
    operator = multiply
    if (nextNumberIsMultiplied === true) {
        number2 = displayValue;
        number1 = operate (number1, number2, multiply);
        nextNumberIsMultiplied === false;

        console.log(number1);
    }
    /* numberChain.innerHTML = numberChain.innerHTML + displayValue + ' * '; */
    displayValue = '';
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="%"]').disabled = true;
    nextNumberIsMultiplied = true;
});

let divideButton = document.querySelector('[type="%"]');
divideButton.addEventListener('click', function () {
    // Divide the previous number with the next number and store into array!
    /* numberChain.innerHTML = numberChain.innerHTML + displayValue + ' % '; */
    displayValue = '';
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="%"]').disabled = true;
});

// Compute Total
let computeButton = document.querySelector('[type="="]');
computeButton.addEventListener('click', function () {
    numberChain.innerHTML += displayValue;
    console.log(numberChain.innerHTML);
    let uncomputedValueArray = numberChain.innerHTML.split(' ');
    console.log(uncomputedValueArray);
    
});


