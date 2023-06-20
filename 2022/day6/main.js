import { getInput } from '../utils/utils.js';
const input = await getInput();

// loop over the string
// check the last four characters of the string (last 4 of the i)
// if no repetition then print i and break

let temp = [];
for (let i = 0; i < input.length; i++) {
  if (temp.length === 4) {
    temp.shift();
  }
  temp.push(input[i]);
  // console.log(i, temp.join(''));
  // I want to know if the temp array has repeating characters
  let count = 0;
  for (let j = 0; j < temp.length; j++) {
    if (temp.filter((t) => t === temp[j]).length === 1) {
      count++;
    }
  }
  if (count === 4) {
    console.log(i + 1);
    break;
  }
}
