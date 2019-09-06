console.log('Script Running');

// ARRAYS //

// Exercise #1
// Name two dynamic ways to add the value of “bar” to the end of array “foo”.

let foo = [1, 2, 3];
let bar = 4;

// The first way to dynamically add the value of “bar” to the end of array “foo” 
// would be to use the .push method.  For example:

function addFooToBar(bar) {
    foo.push(bar);
    return foo;
}; // end function addFooToBar

// The second way to dynamically add the value of “bar” to the end of array “foo” 
// would be to use the .concat method.  For example:

function concatFooToBar(bar) {
    let newFoo = foo.concat(bar);
    return newFoo;
};  // end function concatFooToBar

// Exercise #2
// Given an array of numbers, create toPalindrome method that creates a 
// palindrome out of your array in the following way:

let Palindrome = function(array) {
    this.array = array;
}

Palindrome.toPalindrome = function () {
    console.log("This will be a palindrome soon: " + this.array)
}

const arr = [1, 2, 3];
// arr.toPalindrome();
// const arr2 = arr.toPalindrome();
// // [1,2,3,2,1]

// const arr3 = arr2.toPalindrome();
// // [1,2,3,2,1,2,3,2,1]



// STRINGS //

// Exercise #1

// What do each of the following expressions equate to, and why?
"2" === 2;
"2" == 2;

// “2” === 2 equates to a falsy value.The === can be used to check if two values are 
// both equal and of the same type.For the two values to be truthy with respect to one 
// another, they must both have the same value, and either both be numbers or both be 
// strings.In this example, the values are the same since they are both 2, but the types 
// are different since one is a string(“2”) and the other is a number(2).

// “2” == 2 equates to a truthy value.The == can be used to check if two values are both 
// equal to each other regardless of their type.For the two values to be falsy with 
// respect to one another, they must have two different values, such as 2 and 3.  The 
// fact that the two values are not of the same type is not important when using the 
// == symbol.In this example, the values are the same since they are both 2, and the 
// statement remains truthy despite the fact that one is a string and the other is a 
// number.

// What about each of these following…
"2" + 2 == 4;
2 + 2 == 4;

console.log("2" + 2 == 4);
console.log(2 + 2 == 4);
console.log("2" + 2);
console.log(2 + 2);

// “2” + 2 == 4 equates to a falsy value.The == can be used to check if two values are 
// both equal to each other regardless of their type.In this case, since the value on 
// the left side of the equation contains a string and a number, the + symbol with 
// concatenate the two values.Instead of adding the two numbers and equalling 4, the 
// numbers are concatenated together and return a string of 22.  Since 22 is not equal 
// to 4, the value is falsy.It’s also important to note that 22 is a string, but in this 
// instance it does not play a role in whether or not the value is truthy or falsy since 
// we are using == and not ===.

// 2 + 2 == 4 equates to a truthy value.The == can be used to check if two values are 
// both equal to each other regardless of their type.In this case, the value of the left 
// side of the equation contains two numbers and zero strings, so the + symbol will add 
// the two numbers together equalling 4.  Since the right side of the equation is equal
//  to 4, the value is truthy.It is important to note that even though both sides of the 
//  equation are numbers, the value would remain truthy even if one side was a string of 
//  2 and the other side was a number of 2 since we are using == and not ===.

// Exercise #2

// Given a string, reverse each word in the sentence “Welcome to this Javascript Guide!” 
// so it would become “emocleW ot siht tpircsavaJ !ediuG”.

function reverseWords(str) {
    let splitString = str.split("");

    let reverseArray = splitString.reverse();

    let joinArray = reverseArray.join("");

    let wordSplit = joinArray.split(" ");

    let nextReverse = wordSplit.reverse();

    let finalJoin = nextReverse.join(" ");

    return finalJoin;
}

// INHERITENCE //

// What is the difference between classical inheritance and prototypal inheritance?

// Classical Inheritance & OOP with JS (YouTube Video LearnCode.academy)
// link: https://www.youtube.com/watch?v=sWOXYDBbz0g

// This function was copied from the notes in the video (the guy went to a link and grabbed this function from node.js)
// This is the "inherit" function (ctor, superCtor) : (child, parent)
// This function allows the child to inherit all of the functionality from the parent
function inherits(ctor, superCtor) { 
    ctor.super_ = superCtor;
    ctor.prototype = Object.create(superCtor.prototype, {
        constructor: {
            value: ctor,
            enumerable: false,
            writable: true,
            configurable: true
        }
    });
};

// Constructor/Master Module (Capitalize) - This is our class
var Person = function(name) {
    // this refers to the object that you are creating
    this.name = name;
}

Person.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
}

Person.prototype.shoutName = function() {
    console.log("Hi my name is" + this.name + "!");
}


// This is creating copies of the above module
// This is instantiation - Creating Instances of a module
var john = new Person("john");
var bobby = new Person("bobby");

john.sayName(); // Hi my name is john
bobby.sayName(); // Hi my name is bobby

var Musician = function(name, instrument) {
    //Below is our inherited class (aka Person)
    Musician.super_.call(this, name);
    this.instrument = instrument;
}

inherits(Musician, Person);

Musician.prototype.getInstrument = function() {
    console.log(this.instrument);
}

Musician.prototype.shoutName = function() {
    console.log("Dude! My name is " + this.name + "!!!!");
}

var julia = new Musician("julia", "trombone");
julia.sayName();
julia.getInstrument();
julia.shoutName(); // Dude! My name is ....

// END CLASSICAL INHERITANCE VIDEO

// Prototypal Pattern vs Classical OOP in JS (YouTube Video LearnCode.academy)
// link: https://www.youtube.com/watch?v=doXpW5AD60Q

// **Differences:
// 1) No need to instantiate with "new" like you do in classical
// 2) Prototypal you just make an object
// -- Then use Object.create to create a new object with all of the properties of the parent
// 3) Instead of prototype, you create the object and define each characteristic (ex: will.name = "Will";)

// **Similarities
// 1) Still use "this" when referencing values on the object


var human = {
    species: "human",
    saySpecies: function() {
        console.log(this.species);
    },
    sayName: function() {
        console.log(this.name);
    }
};

var musician = Object.create(human);
musician.playInstrument = function() {
    console.log("plays..." + this.instrument);

}

var will = Object.create(musician);
will.name = "Will";
will.instrument = "Drums";

// Call functions
will.sayName();
will.playInstrument();
will.saySpecies();
// Redefine elements
human.species = "homo sapiens";
will.saySpecies();

// METHOD (FUNCTION) //

// Question #1
// What will the following code output and why?

var b = 1; 
function outer() {
    var b = 2 
    function inner() {b++; var b=3; console.log(b)
    } 
    inner() 
} 
outer ();