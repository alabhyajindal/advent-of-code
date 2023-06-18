import { getInput } from '../utils/utils.js';
const input = await getInput();

let inputArr = input.replaceAll('\r', '').split('\n');
inputArr = inputArr.map((input) => {
  return input.split(' ');
});

inputArr = inputArr.map((input) => {
  return input.map((i) => {
    if (i === 'A') {
      return 'Rock';
    } else if (i === 'B') {
      return 'Paper';
    } else if (i === 'C') {
      return 'Scissor';
    } else {
      return i;
    }
  });
});

inputArr = inputArr.map((i) => {
  if (i[0] === 'Rock') {
    if (i[1] === 'X') {
      return ['Rock', 'Scissor'];
    } else if (i[1] === 'Y') {
      return ['Rock', 'Rock'];
    } else if (i[1] === 'Z') {
      return ['Rock', 'Paper'];
    }
  } else if (i[0] === 'Paper') {
    if (i[1] === 'X') {
      return ['Paper', 'Rock'];
    } else if (i[1] === 'Y') {
      return ['Paper', 'Paper'];
    } else if (i[1] === 'Z') {
      return ['Paper', 'Scissor'];
    }
  } else if (i[0] === 'Scissor') {
    if (i[1] === 'X') {
      return ['Scissor', 'Paper'];
    } else if (i[1] === 'Y') {
      return ['Scissor', 'Scissor'];
    } else if (i[1] === 'Z') {
      return ['Scissor', 'Rock'];
    }
  }
});

let score = 0;
inputArr.forEach((i) => {
  if (i[1] === 'Rock') {
    score += 1;
    if (i[0] === 'Scissor') {
      score += 6;
    } else if (i[0] === 'Rock') {
      score += 3;
    } else if (i[0] === 'Paper') {
      score += 0;
    }
  } else if (i[1] === 'Paper') {
    score += 2;
    if (i[0] === 'Rock') {
      score += 6;
    } else if (i[0] === 'Paper') {
      score += 3;
    } else if (i[0] === 'Scissor') {
      score += 0;
    }
  } else if (i[1] === 'Scissor') {
    score += 3;
    if (i[0] === 'Paper') {
      score += 6;
    } else if (i[0] === 'Scissor') {
      score += 3;
    } else if (i[0] === 'Rock') {
      score += 0;
    }
  }
});

console.log(score);
