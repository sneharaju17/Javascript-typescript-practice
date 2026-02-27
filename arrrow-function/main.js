// main
// Normal Function vs Arrow Function
function greet(name) {
    return "Hi " + name;
}
console.log("Normal Function:", greet("Sneha"));
const greetArrow = (name) => "hi " + name;
console.log("Arrow Function:", greetArrow("Sneha"));

// Arrow Function to Add Two Number
const add = (a, b) => a + b;
console.log("Addition Result:", add(10, 20));

// Callback Function Example
function displayMessage(name, callback) {
    console.log("Hi " + name);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
displayMessage("Sneha", sayBye);

// Function Returning Another Function
function outerFunction(message) {
    return function innerFunction(name) {
        return message + " " + name;
    };
}
const greetUser = outerFunction("Welcome");
console.log(greetUser("Sneha"));