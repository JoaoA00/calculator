

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

function roundToDecimal(value, decimalPlaces) {
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(value * factor) / factor;
}

const buttons = document.querySelector('.buttons');
const displayOperations = document.querySelector('.operations-display');
let strFirstNum = '';
let strSecondNum = '';
let auxCount = 1;
let result = 0;
let operation = '';
let enabeDot = true;
let continuation = false;

buttons.addEventListener('click', (e) => {
    const btn = e.target;

    if(btn.classList.contains('numbers')){
        if(continuation == true){
            continuation = false;
            displayOperations.textContent = '';
            strFirstNum = '';
        }

        if(btn.id == '.'){

            if(enabeDot){

                if(auxCount == 1){
                    strFirstNum += btn.id;
                } else {
                    strSecondNum += btn.id;
                }

                displayOperations.textContent += btn.id;

                enabeDot = false;

            }
            
        } else {

            if(auxCount == 1){
                strFirstNum += btn.id;
            } else {
                strSecondNum += btn.id;
            }
    
            displayOperations.textContent += btn.id;
        }

    } else if(btn.classList.contains('operators')){
        if(continuation == true){
            continuation = false;
        }

        enabeDot = true;

        if(auxCount == 1){

            auxCount = 2;
            operation = btn.id;
            displayOperations.textContent += ` ${btn.id} `;

        } else {
            result = roundToDecimal(operate(+strFirstNum, operation, +strSecondNum), 2);
            strFirstNum = result;
            strSecondNum = ''
            operation = btn.id;
            displayOperations.textContent = `${result} ${btn.id} `;
            
        }

        
        
    } else if(btn.id === 'clear'){

        enabeDot = true;
        
        displayOperations.textContent = '';
        strFirstNum = '';
        strSecondNum = 0;

    } else if (btn.id === '='){

        enabeDot = true;

        if(strSecondNum === '' || strFirstNum === ''){

            displayOperations.textContent = strFirstNum;

        } else {

            result = roundToDecimal(operate(+strFirstNum, operation, +strSecondNum), 2);
            strFirstNum = result;
            strSecondNum = '';
            displayOperations.textContent = result;
            auxCount = 1;
            continuation = true;

        }

        

    }
});
