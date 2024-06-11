// no 1
function sortFunc(arr) {
  arr.sort((a, b) => a - b);
  const lowest = arr[0];
  const highest = arr[arr.length - 1];
  const sum = arr.reduce((a, b) => a + b);
  const avg = sum / arr.length;

  return { lowest, highest, avg };
}

console.log(sortFunc([32, 12, 10, 21, 9]));

// no 2
function concatWords(words) {
  if (words.length === 1) {
    return words[0];
  } else {
    const lastWord = words.pop();
    return words.join(", ") + " and " + lastWord;
  }
}

console.log(concatWords(["apple", "banana", "cherry", "date"]));

// no 3
function secondSmallest(arr) {
  if (arr.length < 2) {
    return "minimum array length harus 2";
  }
  return arr.sort((a, b) => a - b)[1];
}

console.log(secondSmallest([5, 3, 1, 7, 2, 6]));

// no 4
function addArrays(arr1, arr2) {
  const result = [];
  const maxLength = Math.max(arr1.length, arr2.length);

  for (let i = 0; i < maxLength; i++) {
    const sum = (arr1[i] || 0) + (arr2[i] || 0);
    result.push(sum);
  }

  return result;
}

const arr1 = [1, 2, 3, 2, 4];
const arr2 = [3, 2, 1];
console.log(addArrays(arr1, arr2));

// no 5
function addUniqueElement(arr, newElement) {
  if (!arr.includes(newElement)) {
    arr.push(newElement);
  }
  return arr;
}

console.log(addUniqueElement([1, 2, 3, 4], 4));

// no 6
function sumNumbersDataType(arr) {
  let temp = 0;

  arr.forEach((value) => {
    if (typeof value === "number") {
      temp += value;
    }
  });

  return temp;
}

console.log(sumNumbersDataType(["3", 1, "string", null, false, undefined, 2]));

// no 7
function limitData(maxSize, ...integers) {
  const array = [];
  integers.forEach((number) => {
    if (array.length === maxSize) return;
    array.push(number);
  });
  return array;
}

const maxSize = 3;
console.log(limitData(maxSize, 7, 10, 24, 3, 6, 7, 8));

// no 8
function combineArray(arr1, arr2) {
  return [...arr1, ...arr2];
}
console.log(combineArray([1, 2, 3], [3, 2, 1]));

// no 9
function findDuplicateValues(arr) {
  const seen = new Set();
  const duplicate = [];

  for (const value of arr) {
    if (seen.has(value) && !duplicate.includes(value)) {
      duplicate.push(value);
    } else {
      seen.add(value);
    }
  }

  return duplicate;
}

console.log(findDuplicateValues([1, 2, 2, 2, 3, 3, 4, 5, 5]));

// no 10
function findDifference(arr1, arr2) {
  const difference = [];

  for (const item of arr1) {
    if (!arr2.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  for (const item of arr2) {
    if (!arr1.includes(item) && !difference.includes(item)) {
      difference.push(item);
    }
  }

  return difference;
}

console.log(findDifference([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// no 11
function filterPrimitiveDataTypes(arr) {
  return arr.filter((item) => {
    return (
      typeof item === "number" ||
      typeof item === "string" ||
      typeof item === "boolean" ||
      item === null ||
      typeof item === "undefined"
    );
  });
}

console.log(
  filterPrimitiveDataTypes([1, [], undefined, {}, "string", {}, [], null])
);

// no 12
function sumDuplicateValues(arr) {
  const duplicateValues = arr.filter((value, index, self) => {
    return self.indexOf(value) !== index;
  });

  let result = 0;
  for (const item of arr) {
    if (duplicateValues.includes(item)) {
      result += item;
    }
  }
  return result;
}

console.log(sumDuplicateValues([10, 20, 40, 10, 50, 30, 10, 60, 10, 20]));

// no 13
function playRockPaperScissors(playerChoice) {
  const choices = ["rock", "paper", "scissor"];
  const computerChoice = choices[Math.floor(Math.random() * 2.9)];

  if (!choices.includes(playerChoice)) {
    return "wrong input!";
  }

  if (playerChoice === computerChoice) {
    return { result: "draw", computerChoice, playerChoice };
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissor") ||
    (playerChoice === "scissor" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return { result: "win", computerChoice, playerChoice };
  }

  return { result: "lose", computerChoice, playerChoice };
}

console.log(playRockPaperScissors("paper"));
