// no 1
// const angka = 9;
// for (let i = 1; i <= 10; i++) {
//   console.log(`${angka} x ${i} = ${angka * i}`);
// }

// no 2 ============================================================
// cara 1 (build in method)
// const kata = "madam";
// const isPalindrome = kata === kata.split("").reverse().join("");
// console.log(isPalindrome);

// cara 2 (tanpa build in method)
// const kata = "madam";
// let reverse = "";

// for (let i = kata.length - 1; i >= 0; i--) {
//   reverse += kata[i];
// }

// console.log(kata === reverse ? "palindrome" : "not palindrome");

// no 3 ================================================================
// const cm = 100000;
// const km = cm / 100000;

// console.log(km);

// no 4 ================================================================
// const harga = 10000;

// const result = new Intl.NumberFormat("id-ID", {
//   style: "currency",
//   currency: "IDR",
//   maximumFractionDigits: 0,
// });

// console.log(result.format(harga));

// no 5 ================================================================
// const words = "Hello World Hello";
// const search = "ell";

// const result = words.replace(search, "");
// console.log(result);

// no 6 ================================================================
// const inputString = "hello world";
// const words = inputString.split(" ");

// console.log(words);

// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i][0].toUpperCase() + words[i].slice(1);
// }
// console.log(words[0][0]);
// console.log(words[0].slice(1));
// console.log(words.join(" "));

// no 7 ================================================================
// cara 1 build in method
// const kata = "hello";
// const reverseString = kata.split("").reverse().join("");
// console.log(reverseString);

// cara 2 tanpa build in method
// const str = "hello";
// let temp = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   temp += str[i];
// }

// console.log(temp);

// no 8 ================================================================
// const inputString = "tHe";
// let swappedString = "";

// for (let i = 0; i < inputString.length; i++) {
//   const char = inputString[i];

//   if (char === char.toUpperCase()) {
//     swappedString += char.toLowerCase();
//   } else {
//     swappedString += char.toUpperCase();
//   }
// }

// console.log(swappedString);

// no 9 ================================================================
// const num1 = 10;
// const num2 = 27;
// let largest;

// if (num1 > num2) {
//   largest = num1;
// } else {
//   largest = num2;
// }

// console.log(largest);

// no 10 ================================================================

// const num1 = 42;
// const num2 = 27;
// const num3 = 18;

// const smallest = Math.min(num1, num2, num3);
// const largest = Math.max(num1, num2, num3);
// const middle = num1 + num2 + num3 - smallest - largest;

// console.log(`${smallest}, ${middle}, ${largest}`);

// no 11 ================================================================
// const input = "hello";
// let type;

// if (typeof input === "string") {
//   type = 1;
// } else if (typeof input === "number") {
//   type = 2;
// } else {
//   type = 3;
// }

// console.log(type);

// no 12 ================================================================

const inputString = "An apple a day keeps the doctor away".toLowerCase();
const replaceWord = "a";
let modifiedString = "";

for (let i = 0; i < inputString.length; i++) {
  if (inputString[i] === replaceWord) {
    modifiedString += "*";
  } else {
    modifiedString += inputString[i];
  }
}

console.log(modifiedString);
