console.log('Big O is R2G');

// Code from the video:
// JavaScript: Intro to Big O Notation and Function Runtime - Eric Traub
// https://www.youtube.com/watch?v=HgA5VOFan5E

// Constant Runtime
// Big O Notation "O (1)"

function log(array) {
    console.log(array[0]);
    console.log(array[1]);
}

log([1,2,3,4]);
log([1,2,3,4,5,6,7,8,9,10])

// Constant Runtime:
// The time will not change no matter how big the size of the array

// ___________________________________________________  //

// Linear Runtime:
// Big O Notation "O (n)" <-- O stands for the function we are evaluating
//                     ^ n stands for the size of the input

function logAll(array) {
    for(let i=0; i < array.length; i++){
        console.log(array[i])
    }
}

logAll([1,2,3,4,5])
logAll([1,2,3,4,5,6])
logAll([1,2,3,4,5,6,7])

// Linear Runtime:
// Runtime is proportional to the input
// There will be one operation for every input

// ___________________________________________________  //

// Exponential Runtime:
// Big O Notation "O (n^2)" 

function addAndLog(array) {
    for (let i=0; i<array.length; i++){
        for(let j=0; j<array.length; j++){
            console.log(array[i] + array[j])
        }
    }
}

addAndLog(['A','B','C']) // 9 pairs logged out
addAndLog(['A','B','C','D']) // 16 pairs logged out
addAndLog(['A','B','C','D','E']) // 25 pairs logged out

// Exponential Runtime:
// Runtime increases exponentially with every new input
// Generally try to avoid this type of run time or function

// ___________________________________________________  //

// Logarithmic Runtime:
// Big O Notation: O (log n)

function binarySearch(array, key){
    let low = 0;
    let high = array.length -1;
    let mid;
    let element;

    while(low <= high){
        mid = Math.floor((low + high) / 2, 10);
        element = array[mid];
        if (element<key){
            low = mid +1;
        } else if (element>key) {
            high = mid -1;
        } else {
            return mid;
        }
    }
    return -1;
}

binarySearch(['A', 'B', 'C', 'D', 'E','F','G','H','I','J','K','L','M'], 'F')

// With every operation we are cutting our search in half