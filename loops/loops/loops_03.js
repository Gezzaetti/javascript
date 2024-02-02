// Create a program that continuously prompts the user to input distance (in kilometers) and time (in hours) and then calculates the average speed. The program should terminate when the user enters 0 for the distance. Upon receiving a distance of 0, the program should not prompt for any further input.

let distance, time;
//global variable^
while (distance != 0) {
  //!= 0 is not zero.
  distance = Number(prompt("Enter distance in km"));
  if (distance == 0) {
    console.log("distance 0 - game over");
    break;
  }
  time = Number(prompt("enter time in hrs"));
  let average = distance / time;
  console.log("average is:", average);
}
//= parseFloat(prompt("Enter distance in kilometers (or 0 to exit):"));

//if (distance === 0 || isNaN(distance)) {
//  console.log("Exiting program.");
//  break;
//}

// let time = parseFloat(prompt("Enter time in hours:"));

// if (isNaN(time) || time <= 0) {
//    console.log("Invalid input. Time must be a positive numeric value. Please try again.");
//     continue;
//  }

// let averageSpeed = distance / time;
//  console.log(`Average speed: ${averageSpeed.toFixed(2)} km/h`);
//}

//function cal_speed (dist, time) {
//   document.write('distance (km) :
// document.write('time (hr) : ' +

// return dist / time;node
//}
