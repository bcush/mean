// To understand and write JavaScript code effectively, you need to understand
// how the interpreter rearranges your code. For each of the following
// problems rewrite the code to mimic how the interpreter would rearrange it
// before running. After rearranging the code, predict the output.

// Original
// var food = "Chicken";
// function eat() {
//     food = "half-chicken";
//     console.log(food);
//     var food = "gone";      // CAREFUL!
//     console.log(food);
// }
// eat();
// console.log(food);

// My Guess
var food;
function eat() {
    var food;
    food = "half-chicken";
    console.log(food);
    food = "gone";      // CAREFUL!
    console.log(food);
}
food = "Chicken";
eat();
console.log(food);

// So, I think the output will be:
// half-chicken gone Chicken

// Actual output is:
// [nodemon] 1.10.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching: *.*
// [nodemon] starting `node problem2.js`
// half-chicken
// gone
// Chicken
// [nodemon] clean exit - waiting for changes before restart
