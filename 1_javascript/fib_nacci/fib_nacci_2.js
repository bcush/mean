function fib() {

    // set initial conditions
    var currentPrev = 0;
    var current = 1;

    function nacci() {

        // log current value
        console.log(current);

        // capture previous variable as it will be overwritten
        var temp = currentPrev;

        // shift variable pairs forward; perform addition
        currentPrev = current;
        current = temp + current;

    }

    // closure allows us to return a function; from within a function
    // this way we can work within a scope outside of regular view
    return nacci
}

var fibCounter = fib();
fibCounter() // should console.log "1"
fibCounter() // should console.log "1"
fibCounter() // should console.log "2"
fibCounter() // should console.log "3"
fibCounter() // should console.log "5"
fibCounter() // should console.log "8"

// console output:
// [nodemon] 1.10.2
// [nodemon] to restart at any time, enter `rs`
// [nodemon] watching: *.*
// [nodemon] starting `node fib_nacci_2.js`
// 1
// 1
// 2
// 3
// 5
// 8
// [nodemon] clean exit - waiting for changes before restart