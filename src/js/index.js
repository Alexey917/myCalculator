import { getResultBySteps } from "./getResultBySteps";
import { keyboardSwitching } from "./keyboardSwitching";
import { calcHist, clearHist } from "./calcHist";

const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
const displayResult = document.querySelector(".display__result");
const keyboard_C = document.querySelector(".keyboard_C");
const keyboardEquals = document.querySelector(".keyboard_equals");
const keyboardPoint = document.querySelector(".keyboard_point");
const keyboardE = document.querySelector(".keyboard_e");
// const displayForm = document.querySelector(".display__form");

const calculator = {
  lOperand: "",
  rOperand: "",

  "+": (lOperand, rOperand) => +lOperand + +rOperand,
  "-": (lOperand, rOperand) => +lOperand - +rOperand,
  "*": (lOperand, rOperand) => +lOperand * +rOperand,
  "/": (lOperand, rOperand) => +lOperand / +rOperand,
  "%": (lOperand) => +lOperand / 100,
};

keyboard.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.focus();
    displayResult.classList.remove("display__result_show");
    input.classList.remove("display__input_hidden");
    keyboardEquals.setAttribute("disabled", "disabled");

    input.value === "0" && btn.classList.contains("keyboard_number")
      ? (input.value = btn.textContent)
      : (input.value += btn.textContent);

    if (btn.textContent === "C") {
      input.value = 0;
      displayResult.textContent = "";
    }

    if (btn.textContent === "AC") {
      input.value = 0;
      displayResult.textContent = "";
      clearHist();
    }

    let strTemp = input.value;
    let mainOperation = /[+-/*%]{2,}/g;
    let firstPosition = /[+/*%\.]/g;

    function searchPoint() {
      let searchPoint = strTemp.split(/[-+/*%]/g);
      // console.log(searchPoint);
      for (let i = 0; i < searchPoint.length; i++) {
        keyboardPoint.removeAttribute("disabled");
        if (searchPoint[i].includes(".") || searchPoint[i].length < 1) {
          // console.log(searchPoint[i].length);
          keyboardPoint.setAttribute("disabled", "disabled");
        }
      }
    }

    if (btn.classList.contains("keyboard_erase")) {
      strTemp = strTemp.slice(0, strTemp.indexOf(" ", 0) - 1); // удаляем содержимое btn.textContent, через поиск индекса первого пробела
      input.value = "";
      input.value = strTemp.slice(0, strTemp.length - 1);
    }

    searchPoint();

    if (strTemp.match(mainOperation)) {
      strTemp = strTemp.replace(mainOperation, btn.textContent);
      input.value = strTemp;
    }

    if (strTemp.length === 2 && strTemp[0].match(firstPosition)) {
      strTemp = strTemp.replace(/(.)(.)?/g, "$2$1"); // меняем местами первый и второй символы
    }

    getResultBySteps(strTemp, input, calculator, displayResult);

    if (btn.textContent === "%") {
      input.value = displayResult.textContent.slice(1);
    }

    if (btn.textContent === "=") {
      getResultBySteps(strTemp, input, calculator, displayResult);
      displayResult.classList.add("display__result_show");
      input.classList.add("display__input_hidden");
      calcHist(input, displayResult);
      input.value = "";
      displayResult.textContent = "";
      keyboardPoint.removeAttribute("disabled");
    }

    input.value == "" || input.value == 0
      ? (keyboard_C.textContent = "AC")
      : (keyboard_C.textContent = "C");
  });
});

keyboardSwitching();

input.addEventListener("input", () => {
  // getResultBySteps();
  // console.log(input.value);
});

/* 

     

      
*/
