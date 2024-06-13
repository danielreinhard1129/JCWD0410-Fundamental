// no 1
function checkObjectEqual(obj1, obj2) {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, b: 2 };
console.log(checkObjectEqual(obj1, obj2));

// no 2
const intersection = (obj1, obj2) => {
  let duplicate = {};

  for (const key in obj1) {
    if (obj1[key] === obj2[key]) {
      duplicate[key] = obj1[key];
    }
  }

  return duplicate;
};

const obj3 = { a: 1, b: 1, c: 10 };
const obj4 = { a: 1, b: 2, c: 10 };
console.log(intersection(obj3, obj4));

// no 3
const removeAndCOmbineArray = (arr1, arr2) => {
  const combineArray = [...arr1, ...arr2];
  const temp = [];

  for (let i = 0; i < combineArray.length; i++) {
    const duplicateValues = temp.filter((val) => {
      return val.email === combineArray[i].email;
    });

    if (!duplicateValues.length) {
      temp.push(combineArray[i]);
    }
  }

  return temp;
};

const array1 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 2", email: "student2@mail.com" },
];

const array2 = [
  { name: "Student 1", email: "student1@mail.com" },
  { name: "Student 1", email: "student3@mail.com" },
];

console.log(removeAndCOmbineArray(array1, array2));

// no 4
const switchKeyToValues = (data) => {
  const result = [];

  data.forEach((item) => {
    let temp = {};

    for (let key in item) {
      temp[item[key]] = key;
    }

    result.push(temp);
  });

  return result;
};

const input = [
  { name: "David", age: 20 },
  { name: "Sandy", age: 21 },
];
console.log(switchKeyToValues(input));

// no 5
function factorial(n) {
  if (n === 1) {
    return {
      steps: [1],
      total: 1,
    };
  } else {
    const next = factorial(n - 1);
    console.log(next);
    return {
      steps: [n, ...next.steps],
      total: n * next.total,
    };
  }
}

const { steps, total } = factorial(5);
console.log(steps.join(" x ") + " = " + total);
