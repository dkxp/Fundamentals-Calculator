//Add function
let add = function (firstNumber, secondNumber) {
    let number1 = parseInt(firstNumber);
    let number2 = parseInt(secondNumber);
    return number1 + number2;
};

//Subtract function
let subtract = function (firstNumber, secondNumber) {
    let number1 = parseInt(firstNumber);
    let number2 = parseInt(secondNumber);
    return number1 - number2;
};

//Multiply function
let multiply = function (...numbers) {
    if (numbers.length !== 0){
        return numbers.reduce((total, number) => total * number, 1);
    }
    else return 0;
};

//Divide function
let divide = function (...numbers) {
    if (numbers.length !== 0 && numbers.length !== 1) {
        return numbers.reduce((total, number) => total / number);
    }
    else return undefined;
};

// Create variables for display (later)
let firstNumberV;
let secondNumberV;
let operatorV;

// Create operate function
let operate = function (firstNumber, secondNumber, operator) {
    switch(operator) {
        case 'add':
            operator = add;
            break;
        case 'subtract':
            operator = subtract;
            break;
        case 'multiply':
            operator = multiply;
            break;
        case 'divide':
            operator = divide;
            break;
    };
    
    return operator(firstNumber, secondNumber);
};

//Create functions to populate display when number buttons are clicked
//Should store 'display value' in variable to use in next step
let display = document.querySelector('.display');
let displayNumber = document.createElement('div');
displayNumber = '';
let storedNumber = 0;
let currentOperator = '';
let previousCalculationSumOnDisplay = false;
/* let isStoredNumberUndefined = true; */

let numbersArray = [];
numbersArray[0] = document.querySelector('[type="key0"]');
numbersArray[1] = document.querySelector('[type="key1"]');
numbersArray[2] = document.querySelector('[type="key2"]');
numbersArray[3] = document.querySelector('[type="key3"]');
numbersArray[4] = document.querySelector('[type="key4"]');
numbersArray[5] = document.querySelector('[type="key5"]');
numbersArray[6] = document.querySelector('[type="key6"]');
numbersArray[7] = document.querySelector('[type="key7"]');
numbersArray[8] = document.querySelector('[type="key8"]');
numbersArray[9] = document.querySelector('[type="key9"]');

for (let i = 0; i < numbersArray.length; i++) {
    numbersArray[i].addEventListener('click', function () {
        displayNumber += i;
        display.innerHTML = displayNumber;
        
    })
}

document.querySelector('[type="key+"]').addEventListener('click', function () {
    storedNumber += parseInt(displayNumber);
    displayNumber = '';
    currentOperator = 'add';
});
document.querySelector('[type="key-"]').addEventListener('click', function () {
    /* if (isStoredNumberUndefined === true) {
        storedNumber = parseInt(currentNumber);
        currentNumber = '';
        currentOperator = 'subtract';
        isStoredNumberUndefined = false;
    } else {
        storedNumber -= parseInt(currentNumber);
        currentNumber = '';
        currentOperator = 'subtract';} */
});
document.querySelector('[type="key%"]').addEventListener('click', function () {
    /* storedNumber = parseInt(displayCurrentNumber);
    isStoredNumberUndefined = false;
    displayCurrentNumber = ''; */
    
});
document.querySelector('[type="key*"]').addEventListener('click', function () {
    /* storedNumber = parseInt(displayCurrentNumber);
    isStoredNumberUndefined = false;
    displayCurrentNumber = ''; */
});
document.querySelector('[type="key="]').addEventListener('click', function () {
    displayNumber = operate (storedNumber, displayNumber, currentOperator)
    display.innerHTML = displayNumber;
    storedNumber = 0;
    previousCalculationSumOnDisplay = true;
  
    
});
document.querySelector('[type="key."]').addEventListener('click', function () {
    operand1 = parseInt(displayNumber);
    displayNumber = '';
});


