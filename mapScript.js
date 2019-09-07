console.log('MapScript is a Go!');

// * MAPS * //

let myMap = function () {
    this.collection = {};
    this.count = 0;
    this.size = function() {
        return this.count;
    };
    this.set = function(key, value) {
        this.collection[key] = value;
        this.count++;
    };
    // Checks if the map (object) has the key
    // 'in' operator returns 'true' if specified criteria ('key' in this example) is in this.collection
    this.has = function(key) {
        return (key in this.collection);
    };
    this.get = function(key) {
        return (key in this.collection) ? this.collection[key] : null;
    };
    this.delete = function(key) {
        if (key in this.collection) {
            delete this.collection[key];
            this.count--;
        };
    };
    // Returns the values of all of the items in the map
    this.values = function() {
        let result = new Array();
        for (let key of Object.keys(this.collection)) {
            result.push(this.collection[key]);
        };
        return (result.length > 0) ? result : null;
    };
    this.clear = function() {
        this.collection = {};
        this.count = 0;
    };
}; // end myMap

// Examples of Using the map
let map = new myMap();
map.set('arms', 2);
map.set('fingers', 10);
map.set('eyes', 2);
map.set('belly button', 1);
map.set('boogers', 19000);

console.log(map.get('fingers'));
console.log(map.size());
console.log(map.values());

let pizza = new myMap();
pizza.set('crust', 1);
pizza.set('sauce', 1);
pizza.set('cheese', 100);
pizza.set('pepperoni', 50);

console.log('cheese', pizza.get('cheese'));
console.log('Pizza Size', pizza.size());
console.log('Pizza Values', pizza.values());

let map2 = new Map();
map2.has('hands');
map2.entries();

let keyObj = {},
    keyFunc = function() {};

map2.set('hello', 'string value');
map2.set(keyObj, 'obj value');
map2.set(keyFunc, 'func value');
map2.set(NaN, 'NaN value');

console.log(map2.size);

console.log(map2.get('hello'));
console.log(map2.get(keyObj));
console.log(map2.get(keyFunc));
console.log(map2.get(NaN));

// Differences Between Maps & Objects
// 1) 