// Develop a program that outputs all even, positive numbers less than 100 in the following pattern: 2, 98, 4, 96, 6, 94, and so on, up to the last number before 100. Display the result in a single line.

//console.log(Math.floor(Math.random() * 50) * 2 + 1);
console.log([...Array(49).keys()].map(i => [2*i + 2, 100 - 2*i - 2]).flat().join(', '));
//console.log(Math.floor(Math.random() * 50) * 2 + (Math.random() > 0.5 ? 1 : 0));
/* This gives two random numbers.

//for (var i = 1; i <= 100; i++) {
   // console.log(i);
//} 
This gives an increment output. /

//console.log([...Array(49).keys()].map(i => [2*i + 2, 100 - 2*i - 2]).flat().join(', '))*/
