import { arrayForCalculations } from "./arrayForCalculations";
import { calculations } from "./calculations";

export function getResultBySteps(strTemp, input, calculator, displayResult) {
  const keyboardErase = document.querySelector(".keyboard_erase");
  let arr = arrayForCalculations(strTemp, input); // берем подготовленный в arrayForCalculations массив
  // console.log();
  // if (arr.length === 1 && arr[0] === "Ошибка") {
  //   displayResult.textContent = arr[0];
  //   return;
  // }

  console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "Ошибка") {
      displayResult.textContent = arr[i];
      return;
    }
  }

  let result = input.value;

  /* сначало ищем в массиве знаки % и делаем связанные с ними вычисления */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "%") {
      result = calculations(calculator, arr, i);
      i = 0; // идем заново по циклу, пока нужные нам знаки не закончаться
    }
  }

  /* сначало ищем в массиве знаки /,*,% и делаем связанные с ними вычисления */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*" || arr[i] === "/") {
      result = calculations(calculator, arr, i);
      i = 0; // идем заново по циклу, пока нужные нам знаки не закончаться
    }
  }

  /* затем со знаками + и - */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-") {
      result = calculations(calculator, arr, i);
      i = 0;
    }
  }

  /* отображаем результат в поле результата */
  if (result == "") {
    displayResult.textContent = result;
    keyboardErase.setAttribute("disabled", "disabled");
  } else {
    displayResult.textContent = "= " + result;
    keyboardErase.removeAttribute("disabled");
  }
}
