var Stuff = (function() {
    var name;
    var weight;
    // constructor
    var Stuff = function (name, weight) {
        name = name;
        weight = weight;
    };
    
    var getWeight = function() {
        return weight;
    }
    
    var getName = function() {
        return name;
    }

    // prototype
    Stuff.prototype = {
        constructor: Stuff,
        weight: getWeight,
        name: getName
    };
    
    return Stuff;
})();

var Bag = (function() {
    
    var maxBagWeight;
    var bagWeight;
    var bagObjects;
    
    // constructor
    var Bag = function(maxWeight) {
        maxBagWeight = maxWeight;
        bagWeight = 0;
        bagObjects = [];
    };
    
    var add = function(objectToAdd) {
        if (!bagObjects.includes(objectToAdd.name)) {
            bagObjects.push(objectToAdd.name);
            if(maxBagWeight >= bagWeight + objectToAdd.weight) {
                bagWeight += objectToAdd.weight;
            }
        }
    };
    
    var getWeight = function() {
        return bagWeight;
    };
    
    // prototype
    Bag.prototype = {
        constructor: Bag,
        add: add,
        weight: getWeight
    };
    
    return Bag;
})();

var Cargo = (function() {
   var weight;
   var maxCargoWeight;
   var cargoObjects;
   
   // constructor 
   var Cargo = function(weight) {
        weight = 0;
        maxCargoWeight = weight;
        cargoObjects = [];
   }
   var add = function (objectToAdd) {
       if (objectToAdd instanceof Bag) {
            if (!cargoObjects.includes(objectToAdd)) {
                weight += objectToAdd.weight();
                cargoObjects.push(objectToAdd); 
            }
            
       }
   };
   
   var getWeight = function() {
       return weight;
   };
   
   Cargo.prototype = {
       constuctor: Cargo,
       add: add,
       weight: getWeight
   };
   
   return Cargo;
})();


// koodi:
var stone = new Stuff("stone", 3);
console.log("ASD " + stone.name())
var book = new Stuff("book", 7);
var cotton = new Stuff("cotton", 0.001);

var bag = new Bag(10);
var vuitton = new Bag(3);

var schenker = new Cargo(15);

bag.add(stone);
console.log("laukun paino, pitäisi olla 3: " + bag.weight());
bag.add(stone); // virhe: "Stuff lisätty jo, ei onnistu!"

bag.add(book);
console.log("laukun paino, pitäisi olla 10: " + bag.weight());

bag.add(cotton); // virhe: "Liian painava, ei pysty!"

console.log("laukun paino, pitäisi olla 10: " + bag.weight());


schenker.add(bag);
schenker.add(cotton); // virhe: Vääränlainen esine, ei onnistu!

console.log("Ruuman paino, pitäisi olla 10: " + schenker.weight());

vuitton.add(cotton);
schenker.add(vuitton);
console.log("Ruuman paino, pitäisi olla noin 10.001: " + schenker.weight()); 

cotton.weight = 300;
console.log("Ruuman paino, pitäisi olla 310: " + schenker.weight()); // hups!
