//assign buttons to variables
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const func = document.querySelectorAll('.function');
const display = document.querySelector('#display p');
const ac = document.querySelector('#clear');
const zero = document.querySelector('#zero');
const decimal = document.querySelector('#decimal');

//constructor that handles the calculations
function Calculate(firstNum, operator, secondNum){
        this.firstNum = firstNum;
        this.operator = operator;
        this.secondNum = secondNum;
}

//add the numbers
Calculate.prototype.add = function() {
    if(this.operator == 'add') return Math.round((this.firstNum + this.secondNum)* 100)  / 100;
}

//subract the second number from the first number
Calculate.prototype.subtract = function() {
    if(this.operator == 'subtract') return Math.round((this.firstNum - this.secondNum)* 100)  / 100;
}

//multiply the numbers
Calculate.prototype.multiply = function() {
    if(this.operator == 'multiply') return Math.round((this.firstNum * this.secondNum)* 100)  / 100;
}

//divide the first number with the second number
Calculate.prototype.divide = function() {
    if(this.operator == 'divide') {
        if(this.secondNum === 0) return 'lol';
        return Math.round((this.firstNum / this.secondNum)* 100 ) / 100;
}
}

//get input
let firstNum, operator, secondNum, toCalculate = 0;

//clear display
const clear = function(e) {
    if(e.target.className.includes('number')) {
        display.textContent = '';
        ac.textContent = 'C';
        removeEventListener('mousedown', clear);
    }
}

const allClear = function() {
        addEventListener('mousedown', clear);
        display.textContent = '0';
        ac.textContent = 'AC';
        removeEventListener('mousedown', allClear);
}

const zeroClear = function() {
    if(display.textContent == '0') {
        display.textContent = '';
    }
}

ac.addEventListener('click', allClear);
zero.addEventListener('mousedown', zeroClear);
decimal.addEventListener('click', oneDot);

//only one decimal point
function oneDot() {
    if(!display.textContent.includes('.')) {
        if(!display.textContent) {
            display.textContent += '0.';
        } else {display.textContent += '.';}
    }
}

//get value for first number
numbers.forEach(e => {
        addEventListener('mousedown', clear);
        e.addEventListener('mouseup', getFirstNum);
    });

//display and get number
function getFirstNum(e) {
        if(display.textContent === '0') zeroClear();
        if(e.target.id !== 'decimal') display.textContent += e.target.textContent;
}

//get operator
operators.forEach(e => {
    e.addEventListener('click', getOperator);
});

function getOperator(e) {
        operator = e.target.id;

        //assign firstNum
        firstNum = Number(display.textContent);
        addEventListener('mousedown', clear);
}

//get second number and calculate
equal.addEventListener('click', getSecondNum);

function getSecondNum(e) {
        secondNum = Number(display.textContent);
        toCalculate = new Calculate(firstNum, operator, secondNum);
        display.textContent = toCalculate[operator]();
        addEventListener('mousedown', clear);
}