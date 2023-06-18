import { getInput } from '../utils/utils.js';
const input = await getInput();

const sections = input.replaceAll('\r', '').split('\n');
const sectionPairs = sections.map((s) => {
  return [s.split(',')[0], s.split(',')[1]];
});

const expandedSectionPairs = sectionPairs.map((s) => {
  const firstPair = s[0];
  const secondPair = s[1];
  const firstExpansion = expandSection(firstPair);
  const secondExpansion = expandSection(secondPair);
  if (firstExpansion.length > secondExpansion.length) {
    return [secondPair, firstPair];
  } else {
    return [firstPair, secondPair];
  }
});

function expandSection(pair) {
  let expansion = '';
  const [start, end] = pair.split('-');
  for (let i = Number(start); i < Number(end) + 1; i++) {
    expansion += i;
  }
  return expansion;
}

const contains = expandedSectionPairs.filter((pair) => {
  const firstPair = pair[0];
  const secondPair = pair[1];

  let [firstStart, firstEnd] = firstPair.split('-');
  let [secondStart, secondEnd] = secondPair.split('-');

  firstStart = Number(firstStart);
  firstEnd = Number(firstEnd);
  secondStart = Number(secondStart);
  secondEnd = Number(secondEnd);

  if (
    (firstStart >= secondStart && firstStart <= secondEnd) ||
    (firstEnd >= secondStart && firstEnd <= secondEnd)
  ) {
    return true;
  } else {
    return false;
  }
});

const count = contains.length;
console.log(count);
