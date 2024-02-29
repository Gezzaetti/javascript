
// ONE: 'if' statement: executing a block of code only if a specified condition is true.
let num = 10;

if (num > 0) {
    console.log("Number is positive. ");
}


// TWO: 'if ... else' statement is used to execute one block of code if a specified condition is true and another block of code condition is false.

let n = -5;

if (n > 0) {
    console.log("Number is positive");
} else {
    console.log("Number is not positive");
}

/* THREE: 'if...else if...else Statement:
The if...else if...else statement allows you to specify a new condition to test if the previous conditions are false.*/

let num1 = 0;

if (num1 > 0) {
    console.log("Number is positive");
} else if (num1 < 0) {
    console.log("Number is negative");
} else {
    console.log("Number is zero");
}

//Four: 'switch' statement is used to perform different actions based on different conditions

let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("It's the start of the week");
        break;
    case "Tuesday":
        console.log("It's Tuesday");
        break;
    default:
        console.log("It's another day");
}

// FIVE: The 'for' loop repeats a block of code a specified number of times.

for (let i = 1; i < 13; i++) {
    console.log(i);
}



// SIX: 'while' loop: repeats a block of code while specific condition is true.
let i = 0;

while (i < 5) {
    console.log(i);
    i++;
}

// SEVEN: 'do...while' Loop:
/*The do...while loop is similar to the while loop, but it always executes the block of code at least once before checking the condition.*/

let y = 10;

do {
    console.log(y);
    y++;
} while (y < 15);
