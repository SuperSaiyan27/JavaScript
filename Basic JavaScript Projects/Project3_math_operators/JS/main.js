// Initialize a variable to store the current count for increment/decrement operations
let currentNumber = 0;

// Function to perform addition
function addNumbers() {
    currentNumber += 5; // Adds 5 to the current number
    displayResult(`Addition Result: ${currentNumber}`);
}

// Function to perform subtraction
function subtractNumbers() {
    currentNumber -= 3; // Subtracts 3 from the current number
    displayResult(`Subtraction Result: ${currentNumber}`);
}

// Function to perform multiplication
function multiplyNumbers() {
    currentNumber *= 2; // Multiplies the current number by 2
    displayResult(`Multiplication Result: ${currentNumber}`);
}

// Function to perform modulus
function modulusNumbers() {
    currentNumber %= 4; // Performs modulus operation with 4
    displayResult(`Modulus Result: ${currentNumber}`);
}

// Function to increment the number
function incrementNumber() {
    currentNumber++; // Increments the current number by 1
    displayResult(`Incremented Number: ${currentNumber}`);
}

// Function to decrement the number
function decrementNumber() {
    currentNumber--; // Decrements the current number by 1
    displayResult(`Decremented Number: ${currentNumber}`);
}

// Function to generate a random number between 0 and 100
function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
    displayResult(`Random Number: ${randomNum}`);
}

// Helper function to display results
function displayResult(message) {
    const resultElement = document.getElementById('result'); // Get the result paragraph
    resultElement.textContent = message; // Set the message as the text content
}

// Adding event listeners to the buttons
document.getElementById('addButton').addEventListener('click', addNumbers);
document.getElementById('subtractButton').addEventListener('click', subtractNumbers);
document.getElementById('multiplyButton').addEventListener('click', multiplyNumbers);
document.getElementById('modulusButton').addEventListener('click', modulusNumbers);
document.getElementById('incrementButton').addEventListener('click', incrementNumber);
document.getElementById('decrementButton').addEventListener('click', decrementNumber);
document.getElementById('randomButton').addEventListener('click', generateRandomNumber);