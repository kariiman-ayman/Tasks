let first = "";
let second = "";
let operator = "";
let isSecond = false;
let display = document.getElementById("display");

function EnterNumber(num) {
  if (!isSecond) first += num;
  else second += num;
  displayFullOperation();
}

function EnterOperator(op) {
  if (!first || operator) return;
  operator = op;
  isSecond = true;
  displayFullOperation();
}

function displayFullOperation() {
  display.value = first + operator + second;
}

function EnterEqual() {
  if (!first || !second || !operator) return;
  const a = parseFloat(first);
  const b = parseFloat(second);
  let result;
  if (operator === "+") result = a + b;
  else if (operator === "-") result = a - b;
  else if (operator === "*") result = a * b;
  else if (operator === "/") result = b !== 0 ? a / b : "Error";
  else if (operator === "%") result = a % b;

  display.value = result;

  first = result.toString();
  second = "";
  operator = "";
  isSecond = false;
}

function EnterClear() {
  first = "";
  second = "";
  operator = "";
  isSecond = false;
  display.value = "";
}
