const reverseString = function (string) {
  let reverseArray = [];

  stringArray = string.split('');

  for (let i = string.length - 1; i >= 0; i--) {
    reverseArray.push(string[i]);
  }

  return reverseArray.join('');
};

module.exports = reverseString;
