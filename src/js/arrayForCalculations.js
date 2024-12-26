export function arrayForCalculations(str, input) {
  if (str.includes("=")) {
    str = str.slice(0, str.length - 1); // удаляем знак равно из строки
  }

  input.value = str;
  let operands = str.split(/[+-/*%]/g); // выделяем только операнды
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
