// get the references from DOM
const container = document.querySelector(".container");

// create new elements and store references
const display = document.createElement("div");
const inputs = document.createElement("div");
const displayEquation = document.createElement("div");
const displayResult = document.createElement("div");
const textEquation = document.createElement("p");
const textResult = document.createElement("p");

// assign css classes to elements
display.classList.add("display");
inputs.classList.add("inputs");
displayEquation.classList.add("equation");
displayResult.classList.add("result");
textEquation.classList.add("textEquation");
textResult.classList.add("textResult");

// assign children to parents and struct the page
container.appendChild(display);
container.appendChild(inputs);
display.appendChild(displayEquation);
display.appendChild(displayResult);
displayEquation.appendChild(textEquation);
displayResult.appendChild(textResult);

// Main.js:
