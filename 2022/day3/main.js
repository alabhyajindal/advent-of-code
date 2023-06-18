import { getInput } from '../utils/utils.js';
const input = await getInput();

const rucksacks = input.replaceAll('\r', '').split('\n');

const rucksacksByGroups = [];
let temp = [];
for (let i = 1; i < rucksacks.length + 1; i++) {
  temp.push(rucksacks[i - 1]);
  if (i % 3 === 0) {
    rucksacksByGroups.push(temp);
    temp = [];
  }
}

const groupBadges = rucksacksByGroups.map((rucksacks) => {
  const firstRucksack = rucksacks[0];
  const secondRucksack = rucksacks[1];
  const thirdRucksack = rucksacks[2];
  let item = '';
  for (let i = 0; i < firstRucksack.length; i++) {
    if (
      secondRucksack.includes(firstRucksack[i]) &&
      thirdRucksack.includes(firstRucksack[i])
    ) {
      item = firstRucksack[i];
    }
  }
  return item;
});

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

const priorities = groupBadges.map((item) => {
  const offset = item === item.toUpperCase() ? 38 : 96;
  return item.charCodeAt() - offset;
});

const prioritiesSum = priorities.reduce((a, b) => a + b);
console.log(prioritiesSum);
