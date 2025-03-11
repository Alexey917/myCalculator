import { arrayForCalculations } from "./arrayForCalculations";
import { calculations } from "./calculations";

export function getResultBySteps(strTemp, input, calculator, displayResult) {
  const keyboardErase = document.querySelector(".keyboard_erase");
  let arr = arrayForCalculations(strTemp, input); // берем подготовленный в arrayForCalculations массив
  console.log(arr);
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

  console.log(typeof result);

  let eError = result.match(/^\d+e\d+$/g);
  let e = result.match(/e/g);

  /* отображаем результат в поле результата */
  if (result == "") {
    displayResult.textContent = result;
    keyboardErase.setAttribute("disabled", "disabled");
  } else if (result == "e") {
    displayResult.textContent = 2.71828183;
  } else if (typeof result !== "object" && !eError && e) {
    displayResult.textContent = "Ошибка";
  } else {
    displayResult.textContent = "= " + result;
    keyboardErase.removeAttribute("disabled");
  }
}
