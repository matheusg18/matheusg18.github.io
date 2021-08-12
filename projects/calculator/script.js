let CALCULATOR_SCREEN;

function instanciateElements() {
  CALCULATOR_SCREEN = document.getElementById("calculator-screen");
}

function clearScreenText() {
  CALCULATOR_SCREEN.innerText = "";
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

function handleAc() {
  clearScreenText();
}

function addEventListeners() {
  addEventListenersToNumbers();
  document.getElementById("ac").addEventListener("click", handleAc);
}

window.onload = function () {
  instanciateElements();
  addEventListeners();
};
