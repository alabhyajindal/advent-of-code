import { getInput } from '../utils/utils.js';
const input = await getInput();
const inputLines = input.replaceAll('\r', '').split('\n');
const breakerIndex = inputLines.findIndex((line) => line === '');
const instructionInput = inputLines.slice(breakerIndex + 1);

const instructions = instructionInput.map((line) => {
  const quantity = Number(line.match(/(?<=move)(.*)(?=from)/g));
  const from = Number(line.match(/(?<=from)(.*)(?=to)/g)) - 1;
  const to = Number(line.match(/(?<=to)(.*)/g)) - 1;
  const output = { quantity, from, to };
  return output;
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

// console.log(instructions);
// console.log(stacks);

instructions.forEach((instruction) => {
  // const fromStack = stacks[instruction.from];
  // const toStack = stacks[instruction.to];
  const quantity = instruction.quantity;
  stacks[instruction.from] = stacks[instruction.from].slice(0, quantity);
  console.log(removedItems, stacks[instruction.from]);
});

// console.log(stacks);
