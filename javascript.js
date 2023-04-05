// Operand and Operate Functions
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function divide(a, b) {
    if (b === 0){
        alert("Can't divide by zero!");
        return;
    }
    return a / b;
}
function multiply(a, b) {
    return a * b;
}
function operate(a, b, operator) {
    switch (operator){
        case '+':
            operator = add;
            break;
        case '-':
            operator = subtract;
            break;
        case '%':
            operator = divide;
            break;
        case '*':
            operator = multiply;
            break;
    }
    return operator(parseFloat(a), parseFloat(b));
}

// Global Variables
let operand1;
let operand2;
let operator;
let previousOperand;
let screenWasReset = true;
let lastOperationScreen = document.getElementById('lastOperationScreen');
lastOperationScreen.textContent = '';
let currentOperationScreen = document.getElementById('currentOperationScreen');
currentOperationScreen.textContent = '';
let operatorButtons = document.querySelectorAll('.data-operator');
clearButtons = document.getElementById('clearBtn');
computeButton = document.getElementById('=');

// Number Button Click Callback Function
function appendDisplay(numbr) {
    if (screenWasReset === true){
        currentOperationScreen.textContent = '';
        currentOperationScreen.textContent += numbr;
        currentOperationScreen.textContent = parseFloat(currentOperationScreen.textContent);
        screenWasReset = false;
        return;
    }
    currentOperationScreen.textContent += numbr;
    currentOperationScreen.textContent = parseFloat(currentOperationScreen.textContent);
    screenWasReset = false;

    console.log('                  ');
    console.log(`Number ${numbr} press `);
    console.log('ScreenWasReset ' + screenWasReset);
    console.log('operand1 ' + operand1);
    console.log('operand2 ' + operand2);
    console.log('previousOperator ' + previousOperand);
    console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
}
// Number Button Click Event Listener
numberButtons = document.querySelectorAll('.data-number');
numberButtons.forEach((button) => 
    button.addEventListener('click', () => appendDisplay(button.textContent)));

// Operand Press Callback Function

function onOperandPress(operandBtn){
    console.log('                  ');
    console.log('Initial Values on Operand Press');
    console.log('ScreenWasReset ' + screenWasReset);
    console.log('operand1 ' + operand1);
    console.log('operand2 ' + operand2);
    console.log('previousOperator ' + previousOperand);
    console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
    
    // If previous click was operand and you press an operand again, to change operand, but without performing computation
    if (screenWasReset === true && currentOperationScreen.textContent !== ''){
        previousOperand = operandBtn;
        lastOperationScreen.textContent = `${operand1} ${previousOperand}`;

        console.log('                  ');
        console.log('First If Clause in OperandPress');
        console.log('ScreenWasReset ' + screenWasReset);
        console.log('operand1 ' + operand1);
        console.log('operand2 ' + operand2);
        console.log('previousOperator ' + previousOperand);
        console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
        return;
        
    }
    // If operand1 exists and there is a new (not the same operand1 showing after operand click) number, as operand2
    // This runs Operate and gives new operand1
    if (operand1 !== undefined && screenWasReset === false && previousOperand !== undefined){
        operand2 = currentOperationScreen.textContent;
        operator = previousOperand;
        operand1 = operate(operand1, operand2, operator);
        currentOperationScreen.textContent = operand1;
        previousOperand = operandBtn;
        lastOperationScreen.textContent = `${operand1} ${previousOperand}`;
        screenWasReset = true;

        console.log('                  ');
        console.log('Second If Clause in OperandPress');
        console.log('ScreenWasReset ' + screenWasReset);
        console.log('operand1 ' + operand1);
        console.log('operand2 ' + operand2);
        console.log('previousOperator ' + previousOperand);
        console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
    }
    // If operand1 doesn't exist (should only be on start and on =)
    if (operand1 === undefined && currentOperationScreen.textContent !== ''){
        operand1 = currentOperationScreen.textContent;
        previousOperand = operandBtn;
        lastOperationScreen.textContent = operand1;
        screenWasReset = true;

        console.log('                  ');
        console.log('Third If Clause in OperandPress');
        console.log('ScreenWasReset ' + screenWasReset);
        console.log('operand1 ' + operand1);
        console.log('operand2 ' + operand2);
        console.log('previousOperator ' + previousOperand);
        console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
    }
}
// On Operand Click Eventlistener
operatorButtons.forEach((button) => button.addEventListener('click', () => onOperandPress(button.textContent)));

