// simulated really slow DB call..
function getStuffFromDatabase(callback){
    var data;
    var myTimer = setInterval(function(){
        if (typeof(callback) == 'function'){
            // it just got back from the DB!
            data = [{name:'Todd'},{name:'Michael'},{name:'Portia'}];
            callback(data);
        }
    }, 100000);
    // it takes 10 seconds to get anything back <- you should fix your server!
    return data;
}
// simulated request (failing);
// ** CHANGES **
function requestDataFromDatabase(){
    var data = getStuffFromDatabase(function myCallBack(data){
        console.log(data, "ASynchronous");
        for (var i = 0; i < data.length; i++) {
            console.log(data[i].name);
        }
    });
    console.log(data, "Synchronous");
}

function catchFly(){
    console.log('I just caught a fly!');
}

requestDataFromDatabase();
// keep running my program!
console.log('Hello');
catchFly();
//etc.