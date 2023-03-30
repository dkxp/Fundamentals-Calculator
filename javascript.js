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
let displayCurrentNumber = document.createElement('div');
displayCurrentNumber = '';
let previousNumber = 0;
let currentOperator = '';


document.querySelector('[type="key1"]').addEventListener('click', function () {
    displayCurrentNumber += 1;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key2"]').addEventListener('click', function () {
    displayCurrentNumber += 2;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key3"]').addEventListener('click', function () {
    displayCurrentNumber += 3;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key4"]').addEventListener('click', function () {
    displayCurrentNumber += 4;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key5"]').addEventListener('click', function () {
    displayCurrentNumber += 5;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key6"]').addEventListener('click', function () {
    displayCurrentNumber += 6;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key7"]').addEventListener('click', function () {
    displayCurrentNumber += 7;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key8"]').addEventListener('click', function () {
    displayCurrentNumber += 8;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key9"]').addEventListener('click', function () {
    displayCurrentNumber += 9;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key0"]').addEventListener('click', function () {
    displayCurrentNumber += 0;
    display.innerHTML = displayCurrentNumber;
});
document.querySelector('[type="key+"]').addEventListener('click', function () {
    previousNumber += parseInt(displayCurrentNumber);
    displayCurrentNumber = '';
    currentOperator = 'add';
});
document.querySelector('[type="key-"]').addEventListener('click', function () {
    previousNumber -= parseInt(displayCurrentNumber);
    displayCurrentNumber = '';
    currentOperator = 'subtract';
});
document.querySelector('[type="key%"]').addEventListener('click', function () {
    previousNumber = parseInt(displayCurrentNumber);
    displayCurrentNumber = '';
});
document.querySelector('[type="key*"]').addEventListener('click', function () {
    operand1 = parseInt(displayCurrentNumber);
    displayCurrentNumber = '';
});
document.querySelector('[type="key="]').addEventListener('click', function () {
    displayCurrentNumber = operate (previousNumber, displayCurrentNumber, currentOperator)
    display.innerHTML = displayCurrentNumber;
    previousNumber = 0;
});
document.querySelector('[type="key."]').addEventListener('click', function () {
    operand1 = parseInt(displayCurrentNumber);
    displayCurrentNumber = '';
});


