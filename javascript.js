const operator = {
  add: 1,
  subtract: 2,
  multiply: 3,
  divide: 4,
};

function operate(opid, a, b) {
  if (opid == operator.add) return add(a, b);
  else if (opid == operator.subtract) return subtract(a, b);
  else if (opid == operator.multiply) return multiply(a, b);
  else if (opid == operator.divide) return divide(a, b);
}

function add(...args) {
  return args.reduce((previous, current) => previous + current);
}

function subtract(...args) {
  return args.reduce((previous, current) => previous - current);
}

function multiply(...args) {
  return args.reduce((previous, current) => previous * current);
}

function divide(...args) {
  return args.reduce((previous, current) => previous / current);
}
