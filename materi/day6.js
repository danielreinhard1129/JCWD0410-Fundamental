// cara membuat object
// cara 1
const user = {};

// cara 2
const user2 = new Object();

// Properties & methods
const user3 = {
  name: "david",
  greet() {
    console.log("Hello");
  },
};

console.log(user3.greet("budi"));

// Add & delete property
const person = {
  name: "joko",
  age: 20,
};
console.log(person);

// Add new property
person.hobby = "coding";
console.log(person);

// Delete property
delete person.age;
console.log(person);

// Accessing Value
console.log(person.name); // using dot
console.log(person["name"]); // using square bracket

// Optional Chaining
const user4 = {};
console.log(user.address);
// console.log(user.address.street); // gak pake optional chaining
console.log(user.address?.street); // pake optional chaining

// Accessing Key
const person2 = {
  name: "aceng",
  age: 90,
};

console.log(Object.keys(person2)); // untuk akses semua key
console.log(Object.values(person2)); // untuk akses semua value

// FOR IN
const person3 = {
  name: "aceng",
  age: 90,
};

for (const key in person3) {
  console.log(key);
  console.log(person3[key]);
}

// DESTRUCTURING ASSIGNMENT -> mengeluarkan property dalam object menjadi sebuah variable
// destruct object
const person4 = {
  name: "aceng",
  age: 90,
};
console.log(person4.name);
console.log(person4.age);

const { age, name } = person4;
console.log(name);
console.log(age);

// destruct array
const array = [10, 20];
console.log(array[0]);
console.log(array[1]);

const [a, b] = [10, 20];
console.log(a);
console.log(b);

// SPREAD OPERATOR -> digunakan untuk copy isi object / menggabungkan object
const objectOne = { name: "jacky", password: "Admin123" };
const objectTwo = { email: "email@mail.com", name: "budi" };
const result = { ...objectOne, ...objectTwo };

const hasil = { ...result, password: "Halo123;" };

console.log(hasil);

// THIS KEYWORD ->  mengakses property lain di dalam sebuah object
const person5 = {
  firstName: "aceng",
  lastName: "racing",
  greet() {
    console.log(`Hello ${this.firstName}`);
  },
};
person5.greet();

// CLASS -> template untuk membuat sebuah object
// class declaration
class User {
  greeting() {
    console.log("hello world");
  }
}

// class expression
const User2 = class {
  greeting() {
    console.log("hello world");
  }
};

// CREATE AN OBJECT FROM CLASS
const orang = new User();
orang.greeting();

const orang2 = new User();
orang2.greeting();

// CONSTRUCTOR ->  menginisialisasi object yang di buat di dalam class
class Person {
  constructor(name) {
    this.name = name;
    this.greeting();
  }

  greeting() {
    console.log(`Hello ${this.name}`);
  }
}

const orang3 = new Person("aceng");
console.log(orang3.name);

// ACCESS MODIFIER -> public dan private
class Person2 {
  #email;

  constructor(name, email) {
    this.name = name; // public
    this.#email = email; // private
  }

  showEmail() {
    // this.#email bisa diakses krn showEmail 1 class dengan #email
    console.log(this.#email);
  }
}

const orang4 = new Person2("budi", "budi@mail.com");
console.log(orang4.name); // public
console.log(orang4.email); // private
orang4.showEmail();

// GETTER AND SETTER
// get -> baca data
// set -> set value di dalam object

const orang5 = {
  firstName: "ujang",
  lastName: "recing",

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },

  set fullName(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
  },

  fullName2(value) {
    const split = value.split(" ");
    this.firstName = split[0];
    this.lastName = split[1];
    return `${this.firstName} ${this.lastName}`;
  },
};

console.log(orang5);

console.log(orang5.fullName); // menggunakan getter

orang5.fullName = "Alice Cooper"; // menggunakan setter

console.log(orang5.fullName2("Aceng Yudi")); // menggunakan function biasa

// ENCAPSULATION
// konsep di OOP untuk ngebundle data dalam 1 unit. Contohnya adalah class dan object

// INHERITANCE -> pewarisan dari parent class ke child class. jadi property dan method
// dari class parent bisa di miliki sama child class

class Product {
  constructor(name, price) {
    this.productName = name;
    this.price = price;
  }

  readprice() {
    console.log(this.price);
  }
}

//// ini kalau tidak menggunakan konsep inheritance
// class Book {
//   constructor(name, price, author) {
//     this.productName = name;
//     this.price = price;
//     this.author = author;
//   }
// }

// menggunakan konsep inheritance
class Book extends Product {
  constructor(name, price, author) {
    super(name, price);
    this.author = author;
  }
}

const barang = new Book("cara menjadi jago coder", 20000, "Aceng");

console.log(barang.price);

// INSTANCE OF -> mengecek apakah sebuah object memiliki hubungan ke class tertentu
class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);
