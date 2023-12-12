/* 
Filename: complexCodeExample.js
Content: Complex JavaScript Code Example 
*/

// Define a class for a Person
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hello, my name is ${this.name}`);
  }

  getBirthYear() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.age;
  }
}

// Define a class for a Car
class Car {
  constructor(brand, year, color) {
    this.brand = brand;
    this.year = year;
    this.color = color;
  }

  startEngine() {
    console.log(`${this.brand} engine started!`);
  }

  drive() {
    console.log(`Driving the ${this.color} ${this.brand}`);
  }

  stopEngine() {
    console.log(`${this.brand} engine stopped!`);
  }
}

// Create objects from the defined classes
const john = new Person("John Doe", 25);
const sarah = new Person("Sarah Smith", 31);

const toyota = new Car("Toyota", 2020, "Red");
const ford = new Car("Ford", 2018, "Blue");

// Call methods on the objects
john.sayHello();
console.log(`John's birth year: ${john.getBirthYear()}`);

sarah.sayHello();
console.log(`Sarah's birth year: ${sarah.getBirthYear()}`);

toyota.startEngine();
toyota.drive();
toyota.stopEngine();

ford.startEngine();
ford.drive();
ford.stopEngine();

// Simulate a complex operation
const fibonacciSequence = [0, 1];
const numberOfElements = 20;

for (let i = 2; i < numberOfElements; i++) {
  const fibNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
  fibonacciSequence.push(fibNumber);
}

console.log(`Fibonacci Sequence: ${fibonacciSequence}`);

// Perform a complex calculation
function calculateComplexFormula(a, b, c, d, e) {
  const result = ((a * b) + (c / d) - (e ** 2)) / Math.sqrt(a + b + c + d + e);
  return result;
}

const formulaResult = calculateComplexFormula(5, 10, 15, 20, 25);
console.log(`Complex Formula Result: ${formulaResult}`);

// Generate random numbers and sort them
const randomNumberArray = [];
const numberOfRandomNumbers = 10;

for (let i = 0; i < numberOfRandomNumbers; i++) {
  randomNumberArray.push(Math.floor(Math.random() * 100));
}

console.log(`Random Numbers (Unsorted): ${randomNumberArray}`);
randomNumberArray.sort((a, b) => a - b);
console.log(`Random Numbers (Sorted): ${randomNumberArray}`);

// Perform deep object manipulation
const complexObject = {
  name: "Complex Object",
  properties: {
    color: "Red",
    size: "Large",
    subObject: {
      type: "Nested Object",
      value: "Nested Value"
    }
  },
  arrayProperty: [
    { id: 1, name: "Item 1" },
    { id: 2, name: "Item 2" }
  ]
};

complexObject.properties.subObject.value = "Updated Nested Value";
complexObject.arrayProperty.push({ id: 3, name: "Item 3" });

console.log("Complex Object:", complexObject);

// Implement a recursive function
function recursiveFactorial(n) {
  if (n === 0) return 1;
  
  return n * recursiveFactorial(n - 1);
}

const factorialOfTen = recursiveFactorial(10);
console.log(`Factorial of 10: ${factorialOfTen}`);

// Perform complex data filtering and aggregation
const users = [
  { name: "John", age: 30 },
  { name: "Sarah", age: 25 },
  { name: "Michael", age: 40 },
  { name: "Jessica", age: 35 },
  { name: "David", age: 45 }
];

const filteredUsers = users.filter(user => user.age < 40);
const totalAgeOfFilteredUsers = filteredUsers.reduce((sum, user) => sum + user.age, 0);

console.log("Filtered Users:", filteredUsers);
console.log("Total Age of Filtered Users:", totalAgeOfFilteredUsers);

// Implement a Promises chain
function asyncOperation1() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Async Operation 1 Complete");
      resolve();
    }, 1000);
  });
}

function asyncOperation2() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Async Operation 2 Complete");
      resolve();
    }, 2000);
  });
}

function asyncOperation3() {
  return new Promise(resolve => {
    setTimeout(() => {
      console.log("Async Operation 3 Complete");
      resolve();
    }, 1500);
  });
}

asyncOperation1()
  .then(asyncOperation2)
  .then(asyncOperation3)
  .then(() => {
    console.log("All Async Operations Completed");
  })
  .catch(error => {
    console.error("Error occurred:", error);
  });