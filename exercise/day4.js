// no 1
// function segitiga1(height) {
//   for (let i = 1; i <= height; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += j + " ";
//     }
//     console.log(row);
//   }
// }

// segitiga1(5);

// no 2
// function segitiga2(height) {
//   let currentNumber = 1;

//   for (let i = 1; i <= height; i++) {
//     let row = "";

//     for (let j = 1; j <= i; j++) {
//       row += (currentNumber < 10 ? "0" : "") + currentNumber + " ";
//       currentNumber++;
//     }
//     console.log(row);
//   }
// }

// segitiga2(5);

// no 3

// function fizzBuzz(n) {
//   let message = "";

//   for (let i = 1; i <= n; i++) {
//     if (i % 3 === 0 && i % 5 === 0) {
//       message += "FizzBuzz" + " ";
//     } else if (i % 5 === 0) {
//       message += "Buzz" + " ";
//     } else if (i % 3 === 0) {
//       message += "Fizz" + " ";
//     } else {
//       message += i + " ";
//     }
//   }
//   console.log(message);
// }

// fizzBuzz(15);

// no 4

// function bmi(weight, height) {
//   const result = weight / (height * height);

//   if (result < 18.5) {
//     return "less weight";
//   } else if (result >= 18.5 && result <= 24.9) {
//     return "ideal";
//   } else if (result >= 25.0 && result <= 29.9) {
//     return "overweight";
//   } else if (result >= 30.0 && result <= 39.9) {
//     return "very overweight";
//   } else {
//     return "obesity";
//   }
// }

// const weight = 70; // in kg
// const height = 1.75; // in meters

// console.log(bmi(weight, height));

// no 5
// cara build in method
// function removeOddNumbers(arr) {
//   return arr.filter((number) => number % 2 === 0);
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(removeOddNumbers(array));

// tanpa build in method
// function removeOddNumbers(arr) {
//   const temp = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       temp.push(arr[i]);
//     }
//   }
//   return temp;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(removeOddNumbers(array));

// no 6
// pake build in method
function splitString(input) {
  return input.split(" ");
}
console.log(splitString("Hello World"));

// tanpe build in method
const splitString2 = (input) => {
  let kata = [];
  let tmpStr = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] === " ") {
      kata.push(tmpStr);
      tmpStr = "";
      continue;
    }
    tmpStr += input[i];
  }
  kata.push(tmpStr);
  return kata;
};

console.log(splitString2("Hello World"));
