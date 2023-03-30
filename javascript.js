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
    console.log(operator);
    return operator(firstNumber, secondNumber);
};

//Create functions to populate display when number buttons are clicked
//Should store 'display value' in variable to use in next step
