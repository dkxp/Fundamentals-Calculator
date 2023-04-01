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
let operatorAfterComputing;

// Operate function
let operate = function (a, b, operator) {
    return operator (parseInt(a, 10), parseInt(b, 10));
    
};

// Basic HTML Calc (Done)

// Create functions to populate calc display when numbers pressed

let numberChain = document.querySelector('.displayHistory');
let display = document.querySelector('.display');
let displayValue = '';
let buttonDigitsArray = [];
let emptyValues = true;
let lastInputWasEqual = false;
let lastInputWasEqual2 = false;
display.innerHTML = 0;

for (let i = 0; i <= 9; i++) {
    buttonDigitsArray[i] = document.querySelector(`[type="${i}"]`);
};

// Callback functions for number buttons?
let operatorFunctions = function () {
    
    if (number1 !== undefined && number2.length !== 0) {
        if (lastInputWasEqual2 === true) {
            operate = operatorAfterComputing;
            lastInputWasEqual2 = false;
        };
        number1 = operate (number1, number2, operator);
        number2 = '';
        displayValue = number1;
        display.innerHTML = displayValue;
    };
    if (number1 === undefined) {
        number1 = displayValue;
    };
    displayValue = 0;  
    document.querySelector('[type="+"]').disabled = false;
    document.querySelector('[type="-"]').disabled = false;
    document.querySelector('[type="*"]').disabled = false;
    document.querySelector('[type="%"]').disabled = false;
}

// Number buttons
for (let i = 1; i < buttonDigitsArray.length; i++) {
    buttonDigitsArray[i].addEventListener('click', function () {
        emptyValues = false;
        if (number1 === undefined) {
            displayValue += i;
            display.innerHTML = displayValue;
        };

        if (number1 !== undefined) {
            // This display.innerhtml as #1 doesn't work after equate.
            displayValue += i;
            display.innerHTML = displayValue;
            number2 += i;
        };

        if (lastInputWasEqual === true) {
            number2 = 0;
            number2 += i;
            display.innerHTML = number2;
            lastInputWasEqual = false;
        }

        

        console.log(number1 + ` is number 1 on button ${i} click`);
        console.log(number2 + ` is number 2 on button ${i} click`);
        console.log(displayValue + ` is displayValue on button ${i} click`);
        console.log(display.innerHTML + ` is display.innerHTML on ${i} button click`);
        console.log(operator + ` is operator`);
        console.log('Last equation was computed is ' + lastInputWasEqual);

        document.querySelector('[type="+"]').disabled = false;
        document.querySelector('[type="-"]').disabled = false;
        document.querySelector('[type="*"]').disabled = false;
        document.querySelector('[type="%"]').disabled = false;
    });
};

// 0/Zero Button
buttonDigitsArray[0].addEventListener('click', function () {   
    if (emptyValues === false) {
        if (number1 === undefined) {
            displayValue += '0';
            display.innerHTML = displayValue;
        };

        if (number1 !== undefined) {
            displayValue += '0'
            display.innerHTML = displayValue;
            number2 += '0';
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
});

//Operator Buttons

// Plus Button
let plusButton = document.querySelector('[type="+"]');
plusButton.addEventListener('click', function () {
    operatorAfterComputing = add;
    operatorFunctions();
    lastInputWasEqual2 = false;
    
    operator = add;

    console.log(number1 + ` is number 1 on button + click`);
    console.log(number2 + ` is number 2 on button + click`);
    console.log(displayValue + ` is displayValue on + button click`);
    console.log(display.innerHTML + ` is display.innerHTML on + button click`);
    console.log(operator + ` is operator`);
});

// Minus Button
let subtractButton = document.querySelector('[type="-"]');
subtractButton.addEventListener('click', function () {
    operatorAfterComputing = subtract;
    lastInputWasEqual2 = false;
    operatorFunctions()   

    operator = subtract;

    console.log(number1 + ` is number 1 on button - click`);
    console.log(number2 + ` is number 2 on button - click`);
    console.log(displayValue + ` is displayValue on - button click`);
    console.log(display.innerHTML + ` is display.innerHTML on - button click`);
    console.log(operator + ` is operator`);
});

// Multiply Button
let multiplyButton = document.querySelector('[type="*"]');
multiplyButton.addEventListener('click', function () {
    operatorAfterComputing = multiply;
    lastInputWasEqual2 = false;
    operatorFunctions()
    
    operator = multiply;

    console.log(number1 + ` is number 1 on button * click`);
    console.log(number2 + ` is number 2 on button * click`);
    console.log(displayValue + ` is displayValue on * button click`);
    console.log(display.innerHTML + ` is display.innerHTML on * button click`);
    console.log(operator + ` is operator`);

});

// Divide Button
let divideButton = document.querySelector('[type="%"]');
divideButton.addEventListener('click', function () {
    operatorAfterComputing = divide;
    lastInputWasEqual2 = false;
    operatorFunctions()

    operator = divide;


    console.log(number1 + ` is number 1 on button % click`);
    console.log(number2 + ` is number 2 on button % click`);
    console.log(displayValue + ` is displayValue on % button click`);
    console.log(display.innerHTML + ` is display.innerHTML on % button click`);
    console.log(operator + ` is operator`);
});

// Compute Total
let computeButton = document.querySelector('[type="="]');
computeButton.addEventListener('click', function () {
    lastInputWasEqual = true;
   
    if (number1 !== undefined && number2.length !== 0) {
        number1 = operate (number1, number2, operator);
        display.innerHTML = number1;
        number2 = '';
        displayValue = '';
    };
    lastInputWasEqual2 = true;
    operator = undefined;
    emptyValues = true;

    console.log(number1 + ` is number 1 on button = click`);
    console.log(number2 + ` is number 2 on button = click`);
    console.log(displayValue + ` is displayValue on = button click`);
    console.log(display.innerHTML + ` is display.innerHTML on = button click`);
    console.log(operator + ` is operator`);
    console.log('Last equation was computed is ' + lastInputWasEqual);
});

// Clear button TODO:
let clearButton = document.querySelector('[type="clear"]');
clearButton.addEventListener('click', function () {
    emptyValues = true;
    display.innerHTML = 0;
    displayValue = '';
    number1 = undefined;
    number2 = '';
    operator = undefined;
})
// number1Exists set to false!

