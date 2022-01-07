const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const multiply = (a, b) => a * b;

const divide = (a, b) => a / b;

const operate = (operator, a, b) => operator(a, b);

const createCalculatorElements = () => {
  const calculatorContainer = document.createElement("div");
  calculatorContainer.id = "calculator";
  calculatorContainer.classList.add("grid", "calculator");

  const digits = createDigitContainer();
  const operators = createOperatorContainer();
  const equal = createEqualContainer();
  const clear = createClearContainer();
  const display = createDisplayContainer();

  calculatorContainer.appendChild(display);
  calculatorContainer.appendChild(clear);
  calculatorContainer.appendChild(operators);
  calculatorContainer.appendChild(digits);
  calculatorContainer.appendChild(equal);

  return calculatorContainer;
};

const createDigitContainer = () => {
  const digitContainer = document.createElement("div");
  digitContainer.classList.add("grid-digits");
  const arrDigits = createArrayOfDigitElements();

  return appendContainer(digitContainer, arrDigits);
};

const createArrayOfDigitElements = () => {
  const DIGITS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];  
  let arrayOfDigitElements = [];

  DIGITS.forEach((digit) => {
    const digitElement = document.createElement("button");

    digitElement.id = `btn${digit}`;
    digitElement.innerText = digit;
    digitElement.classList.add("digit");

    arrayOfDigitElements.push(digitElement);
  });

  return arrayOfDigitElements; 
};

const createOperatorContainer = () => {
  const operatorContainer = document.createElement("div");
  operatorContainer.classList.add("grid-operators");
  const arrOperators = createArrayOfOperatorElements();

  return appendContainer(operatorContainer, arrOperators);
};

const createArrayOfOperatorElements = () => {
  const OPERATORS = ["add", "subtract", "multiply", "divide"];
  let arrayOfOperatorElements = [];

  OPERATORS.forEach((operator) => {
    const operatorElement = document.createElement("button");

    operatorElement.id = operator;
    operatorElement.classList.add("operator");
    operatorElement.setAttribute('data-operator', operator);
    operatorElement.innerText = getOperatorText(operator);

    arrayOfOperatorElements.push(operatorElement);
  });

  return arrayOfOperatorElements;
};

const getOperatorText = (operator) => {
  let textContent = "";

  switch (operator) {
    case "add":
      textContent += "+";
      break;
    case "subtract":
      textContent += "-";
      break;
    case "multiply":
      textContent += "*";
      break;
    case "divide":
      textContent += "/";
      break;
    default:
      textContent += "Error: undefined operator";
  }

  return textContent;
};

const createEqualContainer = () => {
  const equalContainer = document.createElement("div");
  equalContainer.classList.add("grid-equal");
  const equalElement = createEqualElement();

  equalContainer.appendChild(equalElement);

  return equalContainer;
}

const createEqualElement = () => {
  const equalElement = document.createElement("button");

  equalElement.id = "equal";
  equalElement.classList.add("equal");
  equalElement.innerText = "=";

  return equalElement;
}

const createClearContainer = () => {
  const clearContainer = document.createElement("div");
  clearContainer.classList.add("grid-clear");
  const clearElement = createClearElement();

  clearContainer.appendChild(clearElement);

  return clearContainer;
}

const createClearElement = () => {
  const clearElement = document.createElement("button");

  clearElement.id = "clear";
  clearElement.classList.add("clear");
  clearElement.innerText = "c";

  return clearElement;
};

const createDisplayContainer = () => {
  const displayContainer = document.createElement("div");
  displayContainer.classList.add("grid-display");
  const displayElement = createDisplayElement();

  displayContainer.appendChild(displayElement);

  return displayContainer;
}

const createDisplayElement = () => {
  const displayElement = document.createElement("div");

  displayElement.id = "display";
  displayElement.classList.add("display");
  displayElement.textContent = "1234";

  return displayElement;
}

const appendContainer = (containerElement, arrElements) => {
  arrElements.forEach((element) => {
    containerElement.appendChild(element);
  });

  return containerElement;
};

const main = () => {
  const app = document.getElementById("app");
  const calculatorContainer = createCalculatorElements();

  app.appendChild(calculatorContainer);
};

main();
