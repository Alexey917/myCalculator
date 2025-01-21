const displayHistory = document.querySelector(".display__hist");

let history = {};

export function calcHist(input, displayResult) {
  if (input.value == "" || input.value == 0) return;
  history[input.value] = displayResult.textContent; // создаем ключ из input'a и записываем в него значение из displayResult

  let displayCalcAndRes = Object.keys(history).reverse(); // создаем массив ключей в обратном порядке

  let displayHistCalc = document.createElement("p");
  displayHistCalc.classList.add("display__hist-calc");
  displayHistory.append(displayHistCalc);

  displayHistCalc.textContent = displayCalcAndRes[0];

  let displayHistRes = document.createElement("p");
  displayHistRes.classList.add("display__hist-res");
  displayHistory.append(displayHistRes);

  displayHistRes.textContent = history[displayCalcAndRes[0]];

  if (displayCalcAndRes.length > 20) {
    let lastElem = displayCalcAndRes.pop();
    delete history[lastElem];
    displayHistory.removeChild(displayHistory.firstElementChild);
    displayHistory.removeChild(displayHistory.firstElementChild);
  }
}

export function clearHist() {
  history = {};
  displayHistory.innerHTML = "";
}