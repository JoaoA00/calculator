

function sum(a, b) { return a + b }
function subtract(a, b){ return a - b }
function divide(a, b){ return a / b }
function multiply(a, b){ return a * b }

function operate(a, operator, b){
    switch (operator) {
        case '+':
            sum(a, b);
            break;

        case '-':
            subtract(a, b);
            break;

        case '*':
            multiply(a, b);
            break;

        case '/':
            divide(a, b);
            break;

        default:
            break;
    }
}

