var counterVal = 0;

function plusClick() {
  updateDisplay(++counterVal);
}

function moinsClick() {
    if (counterVal > 0)  {
            updateDisplay(--counterVal);
    };
}

function resetCounter() {
  counterVal = 0;
  updateDisplay(counterVal);
}

function updateDisplay(val) {
  document.getElementById('counter-label').innerHTML = val;
}