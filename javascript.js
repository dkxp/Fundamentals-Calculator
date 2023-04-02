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
let computedTotal;

// Operate function
let operate = function (a, b, operator) {
    if (operator !== undefined) {
        return operator (parseFloat(a, 10), parseFloat(b, 10));
    };
};

// Callback Function for Operand Buttons
let onOperandPress = function () {
    if (number1 !== undefined && displayValue !== undefined && lastClickWasTotaled === false) {
        number2 = displayValue;
        number1 = operate(number1, number2, operator);
        display.innerHTML = number1;
        numberChain.innerHTML = number1;
        displayValue = undefined;
    };
    if (number1 === undefined) {
        number1 = displayValue;
        numberChain.innerHTML = number1;
        displayValue = undefined;
    };
};

// Global Variables

let numberChain = document.querySelector('.numberChain');
let display = document.querySelector('.display');
let displayValue;
let buttonDigitsArray = [];
numberChain.innerHTML = '';
display.innerHTML = 0;
let lastClickWasTotaled = false;

for (let i = 0; i <= 9; i++) {
    buttonDigitsArray[i] = document.querySelector(`[type="${i}"]`);
};

// 0-9 Buttons
for (let i = 0; i < buttonDigitsArray.length; i++) {
    buttonDigitsArray[i].addEventListener('click', function () {
    if (lastClickWasTotaled === true) {
        number1 = undefined;
        lastClickWasTotaled = false;
    };
    if (displayValue !== undefined) {
        displayValue = displayValue.toString() + i;
        display.innerHTML = displayValue;
    };
    if (displayValue === undefined) {
        displayValue = i;
        display.innerHTML = displayValue;
    };
    
    




    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;

    console.log(number1 + ` is number 1 on button ${i} click`);
    console.log(number2 + ` is number 2 on button ${i} click`);
    console.log(displayValue + ` is displayValue on button ${i} click`);
    console.log(display.innerHTML + ` is display.innerHTML on ${i} button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
    });
};


// Operator Buttons

// Plus Button
let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    onOperandPress();
    operator = add;


    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
    console.log(number1 + ` is number 1 on button + click`);
    console.log(number2 + ` is number 2 on button + click`);
    console.log(displayValue + ` is displayValue on + button click`);
    console.log(display.innerHTML + ` is display.innerHTML on + button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Minus Button
let subtractButton = document.querySelector('[type="-"]');
subtractButton.addEventListener('click', function () {
    onOperandPress();
    operator = subtract;
     
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
    console.log(number1 + ` is number 1 on button - click`);
    console.log(number2 + ` is number 2 on button - click`);
    console.log(displayValue + ` is displayValue on - button click`);
    console.log(display.innerHTML + ` is display.innerHTML on - button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Multiply Button
let multiplyButton = document.querySelector('[type="*"]');
multiplyButton.addEventListener('click', function () {
    onOperandPress();
    operator = multiply;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;

    console.log(number1 + ` is number 1 on button * click`);
    console.log(number2 + ` is number 2 on button * click`);
    console.log(displayValue + ` is displayValue on * button click`);
    console.log(display.innerHTML + ` is display.innerHTML on * button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Divide Button
let divideButton = document.querySelector('[type="%"]');
divideButton.addEventListener('click', function () {
    onOperandPress();
    operator = divide;
    document.querySelector('[type="%"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;

    console.log(number1 + ` is number 1 on button % click`);
    console.log(number2 + ` is number 2 on button % click`);
    console.log(displayValue + ` is displayValue on % button click`);
    console.log(display.innerHTML + ` is display.innerHTML on % button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Compute Button
let computeButton = document.querySelector('[type="="]');
computeButton.addEventListener('click', function () {
    if (number1 !== undefined && operator !== undefined) {
        number1 = operate (number1, displayValue, operator);
        display.innerHTML = number1;
        numberChain.innerHTML = number1;
        displayValue = undefined;
        lastClickWasTotaled = true;
    };
    
    operator = undefined;
    

    console.log(number1 + ` is number 1 on button = click`);
    console.log(number2 + ` is number 2 on button = click`);
    console.log(displayValue + ` is displayValue on = button click`);
    console.log(display.innerHTML + ` is display.innerHTML on = button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Clear button
let clearButton = document.querySelector('[type="clear"]');
clearButton.addEventListener('click', function () {
    display.innerHTML = 0;
    displayValue;
    numberChain.innerHTML = '';
    number1 = undefined;
    number2 = undefined;
    operator = undefined;

    console.log(number1 + ` is number 1 on button = click`);
    console.log(number2 + ` is number 2 on button = click`);
    console.log(displayValue + ` is displayValue on = button click`);
    console.log(display.innerHTML + ` is display.innerHTML on = button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
})

// Decimal Button
/* let decimalButton = document.querySelector('[type="."]');
decimalButton.addEventListener(function () {

}); */