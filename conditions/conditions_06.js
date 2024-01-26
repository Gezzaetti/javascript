/**
Develop a function called greaterNum which:

 - Accepts two arguments, both of which are numbers.
 - Returns the larger of the two numbers.

 */
 function greaterNum(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater than " + num2;
    } else {
        return num2 + " is greater than " + num1;
    }
}

// Sample usage - do not modify
console.log(greaterNum(5, 10));
console.log(greaterNum(2, 1));
console.log(greaterNum(4, 25));
