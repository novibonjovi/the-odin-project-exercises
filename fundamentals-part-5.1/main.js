let user = {
  name: 'John',
  age: 30,
  email: 'johndoe@example.com',
  isAdmin: true,
};

console.log(user.name);

let key = prompt('What do you want to know about the user?', 'name');

alert(user[key]);

alert(user.noSuchProperty);

alert('age' in user); // returns true; user.age exists
alert('undefined' in user); // return false; user.undefined doesn't exist

// for...in loop; execute code for each key in object
for (let key in user) {
  // keys
  alert(key);
  // values
  alert(user[key]);
}

// task 1: Hello, object
let user2 = {};
user2.name = 'John';
user2.surname = 'Smith';
user2.name = 'Pete';
delete user2.name;

// task 2: Check for emptiness
var isEmpty = (obj) => {
  for (let key in obj) {
    return false;
  }

  return true;
};

alert(isEmpty(user2));

// task 3: Sum object properties
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

var sumSalaries = (obj) => {
  let sum = 0;

  for (let key in obj) {
    sum += obj[key];
  }

  return sum;
};

alert(salaries.John);
alert(sumSalaries(salaries));

// task 4: Multiply numeric properties by 2
let menu = {
  width: 200,
  height: 300,
  title: 'My menu',
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] *= 2;
    }
  }
}

console.log(menu);
multiplyNumeric(menu);
console.log(menu);
