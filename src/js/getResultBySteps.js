import { arrayForCalculations } from "./arrayForCalculations";
import { steps } from "./steps";

export function getResultBySteps(strTemp, input, calculator, displayResult) {
  let arr = arrayForCalculations(strTemp, input); // берем подготовленный в arrayForCalculations массив
  let result = input.value;

  /* сначало ищем в массиве знаки /,*,% и делаем связанные с ними вычисления */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "*" || arr[i] === "/" || arr[i] === "%") {
      result = steps(calculator, arr, i);
      i = 0; // идем заново по циклу, пока нужные нам знаки не закончаться
    }
  }

  /* затем со знаками + и - */
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "+" || arr[i] === "-") {
      result = steps(calculator, arr, i);
      i = 0;
    }
  }

  /* отображаем результат в поле резултата */
  displayResult.textContent = "= " + result;
}