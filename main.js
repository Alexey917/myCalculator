const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
const sectionKeyboard = document.querySelector(".keyboard");
const displayResult = document.querySelector(".display__result");
const displayForm = document.querySelector(".display__form");
const displayHistory = document.querySelector(".display__hist")
const keyboardToggle = document.querySelector(".keyboard_toggle")
const display = document.querySelector(".display")

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

function arrayForCalculations(str) {
  if (str.includes("=")) {
    str = str.slice(0, str.length - 1); // удаляем знак равно из строки
  }

  input.value = str;
  operands = str.split(/[+-/*%]/g); // выделяем только операнды
  let operations = []; // массив для операций
  let calc = []; // массив для вычисления итогового результата

  /* вытаскиваем операторы из строки */
  [...str].filter((item) => {
    if (
      item === "+" ||
      item === "-" ||
      item === "*" ||
      item === "/" ||
      item === "%"
    ) {
      operations.push(item);
    }
  });

  /* заполняем итоговый массив */
  for (let i = 0; i < operands.length; i++) {
    calc.push(operands[i]);
    if (operations[i]) {
      calc.push(operations[i]);
    }
  }

  return calc;
}

function steps(array, index) {
  calculator.lOperand = array[index - 1]; // задаем левый операнд
  calculator.rOperand = array[index + 1]; // задаем правый операнд

  let result;
  /* вычисляем значение */
  result = calculator[array[index]](calculator.lOperand, calculator.rOperand);

  array.splice(index - 1, 3, result); // вставляем результат на место оператора и его операндов
  return array;
}

function getResultBySteps() {
  let arr = arrayForCalculations(strTemp); // берем подготовленный в arrayForCalculations массив
  let result = input.value;

  /* сначало ищем в массиве знаки /,*,% и делаем связанные с ними вычисления */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*" || arr[i] === "/" || arr[i] === "%") {
      result = steps(arr, i);
      i = 0; // идем заново по циклу, пока нужные нам знаки не закончаться
    }
  }

  /* затем со знаками + и - */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-") {
      result = steps(arr, i);
      i = 0;
    }
  }

  /* отображаем результат в поле резултата */
  displayResult.textContent = "= " + result;
}


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
      getResultBySteps();
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

keyboardToggle.addEventListener("click", () => {
  sectionKeyboard.style.visibility = "hidden";
  // display.style.
})

input.addEventListener("input", () => {
  // getResultBySteps();
  console.log(input.value);
});


/* 

     

      
*/

