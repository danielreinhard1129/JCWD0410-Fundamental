// ARRAY

// let arr = []; // cara 1
// let arr2 = new Array(); // cara 2

// let arr = ["A", "B", "C", "D"];
// let arr2 = new Array("A", "B", "C", "D");

// console.log(arr);
// console.log(arr2);

// let arr = [1, 2, 3, 4];
// let arr2 = new Array(1, 2, 3, 4);

// console.log(arr);
// console.log(arr2);

// array of object
const students = [
  { name: "budi", email: "budi@mail.com" },
  { name: "siti", email: "siti@mail.com" },
  { name: "joko", email: "joko@mail.com" },
];

// FOR OF LOOP ================================================================
// const fruits = ["apel", "pisang", "ceri"];
// for (const fruit of fruits) {
//   console.log(fruit);
// }

// const text = "Hello world";
// for (const char of text) {
//   console.log(char);
// }

// Execise for of
// hitung jumlah semua bilangan dalam array menggunakan for of
// ex input = [1,2,3,4,5,6] -> 21

// const numbers = [1, 2, 3, 4, 5, 6];
// let sum = 0;

// for (const number of numbers) {
//   sum += number;
// }

// console.log(sum);

// FUNCTION =====================================================================
// ada 2 cara untuk mendefine sebuah function : func declaration & func expression

// FUNCTION DECLARATION
// parameter
// function square(number) {
//   return number * number;
// }

// const result = square(2); // argument
// const result2 = square(5);
// const result3 = square(10);

// console.log(result);
// console.log(result2);
// console.log(result3);
// console.log(square(20));

// // FUNCTION EXPRESSION
// const square1 = function (number) {
//   return number * number;
// };

// console.log(square1(10));
// console.log(square1(20));
// console.log(square1(30));

// FUNCTION SCOPE
// variable yg di define di dalam function hanya bisa di akses di function tsb

// variable hello tidak bisa di akses di dalam sini
// function greeting() {
//   const hello = "hello";
//   // variable hello bisa di akses di dalam sini
//   return hello;
// }
// variable hello tidak bisa di akses di dalam sini

// PARAMETER & ARGUMENT
// argument -> value yg dimasukan saat pemanggilan function
// parameter -> variable yang mewakili value dari argument di parantheses function

// function greeting(name) { // parameter
//   const hello = "hello";
//   return hello + " " + name;
// }

// const result4 = greeting("budi"); // argument
// console.log(result4);

// DEFAULT PARAMETER =======================================================

// function multiply(a, b = 1) {
//   console.log(a);
//   console.log(b);
//   return a * b;
// }

// // console.log(multiply(5, 2));
// console.log(multiply(5));

// REST PARAMETER ============================================================
// mewakili sisa argument ke dalam 1 variable parameter

// function myFunc(a, b, ...manyMoreArgs) {
//   console.log(a);
//   console.log(b);
//   console.log(manyMoreArgs);
// }

// myFunc(1, 2, 3, 4, 5, 6, 7, 8, 9);

// NESTED FUNCTION ============================================================
// fungsi yang berada di dalam fungsi (inner function)
// inner function bisa akses parameter outer function
// outer function tidak bisa akses parameter dari inner function

// function getMessage(firstName) {
//   function sayHello() {
//     return "hello " + firstName + ",";
//   }

//   function welcomeMessage() {
//     return "welcome to purwadhika!";
//   }

//   return sayHello() + " " + welcomeMessage();
// }

// const result6 = getMessage("budi");

// console.log(result6);

// CLOSURE ====================================================================
// inner function selalu mempunyai akses ke variable dan parameter dari outer function.
// bahkan setelah function tsb di return

// function greeting(name) {
//   const defaultMessage = "hello";

//   return function () {
//     return defaultMessage + " " + name;
//   };
// }

// const result7 = greeting("budi");

// console.log(result7());

// CURRYING ====================================================================
// mentransformasikan function yang memiliki banyak parameter f(a,b,c) menjadi
// function yang memiliki beberapa parentheses sebanyak jumlah parameternya f(a)(b)(c)

// // contoh non currying f(a,b,c)
// function tambah(a, b, c) {
//   return a + b + c;
// }

// // contoh currying f(a)(b)(c)
// function tembahCurrying(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// RECURSIVE ====================================================================
// fungsi yang memanggil dirinya sendiri

// function countDown(number) {
//   console.log(number);
//   let nextNumber = number - 1;

//   if (nextNumber > 0) {
//     countDown(nextNumber);
//   }
// }

// countDown(10);

// ARROW FUNCTION ===============================================================
// shortcut untuk menuliskan function expression

