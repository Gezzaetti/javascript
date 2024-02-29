OBJECTS
- There are eight data types in JavaScript. Seven of them are called “primitive”, because their values contain only a single thing (be it a string or a number or whatever).

- objects penetrate almost every aspect of the language. So we must understand them first before going in-depth anywhere else.

- created with figure brackets {…} with an optional list of properties. A property is a “key: value” pair, where key is a string (also called a “property name”), and value can be anything.


- We can imagine an object as a cabinet with signed files.(Every piece of data is stored in its file by the key. It’s easy to find a file by its name or add/remove a file.)

- An empty object (“empty cabinet”) can be created using one of two syntaxes:
let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

- Usually, the figure brackets {...} are used. That declaration is called an object literal.

let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

A property has a key (also known as “name” or “identifier”) before the colon ":" and a value to the right of it.

In the user object, there are two properties: "name" and the value "John" & "age" and the value 30. Can be imagined as a cabinet with two signed files labeled “name” and “age”.

PROPERTY VALUE SHORTHAND
In real code, exisitng variables can be used as value for property names.
for instance:

function makeUser(name, age) {
  return {
    name: name,
    age: age,
    // ...other properties
  };
}

let user = makeUser("John", 30);
alert(user.name); // John

Another example to make it short and avoid repitition. Instead of name:name we can just write name, like this:

let user = {
  name,  // same as name:name
  age: 30


LIMITATIONS: a variable cannot have a name equal to one of the language-reserved words like “for”, “let”, “return” etc.

But for an object property, there’s no such restriction: