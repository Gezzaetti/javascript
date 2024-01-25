// Define a function to convert a temperature from Fahrenheit to Celsius.
// This function uses the formula (Fahrenheit - 32) * 5/9
// The resulting temperature is ronunded to one decimal place for precision.

// Sample usage - do not modify
console.log(fahrenheitToCelsius(21)); // "-6,1"
function convertToC(Fahrenheit) {
  var Celsius;
  //
  Celsius = ((Fahrenheit - 32) * 5) / 9;
  return Celsius(24);
}
// incorrect^
function fahrenheitToCelsius(Fahrenheit) {
  return (Fahrenheit - 32) * 5 / 9;

}

console.log(fahrenheitToCelsius(21).toFixed(1));