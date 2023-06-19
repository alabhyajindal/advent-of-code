import { getInput } from '../utils/utils.js';
const input = await getInput();
const inputLines = input.replaceAll('\r', '').split('\n');
let stacksCount = 0;
inputLines.forEach((line) => {
  if (line.match(/ 1  /)) {
    stacksCount = Number(line[line.length - 2]);
  }
});

let stackInput = [];
for (let i = 0; i < inputLines.length; i++) {
  if (inputLines[i] === '') {
    break;
  } else {
    stackInput.push(inputLines[i].replaceAll('\r', ''));
  }
}
stackInput.pop();

// console.log(stackInput);
// console.log(stacksCount);

let stacks = {};
stackInput.forEach((s) => {
  console.log(s);
});
