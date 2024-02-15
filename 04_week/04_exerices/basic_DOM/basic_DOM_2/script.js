/* 

Write JavaScript code that adds an event listener to the button.

When the button is clicked, the function should:
- Retrieve the value from the input field.
- Create a new <li> element and set its text content to the input field's value.
- Append the new <li> element to the fruitList <ul>.

Ensure the input field is cleared after adding the fruit to the list.

*/

const button = document.querySelector("#addFruitBtn");

/*const addDetails = () => {
  alert("it works!");
};*/
const addDetails = () => {
    const fruitInput = document.querySelector('#fruitInput').value.trim();
    const fruitList = document.querySelector('#fruitList');

    const newLi = document.createElement('Li');
    newLi.textContent = fruitInput;
    fruitList.appendChild(newLi);
    fruitInput.value = '';
} else {
    alerrt ('Please enter a fruit name');


};

button.addEventListener('click', addDetails);
  const addDetails = () => {
    alert("it works!");
  };


button.addEventListener("click", addDetails);
