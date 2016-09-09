function personConstructor(personName) {
    var dojo = {}
    dojo = {
        name: personName,
        distance_travelled: 0,
        say_name: function(){
            console.log(personName);
        },
        say_something: function(saythis){
            if (saythis == "I am cool") {
                console.log("Jay says 'I am cool'");
            }
        },
        walk: function(){
            console.log(personName + " is walking");
            dojo.distance_travelled += 3;
        },
        run: function(){
            console.log(personName + " is running");
            dojo.distance_travelled += 10;
        },
        crawl: function(){
            console.log(personName + " is crawling");
            dojo.distance_travelled += 1;
        }
    };

    return dojo;
};

// var brian = personConstructor("Brian");
// brian.say_something("I am cool");
// brian.walk();

function ninjaConstructor(personName, personCohort) {
    var ninja = {}
    ninja = {
        name: personName,
        cohort: personCohort,
        belt: "yellow",
        levelUp: function(){

            if (ninja.belt == "red"){
                ninja.belt = "black";
            }

            if (ninja.belt == "yellow"){
                ninja.belt = "red";
            }

            return ninja.belt;
        }
    };

    return ninja;
};

var ninjadude = ninjaConstructor("brian", "july");
console.log(ninjadude.name);
console.log(ninjadude.belt);
console.log(ninjadude.levelUp());
