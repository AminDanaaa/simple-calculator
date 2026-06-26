// get the references from DOM
const container = document.querySelector(".container");

// create new elements and store references
const display = document.createElement("div");
const inputs = document.createElement("div");
const displayEquation = document.createElement("div");
const displayResult = document.createElement("div");
const numbersDiv = document.createElement("div");
const operatorsDiv = document.createElement("div");
const textEquation = document.createElement("p");
const textResult = document.createElement("p");

// assign css classes to elements
display.classList.add("display");
inputs.classList.add("inputs");
displayEquation.classList.add("equation");
displayResult.classList.add("result");
textEquation.classList.add("textEquation");
textResult.classList.add("textResult");
numbersDiv.classList.add("numbersDiv");
operatorsDiv.classList.add("operatorsDiv");

// assign children to parents and struct the page
container.appendChild(display);
container.appendChild(inputs);
display.appendChild(displayEquation);
display.appendChild(displayResult);
displayEquation.appendChild(textEquation);
displayResult.appendChild(textResult);
inputs.appendChild(numbersDiv);
inputs.appendChild(operatorsDiv);

// Main.js:
const operatorSymbols = ["+", "-", "x", "÷"];
const numberSymbols = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "C", "="];
let textEquationVariable = "Enter an Equation";
let textResultVariable = "Waiting..."
let firstClick = true;
let haveNumber = false;
let haveOperator = false;

for (symbol in numberSymbols) {
    thisButton = document.createElement("button");
    thisButton.classList.add("number");
    if (numberSymbols[symbol] === "C" || numberSymbols[symbol] === "=") {
        thisButton.classList.add("resultingButtons");
    }
    thisButton.textContent = numberSymbols[symbol];
    numbersDiv.appendChild(thisButton);

    thisButton.addEventListener("click", e => {
        if (firstClick) {
            clearEquation();
            firstClick = false;
        }
        if (e.target.textContent === "C") {
            textEquationVariable = "Enter an Equation";
            textResultVariable = "Waiting..."
            updateDisplay();
            firstClick = true;
        } else if (e.target.textContent === "=") {
            operate();
            console.log("operate");
        } else {
            textEquationVariable += e.target.textContent;
            haveNumber = true;
            updateDisplay();
        }
    });
}

for (symbol in operatorSymbols) {
    thisButton = document.createElement("button");
    thisButton.classList.add("operator");
    thisButton.textContent = operatorSymbols[symbol];
    operatorsDiv.appendChild(thisButton);

    thisButton.addEventListener("click", e => {
        if (haveNumber && !haveOperator) {
            textEquationVariable += e.target.textContent;
            haveOperator = true;
            updateDisplay();
        }
    });
}

function operate() {
}

function updateDisplay() {
    textEquation.textContent = textEquationVariable;
    textResult.textContent = textResultVariable;
}

function clearEquation() {
    textEquationVariable = "";
    haveOperator = false;
    updateDisplay();
}

function clearResult() {
    textResultVariable = "";
    updateDisplay();
}

updateDisplay();