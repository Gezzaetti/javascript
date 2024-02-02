// Develop a program that initially asks the user for a single number. Following this, the program should inquire if the user wishes to continue providing numbers with the prompt: 'Do you want to continue giving numbers? (y/n)'. If the user responds with 'y', the program will request another number. If the response is 'n', the program terminates. Upon termination, it calculates and displays the average of all entered numbers.

let inputNumber;
let amountofNumbers = 0;
let sumofNumbers = 0;
let shoudStop = "";

while (shoudStop !== "n") {
  inputNumber = Number(prompt("Please input a number:"));
  amountofNumbers++;
  sumofNumbers += inputNumber;
  shoudStop = prompt("Do you want to continue giving numbers? (y/n):");
  if (shoudStop.toLowerCase == "n") break;
}
console.log(
  "The average of all input number is : ${(sumOfNumbers / amountOfNumbers).toFixed(2)} (${sumOfNumbers} / ${amountOfNumbers})"
);
