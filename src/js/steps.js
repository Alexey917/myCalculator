export function steps(calculator, array, index) {
  calculator.lOperand = array[index - 1]; // задаем левый операнд
  calculator.rOperand = array[index + 1]; // задаем правый операнд

  const keyboardEquals = document.querySelector(".keyboard_equals");

  if (calculator.rOperand !== "") keyboardEquals.removeAttribute("disabled"); // если правый операнд отсутствует блочим кнопку =

  let result;
  /* вычисляем значение */
  if (calculator.rOperand === "0" && array[index] === "/") {
    result = "На ноль делить нельзя";
    keyboardEquals.setAttribute("disabled", "disabled");
  } else if (calculator.rOperand === "" && array[index] === "/") {
    result = "";
  } else {
    result = calculator[array[index]](calculator.lOperand, calculator.rOperand);
  }

  array.splice(index - 1, 3, result); // вставляем результат на место оператора и его операндов
  return array;
}
