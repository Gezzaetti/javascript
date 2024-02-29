/*
function sayHi() {
    alert( "Hello" );
  }
sayHi();*/


//This code might not work in node.js environments or any non-browser environments. Runs on web browsers.
/*
let sayHi = function() {
    alert( "Hello" );
  };  */

  //https://javascript.info/function-expressions

var multiply = new Function('a', 'b', 'return a * b');
console.log(multiply(3, 4)); // function to multiply two numbers

var square = new Function('num', 'return num * num');
console.log(square(5)); // Output: 25

(function(n) {
  var factorial = 1;
  for (var i = 1; i <= n; i++) {
      factorial *= i;
  }
  console.log('Factorial of ' + n + ' is: ' + factorial);
})(5);
// Output: Factorial of 5 is: 120

(function(x) {
  var factorial = 1;
  for (var i = 2; i <= x; i++) {
      factorial *= i;
  }
  console.log('Factorial of ' + x + ' is: ' + factorial);
})(5);
// Output: Factorial of 5 is: 120

// Function constructor for incrementing
var incr = new Function('num', 'return num + 1');

// Example usage
console.log(incr(5)); // Output: 6
console.log(incr(-3)); // Output: -2


// Function constructor for decrementing
var decr = new Function('num', 'return num - 1');

// Example usage
console.log(decr(8)); // Output: 7
console.log(decr(0)); // Output: -1

//self-invoking functions to increment and decrement values:
(function() {
  var value = 999;
  value = (function(n) {
      return n + 1;
  })(value);
  //increment
  console.log(value); // Output: 1000
})();

(function() {
  var value = 100;
  value = (function(m) {
      return m - 1;
  })(value);
  //decrement
  console.log(value); // Output: 99
})();


/*Arrow function
const multiply = (30, 5) => a * b;
console.log(multiply);
*/

// basic arrow function
let qua = (a, b) => {
  return a + b;
};

console.log(qua(5, 3)); // Output: 8

//implicit return arrow function
let sew = (m) => m * m;
console.log(sew(4));

// arrow funcition with a sigle parameter
let g = name => `Hello, ${name}!!!!!!`;

console.log(g('Alice')); // Output: Hello, Alice

// arrow function with no parameter
let sayHello = () => console.log('Hello !');

sayHello(); // Output: Hello!
/*
// arrow function and lexical `this``
function Counter() {
  // objects that can count incrementally
  this.count = 0; 
  // starts from zero
  this.timer = setInterval(() => {
    // This timer is responsible for incrementing the count property every second.
    // Arrow functions do not have their own this context. Instead, they inherit the this value from the surrounding lexical context (i.e., the context in which they are defined).
      this.count++;

      console.log(this.count);
  }, 100);
}

let counter = new Counter();

*/
