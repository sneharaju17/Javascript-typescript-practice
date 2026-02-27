// filter age
const users = [
    { name: "sneha", age: 23 },
    { name: "thaslima", age: 33},
    { name: "anu", age: 32}
]
const adults = users.filter(user => user.age > 18);
console.log("users above 18:", adults);