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

function arrayForCalculations(str) {
  str = str.slice(0, str.length - 1); // удаляем знак равно из строки
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

  index = 0; // идем заново по циклу, пока нужные нам знаки не закончаться
  return array;
}

function getResultBySteps() {
  let arr = arrayForCalculations(strTemp); // берем подготовленный в arrayForCalculations массив
  let result;

  /* сначало ищем в массиве знаки /,*,% и делаем связанные с ними вычисления */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*" || arr[i] === "/" || arr[i] === "%") {
      result = steps(arr, i);
    }
  }

  /* затем со знаками + и - */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-") {
      result = steps(arr, i);
    }
  }

  /* отображаем результат в поле резултата */
  displayResult.textContent = "= " + result;
}

keyboard.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.focus();

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
    }

    // console.log(input.value);
  });
});

input.addEventListener("input", () => console.log(input.value));
