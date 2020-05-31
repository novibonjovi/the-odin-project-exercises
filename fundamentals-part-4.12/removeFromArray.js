const removeFromArray = function (array, ...theArgs) {
  for (i = 0; i < theArgs.length; i++) {
    let index = array.indexOf(theArgs[i]);

    if (index >= 0) {
      array.splice(index, 1);
    }
  }

  return array;
};

module.exports = removeFromArray;
