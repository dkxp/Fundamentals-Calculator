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
        return operator (parseInt(a, 10), parseInt(b, 10));
    };
};

// Basic HTML Calc (Done)

// Create functions to populate calc display when numbers pressed

let numberChain = document.querySelector('.displayHistory');
let display = document.querySelector('.display');
let displayValue = '';
let buttonDigitsArray = [];
let isItCleared = true;
display.innerHTML = 0;

for (let i = 0; i <= 9; i++) {
    buttonDigitsArray[i] = document.querySelector(`[type="${i}"]`);
};

// Number clicks
for (let i = 1; i < buttonDigitsArray.length; i++) {
    buttonDigitsArray[i].addEventListener('click', function () {
        isItCleared = false;
        if (number1 === undefined) {
            displayValue += i;
            display.innerHTML = displayValue;
        };

        if (number1 !== undefined) {
            display.innerHTML = number1;
            number2 += i;
        };

        console.log(number1 + ` is number 1 on button ${i} click`);
        console.log(number2 + ` is number 2 on button ${i} click`);
        console.log(displayValue + ` is displayValue on button ${i} click`);
        console.log(display.innerHTML + ` is display.innerHTML on ${i} button click`);
        console.log(operator + ` is operator`);
        console.log('                         ');

        document.querySelector('[type="+"]').disabled = false;
        document.querySelector('[type="-"]').disabled = false;
        document.querySelector('[type="*"]').disabled = false;
        document.querySelector('[type="%"]').disabled = false;
    });
};

// 0 Button
buttonDigitsArray[0].addEventListener('click', function () {   
    if (isItCleared === false) {
        if (number1 === undefined) {
            displayValue += 0;
            display.innerHTML = displayValue;
        };

        if (number1 !== undefined) {
            display.innerHTML = number1;
            number2 += 0;
        }
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

//Operator Buttons

// Plus Button
let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    if (number1 !== undefined && number2.length !== 0 && operator !== undefined) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = '';
    };
    if (number1 === undefined) {
        number1 = displayValue;
    };
    operator = add;
    displayValue = 0;

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
    
    if (number1 === undefined) {
        number1 = displayValue;
    };

    if (number1 !== undefined && number2.length !== 0 && operator !== undefined) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = '';
    };
    operator = subtract;
    displayValue = 0;   


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
    
    if (number1 !== undefined && number2.length !== 0 && operator !== undefined) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = '';
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
    
    operator = multiply;

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
    

    if (number1 !== undefined && number2.length !== 0 && operator !== undefined) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = '';
    };

    if (number1 === undefined) {
        number1 = displayValue;
    };
    
    operator = divide;
    displayValue = 0;


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

// Compute Total
let computeButton = document.querySelector('[type="="]');
computeButton.addEventListener('click', function () {
    if (number1 === undefined) {
        number1 = displayValue;
    };

    if (number1 !== undefined && number2.length !== 0) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = number1;
        isItCleared = true;
    };

    operator = undefined;

    console.log(number1 + ` is number 1 on button = click`);
    console.log(number2 + ` is number 2 on button = click`);
    console.log(displayValue + ` is displayValue on = button click`);
    console.log(display.innerHTML + ` is display.innerHTML on = button click`);
    console.log(operator + ` is operator`);
    console.log('                         ');
});

// Clear button TODO:
let clearButton = document.querySelector('[type="clear"]');
clearButton.addEventListener('click', function () {
    isItCleared = true;
    display.innerHTML = 0;
    displayValue = '';
    number1 = undefined;
    number2 = '';
    operator = undefined;
})

