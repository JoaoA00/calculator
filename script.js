

function sum(a, b) { return a + b }
function subtract(a, b){ return a - b }
function divide(a, b){ return a / b }
function multiply(a, b){ return a * b }

function operate(a, operator, b){
    let result;
    switch (operator) {
        case '+':
            result = sum(a, b);
            break;

        case '-':
            result = subtract(a, b);
            break;

        case '*':
            result = multiply(a, b);
            break;

        case '/':
            result = divide(a, b);
            break;

        default:
            break;
    }
    return result;
}

const buttons = document.querySelector('.buttons');
const displayOperations = document.querySelector('.operations-display');
let strFirstNum = '';
let strSecondNum = '';
let auxCount = 1;
let result = 0;
let operation = '';

buttons.addEventListener('click', (e) => {
    const btn = e.target;

    if(btn.classList.contains('numbers')){

        if(auxCount == 1){
            strFirstNum += btn.id;
        } else {
            strSecondNum += btn.id;
        }

        displayOperations.textContent += btn.id;

    } else if(btn.classList.contains('operators')){

        if(auxCount == 1){

            auxCount = 2;
            operation = btn.id;
            displayOperations.textContent += ` ${btn.id} `;

        } else {
            
            result = operate(parseInt(strFirstNum), operation, parseInt(strSecondNum));
            strFirstNum = result;
            console.log(result);
            strSecondNum = ''
            operation = btn.id;
            displayOperations.textContent = `${result} ${btn.id} `;
            
        }

        
        
    } else if(btn.id === 'clear'){

        displayOperations.textContent = '';
        strFirstNum = '';
        strSecondNum = 0;

    } else if (btn.id === '='){

        if(strSecondNum === '' || strFirstNum === ''){

            displayOperations.textContent = strFirstNum;

        } else {

            result = operate(parseInt(strFirstNum), operation, parseInt(strSecondNum));
            strFirstNum = result;
            strSecondNum = '';
            displayOperations.textContent = result;
            auxCount = 1;

        }
    }
});
