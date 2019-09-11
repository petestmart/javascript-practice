console.log("Recursion is up and Running");

// 1) Write a JavaScript program to calculate the factorial of a number.

// let xFactor = []

function factorial(input) {
    if (input === 0){
        return 1;
    }
    return input * factorial(input-1);
}


// 2) Write a JavaScript program to find the greatest common divisor (gcd) of two positive numbers.

function greatComDiv(a, b) {
    if ( ! b) {
        return a;
    }
    return greatComDiv(b, a % b);
};

// 3) Write a JavaScript program to get the integers in range (x, y).

let range = function (x, y) {
    if (y - x === 2 ){
        return [x+1];
    }
    else {
        let list = range(x, y-1);
        list.push(y-1)
        return list;
    }
}

// var range = function (start_num, end_num) {
//     if (end_num - start_num === 2) {
//         return [start_num + 1];
//     }
//     else {
//         var list = range(start_num, end_num - 1);
//         list.push(end_num - 1);
//         return list;
//     }
// };

// 4) Write a JavaScript program to compute the sum of an array of integers.
let sumArray = function(array) {
    if (array.length === 1) {
        return array[0];
    }
    else {
        return array.pop() + sumArray(array);
    }
};

