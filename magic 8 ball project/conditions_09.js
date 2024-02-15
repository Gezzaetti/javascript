// Create a Magic 8-Ball program that emulates the classic fortune-telling toy. The user will input a yes-or-no question, and the program will output a random response from the 8-Ball. Implement the program using conditional statements to select and display one of several predefined responses.
/*
const questionInput = document.getElementById("question-input");
const ballAnswer = document.getElementById("ball-answer");
const questionSubmit = document.getElementById("question-submit");
const loaderSpinner = document.getElementById("loader");

const runningAnswers = (question) => {
  const runningAnswers = [
    'definetly yes','do not even think about it','unbelivanle','yes seems legit', 'i doubt it','you are right', 'it seems it is progress backwards', 'i would believe it'
  ];
  return 
  runningAnswers[Math.round(Math.random() * (runningAnswers.length -1))];
};
console.log(runningAnswers);

/*

("8BallMagic");

userName === "8BallMagic"
  ? console.log("Hello, ${userName} !")
  : console.log("Hello!");

const userQuestion = `${userName} what could possibly be asked?`;
let eightBall = "";

let randomNumber = math.floor(math.random() * 8);

if (randomNumber === 0) {
  eightBall = "Definitely a yes.";
} else if (randomNumber === 1) {
  eightBall = "Yes, this time you are not mistaken.";
} else if (randomNumber === 2) {
  eightBall = "Yes, definitely";
} else if (randomNumber === 3) {
  eightBall = "You'd think that but No";
} else if (randomNumber === 4) {
  eightBall = "Can't see that happening.";
} else if (randomNumber === 5) {
  eightBall = "Half decent chance!";
} else if (randomNumber === 6) {
  eightBall = "You got it spot on";
} else if (randomNumber === 7) {
  eightBall = "Takes a mountain to climb";
}

console.log(userQuestion, eightBall);
//function askEightBall(question) {
// const responses = [
//     ".",
/*   "",
        "Outlook not so good.",
        "Ask again later.",
        "Don't count on it.",
        ".",
        "My sources say no.",
        "Cannot predict now.",
    ];

    // Get a random response
    const randomIndex = Math.floor(Math.random() * responses.length);
    const answer = responses[randomIndex];

    console.log(`Question: ${question}`);
    console.log(`Answer: ${answer}`);
*/
