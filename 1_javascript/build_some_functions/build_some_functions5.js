// Medium: Write a function named myDoubleConsoleLog that has two parameters,
// if the arguments passed to the function are functions, console.log the
// value that each, when invoked, returns.

function myDoubleConsoleLog(param1, param2) {
    if (typeof param1 == "function" && typeof param2 == "function") {
        console.log(param1());
        console.log(param2());
    return;
    };
    console.log("Both arguments are not functions.")
    return;
};

function testFunc(){
    console.log('this is test func 1');
};

function testFunc2(){
    console.log('this is test func 2');
};

var testVar = "hello this is a var";
var testVar2 = "hello this is your 2nd var";

myDoubleConsoleLog(testFunc(), testFunc2());
myDoubleConsoleLog(testVar, testVar2);

// [nodemon] 1.10.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching: *.*
// [nodemon] starting `node build_some_function5.js`
// this is test func 1
// this is test func 2
// Both arguments are not functions.
// Both arguments are not functions.
// [nodemon] clean exit - waiting for changes before restart
