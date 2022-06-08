import './style.css';

let num1 = 0;
let num2 = 0;
let mathOper = '';

const textInput = document.getElementById("textInput");
const numButtons = document.querySelectorAll(".btn-num");
const btnClear = document.getElementById('btnClear');
const btnDecimal = document.getElementById('btnDecimal');
const btnPlus = document.getElementById('btnPlus');
const btnMinus = document.getElementById('btnMinus');
const btnX = document.getElementById('btnX');
const btnDiv = document.getElementById('btnDiv');
const btnPow = document.getElementById('btnPow');
const btnEqual = document.getElementById('btnEq');
const btnDel = document.getElementById('btnDel');

numButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let btnText = textInput.textContent + btn.textContent;
        textInput.textContent = btnText;
    });
});

const getOperator = (text) => {
    mathOper = text.charAt(0);
    num1 += parseFloat(textInput.textContent);
    textInput.textContent = '';
}

btnDecimal.addEventListener("click", () => {
    let btnText = textInput.textContent + btnDecimal.textContent;
    textInput.textContent = btnText;
});

btnPlus.addEventListener("click", () => {
    let btnText = btnPlus.textContent;
    getOperator(btnText);
});

btnMinus.addEventListener("click", () => {
    let btnText = btnMinus.textContent;
    getOperator(btnText);
});

btnX.addEventListener("click", () => {
    let btnText = btnX.textContent;
    getOperator(btnText);
});

btnDiv.addEventListener("click", () => {
    let btnText = btnDiv.textContent;
    getOperator(btnText);
});

btnPow.addEventListener("click", () => {
    let btnText = btnPow.textContent;
    getOperator(btnText);
});

const operate = () => {
    let y = parseFloat(textInput.textContent);

    switch (mathOper) {
        case '+':
            num2 = num1 + y;
            break;
        case '-':
            num2 = num1 - y;
            break;
        case '*':
            num2 = num1 * y;
            break;
        case '/':
            y === 0 ? num2 = 'Error' : num2 = num1 / y;
            break;
        case '^':
            num2 = Math.pow(num1, y);
            break;
    }

    textInput.textContent = num2.toString();
    num1 = 0;
}

btnEqual.addEventListener("click", operate);

btnClear.addEventListener("click", () => {
    num2 = 0;
    textInput.textContent = '';
});

btnDel.addEventListener("click", () => {
    textInput.textContent = textInput.textContent.toString().slice(0, -1);
});

const handleKey = (e) => {
    let keyText = textInput.textContent + e.key;
    textInput.textContent = keyText;
}

const handleKeyOperation = (e) => {
    let keyText = e.key;
    getOperator(keyText);
}

window.addEventListener("keydown", (e) => {
    if (e.key >= 0 || e.key <= 9 || e.key === '.') {
        handleKey(e);
    }

    if (e.key === '=' || e.key === 'Enter') {
        operate();
    }

    if (e.key === 'Backspace') {
        textInput.textContent = textInput.textContent.toString().slice(0, -1);
    }

    if (e.key === 'Escape') {
        num2 = 0;
        textInput.textContent = '';
    }

    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/' || e.key === '^') {
        handleKeyOperation(e);
    }
});