// fundamentals part 3
//3.1 mdn functions
let myText = 'I am a string';
let newString = myText.replace('string', 'sausage');
console.log(newString);

let myArray = ['I', 'am', 'an', 'array'];
let makeString = myArray.join(' ');
console.log(makeString);

let myNumber = Math.random();
console.log(myNumber);

function draw() {
  // code block to execute
}

// random number between 0 and number
function random(number) {
  return Math.floor(Math.random() * (number + 1));
}
console.log(random(10));

// anonymous function, it has no name nad is used for event listeners
/*
function() {
  alert('Hello');
}
*/
const buttonHello = document.getElementById('button-hello');
buttonHello.onclick = function () {
  alert('Hello');
};
