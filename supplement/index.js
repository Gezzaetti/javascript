let name = 'Mosh'; 
console.log(name);

//cannot be reserved a keyword
//should be meaningful
//cannot start with a number
//cannot contain a space or hyphen
//Are case sensitive
//
let firstName = 'Elias';
 lastName = 'Nahusenay';
 //modern practice is to have the names into two lines like this but it is also possible to have the names in one line with coma. But if we are going to put them into two lines than we need to exterminate the first line  with colon.
 let interestRate = 0.3;
 interestRate = 1;
 console.log(interestRate);

 //'let' and 'const' value of constant can't change while value of other variable i.e 'let' can change as per the assigned value to it.
 
 //WE HAVE TWO TYPES OF DATA
 //PRIMITIVE/VALUE TYPES AND REFERENCE TYPES
 //a) string (string literal)
    //number 
    //booleans
   // undefined (if you donot initialized it the value will be //'undefined')
   // null (used when the value must be clear otherwise declared null)
// JS is dynamic language, not static. Because it allows us to change the value assigned and in static the value can't be changed.

 

let person = {
    guy: 'Mosh',
    age: 33
};

console.log(person);
//ARRAYS
//They are list of items and are sort of 'indexed' nature. could be numbers and onjects and technically computer reads them as object.
//Functions
//They are fundamental building blocks of JS. It performs a task and calculating a value and return.
function teklu(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}
teklu('Gebru', 'Silemun');



