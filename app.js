const result = document.getElementById("result");
const calculation = document.getElementById("calculation");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");

const cleared = () => {
    calculation.innerText = '0';
}

function first0() {
    if (calculation.innerText === '0') {
        calculation.innerText = '';
    }
}

const pressed9 = () => {
    first0();
    calculation.innerText += '9';
}
const pressed8 = () => {
    first0();
    calculation.innerText += '8';
}
const pressed7 = () => {
    first0();
    calculation.innerText += '7';
}
const pressed6 = () => {
    first0();
    calculation.innerText += '6';
}
const pressed5 = () => {
    first0();
    calculation.innerText += '5';
}
const pressed4 = () => {
    first0();
    calculation.innerText += '4';
}
const pressed3 = () => {
    first0();
    calculation.innerText += '3';
}
const pressed2 = () => {
    first0();
    calculation.innerText += '2';
}
const pressed1 = () => {
    first0();
    calculation.innerText += '1';
}
const pressed0 = () => {
    first0();
    calculation.innerText += '0';
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

