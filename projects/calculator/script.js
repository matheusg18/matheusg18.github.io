let CALCULATOR_SCREEN;

function instanciateElements() {
  CALCULATOR_SCREEN = document.getElementById("calculator-screen");
}

function updateScreenText(content) {
  CALCULATOR_SCREEN.innerText += content;
}

function handleNumbers(event) {
  const number = event.target.innerText;
  updateScreenText(number);
}

function addEventListenersToNumbers() {
  const numbers = document.getElementsByClassName("numbers");
  for (const num of numbers) {
    num.addEventListener("click", handleNumbers);
  }
}

function addEventListeners() {
  addEventListenersToNumbers();
}

window.onload = function () {
  instanciateElements();
  addEventListeners();
};
