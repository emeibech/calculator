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
const display = document.querySelector('#display')
const buttons = document.querySelectorAll('.calculator button');

function removeDisplay() {
    display.textContent = '';
    removeEventListener('mouseup', removeDisplay);
}  

buttons.forEach(e => {
    addEventListener('mouseup', removeDisplay)
    addEventListener('click', displayInput);
});

function displayInput(e) {
    if (e.target.className == 'number') {
    display.textContent += e.target.textContent;
    }
}