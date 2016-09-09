var Players = [];

function DeckObjectConstructor() {
  var self = this;
  var value = ["2", "3","4","5","6","7","8","9","10","Jack","Queen","King","Ace"];
  var suit = ["Spades","Club","Hearts","Diamonds"];

  self.deck = [];

  self.deal =function (){
    self.shuffle();
    var lastDealt = self.deck.pop();
    return lastDealt;
  }

  self.reset = function() {
    self.deck = [];
    for (var Player in Players) {
      Players[Player].hand = [];
      console.log("****" + Players[Player]);
    }
    CardCreator();
  }

  self.shuffle = function() {
    var currentIndex = self.deck.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = self.deck[currentIndex];
    self.deck[currentIndex] = self.deck[randomIndex];
    self.deck[randomIndex] = temporaryValue;
    }
  };

  function CardCreator(){
    for (var i = 0; i < suit.length; i++) {
      for (var x = 0; x < value.length; x++) {
        var card = {};
        card.value = value[x];
        card.suit = suit[i];
        self.deck.push(card);
      }
    }
  }

  CardCreator();
    PlayerConstructor.prototype.hand = [];
  return self;

}

function PlayerConstructor (name) {
  var self = this;
  this.hand = [];
  self.takeCard= function () {
    var newcard = deck1.deal();
    self.hand.push(newcard);
  }
  self.discardCard = function() {
    if (self.hand.length > 0) {
      self.hand.pop();
    }
    else {
      console.log("nah");
    }
  }
  Players.push(self);
}

var deck1 = new DeckObjectConstructor();
var Kelvin = new PlayerConstructor("Kelvin");
var Brian = new PlayerConstructor("Brian");

console.log(deck1.deck.length);
console.log(Kelvin.hand.length);
Kelvin.takeCard();
Kelvin.takeCard();
console.log(deck1.deck.length);
console.log(Kelvin.hand.length);
Brian.takeCard();
console.log(Brian.hand.length);
deck1.reset();
console.log(deck1.deck.length);
console.log(Kelvin.hand.length);
console.log(Brian.hand.length);
console.log(Players);

var myArray = [1,2,3];
var testArray = [1,20,33,30,5];
testArray.sort();
console.log(testArray);
var myObject = {
  0:"1",
  1:"2",
  2:"TEST",
  length:3
}
function FakeArrays (){
  this.length = 0;
}
FakeArrays.prototype = Array.prototype;
var myNewArray = new FakeArrays();
myNewArray.push(1);
myNewArray.push(20);
myNewArray.push(33);
myNewArray.push(70);
myNewArray.push(5);
console.log(myNewArray);
myNewArray.sort(function(a,b){return a-b});
console.log(myNewArray);
