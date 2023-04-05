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
        operand1 = undefined;
        operand2 = undefined;
        previousOperand = undefined;
        screenWasReset = true;
        lastOperationScreen.textContent = '';
        currentOperationScreen.textContent = '';
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
        case '/':
            operator = divide;
            break;
    }
    return operator(parseFloat(a), parseFloat(b));
}
// Round decimal function
function roundDecimals(number){
    console.log(typeof number);
    if(number.toString().includes('.')){
        let decimalOperand = number.toString().split('.');
        if(decimalOperand[1].length > 3){
            operand1 = Math.round(number * 100) / 100;
        }
    }
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
    // To make number input after operand press clear previous currentOperationScreen
    // Issue after = press, with it resetting = calculation
    // Add operand undefined clause to try to fix
    if (screenWasReset === true && previousOperand !== undefined){
        currentOperationScreen.textContent = '';
        currentOperationScreen.textContent += numbr;
        currentOperationScreen.textContent = parseFloat(currentOperationScreen.textContent);
        screenWasReset = false;
        return;
    }
    currentOperationScreen.textContent += numbr;
    if(currentOperationScreen.textContent.includes('.') === false){
        currentOperationScreen.textContent = parseFloat(currentOperationScreen.textContent);
    };
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
    console.log('                ');
    console.log(`${operandBtn.textContent}         `);
    console.log('Initial Values on Operand Press');
    console.log('ScreenWasReset ' + screenWasReset);
    console.log('operand1 ' + operand1);
    console.log('operand2 ' + operand2);
    console.log('previousOperator ' + previousOperand);
    console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);   
    // If previous click was operand and you press an operand again, to change operand, but without performing computation
    if (screenWasReset === true && currentOperationScreen.textContent !== '' && operand1 !== undefined){
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
        roundDecimals(operand1);
        currentOperationScreen.textContent = operand1;
        previousOperand = operandBtn;
        if(operand1 !== undefined){
            lastOperationScreen.textContent = `${operand1} ${previousOperand}`;
        }
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
// = Callback
/* function onComputePress(){
    if(operand1 === undefined || previousOperand === undefined || screenWasReset === true){
        return;
    }
    operand2 = currentOperationScreen.textContent;
    operator = previousOperand;
    lastOperationScreen.textContent = `${operand1} ${previousOperand} ${operand2} = `
    operand1 = operate(operand1, operand2, operator);
    roundDecimals(operand1);
    lastOperationScreen.textContent += operand1;
    currentOperationScreen.textContent = operand1;
    operand1 = undefined;
    operand2 = undefined;
    previousOperand = undefined;
    screenWasReset = true;
} */
// = Button
computeButton = document.querySelector('.compute-operator');
computeButton.addEventListener('click', () => {
    if(operand1 === undefined || previousOperand === undefined || screenWasReset === true){
        return;
    }
    operand2 = currentOperationScreen.textContent;
    operator = previousOperand;
    lastOperationScreen.textContent = `${operand1} ${previousOperand} ${operand2} = `
    operand1 = operate(operand1, operand2, operator);
    roundDecimals(operand1);
    lastOperationScreen.textContent += operand1;
    currentOperationScreen.textContent = operand1;
    operand1 = undefined;
    operand2 = undefined;
    previousOperand = undefined;
    screenWasReset = true;
    /* if(operand1 !== undefined){
        lastOperationScreen.textContent = `${operand1} ${previousOperand} = ${operand1}`;
    } */
    console.log('                  ');
    console.log('= Press');
    console.log('ScreenWasReset ' + screenWasReset);
    console.log('operand1 ' + operand1);
    console.log('operand2 ' + operand2);
    console.log('previousOperator ' + previousOperand);
    console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
})
// Clear Button
clearButton = document.getElementById('clearBtn');
clearButton.addEventListener('click', () => {
    operand1 = undefined;
    operand2 = undefined;
    previousOperand = undefined;
    screenWasReset = true;
    currentOperationScreen.textContent = '';
    lastOperationScreen.textContent = '';
    console.log('                  ');
    console.log('Clear Press');
    console.log('ScreenWasReset ' + screenWasReset);
    console.log('operand1 ' + operand1);
    console.log('operand2 ' + operand2);
    console.log('previousOperator ' + previousOperand);
    console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
})
// Decimal Button
decimalButton = document.getElementById('.');
decimalButton.addEventListener('click', () => {
    if(currentOperationScreen.textContent.includes('.')){
        return;
    }
    currentOperationScreen.textContent += '.';
    if(currentOperationScreen.textContent === '0.'){
        currentOperationScreen.textContent = '.';
    }
})
// Add Delete Button
deleteButton = document.getElementById('deleteBtn');
deleteButton.addEventListener('click', () => {
    if(currentOperationScreen.textContent.length === 1){
        currentOperationScreen.textContent = '';
        return;
    }
    if(currentOperationScreen === ''){
        return;
    }
    let length = currentOperationScreen.textContent.length - 1;
    currentOperationScreen.textContent = currentOperationScreen.textContent.substring(0, length);
})
//Number Keypad Press
document.addEventListener('keydown', (event) => {
    if(event.key >= 0 && event.key <= 9){
        appendDisplay(event.key);
            }
        }
    );
//Operand Keypad Press
document.addEventListener('keydown', (event) => {
    if(event.key === '*' || event.key === '/' || event.key === '+' || event.key === '-'){
        onOperandPress(event.key);
    }
})
// = Keypad Press
document.addEventListener('keydown', (event) => {
    if(event.key === 'Enter'){
        if(operand1 === undefined || previousOperand === undefined || screenWasReset === true){
            return;
        }
        operand2 = currentOperationScreen.textContent;
        operator = previousOperand;
        lastOperationScreen.textContent = `${operand1} ${previousOperand} ${operand2} = `
        operand1 = operate(operand1, operand2, operator);
        roundDecimals(operand1);
        lastOperationScreen.textContent += operand1;
        currentOperationScreen.textContent = operand1;
        operand1 = undefined;
        operand2 = undefined;
        previousOperand = undefined;
        screenWasReset = true;

        console.log('                  ');
        console.log('= Press');
        console.log('ScreenWasReset ' + screenWasReset);
        console.log('operand1 ' + operand1);
        console.log('operand2 ' + operand2);
        console.log('previousOperator ' + previousOperand);
        console.log('currentOperationScreen.textContent' + currentOperationScreen.textContent);
    }
})
// Backspace Keypad Press
document.addEventListener('keydown', (event) => {
    if(event.key === 'Backspace'){
        if(currentOperationScreen.textContent.length === 1){
            currentOperationScreen.textContent = '';
            return;
        }
        if(currentOperationScreen === ''){
            return;
        }
        let length = currentOperationScreen.textContent.length - 1;
        currentOperationScreen.textContent = currentOperationScreen.textContent.substring(0, length);
    }
})
// Decimal Keypad Press
document.addEventListener('keydown', (event) => {
    if(event.key === '.'){
       if(currentOperationScreen.textContent.includes('.')){
        return;
    }
    currentOperationScreen.textContent += '.';
    if(currentOperationScreen.textContent === '0.'){
        currentOperationScreen.textContent = '.';
    } 
    }
})