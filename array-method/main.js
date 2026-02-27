// main
// map double
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log("Original:", numbers);
console.log("Doubled:", doubled);

// filter even
const number = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even Numbers:", evenNumbers);

// filter age
const users = [
    { name: "sneha", age: 23 },
    { name: "thaslima", age: 33},
    { name: "anu", age: 32}
]
const adults = users.filter(user => user.age > 18);
console.log("users above 18:", adults);

// reduce sum
const num = [10, 20, 30];
const total = numbers.reduce((sum, current) => sum + current, 0);
console.log("Total Sum:", total);

// uppercase
const names = ["sneha", "thaslima", "anu"];
const upperCaseNames = names.map(name => name.toUpperCase());
console.log("Uppercase Names:", upperCaseNames);