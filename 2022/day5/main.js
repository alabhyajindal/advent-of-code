import { getInput } from '../utils/utils.js';
const input = await getInput();
const inputLines = input.replaceAll('\r', '').split('\n');
const breakerIndex = inputLines.findIndex((line) => line === '');
const instructionInput = inputLines.slice(breakerIndex + 1);

const instructions = instructionInput.map((line) => {
  const quantity = Number(line.match(/(?<=move)(.*)(?=from)/g));
  const from = Number(line.match(/(?<=from)(.*)(?=to)/g));
  const to = Number(line.match(/(?<=to)(.*)/g));
  const output = { quantity, from, to };
  return output;
});

console.log(instructions);

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

const temp = {};
for (let i = 0; i < stackInput.length; i++) {
  const currentLine = stackInput[i];
  for (let j = 0; j < currentLine.length; j++) {
    const currentCharacter = currentLine[j];
    if (
      currentCharacter !== ' ' &&
      currentCharacter !== '[' &&
      currentCharacter !== ']'
    ) {
      if (typeof temp[j] !== 'object') {
        temp[j] = [currentCharacter];
      } else {
        temp[j].push(currentCharacter);
      }
    }
  }
}

const stacks = Object.keys(temp).map((key) => {
  return temp[key];
});

// console.log(stacks);
