// Hard: Write a function named caller2 that has one parameter. It
// console.log's the string 'starting', waits 2 seconds, and then invokes the
// argument if the argument is a function. (setTimeout may be useful for
//     this one.) The function should then console.log ‘ending?’ and return
// “interesting”. Invoke this function by passing it myDoubleConsoleLog.

function myDoubleConsoleLog(param1, param2) {
    if (typeof param1 == "function" && typeof param2 == "function") {
        console.log(param1());
        console.log(param2());
    return;
    };
    console.log("Both arguments are not functions.")
    return;
};

function caller2(param1){

    console.log("starting");
    setTimeout(caller3(), 2000)

    function caller3(){                         // wait 2 seconds (setTimeout?)
        if (typeof(param1) == "function"){
            param1();
        };

        return;
        };

    console.log("ending?");
    return "interesting";
};

caller2(myDoubleConsoleLog);
var test = caller2(myDoubleConsoleLog);
console.log(test);

// Output
// nodemon] 1.10.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching: *.*
// [nodemon] starting `node build_some_functions6.js`
// starting
// Both arguments are not functions.
// ending?
// starting
// Both arguments are not functions.
// ending?
// interesting
// [nodemon] clean exit - waiting for changes before restart