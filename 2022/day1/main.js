const input = await Deno.readTextFile('./input.txt');

let inputArr = input.split('\n');
inputArr = inputArr.map((i) => {
  if (i === '') {
    return i;
  } else {
    return Number(i);
  }
});

const calories = [];

inputArr.reduce((accumulator, currentValue, i) => {
  if (currentValue === '' || i === inputArr.length - 1) {
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
