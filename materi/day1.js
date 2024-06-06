console.log("Hello World");

// ini adalah comment 1
// ini adalah comment 2
// FIXME: message
// TODO: message
// NOTE: message

/*
 ini 
 juga 
 adalah 
 comment
*/

// VARIABLE -> storage / penampungan data

// VARIABLE DECLARATION -> var, let, const

var person = "Budi";

console.log(person);

let person1 = "budi1";

person1 = "budi2";

let person2;

console.log(person1);

const person3 = "Joko";

// person3 = "Siti" -> nggak bisa

// VARIABLE NAMING
// must contain only letters, digits, or symbol "$" and "_"
// the first character must not digit
// Case sensitive

// DATA TYPES
// primitive data types: string, number, boolean, null, undefined
// non primitive data types: object dan array

// string -> "", ''
// number -> 1 2 3 4 1000
// boolean -> true dan false
// null -> menandakan sebuah value itu masih kosong dan belum di isi
// undefined -> variable tidak ada isinya / kosong

// immmutable

let count1 = 4;
let count2 = count1;

count2 = 10;

console.log(count1);
console.log(count2);

// mutable
let person7 = {
  name: "Budi",
};

let person8 = person7;
person8.hobby = "Nonton";

console.log(person7);
console.log(person8);

// String build in method

const nama = "SiTi";
const nama2 = "metal";

console.log(nama.toLowerCase());
console.log(nama.toUpperCase());
console.log(nama.replace("s", "O"));
console.log(nama.replaceAll("i", "O"));
console.log(nama.split(""));
console.log(nama.split(" "));
console.log(nama.concat(nama2));
console.log(nama.slice(0, 3));

// TEMPLATE LITERALS -> template string

const nama3 = "jack";
const message = "Welcome";

console.log(message + " " + nama3);
console.log(`${message} ${nama3}`);
console.log(`Welcome ${nama3}`);

// Number build in method
const angka = 10000;
const angka2 = "2000";

console.log(angka.toString());
console.log(Number(angka2));
console.log(parseInt(angka2));

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

// TYPE CONVERSION
// string conversion

console.log(String(123));

// numeric conversion

const num = "3" * 1;

const num2 = 1 + 1 + "1";

// console.log(num2);
console.log(num);

// Boolean conversion
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("0"));
console.log(Boolean("false"));

// DATE
const now = new Date();

console.log(now);

// get method
console.log(now.getFullYear());
console.log(now.getMonth() + 1);
console.log(now.getDate());

// set method
now.setDate(34);
// now.setFullYear(2027);
console.log(now);

// BASIC OPERATOR -> + , - , * , / , % , **

console.log(1 + 1);
console.log(2 - 1);
console.log(2 * 4);
console.log(4 / 2);
console.log(3 % 2);
console.log(3 ** 2);

// MODIFY IN PLACE
// n = n + 2

let n = 4;
// n = n + 2 -> cara panjang
// n += 2 -> cara pendek
console.log(n);

// INCREMENT & DECREMENT
// let counter = 2;

// counter++; // increment
// counter--; // decrement

// console.log(counter);

// POSTFIX & PREFIX

let counter = 2;

console.log(++counter); // prefix
// console.log(counter++); // postfix

console.log(counter);

console.log(5 === 5);
console.log(5 == 5);
console.log(5 !== "5");
console.log(5 < 5);
console.log(5 > 5);
console.log(6 >= 5);
console.log(5 <= 5);
