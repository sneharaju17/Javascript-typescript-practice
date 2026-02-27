// callback
function displayMessage(name, callback) {
    console.log("Hi " + name);
    callback();
}
function sayBye() {
    console.log("Goodbye!");
}
displayMessage("Sneha", sayBye);