//assign buttons to variables
const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const equal = document.querySelector('#equal');
const func = document.querySelectorAll('.function');
const display = document.querySelector('#display p');
const ac = document.querySelector('#clear');
const zero = document.querySelector('#zero')

//constructor that handles the calculations
function Calculate(firstNum, operator, secondNum){
        this.firstNum = firstNum;
        this.operator = operator;
        this.secondNum = secondNum;
}

//add the numbers
Calculate.prototype.add = function() {
    if(this.operator == 'add') return this.firstNum + this.secondNum;
}

//subract the second number from the first number
Calculate.prototype.subtract = function() {
    if(this.operator == 'subtract') return this.firstNum - this.secondNum;
}

//multiply the numbers
Calculate.prototype.multiply = function() {
    if(this.operator == 'multiply') return this.firstNum * this.secondNum;
}

//divide the first number with the second number
Calculate.prototype.divide = function() {
    if(this.operator == 'divide') return this.firstNum / this.secondNum;
}

//get input
let firstNum, operator, secondNum, toCalculate = 0;

//clear display
const clear = function(e) {
    if(e.target.className.includes('number')) {
        display.textContent = '';
        removeEventListener('mousedown', clear);
    }
}

const allClear = function() {
        addEventListener('mousedown', clear);
        display.textContent = '0';
        removeEventListener('mousedown', allClear);
        ac.textContent = 'AC';
}

const zeroClear = function() {
    if(display.textContent == 0) {
        addEventListener('mousedown', clear);
        display.textContent = '0';
        removeEventListener('mousedown', zeroClear);
    }
}

ac.addEventListener('mousedown', allClear);
zero.addEventListener('mousedown', zeroClear);

//get value for first number
numbers.forEach(e => {
        addEventListener('mousedown', clear);
        e.addEventListener('mouseup', getFirstNum);
    });


//display and get number
function getFirstNum(e) {
        display.textContent += e.target.textContent;
        ac.textContent = 'C';
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

function getSecondNum() {
        secondNum = Number(display.textContent);
        toCalculate = new Calculate(firstNum, operator, secondNum);
        display.textContent = Math.round(toCalculate[operator]() * 100) / 100;
        addEventListener('mousedown', clear);
}