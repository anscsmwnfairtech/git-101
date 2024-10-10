const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const resultContainer = document.getElementById("result");

function getInputValues() {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);
  return { num1, num2 };
}

function add() {
  const { num1, num2 } = getInputValues();
  const result = "Function not implemented";
  resultContainer.innerText = result;
}

function subtract() {
  const { num1, num2 } = getInputValues();
  const result = num1 - num2;
  resultContainer.innerText = result;
}

function multiply() {
  const { num1, num2 } = getInputValues();
  const result = "Function not implemented";
  resultContainer.innerText = result;
}

function divide() {
  const { num1, num2 } = getInputValues();
  const result = "Function not implemented";
  resultContainer.innerText = result;
}

function modulus() {
  const { num1, num2 } = getInputValues();
  const result = "Function not implemented";
  resultContainer.innerText = result;
}
