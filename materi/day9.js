// DATA STRUCTURE

// STACK ========================================================
// LIFO -> Last in First Out

class Stack {
  #container;
  #maxSize;

  constructor() {
    this.#container = [];
    this.#maxSize = 10;
  }

  isFull() {
    return this.#container.length >= this.#maxSize;
  }

  isEmpty() {
    return this.#container.length === 0;
  }

  push(element) {
    if (this.isFull()) {
      return "container penuh";
    }

    this.#container.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "container kosong";
    }

    return this.#container.pop();
  }

  showContainer() {
    return this.#container;
  }
}

const stack = new Stack();

stack.push(1);
stack.push(1);
stack.push(1);

console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());

console.log(stack.showContainer());

// QUEUE
class Queue {
  #container;

  constructor() {
    this.#container = [];
  }

  enqueue(element) {
    return this.#container.push(element);
  }

  dequeue() {
    return this.#container.shift();
  }

  showContainer() {
    return this.#container;
  }
}

const queue = new Queue();

console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.enqueue(4));
console.log(queue.enqueue(5));

console.log(queue.dequeue());
// console.log(queue.dequeue());
// console.log(queue.dequeue());

console.log(queue.showContainer());

// SET -> only unique value
const fruits = ["banana", "apple", "mango", "apple"];

const result = new Set(fruits);

// Membuat Set
const mySet = new Set();

// Menambahkan nilai ke set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // nilai ini tidak akan ditambhakan karena udah ada

// Mengecek apakah value yg dimasukkan ada apa tidak di dalam set
console.log(mySet.has(1));

// Menghapus nilai dari set
mySet.delete(2);

// Looping isi Set
for (const value of mySet) {
  console.log(value);
}

// Menghitung ukuran Set
console.log(mySet.size);

// EXERCISE TAMBAHAN ==========================================================================
/* 
    Write a JavaScript function called phoneNumber that takes a single argument input. 
    The function is intended to format a phone number. It checks the input to ensure 
    it meets certain criteria and then proceeds with formatting. The formatting 
    includes replacing the leading "0" with "62" and creating a template in the 
    format "(xxxx)-xxxx-xxxxx" where each "x" represents a digit from the input. The 
    function returns the formatted phone number.

    - Check if the input is of type "string." If it's not, return "Invalid phone number."
    - Check if the length of the input is exactly 12 characters. If it's not, return "Invalid phone number."
    - Make sure the input all are numeric 0-9
    ex : 
    input = "085244455555"
    output = "(6285)-2444-55555"
*/
/* 
    You have implemented the BankQueue class to manage customer queues in a bank. In this scenario, 
    you can perform operations such as adding customers to the queue, calling the next customer, and 
    counting the number of customers in the queue.

   constructor:
   - this.queue

   method : 
   - enqueue : menambahkan value baru dalam antrian
   - dequeue : menghilangkan value paling depan dalam antrian
   - size : melihat jumlah antrian saat ini
*/
/* 
    You are given a JavaScript class called Train that simulates a train's passenger management system. 
    The Train class has the following methods and properties:

    - constructor(): Initializes the Train with an initial passenger, "masinis," and a maximum 
    capacity of 10 passengers.
    - isFull(): Checks if the train is at full capacity. It returns true if the train is full 
    and false otherwise.
    - isEmpty(): Checks if the train has no passengers except "masinis." It returns true if the 
    train is empty and false otherwise.
    - showPassenger(): Returns an object that contains the list of passengers on the train and 
    the remaining available seats.
    - passengerIn(name): Adds a passenger with the given name to the train. It returns "add passenger 
    success" if the passenger is successfully added, "train full" if the train is at full capacity, 
    and "passenger already exists" if the passenger is already on the train.
    - passengerOut(name): Removes a passenger with the given name from the train. It returns 
    "remove passenger success" if the passenger is successfully removed, "cannot remove masinis" 
    if an attempt is made to remove the "masinis," "train empty" if the train is already empty, and 
    "passenger not found" if the passenger with the given name is not found on the train.
*/
