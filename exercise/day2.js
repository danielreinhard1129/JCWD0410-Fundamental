// // no 1
// const c = 60;
// const cToF = (c * 9) / 5 + 32;
// console.log(cToF);

// const f = 140;
// const fToC = ((f - 32) * 5) / 9;
// console.log(fToC);

// // no 2
// const angka = 23;
// if (angka % 2 === 0) {
//   console.log("genap");
// } else {
//   console.log("ganjil");
// }

// console.log(angka % 2 === 0 ? "genap" : "ganjil");

// // no 3
// const num = 14;
// let isPrime = true;

// for (let i = 2; i < num; i++) {
//   if (num % i === 0) {
//     isPrime = false;
//     break;
//   }
// }

// console.log(isPrime);

// // no 4
// CARA 1
// const number = 5;
// const result = (number * (number + 1)) / 2;
// console.log(result);

// CARA 2
// const angka = 5;
// let sum = 0;
// let message = "";

// for (let i = 1; i <= angka; i++) {
//   sum += i;

//   //   if (i === angka) {
//   //     message += i + "";
//   //   } else {
//   //     message += i + " + ";
//   //   }

//   message += i + (i === angka ? "" : "+");
// }

// console.log(message + "=" + sum);

// no 5
// const num = 6;
// let result = 1;
// let message = "";

// for (let i = num; i >= 1; i--) {
//   result *= i;
//   message += i + (i === 1 ? "" : " x ");
// }

// console.log(message + " = " + result);

// no 6
const n = 15;

let a = 0;
let b = 1;
for (let i = 0; i < n; i++) {
  let next = a + b;
  a = b;
  b = next;
}

console.log(a);
