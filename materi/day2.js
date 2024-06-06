// IF STATEMENT
// syntax
// if (condition) {
//   code block
// }

// const age = 10;
// if (age >= 17) {
//   // code block
//   console.log("anda bisa buat ktp");
// }

// ELSE STATEMENT ==================================================
// backup plan dari if statement

// const age = 14;
// if (age >= 17) {
//   console.log("anda bisa buat ktp");
// } else {
//   console.log("anda tidak bisa buat ktp");
// }

// ELSE IF STATEMENT ==============================================
// memberikan kondisi lain pada if statement

// const input = "a";
// const grade = input.toLowerCase();

// if (grade === "a") {
//   console.log("nilai bagus");
// } else if (grade === "b") {
//   console.log("nilai lumayan");
// } else if (grade === "c") {
//   console.log("nilai buruk");
// } else {
//   console.log("nilai tidak diketahui");
// }

// SWITCH CASE =================================================================

const day = "senin";

switch (day) {
  case "senin":
    console.log("hari senin");
    break;
  case "selasa":
    console.log("hari selasa");
    break;
  case "rabu":
    console.log("hari rabu");
    break;
  default:
    console.log("hari tidak ditemukan");
    break;
}

// LOGICAL OPERATOR ===========================================================
// && -> and
// || -> or
// ! -> not

// // OR
// const car = "mercy";
// if (car === "bmw" || car === "mercy") {
//   console.log("mobil jerman");
// } else {
//   console.log("mobil jepang");
// }

// // AND
// const umur = 18;
// const punyaSIM = true;
// //    true          true
// if (umur >= 18 && punyaSIM) {
//   console.log("boleh bawa kendaraan");
// } else {
//   console.log("belum boleh bawa kendaraan");
// }

// // NOT -> membalikkan nilai boolean

// const isSunny = true;
// const isRaining = !isSunny;

// console.log(isSunny);
// console.log(isRaining);

// TERNARY OPERATOR ============================================================
// shortcut untuk if else condition
// condition ? true : false

// const str = "javascript";

// if (str === "javascript") {
//   console.log("javascript");
// } else {
//   console.log("not javascript");
// }
// //               condition             true             false
// console.log(str === "javascript" ? "javascript" : "not javascript");

// console.log(
//   str === "javascript"
//     ? "javascript"
//     : str === "typescript"
//     ? "typescript"
//     : "not found"
// );

// LOOP STATEMENT -> perulangan ================================================
// rangkaian instruksi yang dilakukan berulangkali hingga kondisinya tidak terpenuhi
// type loop : for loop, while loop, do while loop

// FOR LOOP -> mempunyai 3 statement
// statement 1 : menginisialisasi variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi di akhir setiap iterasi

// syntax : for(statement1;statement2;statemen3){}

// for (let i = 0; i < 3; i++) {
//   console.log("hello world!");
// }

// // WHILE LOOP ================================================================
// let i = 8;

// while (i < 10) {
//   console.log("hello world");
//   i++;
// }

// // DO WHILE LOOP

// let count = 1;

// do {
//   console.log("ini iterasi ke : " + count);
//   count++;
// } while (count <= 5);

// BREAK  ========================================================
// untuk menghentikan loop.

// let sum = 0;
// while (true) {
//   console.log("sum : " + sum);

//   if (sum >= 5) break;

//   sum += 1;
// }

// CONTINUE ======================================================
// melakukan skip pada looping

for (let i = 0; i < 5; i++) {
  if (i === 3) continue;

  console.log("i = " + i);
}
 