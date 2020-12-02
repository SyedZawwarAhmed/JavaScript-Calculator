const result = document.getElementById("result");
const calculation = document.getElementById("calculation");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");

var number = '';
var numbers = [];
var operators = [];
var answer = 0;

const cleared = () => {
    calculation.innerText = '0';
    number = '';
    result.innerText = '';
    answer = 0;
    numbers = [];
    operators = [];
}

function first0() {
    if (calculation.innerText === '0') {
        calculation.innerText = '';
    }
    if (number === '0') {
        number = '';
    }
}

const pressed9 = () => {
    first0();
    calculation.innerText += '9';
    number += '9';
}
const pressed8 = () => {
    first0();
    calculation.innerText += '8';
    number += '8';
}
const pressed7 = () => {
    first0();
    calculation.innerText += '7';
    number += '7';
}
const pressed6 = () => {
    first0();
    calculation.innerText += '6';
    number += '6';
}
const pressed5 = () => {
    first0();
    calculation.innerText += '5';
    number += '5';
}
const pressed4 = () => {
    first0();
    calculation.innerText += '4';
    number += '4';
}
const pressed3 = () => {
    first0();
    calculation.innerText += '3';
    number += '3';
}
const pressed2 = () => {
    first0();
    calculation.innerText += '2';
    number += '2';
}
const pressed1 = () => {
    first0();
    calculation.innerText += '1';
    number += '1';
}
const pressed0 = () => {
    first0();
    calculation.innerText += '0';
    number += '0';
}
const pressedDec = () => {
    first0();
    let i ;
    for (i=0; i<calculation.innerText.length; i++) {
        if (calculation.innerText[i] === '.') {
            break;
        }
    }
    if (i === calculation.innerText.length) {
        calculation.innerText += '.';
    }
}

const plus = () => {
    calculation.innerText += '+';
    numbers.push(number);
    operators.push('+');
    number = '';
}
const minus = () => {
    calculation.innerText += '-';
    numbers.push(number);
    operators.push('-');
    number = '';
}
const multiply = () => {
    calculation.innerText += 'x';
    numbers.push(number);
    operators.push('*');
    number = '';
}
const divide = () => {
    calculation.innerText += '/';
    numbers.push(number);
    operators.push('/');
    number = '';
}

const equals = () => {
    numbers.push(number);
    for (let i=0; i<operators.length; i++) {
        if(operators[i] === '+') {
            answer = parseInt(numbers[i]) + parseInt(numbers[i + 1]);
        }
        if(operators[i] === '-') {
            answer = parseInt(numbers[i]) - parseInt(numbers[i + 1]);
        }
    }
    result.innerText = answer;
}

console.log(numbers);
console.log(operators);
console.log(number);