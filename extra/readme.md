Function Constructor:

A function constructor in JavaScript is a way to create a new function using the Function constructor. Here's an example:

 

var add = new Function('a', 'b', 'return a + b');
This code creates a new function add that adds two numbers together. It takes two arguments a and b and returns their sum.

Explanation:
The Function constructor is used to create a new function.
The first argument is a string containing the function parameters ('a', 'b' in this case).
The second argument is a string representing the function body ('return a + b').
The add variable now holds a reference to the newly created function.
Function constructors are rarely used because they involve parsing strings, which can be less efficient and less safe than defining functions using regular function declaration or expression syntax.


#Syntax
new Function(functionBody)
new Function(arg1, functionBody)
new Function(arg1, arg2, functionBody)
new Function(arg1, arg2, /* …, */ argN, functionBody)

Function(functionBody)
Function(arg1, functionBody)
Function(arg1, arg2, functionBody)
Function(arg1, arg2, /* …, */ argN, functionBody)



Self-Invoking Functions:
A self-invoking function, also known as an Immediately Invoked Function Expression (IIFE), is a function that runs as soon as it is defined. Here's an example:

 

(function() {
    console.log('This function is self-invoking!');
})();
Explanation:
The function is defined and wrapped inside parentheses (function(){...}).
Following the function definition, another pair of parentheses is added (function(){...})(). This set of parentheses immediately invokes the function.
Inside the function body, you can put any code you want to execute immediately.
Self-invoking functions are commonly used to create a new scope, encapsulate code, and avoid polluting the global namespace with variables and functions. They're also useful for executing code once without creating global variables.

Example Combining Both:
Here's an example that combines both function constructors and self-invoking functions:

 

var result = (new Function('a', 'b', 'return a + b'))(2, 3);
console.log(result); // Output: 5
In this example:

We create a new function using the Function constructor that adds two numbers together.
Immediately after creating the function, we invoke it with arguments 2 and 3.
The result is stored in the result variable and then printed to the console.
This is a less common usage, but it shows how function constructors and self-invoking functions can be used together. However, it's generally better to use regular function declaration or expression syntax for creating functions whenever possible.

SELF INVOKING FUNCTIONS

Print a Message using a Self-Invoking Function:

Use a self-invoking function to print a message immediately.

 

(function() {
    console.log('This message is self-invoking!');
})();
Calculate and Print the Factorial of a Number:

Create a self-invoking function to calculate and print the factorial of a number.



(function(n) {
    var factorial = 1;
    for (var i = 1; i <= n; i++) {
        factorial *= i;
    }
    console.log('Factorial of ' + n + ' is: ' + factorial);
})(5);
// Output: Factorial of 5 is: 120
Try these examples out and experiment with different functions and self-invoking patterns. This will help you get a better understanding of how function constructors and self-invoking functions work in JavaScript.

ARROW FUNCTION

- a concise way to write functions in JavaScript introduced in ES6 (ECMAScript 2015). 
- provide a more compact syntax compared to traditional function expressions and offer some advantages in certain scenarios.
- 

1. Basic Arrow Function:
The basic arrow function syntax consists of parameters (if any) followed by the arrow (=>) and then the function body.

let add = (a, b) => {
    return a + b;
};

console.log(add(5, 3)); // Output: 8


2. Implicit Return Arrow Function:
When the function body consists of a single expression, you can omit the curly braces {} and the return keyword. The expression's result is automatically returned.

let square = (x) => x * x;

console.log(square(4)); // Output: 16

3. Arrow Function with Single Parameter:
When a function takes only one parameter, you can omit the parentheses around the parameter list.

let greet = name => `Hello, ${name}!`;

console.log(greet('Alice')); // Output: Hello, Alice!

4. Arrow Function with No Parameters:
When a function takes no parameters, you need to include an empty set of parentheses.

 
let sayHello = () => console.log('Hello!');

sayHello(); // Output: Hello!
Practical Use:
This is useful for defining functions that don't require any input arguments, such as event handlers or utility functions.

5. Arrow Functions and Lexical this:
Arrow functions do not have their own this context. Instead, they inherit the this value from the enclosing lexical context (the context in which they are defined).
function Counter() {
    this.count = 0;
    this.timer = setInterval(() => {
        this.count++;
        console.log(this.count);
    }, 1000);
}

let counter = new Counter();