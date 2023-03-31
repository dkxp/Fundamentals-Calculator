//Add function
let add = (a, b) => a + b;

//Subtract function
let subtract = (a, b) => a - b;

//Multiply function
let multiply = (a, b) => a * b;

//Divide function
let divide = (a, b) => a / b;

// Variables to represent number, operator, number
let number1st;
let number2nd;
let operator;

// Operate function
let operate = function (op, a, b) {
    switch (op) {
        case '+':
            op = add;
            break;
        case '-': 
            op = subtract;
            break;
        case '*':
            op = multiply;
            break;
        case '/':
            op = divide;
            break;
    }
    return op (parseInt(a), parseInt(b));
};

let whatever = operate('+', '5', '10');

console.log(whatever);

// Basic HTML Calc (Done)

// Create functions to populate calc display when numbers pressed
// **Note: should be storing 'display value' in variable, for future use

