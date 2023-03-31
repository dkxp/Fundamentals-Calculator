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
let operate = function (op, a, b) {
    switch (op) {
        case '+':
            op = add;
            break;
        case '-': 
            op = subtract;
            break;
        case '*':
            op = multiply;
            break;
        case '/':
            op = divide;
            break;
    }
    return op (parseInt(a), parseInt(b));
};

// Basic HTML Calc (Done)

// Create functions to populate calc display when numbers pressed
// **Note: should be storing 'display value' in variable, for future use
let numberChain = document.querySelector('.displayHistory');
let display = document.querySelector('.display');
let displayZero = 0;
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
})

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
    numberChain.innerHTML = numberChain.innerHTML + displayValue + ' * ';
    displayValue = '';
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="%"]').disabled = true;
});

let divideButton = document.querySelector('[type="%"]');
divideButton.addEventListener('click', function () {
    numberChain.innerHTML = numberChain.innerHTML + displayValue + ' % ';
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


