console.log('Script Running');

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