// // contoh function expression
// const square = function (number) {
//   return number * number;
// };

// // contoh jika diubah ke arrow function
// const square1 = (number) => {
//   return number * number;
// };

// // kalo misalnya cuman 1 line bisa di bikin kaya gini
// const square2 = (number) => number * number;

// ARRAY BUILD IN METHOD ========================================================
// JOIN -> menggabungkan value yang ada dalam array ke dalam bentuk string
let words = ["hello", "world"];
console.log(words.join(" "));

// POP -> menghilangkan isi value paling akhir dalam array
const words2 = ["hello", "world", "hello"];
words2.pop();
console.log(words2);

// PUSH -> menambahkan value ke dalam array di paling akhir
const words3 = ["hello", "world"];
words3.push("purwadhika");
console.log(words3);

// SHIFT -> menghilangkan value paling depan di dalam array
const words4 = ["test", "hello", "world"];
words4.shift();
console.log(words4);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const words5 = ["test", "hello", "world"];
words5.unshift("jogja");
console.log(words5);

// CONCAT -> menggabungkan 2 array menjadi 1 array
const arr1 = ["hello"];
const arr2 = ["world"];
console.log(arr1.concat(arr2));
console.log(arr2.concat(arr1));

// SPLICE -> untuk menghapus, mengganti, atau menambahkan value pada sebuah array
// rumusnya -> splice(startIndex, brpYgMauDiDelete, item, item, .....)

const months = ["jan", "march", "april", "june"];

months.splice(1, 0, "feb"); // menambahkan pada index 1
console.log(months);

months.splice(4, 1); // menghapus pada index ke 4
console.log(months);

months.splice(3, 1, "may");
console.log(months);

// SLICE -> me return new array dengan value yang sudah kita tentukan
// index start dan index end nya dari sebuah array tsb
// rumus: slice(startIndex, endIndex)

const fruits = ["banana", "orange", "lemon", "apple", "mango"];
console.log(fruits.slice(1, 4)); // hitung dari awal
console.log(fruits.slice(-4, -1)); // hitung dari belak

// INDEXOF -> mencari index dari velue yang kita cari
// kalo misalnya nggak ditemukan bakalan mereturn -1

const fruits2 = ["banana", "orange", "lemon", "apple", "mango"];
console.log(fruits2.indexOf("lemon"));

// SORT -> mengurutkan isi array berupa string atau number
// versi string
const fruits3 = ["banana", "orange", "lemon", "apple", "mango"];
fruits3.sort();
console.log(fruits3);

// versi number tanpa compare function
const points = [3, 5, 2, 6, 8, 10];
points.sort();
console.log(points);

// versi number menggunakan compare function
const point2 = [34, 5, 200, 16, 8, 10];
point2.sort((a, b) => a - b); // asc
// point2.sort((a, b) => b - a); // desc
console.log(point2);

// REVERSE -> membalikkan urutan element dalam array
const fruits4 = ["banana", "orange", "lemon", "apple", "mango"];
fruits4.reverse();
console.log(fruits4);

// FOREACH -> melakukan looping pada array tapi tidak mereturn apapun
const fruits5 = ["banana", "orange", "lemon", "apple", "mango"];

fruits5.forEach((value, index) => {
  console.log(value);
});

// MAP => melakukan looping sama kaya forEach tapi mereturn array baru
const fruits6 = ["banana", "orange", "lemon", "apple", "mango"];

const result = fruits6.map((fruit, idx) => {
  return fruit;
});

console.log(result);

// FILTER -> melakukan looping juga sama kaya map dan menghasilkan array baru
// berdasarkan kondisi pada return function yang dimasukkan ke filter parantheses

const ages = [32, 30, 21, 12, 40];
const result2 = ages.filter((age, index) => {
  return age > 20;
});

console.log(result2);

// FIND -> mencari value yang ditemukan pertama kali di dalam array
const ages2 = [3, 10, 20, 19];

const result3 = ages2.find((age) => age > 18);

console.log(result3);

// FINDINDEX -> mirip kaya find tapi yang dihasilkan adalah indexnya
const ages3 = [3, 10, 20, 19];

const result4 = ages3.findIndex((age) => age > 18);

console.log(result4);

// REDUCE -> biasa digunakan untuk melakukan operasi aritmatika pada tiap isi array
const numbers = [175, 50, 25];

const result5 = numbers.reduce((a, b) => a + b);

console.log(result5);

// INCLUDES -> mengecek value pada array ada apa tidak, hasil return nya adalah boolean

const fruits7 = ["banana", "orange", "apple"];

console.log(fruits7.includes("apple"));
