import { getResultBySteps } from "./getResultBySteps";
import { keyboardSwitching } from "./keyboardSwitching";

const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
const displayResult = document.querySelector(".display__result");
// const displayForm = document.querySelector(".display__form");
const displayHistory = document.querySelector(".display__hist");

const calculator = {
  lOperand: "",
  rOperand: "",

  "+": (lOperand, rOperand) => +lOperand + +rOperand,
  "-": (lOperand, rOperand) => +lOperand - +rOperand,
  "*": (lOperand, rOperand) => +lOperand * +rOperand,
  "/": (lOperand, rOperand) => +lOperand / +rOperand,
  "%": (lOperand, rOperand) => +lOperand % +rOperand,
};

const history = {};

keyboard.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.focus();
    displayResult.classList.remove("display__result_show");
    input.classList.remove("display__input_hidden");

    input.value == 0 && btn.classList.contains("keyboard_number")
      ? (input.value = btn.textContent)
      : (input.value += btn.textContent);

    if (btn.textContent === "C") {
      input.value = 0;
      displayResult.textContent = "";
    }

    let strTemp = input.value;
    let mainOperation = /[+-/*%]{2,}/g;
    // operations = strTemp.match(/[+-/*%]/g);

    if (btn.classList.contains("keyboard_erase")) {
      strTemp = strTemp.slice(0, strTemp.indexOf(" ", 0) - 1); // удаляем содержимое btn.textContent, через поиск индекса первого пробела
      input.value = "";
      input.value = strTemp.slice(0, strTemp.length - 1);
    }

    if (strTemp.match(mainOperation)) {
      strTemp = strTemp.replace(mainOperation, btn.textContent);
      input.value = strTemp;
    }

    getResultBySteps(strTemp, input, calculator, displayResult);

    if (btn.textContent === "=") {
      getResultBySteps(strTemp, input, calculator, displayResult);
      displayResult.classList.add("display__result_show");
      input.classList.add("display__input_hidden");

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

      input.value = "";
      displayResult.textContent = "";
    }
  });
});

keyboardSwitching();

input.addEventListener("input", () => {
  // getResultBySteps();
  console.log(input.value);
});

/* 

     

      
*/
