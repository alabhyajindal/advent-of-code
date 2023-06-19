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
stackInput.reverse();

const stacks = {};

for (let i = 0; i < stackInput.length; i++) {
  const currentLine = stackInput[i];
  for (let j = 0; j < currentLine.length; j++) {
    const currentCharacter = currentLine[j];
    if (
      currentCharacter !== ' ' &&
      currentCharacter !== '[' &&
      currentCharacter !== ']'
    ) {
      if (typeof stacks[j] !== 'object') {
        stacks[j] = [currentCharacter];
      } else {
        stacks[j].push(currentCharacter);
      }
    }
  }
}

const temp = Object.keys(stacks).map((key) => {
  return stacks[key];
});

console.log(temp);
