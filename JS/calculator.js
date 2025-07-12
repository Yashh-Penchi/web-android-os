document.addEventListener("DOMContentLoaded", () => {
  let currentDisplay = "";
  let currentResult = "";

  function updateDisplay() {
    document.getElementById("displayCalculatorInputs").textContent = currentDisplay || "0";
    const resultElement = document.getElementById("displayCalculatorResult");

    if (currentResult) {
      resultElement.textContent = ": " + currentResult;
    } else {
      resultElement.textContent = ": 0";
    }
  }

  function calculateResult() {
    try {
      currentResult = eval(currentDisplay).toString();
    } catch {
      currentResult = "Error";
    }
    updateDisplay();
  }

  function appendToDisplay(val) {
    currentDisplay += val;
    updateDisplay();
  }

  function clearDisplay() {
    currentDisplay = "";
    currentResult = "";
    updateDisplay();
  }

  function deleteLast() {
    currentDisplay = currentDisplay.slice(0, -1);
    updateDisplay();
  }

  function specialKeySquare() {
    let num = parseFloat(currentDisplay);
    currentResult = !isNaN(num) ? (num * num).toString() : "Error";
    updateDisplay();
  }

  function specialKeyCube() {
    let num = parseFloat(currentDisplay);
    currentResult = !isNaN(num) ? (num * num * num).toString() : "Error";
    updateDisplay();
  }

  function specialKeyHalf() {
    let num = parseFloat(currentDisplay);
    currentResult = !isNaN(num) ? (num / 2).toString() : "Error";
    updateDisplay();
  }

  function specialKeyPercent() {
    let num = parseFloat(currentDisplay);
    currentResult = !isNaN(num) ? (num / 100).toString() : "Error";
    updateDisplay();
  }

  function specialKeyOE() {
    let num = parseInt(currentDisplay);
    if (isNaN(num)) {
      currentResult = "Error";
    } else if (num % 2 === 0) {
      currentResult = "Even Number";
    } else {
      currentResult = "Odd Number";
    }
    updateDisplay();
  }

  // Keyboard input
  document.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
      calculateResult();
    } else if (event.key === "Backspace") {
      deleteLast();
    } else if (event.key === "Escape") {
      clearDisplay();
    } else if (/[0-9+\-*/.%()]/.test(event.key)) {
      appendToDisplay(event.key);
    }
  });

  // Attach functions to global window object for button clicks -----------------------

  window.appendToDisplay = appendToDisplay;
  window.calculateResult = calculateResult;
  window.clearDisplay = clearDisplay;
  window.deleteLast = deleteLast;
  window.specialKeySquare = specialKeySquare;
  window.specialKeyCube = specialKeyCube;
  window.specialKeyHalf = specialKeyHalf;
  window.specialKeyPercent = specialKeyPercent;
  window.specialKeyOE = specialKeyOE;

  updateDisplay(); // initial
});
