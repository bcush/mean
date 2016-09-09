// To understand and write JavaScript code effectively, you need to understand
// how the interpreter rearranges your code. For each of the following
// problems rewrite the code to mimic how the interpreter would rearrange it
// before running. After rearranging the code, predict the output.

// Before
// console.log(first_variable);
// var first_variable = "Yipee I was first!";
// function firstFunc() {
//     first_variable = "Not anymore!!!";
//     console.log(first_variable)
// }
// console.log(first_variable);

// After (My Guess)
var first_variable;
function firstFunc() {
    first_variable = "Not anymore!!!";
    console.log(first_variable)
}
console.log(first_variable);
first_variable = "Yipee I was first!";
console.log(first_variable);

// My guess is that 'var first_variable' is hoisted along with firstFunc().
// Output I think is: undefined Yipee I was first!

// Output
// [nodemon] 1.10.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching: *.*
// [nodemon] starting `node problem1.js`
// undefined
// Yipee I was first!
// [nodemon] clean exit - waiting for changes before restart