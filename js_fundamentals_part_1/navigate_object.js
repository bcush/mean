// Open your terminal (we switch from client side to ‘server side’ here!),
// navigate to the folder with main.js folder and run nodemon main.js. 
// Write a for in loop that will navigate through the object below (or write your
// own object):

// And console.log() each key value pair.

var new_ninja = {
    name: 'Jessica',
    profession: 'coder',
    favorite_language: 'JavaScript', //like that's even a question!
    dojo: 'Dallas'
}

for (var key in new_ninja) {
    if (new_ninja.hasOwnProperty(key)){
        console.log(key);
        console.log(new_ninja[key]);
    }
}

// Output
// [nodemon] starting `node navigate_object.js`
// name
// Jessica
// profession
// coder
// favorite_language
// JavaScript
// dojo
// Dallas
// [nodemon] clean exit - waiting for changes before restart
