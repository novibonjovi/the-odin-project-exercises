const repeatString = function (string, num) {
  let stringNew = '';

  for (let i = 0; i < num; i++) {
    stringNew += string;
  }

  if (num < 0) {
    return 'ERROR';
  } else {
    return stringNew;
  }
};

module.exports = repeatString;
