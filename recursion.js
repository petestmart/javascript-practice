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

// 3) 
