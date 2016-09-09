// To understand and write JavaScript code effectively, you need to understand
// how the interpreter rearranges your code. For each of the following
// problems rewrite the code to mimic how the interpreter would rearrange it
// before running. After rearranging the code, predict the output.

// Original
// var new_word = "NEW!";
// function lastFunc() {
//     new_word = "old";
// }
// console.log(new_word);

// What I think will occur:

var new_word;
function lastFunc() {
    new_word = "old";
}
new_word = "NEW!"
console.log(new_word);

// I think the output will be: NEW!
// This is because we never call the function anyway. The declaration is
// hoisted.

// Actual Output
// [nodemon] 1.10.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching: *.*
// [nodemon] starting `node problem3.js`
// NEW!
// [nodemon] clean exit - waiting for changes before restart
