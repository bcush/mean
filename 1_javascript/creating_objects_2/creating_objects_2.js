function VehicleConstructor(name, wheels, passengers, speed) {

    var distance_travelled = 0;
    var updateDistanceTravelled = function() {
        distance_travelled += speed;
    }

    // We are going to create our very own constructor. Create a
    // VehicleConstructor that takes in the name, number of wheels, and number
    // of passengers. Then complete the following tasks:
    this.name = name;
    this.wheels = wheels;
    this.passengers = passengers;
    this.speed = speed;

    this.move = function() {
        updateDistanceTravelled();
        this.makeNoise();
    }

    this.checkMiles = function() {
        console.log(distance_travelled);
    }

    // Each vehicle should have a makeNoise method
    this.makeNoise = function makeNoise() {
        console.log("I'M MAKING NOISE MAAAN!!");
    }
}

// Using the constructor, create a Bike
// MODIFIED TO USE VAR & NEW
var Bike = new VehicleConstructor("bike", 2, 1);

// Call the makeNoise method from the Bike object
Bike.makeNoise();

// Redefine the Bike’s makeNoise method to print “ring ring!”
Bike.makeNoise = function() {
    console.log("RING RING!!");
}

// Call the makeNoise method after redefining the method in the object
Bike.makeNoise();

// Create a Sedan
var Sedan = new VehicleConstructor("sedan", 4, 4);

// Redefine the Sedan’s makeNoise method to print “Honk Honk!”
Sedan.makeNoise = function() {
    console.log("HONK HONK!!");
}

// Call the makeNoise method after redefining the method in the objects
Sedan.makeNoise();

// Using the constructor, create a Bus
var Bus = new VehicleConstructor("bus", 4, 50);

// Add a method to Bus that takes in the number of passengers to pick up and
// adds them to the passenger count​
Bus.pickUp = function(extrapassengers) {
    this.passengers += extrapassengers;
}

// Let's check out the passenger count from the Bus object
console.log(Bus.passengers);

// Now let's pick up some passengers
Bus.pickUp(10);

// Now that we've picked up 10 passengers, let's check the value.
console.log(Bus.passengers);