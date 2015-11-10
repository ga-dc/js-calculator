


// /////////////////////////////////
// ### Javascript Calculator

// Your task is to create a Javascript object that represents a calculator. It should have methods that provide it with the following functionality...
// * Additions
// * Subtraction
// * Multiplication
// * Division
// * Exponents (Hint: Look up Javascript's Math object)
// * An operation of your choice!

// You should be able to run these methods like so from your browser's Javascript console...
// ```js
// calculator.add(1,2);
// // => 3
// ```

// ### Bonus 1

// Give your calculator memory and allow it to persist the result of multiple operations.
// * Store this result in a `value` property.
// * Example: running `calculator.add(1,2)`, `calculator.add(2,2)` and `calculator.mutliply(2,2)` in sequence would result in a `value` of 10.
// * Give your calculator a `clear` method that resets `value`.

// ### Bonus 2

// Give your calculator a "master" method that can parse through a string of operations (e.g., `(2 - 1) * (5 ^ 2)`)
// * Your calculator should still have memory.


// ////////////////////////////////

// this is the code for my calculator//

var calculator = {
    add : function(a,b) {
        return a + b;
    },
    subtract : function(a,b) {
        return a - b;
    },
    multiply : function(a,b) {
        return a * b;
    },
    divide : function(a,b) {
        return a / b;
    }
};
console.log(calculator.add(2,3));

// // it ends here//
