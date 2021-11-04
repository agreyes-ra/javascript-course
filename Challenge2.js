'use-strict';

// Challenge #4 From the Course
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

function caclTip(bill) {
   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for (let i = 0; i < bills.length; i++) {
   const tip = caclTip(bills[i]);
   tips.push(tip);
   totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

// Bonus
function calcAverage(arr) {
   let sum = 0;

   for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
   }

   let average = sum / arr.length;
   return average;
}

console.log(calcAverage(totals));
