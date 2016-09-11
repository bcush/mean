// Create a simple for loop that sums all the integers between x and
// y (inclusive). Have it console log the final sum.

// Rewrite these 3 as anonymous functions assigned to variables.

// function intLoop (x, y){

var NumberStuff = {};

var testArr = [10, 2, 3, 4, 5, 6];

NumberStuff = {

    intLoop: function (x,y) {
        if (y < x) {
            return
                ("First parameter is greater than second.");
        }

        var sum = 0;
        for (var i = x; i < y; i++){
            sum += i;
        }

        return
            ("Sum of all integers between " + x + " and " + y + " is: " + sum);
    },


    // Write a loop that will go through an array, find the minimum value, and
    // then return it

    // function minLoop (arr) {
    minLoop: function (arr) {
        if (arr.length === 0){
            return ("The array is empty.");
        }

        var min = arr[0];

        for (var i = 0; i < arr.length; i++){
            if (arr[i] < min) {
                min = arr[i];
            }
        }

        return ("Minimum is: " + min);
    },

 

    // Write a loop that will go through an array, find the average of all of
    // the values, and then return it

 

    // function avgArr (arr) {
    avgArr: function (arr) {

        if (arr.length === 0){
            return ("The array is empty.");
        }

        var sum = arr[0];

        for (var i = 0; i < arr.length; i++){
            sum += arr[i];
        }

        return ("The average is: " + (sum / arr.length));
    }



}

console.log(NumberStuff.intLoop(10, 20));
console.log(NumberStuff.minLoop(testArr));
console.log(NumberStuff.avgArr(testArr));


var Person = {};

Person = {
    name: "Brian",
    distance_traveled: 0,
    say_name: function (){
        console.log (this.name);
        return Person;
    },
    say_something: function (param){
        console.log ( this.name + " says " + param);
        return Person;
    },
    walk: function (){
        console.log ( this.name + " is walking" );
        this.distance_traveled = (this.distance_traveled + 3);
        return Person;
    },
    run: function (){
        console.log ( this.name + " is running" );
        this.distance_traveled = (this.distance_traveled + 10);
        return Person;
    },
    crawl: function (){
        console.log ( this.name + " is crawling");
        this.distance_traveled = (this.distance_traveled + 1);
        return Person;
    }
}

Person.name;
console.log(Person.distance_traveled);
Person.say_name();
Person.say_something("nice");
Person.walk();
console.log(Person.distance_traveled);
Person.run();
console.log(Person.distance_traveled);
Person.crawl();
console.log(Person.distance_traveled);