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



// math functions
function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function sub(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function division(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}



// Main.js:
const operatorSymbols = ["+", "-", "x", "÷"];
const numberSymbols = ["9", "8", "7", "6", "5", "4", "3", "2", "1", "0", "C", "="];
let textEquationVariable = "Enter an Equation";
let textResultVariable = "Waiting..."
let firstClick = true;
let haveNumber = false;
let haveOperator = false;
let haveNumberAfterOperator = false;
let operator = "";

for (symbol in numberSymbols) {
    thisButton = document.createElement("button");
    thisButton.classList.add("number");
    if (numberSymbols[symbol] === "C" || numberSymbols[symbol] === "=") {
        thisButton.classList.add("resultingButtons");
    }
    thisButton.textContent = numberSymbols[symbol];
    numbersDiv.appendChild(thisButton);

    thisButton.addEventListener("click", e => {
        if (e.target.textContent === "C") {
            resetDisplay();
            updateDisplay();
        } else if (e.target.textContent === "=") {
            if (operateReady()) {
                operate();
            }
        } else {
            if (firstClick) {
                clearEquation();
                firstClick = false;
            }
            if (haveOperator) {
                haveNumberAfterOperator = true;
            }
            textEquationVariable += e.target.textContent;
            haveNumber = true;
            if (Number(textEquationVariable) <= 0) {
                resetDisplay();
            }
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
            operator = e.target.textContent;
            haveOperator = true;
            updateDisplay();
        }
    });
}

function operate() {
    let numbers = textEquationVariable.split(operator);
    for (number in numbers) {
        numbers[number] = Number(numbers[number]);
    }
    const [firstNumber, secondNumber] = numbers;
    let result;
    switch(operator) {
        case "+":
            result = add(firstNumber, secondNumber);
            break;
        case "-":
            result = sub(firstNumber, secondNumber);
            break;
        case "x":
            result = multiply(firstNumber, secondNumber);
            break;
        case "÷":
            if (secondNumber === 0) {
                console.log("Can't divide numbers by zero!");
                result = "Check Console."
            } else {
                result = division(firstNumber, secondNumber);
            }
            break;
        default:
            console.log("Something went wrong!");
            break;
    }
    textResultVariable = String(result);
    updateDisplay();
    resetDisplay();
}

function operateReady() {
    if (haveNumber && haveNumberAfterOperator && haveOperator) {
        return true;
    } else {
        return false;
    }
}

function operateReadyReset() {
    haveOperator = false;
    haveNumber = false;
    haveNumberAfterOperator = false;
    operator = "";
}

function updateDisplay() {
    textEquation.textContent = textEquationVariable;
    textResult.textContent = textResultVariable;
}

function clearEquation() {
    textEquationVariable = "";
    operateReadyReset();
    updateDisplay();
}

function resetDisplay() {
    textEquationVariable = "Enter an Equation";
    textResultVariable = "Waiting..."
    firstClick = true;
    operateReadyReset();
}



// initialize
updateDisplay();