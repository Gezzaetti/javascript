'use strict';
const addCarForm = document.querySelector("#addCar");
const searchCarForm = document.querySelector('#searchForm');
const cars = [];

class Car {
  constructor(license, maker, model, owner, price, color) {
    this.license = license;
    this.maker = maker;
    this.model = model;
    this.owner = owner;
    this.price = price;
    this.color = color;
  }
}

const addCar = (e) => {
  e.preventDefault();

const license = document.querySelector('#license').value;
const maker = document.querySelector('#maker').value;
const model = document.querySelector('#model').value;
const owner = document.querySelector('#owner').value;
const price = document.querySelector('#price').value;
const color = document.querySelector('#color').value;



//   console.log(license, maker, model, owner, price, color);

const newCar = new Car(license, maker, model, owner, price, color);
cars.push(newCar);
// console.table(cars)

displayTable();

addCarForm.reset();
};

const displayTable = () => {
   const table = document.querySelector('#carsTable');
   
   table.innerHTML = table.rows[0].innerHTML;

   cars.forEach ((car) => {
    const row = table.insertRow(-1);

   Object.values(car).forEach((text) => {
    const cell = row.insertCell(-1);
    cell.textContent = text;
   });
});
};
const searchCar = (e) => {
  e.preventDefault();
  const licenseQuery = document.querySelector('#search').value.trim().toLowerCase();

  if (!licenseQuery) {
    display.textContent = "Please enter license plate number.";
    return ;
  }
   try {
    const result = cars.find(({license}) => license.toLowerCase().includes(licenseQuery)
    );

   display.textContent = result 
    ? `Found ${result.maker}, owned by ${result.owner}`
    : 'No car with that plate number';

  } catch (error) {
    console.error('Error occured:', error);
    display.textContent = 'Something went wrong, please try again!';
  }

};


//   display.textContent = licenseQuery;
//   console.log(licenseQuery);
// };
addCarForm.addEventListener('submit', addCar);
searchCarForm.addEventListener('submit', searchCar);
