// Medium: Write a function named caller that has one parameter. If the
// argument provided to caller is a function (typeof may be useful), invoke
// the argument. Nothing is returned.

function caller(callerParam){
    if (typeof callerParam == "function") {
        callerParam();
        return "This is a function.";
    };
    if (typeof callerParam != "function") {
        return "This is not a function.";
    };
};

var temp = "hello";
console.log(caller(temp));