'use strict';
// This is for linter.

console.log('Hello!!!');
alert('Welcome to my Guessing Game..!!!');
let userName = prompt('Hello!!! What is your name?');
console.log('Hello', userName);
alert('Hello, ' + userName);

let correctAnswers = 0;

favoriteDesert();
mySiblings();
questionBookReading ();
qustionJoinCodeFellows ();
questionYogurt();
guessNumber();
favoriteMovies();

function favoriteDesert() {
// Question 1.
let desert = prompt('Does Revathi like deserts.? Please Answer with yes or no.');

let lowerCaseDesert = desert.toLocaleLowerCase();

if (lowerCaseDesert === 'yes' || lowerCaseDesert === 'y') {
  alert('Yum!!!! She loves it');
  correctAnswers++;
} else if (lowerCaseDesert === 'no'|| lowerCaseDesert === 'n') {
  alert('Wrong Anwser');
} else {
  alert('Looks like you didn\'t read the question');
}
}

function mySiblings() {
// Question 2.
let siblings = prompt('Does Revathi have siblings? Please Answer with yes or no.');

let lowerCaseSiblings = siblings.toLocaleLowerCase();

if (lowerCaseSiblings === 'yes' || lowerCaseSiblings === 'y') {
  alert('You said right!');
  correctAnswers++;
} else if (lowerCaseSiblings === 'no' || lowerCaseSiblings === 'n') {
  alert('Wrong Answer');
} else {
  alert('Looks like you didn\'t read the question');
}
}

function questionBookReading () {
// Question 3
let bookReading = prompt('Does Revathi like to read? Please Answer with yes or no');

let lowerCaseBookReading = bookReading.toLocaleLowerCase();

if (lowerCaseBookReading === 'yes' || lowerCaseBookReading === 'y') {
  alert('You said right!');
  correctAnswers++;
} else if (lowerCaseBookReading === 'no' || lowerCaseBookReading === 'n') {
  alert('Wrong Answer');
} else {
  alert('Looks like you didn\'t READ the question');
}
}

function qustionJoinCodeFellows () {
//Question 4
let joinCodeFellows = prompt('Did Revathi join Code Fellows? Please Answer with yes or no');

let lowerCaseJoinCodeFellows = joinCodeFellows.toLocaleLowerCase();

if (lowerCaseJoinCodeFellows === 'yes' || lowerCaseJoinCodeFellows  === 'y') {
  alert('You said right!');
  correctAnswers++;
} else if (lowerCaseJoinCodeFellows  === 'no' || lowerCaseJoinCodeFellows  === 'n') {
  alert('Wrong Answer');
} else {
  alert('Looks like you didn\'t READ the question');
}
}

function questionYogurt() {
//Question 5
let yogurt = prompt('Does Revathi like yogurt? Please Answer with yes or no');

let lowerCaseYogurt = yogurt.toLocaleLowerCase();

if (lowerCaseYogurt === 'yes' || lowerCaseYogurt  === 'y') {
  alert('Wrong Answer');
} else if (lowerCaseYogurt  === 'no' || lowerCaseYogurt  === 'n') {
  alert('You said right!');
  correctAnswers++;
} else {
  alert('Looks like you didn\'t READ the question');
  
}
}

function guessNumber() {
//Question 6
let myNum = 7;
for(let i=0; i<5; i++){
  alert('You have ' + (5-i) + ' guesses left');
  let userGuess = prompt('Pick a number between 1-10');
  let numericalGuess = parseInt(userGuess);
  if(numericalGuess === myNum){
    alert('You got it right');
    correctAnswers++;
    i = 5; //break;
  }
  else if(numericalGuess > myNum){
    alert('You guessed too high! Try again');
  } 
  else if(numericalGuess < myNum){
    alert('You guessed too low! Try again');
  } 
  else{
    alert('Please use a valid number');
  }
}
alert('The Correct answer is ' +myNum);
}

function favoriteMovies() {
//Question 7
let myFavMovies = ['frozen', 'CoCo', ];

let count = 5;
let theyGotItRight = false;
while(theyGotItRight === false && count > 0)
{
  alert('You have ' +count+ ' guesses left');
  let userGuess1 = prompt('Guess one of my fav movie.?');
   let userGuess = userGuess1.toLowerCase();

for(let i=0; i < myFavMovies.length; i++)
 {
  if(userGuess === myFavMovies[i])
  {
  alert('You got it right');
  correctAnswers++;
  theyGotItRight = true;
  }
}
  if(theyGotItRight === false)
  {
    alert('Sorry, Incorrect Answer. Guess again');
  }
count--;
}
alert('Correct Answers: ' +myFavMovies); 

}
alert('Thank you ' + userName + ' for participating in the guessing game. You got ' + correctAnswers + ' points. Have a nice day. :)');
