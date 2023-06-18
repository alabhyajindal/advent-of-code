import { getInput } from '../utils/utils.js';
const input = await getInput();

const rucksacks = input.replaceAll('\r', '').split('\n');

const rucksacksByCompartments = rucksacks.map((r) => {
  const middleIndex = r.length / 2;
  const firstCompartment = r.slice(0, middleIndex);
  const secondComparment = r.slice(middleIndex, r.length);
  return [firstCompartment, secondComparment];
});

const missingItems = rucksacksByCompartments.map((rucksack) => {
  const firstCompartment = rucksack[0];
  const secondComparment = rucksack[1];
  for (let i = 0; i < firstCompartment.length; i++) {
    if (secondComparment.includes(firstCompartment[i])) {
      return firstCompartment[i];
    }
  }
});

const priorities = missingItems.map((item) => {
  const offset = item === item.toUpperCase() ? 38 : 96;
  return item.charCodeAt() - offset;
});

const prioritiesSum = priorities.reduce((a, b) => a + b);
console.log(prioritiesSum);
