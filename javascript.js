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
let number2 = '';
let operator;

// Operate function
let operate = function (a, b, operator) {
    if (number2.length === 0) {
        return (parseInt(a, 10));
    } else {
        return operator (parseFloat(a, 10), parseFloat(b, 10));
    };
};

// Callback Function for Operand Buttons
function onOperandPress () {
    if (number1 !== undefined) {
        isNumber1Empty = false;
    };
    if (number1 !== undefined && number2.length !== 0 && operator !== undefined) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = '';
    };
    if (number1 === undefined) {
        number1 = displayValue;
    };
    if (number1 === Infinity) {
        alert("Can't divide by zero!");
        number1 = undefined;
        number2 = '';
        displayValue = '';
        display.innerHTML = 0;
        operator = undefined;
    };
}

// Global Variables

let numberChain = document.querySelector('.numberChain');
let display = document.querySelector('.display');
let displayValue = '';
let buttonDigitsArray = [];
let isNumber1Empty = true;
numberChain.innerHTML = '';
display.innerHTML = 0;

for (let i = 0; i <= 9; i++) {
    buttonDigitsArray[i] = document.querySelector(`[type="${i}"]`);
};

// 1-9 Buttons
for (let i = 1; i < buttonDigitsArray.length; i++) {
    buttonDigitsArray[i].addEventListener('click', function () {
        console.log(isNumber1Empty + 'value of isNumber1Empty');
        if (isNumber1Empty === true) {
            number1 = undefined;
            displayValue = '';
            console.log(number1);
        };
        isNumber1Empty = false;
        console.log(isNumber1Empty + 'value of isNumber1Empty');
        if (number1 === undefined) {
            displayValue += i;
            display.innerHTML = displayValue;
        };

        if (number1 !== undefined) {
            display.innerHTML = number1;
            number2 += i;
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

// 0 Button
buttonDigitsArray[0].addEventListener('click', function () {   
    if (isNumber1Empty === false) {
        if (number1 === undefined) {
            displayValue += 0;
            display.innerHTML = displayValue;
        };

        if (number1 !== undefined) {
            display.innerHTML = number1;
            number2 += 0;
        };
    };
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;

    console.log(number1 + ` is number 1 on button 0 click`);
    console.log(number2 + ` is number 2 on button 0 click`);
    console.log(displayValue + ` is displayValue on 0 button click`);
    console.log(display.innerHTML + ` is display.innerHTML on 0 button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Operator Buttons

// Plus Button
let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    onOperandPress();
    operator = add;
    displayValue = 0;
    document.querySelector('[type="+"]').disabled = true;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
    console.log(isNumber1Empty + 'value of isNumber1Empty');
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
    displayValue = 0;   
    document.querySelector('[type="-"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
    
    console.log(isNumber1Empty + 'value of isNumber1Empty');
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
    displayValue = 0;
    operator = multiply;
    document.querySelector('[type="*"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;

    console.log(isNumber1Empty + 'value of isNumber1Empty');
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
    displayValue = 0;
    document.querySelector('[type="%"]').disabled = true;
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;

    console.log(isNumber1Empty + 'value of isNumber1Empty');
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
    if (number1 === undefined) {
        number1 = displayValue;
        numberChain.innerHTML += displayValue;
    };
    if (number1 !== undefined && number2.length !== 0) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = number1;
        isNumber1Empty = true;
    };
    operator = undefined;

    console.log(isNumber1Empty + 'value of isNumber1Empty');
    console.log(number1 + ` is number 1 on button = click`);
    console.log(number2 + ` is number 2 on button = click`);
    console.log(displayValue + ` is displayValue on = button click`);
    console.log(display.innerHTML + ` is display.innerHTML on = button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
    if (number1 === Infinity) {
        alert ("Can't Divide by Infinity!");
        number1 = undefined;
        number2 = '';
        displayValue = '';
        display.innerHTML = 0;
        operator = undefined;
    };
});

// Clear button
let clearButton = document.querySelector('[type="clear"]');
clearButton.addEventListener('click', function () {
    isNumber1Empty = true;
    display.innerHTML = 0;
    displayValue = '';
    number1 = undefined;
    number2 = '';
    operator = undefined;

    console.log(isNumber1Empty + 'value of isNumber1Empty');
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