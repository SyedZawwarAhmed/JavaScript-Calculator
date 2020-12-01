const result = document.getElementById("result");
const calculation = document.getElementById("calculation");
const nine = document.getElementById("nine");
const eight = document.getElementById("eight");

var calArr = [];

const cleared = () => {
    calculation.textContent = '0';
    calArr = [];
}

const pressed9 = () => {
    calArr.push('9');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}

const pressed8 = () => {
    calArr.push('8');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}

const pressed7 = () => {
    calArr.push('7');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed6 = () => {
    calArr.push('6');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed5 = () => {
    calArr.push('5');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed4 = () => {
    calArr.push('4');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed3 = () => {
    calArr.push('3');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed2 = () => {
    calArr.push('2');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed1 = () => {
    calArr.push('1');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}
const pressed0 = () => {
    calArr.push('0');
    const calStr = calArr.join("");
    calculation.innerText = calStr;
}






