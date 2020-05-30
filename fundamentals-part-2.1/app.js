// Strings MDN Tutorial
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/First_steps/Strings
let string = 'The revolution will not be televised.';
console.log(string);

let badString = string;
console.log(badString);

let bigmouth = "I've got no right to take my place...";
console.log(bigmouth);

let one = 'Hello, ';
let two = 'how are you?';
let joined = one + two;
console.log(joined);
let multiple = one + one + one + two;
console.log(multiple);
let response = one + 'I am fine - ' + two;
console.log(response);

const button = document.querySelector('button');
button.onclick = function () {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
};

let myDate = '19' + '67';
console.log(typeof myDate);

let myString = '123';
let myNum = Number(myString);
console.log(typeof myNum);

myNum = 123;
myString = myNum.toString();
console.log(typeof myString);

let song = 'Fight the Youth';
song = `Fight the Youth`;

let score = 9;
let highestScore = 10;
let output =
  'I like the song "' +
  song +
  '". I gave it a score of ' +
  (score / highestScore) * 100 +
  '%.';
console.log(output);
output = `I like the song "${song}". I gave it a score of ${
  (score / highestScore) * 100
}%.`;
console.log(output);

let examScore = 45;
let examHighestScore = 70;
let examReport = `You scored ${examScore}/${examHighestScore} (${Math.round(
  (examScore / examHighestScore) * 100
)}%). ${
  examScore >= 49
    ? 'Well done, you passed!'
    : "Bad luck, you didn't pass this time."
}`;
console.log(examReport);

output =
  'I like the song "' +
  song +
  '".\nI gave it a score of ' +
  (score / highestScore) * 100 +
  '%.';
console.log(output);
output = `I like the song "${song}".
I gave it a score of ${(score / highestScore) * 100}%.`;
console.log(output);

// 3. Logical operators
/*
const button = document.querySelector('button');
button.onclick = function () {
  let name = prompt('What is your name?');
  alert('Hello ' + name + ', nice to see you!');
};
*/
const buttonLogin = document.getElementById('login');
buttonLogin.onclick = function () {
  let nameLogin = prompt("Who's there?", '');
  if (nameLogin === null) {
    alert('Canceled');
  } else if (nameLogin === '') {
    alert('Canceled');
  } else if (nameLogin !== 'Admin') {
    alert("I dont't know you");
  } else {
    let password = prompt('Password?', '');
    if (password === '') {
      alert('Canceled');
    } else if (password === null) {
      alert('Canceled');
    } else if (password !== 'The Master') {
      alert('Wrong password');
    } else {
      alert('Welcome!');
    }
  }
};

// 5. Conditionals
const buttonJavascript = document.getElementById('javascript');
buttonJavascript.onclick = function () {
  let jsQuestion = prompt('What\'s the "official" name of Javascript?', '');
  if (jsQuestion === 'ECMAScript') {
    alert('Right!');
  } else {
    alert("You don't know? “ECMAScript”!");
  }
};

const buttonNumber = document.getElementById('number');
buttonNumber.onclick = function () {
  let num = prompt('Enter a number.', '');
  if (num == 0) {
    alert('0');
  } else if (num > 0) {
    alert('1');
  } else {
    alert('-1');
  }
};

let a = 3;
let b = 3;
let result = a + b < 4 ? 'Below' : 'Over';
const buttonAb = document.getElementById('ab');
buttonAb.onclick = () => {
  alert(result);
};

const buttonMessage = document.getElementById('message');
buttonMessage.onclick = () => {
  let login = prompt('Employee, Director or something else?', '');
  let message =
    login == 'Employee'
      ? 'Hello'
      : login == 'Director'
      ? 'Greetings'
      : login == ''
      ? 'No login'
      : 'No login';
  alert(message);
};

const buttonToday = document.getElementById('today');
const day = new Date().getDay();
const paraDay = document.getElementById('day');
buttonToday.onclick = () => {
  switch (day) {
    case 1:
      paraDay.innerHTML = 'Monday';
      break;
    case 2:
      paraDay.innerHTML = 'Tuesday';
      break;
    case 3:
      paraDay.innerHTML = 'Wednesday';
      break;
    case 4:
      paraDay.innerHTML = 'Thursday';
      break;
    case 5:
      paraDay.innerHTML = 'Friday';
      break;
    case 6:
      paraDay.innerHTML = 'Saturday';
      break;
    case 7:
      paraDay.innerHTML = 'Sunday';
      break;
    default:
      paraDay.innerHTML = 'Someting went wrong!';
  }
};
