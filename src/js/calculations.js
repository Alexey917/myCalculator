export function calculations(calculator, array, index) {
  calculator.lOperand = array[index - 1]; // задаем левый операнд
  calculator.rOperand = array[index + 1]; // задаем правый операнд

  const keyboardEquals = document.querySelector(".keyboard_equals");

  if (calculator.rOperand !== "") keyboardEquals.removeAttribute("disabled"); // если правый операнд отсутствует блочим кнопку =

  let result;

  if (calculator.lOperand === "e") calculator.lOperand = "2.71828183";

  if (calculator.rOperand === "e") calculator.rOperand = "2.71828183";

  // let e = /\d+e\d+/g;

  // if (!calculator.lOperand.match(e)) {
  //   result = "Ошибка";
  //   return array;
  // }

  if (calculator.rOperand === "0" && array[index] === "/") {
    /* вычисляем значение */
    result = "На ноль делить нельзя";
    keyboardEquals.setAttribute("disabled", "disabled");
  } else if (calculator.rOperand === "" && array[index] === "/") {
    result = "";
  } else if (
    typeof calculator.rOperand === "number" &&
    (array[index] === "+" || array[index] === "-")
  ) {
    result = calculator[array[index]](
      calculator.lOperand,
      calculator.lOperand * calculator.rOperand
    );
  } else {
    result = calculator[array[index]](calculator.lOperand, calculator.rOperand);
    result = String(Math.round(result * 1e9) / 1e9); //округление
  }

  if (array[index] === "%") {
    result = +result;
    
  }

  array.splice(index - 1, 3, result); // вставляем результат на место оператора и его операндов
  console.log(array);
  return array;
}
