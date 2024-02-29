'use strict';

// Task 1: Basic Try-Catch Usage
/*
Wrap the code inside a try-catch block to catch potential errors.
Log 'An error occurred' in the catch block.
*/

function task1() {
  try {
    // a + b;
    throw new Error('Oops, something went wrong!');
  } catch (error) {
    console.log(error.message);
  }
}

task1();


// Task 2: Catching ReferenceError
/*
Attempt to access an undefined variable inside a try block.
Catch the ReferenceError and log it to the console.
*/

// Code here
function task2() {
  try {
    console.log(fox);
  } catch (error) {
    console.error(error);
  }
}

 

 Task 3: Using Finally
/*
Use a try-catch-finally block. In the finally block, log 'Execution completed'.
*/

function task3() {
  // Code here
    try {
      console.log('Inside try block');
      console.log(fox);
    } catch (error) {
      console.log('Error caught');
    } finally {
      console.log('Execution completed');
    }
  }
  
  task3();



// Task 4: Nested Try-Catch
/*
Inside a try block, nest another try-catch block.
Simulate an error in the nested try block and handle it in the nested catch block.
*/

function task4() {
  // Code here
  try {
    console.log('Outer try block');
    try {
      throw new Error ('nested error occured')
    } catch (error) {
      console.log('nested catch block:', error.message);
    }
  } catch (error) {
    console.log('Outer catch block:', error.message)
  }
}

// Task 5: Function with Try-Catch
/*
Create a function that uses try-catch to handle an array index out of bounds error.
*/

function task5(array, index) {
  // Code here
  try {
    if (index < 0 || index >=array.length) {
      throw new Error('Index out of bounds');
    }
    console.log('Value:', array[index]);
  } catch (error) {
    console.error(error.message);
  }
}
