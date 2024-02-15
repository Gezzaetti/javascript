/* 

Write JavaScript code that selects content id by using getElementById.
Write a function which will update the text content of the selected element to "Hello, World!" by clicking the button.
*/
//The code can be written this way also the one below is the shortest version.
/*
const textPlaceHolder = document.getElementById("content");

const textChanger = () => {
  textPlaceHolder.textContent = "Hello World!";
};
console.log(textPlaceHolder.textContent);

*/

const textChanger = () => {
  document.getElementById("content").textContent = "Hello world!";
};

/*
document.getElementById("myButton").addEventListener("click", function () {
  alert("Hello, World!");
});

document.getElementById("content").textContent = "hello World";
("Hello World");
*/
