// !  LEARN CLASSES AND CREATE CALCULATOR CLASS?

const op = {
  add: 1,
  subtract: 2,
  multiply: 3,
  divide: 4,
  null: undefined,
};

const calcScreen = document.querySelector("#calcScreen");
const numberButtons = document.querySelectorAll("[data-number]");
const sumButton = document.querySelector("#sum");
const resultButton = document.querySelector("#result");
const subtractButton = document.querySelector("#minus");
const divideButton = document.querySelector("#divide");
const multiplyButton = document.querySelector("#multiply");

let lastOperationContent = [];
let currentOperationContent = [];
let opid = undefined;

function operate(operation, a, b) {
  if (operation == op.add) {
    add();
    updateScreen();
  } else if (operation == op.subtract) {
    subtract();
    updateScreen();
  } else if (operation == op.multiply) {
    multiply();
    updateScreen();
  } else if (operation == op.divide) {
    divide();
    updateScreen();
  }
  opid = undefined;
  return;
}

divideButton.addEventListener("click", function (e) {
  if (opid != undefined) {
    operate(opid, 0, 0);
  }
  opid = op.divide;

  lastOperationContent = [];
  currentOperationContent = currentOperationContent + " / ";
  updateScreen();
});
multiplyButton.addEventListener("click", function (e) {
  if (opid != undefined) {
    operate(opid, 0, 0);
  }
  opid = op.multiply;

  lastOperationContent = [];
  currentOperationContent = currentOperationContent + " x ";
  updateScreen();
});
subtractButton.addEventListener("click", function (e) {
  if (opid != undefined) {
    operate(opid, 0, 0);
  }
  opid = op.subtract;

  lastOperationContent = [];
  currentOperationContent = currentOperationContent + " - ";
  updateScreen();
});
sumButton.addEventListener("click", () => {
  if (opid != undefined) {
    operate(opid, 0, 0);
  }
  opid = op.add;

  lastOperationContent = [];
  currentOperationContent = currentOperationContent + " + ";
  updateScreen();
});

resultButton.addEventListener("click", function (e) {
  operate(opid);
});

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    lastOperationContent = currentOperationContent;
    currentOperationContent += button.innerText;
    updateScreen();
  });
});

// ? CALCULATOR CODE

function updateScreen() {
  calcScreen.textContent = currentOperationContent;
}
// ? ARITHMETIC OPERATIONS FROM NOW ON
function add() {
  let splitSum;
  let result;
  splitSum = currentOperationContent.split(" + ");
  result = parseInt(splitSum[0]) + parseInt(splitSum[1]);
  currentOperationContent = result + "";
  console.log("Add: " + splitSum[0] + " + " + splitSum[1]);
  return result;
}

function subtract() {
  let splitSum;
  let result;
  splitSum = currentOperationContent.split(" - ");
  result = parseInt(splitSum[0]) - parseInt(splitSum[1]);
  currentOperationContent = result + "";
  console.log("Subtraction: " + splitSum[0] + " - " + splitSum[1]);
  return result;
}

function multiply() {
  let splitSum;
  let result;
  splitSum = currentOperationContent.split(" x ");
  result = parseInt(splitSum[0]) * parseInt(splitSum[1]);
  currentOperationContent = result + "";
  console.log("Subtraction: " + splitSum[0] + " x " + splitSum[1]);
  return result;
}

function divide(a, b) {
  splitSum = currentOperationContent.split(" / ");
  result = parseInt(splitSum[0]) / parseInt(splitSum[1]);
  currentOperationContent = result;
  console.log("Subtraction: " + splitSum[0] + " / " + splitSum[1]);
  return result;
}
