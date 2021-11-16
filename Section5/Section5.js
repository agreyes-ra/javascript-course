'use-strict';

console.log(`Connected!`);

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understand the problem
// What is temperature amplitude? Answer: difference between highest and the lowest temp
// -How to compute the max and min temperatures?
// -What's a sensor error? and what to do?

// 2) Breaking up into sub-problems
// -How to ignore errors?
// -Find max value in temp  temps
// -Find min value in temp  temps
// -Substract min from max (amplitude) and return it

const calcTempAplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max: ${max}, Min: ${min}`);
  return max - min;
};

const amplitude = calcTempAplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should no receive two arrays of temperatures

// 1) Understanding the problem
// With 2 arrays, should we implement functionality twice? NO! Merge the arrays.

// 2) Breaking up into sub-problems
// -Merge 2 arrays

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const mergedArray = [...arr1, ...arr2]; // ES6 Solution
const concatArray = arr1.concat(arr2); // <ES6 Solution

console.log(mergedArray);
console.log(concatArray);

const calcTempAplitudeNew = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max: ${max}, Min: ${min}`);
  return max - min;
};

const amplitudeNew = calcTempAplitudeNew([9, 8, 7], [6, 5, 4]);
console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };

  console.table(measurement);

  const kelvin = measurement.value + 273;
  return kelvin;
};

// A) Identify the bug
console.log(measureKelvin());

// Using a debugger
const calcTempAplitudeBug = function (temps1, temps2) {
  const temps = temps1.concat(temps2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let index = 0; index < temps.length; index++) {
    const curTemp = temps[index];
    if (typeof curTemp !== 'number') continue;

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }

  console.log(`Max: ${max}, Min: ${min}`);
  return max - min;
};

const amplitudeBug = calcTempAplitudeBug([9, 8, 7], [6, 3, 4]);

// Identify the bug
console.log(amplitudeBug);
