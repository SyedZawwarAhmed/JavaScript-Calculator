const result = document.getElementById("result");
const calculation = document.getElementById("calculation");

let number = '';
let numbers = [];
let operators = [];
let answer = 0;

let fontLen = 0;
let fonSize = 39;

const cleared = () => {
    calculation.innerText = '0';
    calculation.style.fontSize = '39px';
    number = '';
    result.innerText = '';
    answer = 0;
    numbers = [];
    operators = [];
    fontLen = 0;
    fonSize = 39;
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
    if (fonSize > 17) {
        if (fontLen > 11) {
            fonSize -= 2;
            calculation.style.fontSize = fonSize.toString() + 'px';
        }
        if (fontLen > 30) {
            fonSize -= 0.5;
            calculation.style.fontSize = fonSize.toString() + 'px';
        }
    }
}

const pressed9 = () => {
    first0();
    fontRes();
    calculation.innerText += '9';
    number += '9';
}
const pressed8 = () => {
    first0();
    fontRes();
    calculation.innerText += '8';
    number += '8';
}
const pressed7 = () => {
    first0();
    fontRes();
    calculation.innerText += '7';
    number += '7';
}
const pressed6 = () => {
    first0();
    fontRes();
    calculation.innerText += '6';
    number += '6';
}
const pressed5 = () => {
    first0();
    fontRes();
    calculation.innerText += '5';
    number += '5';
}
const pressed4 = () => {
    first0();
    fontRes();
    calculation.innerText += '4';
    number += '4';
}
const pressed3 = () => {
    first0();
    fontRes();
    calculation.innerText += '3';
    number += '3';
}
const pressed2 = () => {
    first0();
    fontRes();
    calculation.innerText += '2';
    number += '2';
}
const pressed1 = () => {
    first0();
    fontRes();
    calculation.innerText += '1';
    number += '1';
}
const pressed0 = () => {
    first0();
    fontRes();
    calculation.innerText += '0';
    number += '0';
}
const pressedDec = () => {
    first0();
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

const plus = () => {
    fontRes();
    calculation.innerText += '+';
    numbers.push(number);
    operators.push('+');
    number = '';
}
const minus = () => {
    fontRes();
    calculation.innerText += '-';
    numbers.push(number);
    operators.push('-');
    number = '';
}
const multiply = () => {
    fontRes();
    calculation.innerText += 'x';
    numbers.push(number);
    operators.push('*');
    number = '';
}
const divide = () => {
    fontRes();
    calculation.innerText += '/';
    numbers.push(number);
    operators.push('/');
    number = '';
}

const equals = () => {
    numbers.push(number);
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
    result.innerText = answer;
}

console.log(numbers);
console.log(operators);
console.log(number);