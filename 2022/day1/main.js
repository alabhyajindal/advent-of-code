const demo = true;
let input;
if (demo) {
  input = await Deno.readTextFile('./demoInput.txt');
} else {
  input = await Deno.readTextFile('./input.txt');
}

let inputArr = input.split('\n');
console.log(inputArr);
inputArr = inputArr.map((i) => {
  if (i === '\r') {
    return i;
  } else {
    return Number(i);
  }
});

const calories = [];

inputArr.reduce((accumulator, currentValue, i) => {
  if (currentValue === '\r' || i === inputArr.length - 1) {
    calories.push({ i, calories: Number(accumulator + currentValue) });
    return 0;
  } else {
    return accumulator + currentValue;
  }
});

let result = { calories: 0 };
calories.forEach((c) => {
  if (c.calories > result.calories) {
    result = c;
  }
});

console.log(result);
