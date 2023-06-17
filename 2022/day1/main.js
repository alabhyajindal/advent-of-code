const DEMO = false;

let input;
if (DEMO) {
  input = await Deno.readTextFile('./demoInput.txt');
} else {
  input = await Deno.readTextFile('./input.txt');
}

let inputArr = input.split('\n');
inputArr = inputArr.map((i) => {
  if (i === '\r') {
    return i;
  } else {
    return Number(i);
  }
});

let calories = [];

inputArr.reduce((accumulator, currentValue, i) => {
  if (currentValue === '\r' || i === inputArr.length - 1) {
    calories.push(Number(accumulator + currentValue));
    return 0;
  } else {
    return accumulator + currentValue;
  }
});

calories = calories.sort((a, b) => {
  if (a > b) {
    return -1;
  } else {
    return 1;
  }
});

const topThreeCalories = calories.slice(0, 3);
const result = topThreeCalories.reduce((a, c) => a + c);
console.log(result);
