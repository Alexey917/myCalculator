const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
const displayResult = document.querySelector(".display__result");

const calculator = {
  lOperand: "",
  rOperand: "",

  "+": (lOperand, rOperand) => +lOperand + +rOperand,
  "-": (lOperand, rOperand) => +lOperand - +rOperand,
  "*": (lOperand, rOperand) => +lOperand * +rOperand,
  "/": (lOperand, rOperand) => +lOperand / +rOperand,
  "%": (lOperand, rOperand) => +lOperand % +rOperand,
};

function countingTheResult(str) {
  str = str.slice(0, str.length - 1);
  console.log(str);
  mas = str.split(/[+-/*%]/g);
  console.log(mas);
  calculator.lOperand = mas[0];
  calculator.rOperand = mas[1];
  input.value = str;
}

function getResultBySteps(str) {
  str = str.slice(0, str.length - 1);
  for (let i = 0; i < str.length; i++) {
    if (str[i] === ) 
  }
}

keyboard.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.focus();

    input.value == 0 && btn.classList.contains("keyboard_number")
      ? (input.value = btn.textContent)
      : (input.value += btn.textContent);

    if (btn.textContent === "C") input.value = 0;

    if (btn.classList.contains("keyboard_erase")) {
      input.value = "";
      input.value = strTemp.slice(0, strTemp.length - 1);
    }

    strTemp = input.value;
    mainOperation = /[+-/*%]{2,}/g;
    operations = strTemp.match(/[+-/*%]/g);

    if (strTemp.match(mainOperation)) {
      strTemp = strTemp.replace(mainOperation, btn.textContent);
      input.value = strTemp;
    }

    if (btn.textContent === "=") {
      getResultBySteps(strTemp);

      let result;

      for (let ch of strTemp) {
        console.log(strTemp);
        if (Object.keys(calculator).includes(ch))
          result = calculator[ch](calculator.lOperand, calculator.rOperand);
      }
      displayResult.textContent = "= " + result;
      console.log(result);
    }

    // if (operations.length > 1) {
    // }

    // console.log(input.value);
  });
});

input.addEventListener("input", () => console.log(input.value));
