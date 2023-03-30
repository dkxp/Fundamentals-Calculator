//Add function
let add = function (...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
};

//Subtract function
let subtract = function (...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
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
    operator = operator.toLowerCase();
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
document.querySelector('[type="key1"]').addEventListener('click', function () {
    display.innerHTML = 1;
});
document.querySelector('[type="key2"]').addEventListener('click', function () {
    display.innerHTML = 2;
});
document.querySelector('[type="key3"]').addEventListener('click', function () {
    display.innerHTML = 3;
});
document.querySelector('[type="key4"]').addEventListener('click', function () {
    display.innerHTML = 4;
});
document.querySelector('[type="key5"]').addEventListener('click', function () {
    display.innerHTML = 5;
});
document.querySelector('[type="key6"]').addEventListener('click', function () {
    display.innerHTML = 6;
});
document.querySelector('[type="key7"]').addEventListener('click', function () {
    display.innerHTML = 7;
});
document.querySelector('[type="key8"]').addEventListener('click', function () {
    display.innerHTML = 8;
});
document.querySelector('[type="key9"]').addEventListener('click', function () {
    display.innerHTML = 9;
});
document.querySelector('[type="key0"]').addEventListener('click', function () {
    display.innerHTML = 0;
});
document.querySelector('[type="key+"]').addEventListener('click', function () {
    display.innerHTML = '+';
});
document.querySelector('[type="key-"]').addEventListener('click', function () {
    display.innerHTML = '-';
});
document.querySelector('[type="key%"]').addEventListener('click', function () {
    display.innerHTML = '%';
});
document.querySelector('[type="key*"]').addEventListener('click', function () {
    display.innerHTML = '*';
});
document.querySelector('[type="key="]').addEventListener('click', function () {
    display.innerHTML = '=';
});
document.querySelector('[type="key."]').addEventListener('click', function () {
    display.innerHTML = '.';
});


