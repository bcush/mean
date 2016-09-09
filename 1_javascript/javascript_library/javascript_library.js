var _ = {
    map:  function(arr, callback){
        newArr = [];

        for (var i = 0; i < arr.length; i++) {
            newArr.push(callback(arr[i]));
        }
        return newArr;
    },
    reduce: function(arr, callback, memo){
        if (!memo) {
            memo = arr[0];
            collector = 1;
        }
        for (var i = collector; i < arr.length; i++) {
            memo = callback(arr[i], memo);
        }
        return memo;
    },
    find: function(arr, callback){
        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                return arr[i];
            }
        }
    },
    filter: function(arr, callback){
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            if (callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },

    reject: function(arr, callback){
        var newArr = [];

        for (var i = 0; i < arr.length; i++) {
            if (!callback(arr[i])) {
                newArr.push(arr[i]);
            }
        }
        return newArr;
    },
}

var array = [1,2,3];
_.map(array, function callback(x){return x * 5;});
console.log(array);
console.log(_.reduce(array, function (x, memo){return x + memo;}));
console.log(_.find(array, function (x){return x == 15;}));
_.filter(array, function(x){return x > 20;})
console.log(array);