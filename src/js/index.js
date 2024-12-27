import { getResultBySteps } from "./getResultBySteps";
import { keyboardSwitching } from "./keyboardSwitching";
import { calcHist } from "./calcHist";

const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
const displayResult = document.querySelector(".display__result");
// const displayForm = document.querySelector(".display__form");

const calculator = {
  lOperand: "",
  rOperand: "",

  "+": (lOperand, rOperand) => +lOperand + +rOperand,
  "-": (lOperand, rOperand) => +lOperand - +rOperand,
  "*": (lOperand, rOperand) => +lOperand * +rOperand,
  "/": (lOperand, rOperand) => +lOperand / +rOperand,
  "%": (lOperand, rOperand) => +lOperand % +rOperand,
};

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
      calcHist(input, displayResult);
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
