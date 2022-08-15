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



console.log(operations.multiply(12, 12));