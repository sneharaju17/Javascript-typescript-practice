// return function
function outerFunction(message) {
    return function innerFunction(name) {
        return message + " " + name;
    };
}
const greetUser = outerFunction("Welcome");
console.log(greetUser("Sneha"));