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

let obj = {
    toPalindrome: function(){
        return
    }
}

const arr = [1, 2, 3];
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