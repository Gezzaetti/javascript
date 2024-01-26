/*
Create a program getTemperature that asks the user to input a temperature in Celsius and then outputs whether they should wear a jacket (if the temperature is below 15°C) or not.
 */

function getTemperature(temperature){
    if (temperature <= 15){
    return "it is cold, wear jacket!";
} else {
    return "it is normal, don't wear jacket";
}
}

console.log(getTemperature(23));
console.log(getTemperature(-12));
console.log(getTemperature(12));

//const temperature = Number(prompt('What is the current temperature?'));

//if (temperature < 15) {
    
//} else {
 //   console.log("It is not cold. Don't wear a jacket!");





 