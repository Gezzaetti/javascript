// Initial array of team members
let teamMembers = ['John', 'Emily', 'Mike', 'Sarah'];

// Exercise 1: Loop through `teamMembers` and log each name to the console.
// Write your code here:

/*let i = 0;

while (i < teamMembers.length) {
    console.log(teamMembers[i]);
   i++;
}*/


// Exercise 2: Remove the first member of the array.
// Write your code here:
/*console.log(teamMembers.shift());*/


// Exercise 3: Remove the last member of the array.
// Write your code here:
/*console.log(teamMembers.pop()); */


// Exercise 4: Add a new member "Alex" to the front of the array.
// Write your code here:
/*console.log(teamMembers.unshift('Alex'));*/


// Exercise 5: Append a new member "Linda" to the end of the array.
// Write your code here:
/*
console.log(teamMembers.push('Linda'));
*/

// Exercise 6: Create a new array that excludes the first two members.
// Write your code here:
/*
console.log(teamMembers.splice(0,2));
*/
// Exercise 7: Find the index of "Mike" in the array.
// Write your code here:
/*
console.log(teamMembers.indexOf('Mike'));
*/
// Exercise 8: Try to find the index of "Jake" (who is not in the array).
// Write your code here:
/*
console.log(teamMembers.indexOf('Jake'));
*/
// Exercise 9: Use `splice` to remove "Mike" and add "Carol" and "Bruce" in his place.
// Write your code here:
/*
 teamMembers.splice(2, 1, "Carol", "Bruce");
 console.log(teamMembers);
*/
// Exercise 10: Concatenate a new member "Bob" to the end of the array and create a new array.
// Write your code here:

// Exercise 11: Using `slice` to Copy the Entire Array
// Write your code here:

// Exercise 12: Combining Arrays with `concat`
// Assume `newMembers` array is defined


// Write your code here
/*
let newMembers = ['Tina', 'Dean'];
  const children = teamMembers.concat(newMembers);
  console.log(children);


  */


// Write your code here

// Exercise 13: Finding all occurrences of a John
// Write your code here:

let toFind = "John";

let occurrences = teamMembers.filter(element => element === toFind);

console.log(occurrences);



//console.log(filter(teamMembers, "John"));

// Exercise 14: Transforming members with `map` to be all written uppercase
// Write your code here:

/*
let uppercaseArray = teamMembers.map(element => element.toUpperCase(teamMembers));
console.log(uppercaseArray);

 */
