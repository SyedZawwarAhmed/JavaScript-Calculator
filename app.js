const result = document.getElementById("result");
const calculation = document.getElementById("calculation");

let number = '';
let numbers = [];
let operators = [];
let answer = 0;
let fontLen = 0;
let fonSize = 35;
let answerStr = '';
let calArr = [];

const cleared = () => {
    calculation.innerText = '0';
    result.style.fontSize = '35px';
    calculation.style.fontSize = '35px';
    calculation.style.display = ''
    number = '';
    result.innerText = '';
    answer = 0;
    numbers = [];
    operators = [];
    fontLen = 0;
    fonSize = 35;
    answerStr = '';
    calArr = [];
}

function first0() {
    if (calculation.innerText === '0') {
        calculation.innerText = '';
    }
    if (number === '0') {
        number = '';
    }
}

function fontRes() {
    fontLen++;
    if (fonSize > 19 && fontLen > 11) {
        fonSize -= 2;
        calculation.style.fontSize = fonSize.toString() + 'px';  
    }
}

function doubleOpe() {
    if (calArr[calArr.length - 1] === '+' || calArr[calArr.length - 1] === '-' || calArr[calArr.length - 1] === '*' || calArr[calArr.length - 1] === '/') {
        calArr.pop();
    } 
}

function numClick(num) {
    first0();
    fontRes();
    calculation.innerText += num;
    number += num;
}

function opeClick(ope, sign) {
    fontRes();
  
    calculation.style.display = ''
    if (result.innerText !== '') {
        result.style.visibility = 'hidden';
        calculation.innerText = calculation.innerText + result.textContent + sign;
    }
    else {
        calculation.innerText += sign;
    }
  
    if (number !== '' && number !== '-' && numbers.length === 0) {
        calArr.push(number);
    }
    doubleOpe();
    calArr.push(ope);
    number = '';
}

const pressedDec = () => {
    fontRes();
    let i ;
    for (i=0; i<number.length; i++) {
        if (number[i] === '.') {
            break;
        }
    }
    if (i === number.length) {
        number += '.';
        calculation.innerText += '.';
    }
}

const minus = () => {
    calculation.style.display = ''
    fontRes();

    calculation.style.display = ''
    if (result.innerText !== '') {
        result.style.visibility = 'hidden';
        calculation.innerText = calculation.innerText + result.textContent + '-';
    }
    else {
        calculation.innerText += '-';
    }
    
    if (number !== '' && number !== '-' && numbers.length === 0) {
        calArr.push(number);
    }
    if (calArr[calArr.length - 1] === '+' || calArr[calArr.length - 1] === '-' || calArr[calArr.length - 1] === '*' || calArr[calArr.length - 1] === '/') {
        number += '-';
    }
    else {
        calArr.push('-');
        number = '';
    }
}

const equals = () => {
    numbers = [];
    operators = [];

    calArr.push(number);

    for (let i=0; i<calArr.length; i++) {
        if (calArr[i] === '+' || calArr[i] === '-' || calArr[i] === '*' || calArr[i] === '/') {    
            operators.push(calArr[i]);
        }
        else {
            numbers.push(calArr[i]);
        }
    }

    answer = parseFloat(numbers[0]);
    for (let i=0; i<operators.length; i++) {
        if(operators[i] === '+') { 
            answer += parseFloat(numbers[i + 1]);
        }
        if(operators[i] === '-') {
            answer -= parseFloat(numbers[i + 1]);
        }
        if(operators[i] === '*') {
            answer *= parseFloat(numbers[i + 1]);
        }
        if(operators[i] === '/') {
            answer /= parseFloat(numbers[i + 1]);
        }
    }
    
    answer = answer.toFixed(8);
    answer = parseFloat(answer);
    answerStr = answer.toString();
    
    if (answer === 0) {
        result.innerText = answer;
    }
    else if (answerStr.length > 10) {
        result.innerText = answer.toExponential(7);
    }
    else {
        if (answerStr.length <= 14) {
            answer = answer.toFixed(8);
            result.innerText = parseFloat(answer);
        }
        else {
            for (let i=0; i<answerStr.length; i++) { 
                result.innerText += answerStr[i];
            }
        } 
    } 

       calculation.innerText = '';
       calculation.style.display = 'none';
       result.style.visibility = 'visible';
       fonSize = 35;
       fontLen = result.textContent.length;
}