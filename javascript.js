//Add function
let add = (a, b) => a + b;

//Subtract function
let subtract = (a, b) => a - b;

//Multiply function
let multiply = (a, b) => a * b;

//Divide function
let divide = function (a, b) {
    if (b !== 0) {
        return a / b;
    };
    if (b === 0) {
        alert ("Can't Divide By Zero!");
        numberChain.innerHTML = '';
        displayValue.innerHTML = 0;
    };
};

// Variables to represent number, operator, number
let number1;
let number2;
let operator;
let computedTotal;

// Operate function
let operate = function (a, b, operator) {
    let result;
    if (operator !== undefined) {
        result = operator (parseFloat(a, 10), parseFloat(b, 10));
        return roundDecimals(result);
    };
};

// Callback Function to Round Decimals
let roundDecimals = function (numb) {
    let integer;
    let decimal;
    if (Number.isInteger(numb)) {
        return numb;
    } else {
        integer = numb.toString().split('.')[0];
        decimal = numb.toString().split('.')[1];
    };
    if (decimal.length <= 3) {
        return numb;
        // subtract trailing 0s, if shown
    };
    if (decimal.length > 3) {
        return integer + '.' + decimal.substring(0, 3);
    };
};

// Callback Function for Operand Buttons
let onOperandPress = function () {
    if (displayValue === 0 && number1 !== undefined && operator !== divide) {
        numberChain.innerHTML = `${number1} ${operandSymbol}`;
    };
    if (number1 !== undefined && displayValue !== 0) {
        number2 = displayValue;
        number1 = operate(number1, number2, operator);
        display.innerHTML = number1;
        displayValue = 0;
        numberChain.innerHTML = number1 + ' ' + operandSymbol;
    };
    //** Added second clause, maybe remove? */
    if (number1 === undefined && displayValue !== undefined) {
        number1 = displayValue;
        numberChain.innerHTML = number1;
        displayValue = 0;
    };
    if (displayValue === 0 && operator === divide) {
        alert ("Can't Divide By Zero!");
        numberChain.innerHTML = '';
        displayValue.innerHTML = 0;
    };
    lastClickWasTotaled = false;
};

// Global Variables
let numberChain = document.querySelector('.numberChain');
let display = document.querySelector('.display');
let displayValue = 0;
let buttonDigitsArray = [];
numberChain.innerHTML = '';
display.innerHTML = 0;
let lastClickWasTotaled = false;
let operandSymbol;

for (let i = 0; i <= 9; i++) {
    buttonDigitsArray[i] = document.querySelector(`[type="${i}"]`);
};

// 0-9 Buttons
for (let i = 0; i < buttonDigitsArray.length; i++) {
    buttonDigitsArray[i].addEventListener('click', function () {
    if (lastClickWasTotaled === true && operator == undefined) {
        number1 = undefined;
        displayValue = 0;
        lastClickWasTotaled = false;
    };
    if (displayValue !== 0) {
        displayValue = displayValue.toString() + i;
        display.innerHTML = displayValue;
    };
    if (displayValue === 0) {
        displayValue = i;
        display.innerHTML = displayValue;
        if (displayValue === 0) {
            displayValue = 0;
        };
    }; 
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;

    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
    console.log(number1 + ` is number 1 on button ${i} click`);
    console.log(number2 + ` is number 2 on button ${i} click`);
    console.log(displayValue + ` is displayValue on button ${i} click`);
    console.log(display.innerHTML + ` is display.innerHTML on ${i} button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
    });
};

// Plus Button
let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    operandSymbol = '+';
    onOperandPress();
    operator = add;
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
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
    operandSymbol = '-';
    onOperandPress();
    operator = subtract;  
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
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
    operandSymbol = '*';
    onOperandPress();
    operator = multiply;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;

    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
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
    operandSymbol = '%';
    onOperandPress();
    operator = divide;
    document.querySelector('[type="%"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;

    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
    console.log(number1 + ` is number 1 on button % click`);
    console.log(number2 + ` is number 2 on button % click`);
    console.log(displayValue + ` is displayValue on % button click`);
    console.log(display.innerHTML + ` is display.innerHTML on % button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// = Button
let computeButton = document.querySelector('[type="="]');
computeButton.addEventListener('click', function () {
    if (number1 !== undefined && operator !== undefined) {
        number1 = operate (number1, displayValue, operator);
        display.innerHTML = number1;
        numberChain.innerHTML = number1;
        number2 = undefined;
        displayValue = 0;
        lastClickWasTotaled = true;
    };
    if (number1 === undefined) {
        numberChain.innerHTML = displayValue;
        display.innerHTML = displayValue;
        if (displayValue === 0) {
            numberChain.innerHTML = 0;
        };
    };
    /* if (number1 === undefined) {
        display.innerHTML = 0;
    }; */
    operator = undefined;

    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
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
    displayValue = 0;
    numberChain.innerHTML = '';
    number1 = undefined;
    number2 = undefined;
    operator = undefined;

    console.log(lastClickWasTotaled + ' value of lastClickWasTotaled');
    console.log(number1 + ` is number 1 on button = click`);
    console.log(number2 + ` is number 2 on button = click`);
    console.log(displayValue + ` is displayValue on = button click`);
    console.log(display.innerHTML + ` is display.innerHTML on = button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Decimal Button
/* let decimalButton = document.querySelector('[type="."]');
decimalButton.addEventListener(function () {

}); */