'use strict';

console.log('Hello!!!');
let userName = prompt('Hello!!! What is your name?');
console.log('Hello', userName);
alert('Hello, ' + userName);


let desert = prompt('Does Revathi like deserts.? Please Answer with yes or no.');

let lowerCaseDesert = desert.toLocaleLowerCase();

if (lowerCaseDesert === 'yes' || lowerCaseDesert === 'y') {
  alert('Yum!!!! She loves it');
} else if (lowerCaseDesert === 'no'|| lowerCaseDesert === 'n') {
  alert('Wrong Anwser');
} else {
  alert('Looks like you didn\'t read the question');
}


let siblings = prompt('Does Revathi have siblings? Please Answer with yes or no.');

let lowerCaseSiblings = siblings.toLocaleLowerCase();

if (lowerCaseSiblings === 'yes' || lowerCaseSiblings === 'y') {
  alert('You said right!');
} else if (lowerCaseSiblings === 'no' || lowerCaseSiblings === 'n') {
  alert('Wrong Answer');
} else {
  alert('Looks like you didn\'t read the question');
}


let bookReading = prompt('Does Revathi like to read? Please Answer with yes or no');

let lowerCaseBookReading = bookReading.toLocaleLowerCase();

if (lowerCaseBookReading === 'yes' || lowerCaseBookReading === 'y') {
  alert('You said right!');
} else if (lowerCaseBookReading === 'no' || lowerCaseBookReading === 'n') {
  alert('Wrong Answer');
} else {
  alert('Looks like you didn\'t READ the question');
}

let joinCodeFellows = prompt('Did Revathi join Code Fellows? Please Answer with yes or no');

let lowerCaseJoinCodeFellows = joinCodeFellows.toLocaleLowerCase();

if (lowerCaseJoinCodeFellows === 'yes' || lowerCaseJoinCodeFellows  === 'y') {
  alert('You said right!');
} else if (lowerCaseJoinCodeFellows  === 'no' || lowerCaseJoinCodeFellows  === 'n') {
  alert('Wrong Answer');
} else {
  alert('Looks like you didn\'t READ the question');
}

let yogurt = prompt('Does Revathi like yogurt? Please Answer with yes or no');

let lowerCaseYogurt = yogurt.toLocaleLowerCase();

if (lowerCaseYogurt === 'yes' || lowerCaseYogurt  === 'y') {
  alert('Wrong Answer');
} else if (lowerCaseYogurt  === 'no' || lowerCaseYogurt  === 'n') {
  alert('You said right!');
} else {
  alert('Looks like you didn\'t READ the question');
  
}
alert('Thank you ' + userName + ' for participating in the guess game. Have a nice day. :)');
