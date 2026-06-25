// get the references from DOM
const container = document.querySelector(".container");

// create new elements and store references
const display = document.createElement("div");
const inputs = document.createElement("div");

// assign css classes to elements
display.classList.add("display");
inputs.classList.add("inputs");

// assign children to parents and struct the page
container.appendChild(display);
container.appendChild(inputs);