//functions for the operations
const operations = {
    add: function(a, b) {
        return a + b;
    }, 
    subtract: function(a, b) {
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(dividend, divisor) {
        return dividend / divisor;
    }
}


//display user input
const display = document.querySelector('#display p')
const numbers = document.querySelectorAll('.calculator .number');
const allClear = document.querySelector('#all-clear')

function removeZero() {
    display.textContent = '';
    removeEventListener('mouseup', removeZero);
}

function getInput(e) {
    if (e.target.className.includes('number')) {
    display.textContent += e.target.textContent;
    }
}

const displayNumbers = function() {numbers.forEach(e => {
    addEventListener('mouseup', removeZero)
    addEventListener('click', getInput);
});
}
displayNumbers();

allClear.addEventListener('click', function(){
    display.textContent = 0;
    displayNumbers();
})