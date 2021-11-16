'use-script';

console.log('Connected!');

const printForecast = function (arr) {
  let elementString = '';

  for (let i = 0; i < arr.length; i++) {
    const currElement = arr[i];

    elementString += `${currElement}C in ${i + 1} days ...`;
  }
  console.log('...' + elementString);
};

// TEST DATA 1: [17, 21, 23]
// TEST DATA 2: [12, 5, -5, 0, 4]

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);
