const sumAll = function (numStart, numEnd) {
  let numFinal = 0;

  if (numStart > numEnd) {
    let temp = numStart;
    numStart = numEnd;
    numEnd = temp;
  }

  for (let i = numStart; i <= numEnd; i++) {
    numFinal += i;
  }

  if (
    typeof numStart === 'number' &&
    typeof numEnd === 'number' &&
    numStart >= 0 &&
    numEnd >= 0
  ) {
    return numFinal;
  } else {
    return 'ERROR';
  }
};

module.exports = sumAll;
