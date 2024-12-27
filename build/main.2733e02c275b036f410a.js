/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/arrayForCalculations.js":
/*!****************************************!*\
  !*** ./src/js/arrayForCalculations.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   arrayForCalculations: () => (/* binding */ arrayForCalculations)\n/* harmony export */ });\nfunction arrayForCalculations(str, input) {\r\n  if (str.includes(\"=\")) {\r\n    str = str.slice(0, str.length - 1); // удаляем знак равно из строки\r\n  }\r\n\r\n  input.value = str;\r\n  let operands = str.split(/[+-/*%]/g); // выделяем только операнды\r\n  let operations = []; // массив для операций\r\n  let calc = []; // массив для вычисления итогового результата\r\n\r\n  /* вытаскиваем операторы из строки */\r\n  [...str].filter((item) => {\r\n    if (\r\n      item === \"+\" ||\r\n      item === \"-\" ||\r\n      item === \"*\" ||\r\n      item === \"/\" ||\r\n      item === \"%\"\r\n    ) {\r\n      operations.push(item);\r\n    }\r\n  });\r\n\r\n  /* заполняем итоговый массив */\r\n  for (let i = 0; i < operands.length; i++) {\r\n    calc.push(operands[i]);\r\n    if (operations[i]) {\r\n      calc.push(operations[i]);\r\n    }\r\n  }\r\n\r\n  return calc;\r\n}\r\n\n\n//# sourceURL=webpack://mycalculator/./src/js/arrayForCalculations.js?");

/***/ }),

/***/ "./src/js/calcHist.js":
/*!****************************!*\
  !*** ./src/js/calcHist.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   calcHist: () => (/* binding */ calcHist)\n/* harmony export */ });\nconst displayHistory = document.querySelector(\".display__hist\");\r\n\r\nconst history = {};\r\n\r\nfunction calcHist(input, displayResult) {\r\n  history[input.value] = displayResult.textContent; // создаем ключ из input'a и записываем в него значение из displayResult\r\n\r\n  let displayCalcAndRes = Object.keys(history).reverse(); // создаем массив ключей в обратном порядке\r\n\r\n  let displayHistCalc = document.createElement(\"p\");\r\n  displayHistCalc.classList.add(\"display__hist-calc\");\r\n  displayHistory.append(displayHistCalc);\r\n\r\n  displayHistCalc.textContent = displayCalcAndRes[0];\r\n\r\n  let displayHistRes = document.createElement(\"p\");\r\n  displayHistRes.classList.add(\"display__hist-res\");\r\n  displayHistory.append(displayHistRes);\r\n\r\n  displayHistRes.textContent = history[displayCalcAndRes[0]];\r\n\r\n  if (displayCalcAndRes.length > 20) {\r\n    let lastElem = displayCalcAndRes.pop();\r\n    delete history[lastElem];\r\n    displayHistory.removeChild(displayHistory.firstElementChild);\r\n    displayHistory.removeChild(displayHistory.firstElementChild);\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://mycalculator/./src/js/calcHist.js?");

/***/ }),

/***/ "./src/js/getResultBySteps.js":
/*!************************************!*\
  !*** ./src/js/getResultBySteps.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getResultBySteps: () => (/* binding */ getResultBySteps)\n/* harmony export */ });\n/* harmony import */ var _arrayForCalculations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayForCalculations */ \"./src/js/arrayForCalculations.js\");\n/* harmony import */ var _steps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./steps */ \"./src/js/steps.js\");\n\r\n\r\n\r\nfunction getResultBySteps(strTemp, input, calculator, displayResult) {\r\n  let arr = (0,_arrayForCalculations__WEBPACK_IMPORTED_MODULE_0__.arrayForCalculations)(strTemp, input); // берем подготовленный в arrayForCalculations массив\r\n  let result = input.value;\r\n\r\n  /* сначало ищем в массиве знаки /,*,% и делаем связанные с ними вычисления */\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (arr[i] === \"*\" || arr[i] === \"/\" || arr[i] === \"%\") {\r\n      result = (0,_steps__WEBPACK_IMPORTED_MODULE_1__.steps)(calculator, arr, i);\r\n      i = 0; // идем заново по циклу, пока нужные нам знаки не закончаться\r\n    }\r\n  }\r\n\r\n  /* затем со знаками + и - */\r\n  for (let i = 0; i < arr.length; i++) {\r\n    if (arr[i] === \"+\" || arr[i] === \"-\") {\r\n      result = (0,_steps__WEBPACK_IMPORTED_MODULE_1__.steps)(calculator, arr, i);\r\n      i = 0;\r\n    }\r\n  }\r\n\r\n  /* отображаем результат в поле резултата */\r\n  displayResult.textContent = \"= \" + result;\r\n}\r\n\n\n//# sourceURL=webpack://mycalculator/./src/js/getResultBySteps.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _getResultBySteps__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getResultBySteps */ \"./src/js/getResultBySteps.js\");\n/* harmony import */ var _keyboardSwitching__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardSwitching */ \"./src/js/keyboardSwitching.js\");\n/* harmony import */ var _calcHist__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./calcHist */ \"./src/js/calcHist.js\");\n\r\n\r\n\r\n\r\nconst input = document.querySelector(\".display__input\");\r\nconst keyboard = document.querySelectorAll(\".keyboard__btn\");\r\nconst displayResult = document.querySelector(\".display__result\");\r\n// const displayForm = document.querySelector(\".display__form\");\r\n\r\nconst calculator = {\r\n  lOperand: \"\",\r\n  rOperand: \"\",\r\n\r\n  \"+\": (lOperand, rOperand) => +lOperand + +rOperand,\r\n  \"-\": (lOperand, rOperand) => +lOperand - +rOperand,\r\n  \"*\": (lOperand, rOperand) => +lOperand * +rOperand,\r\n  \"/\": (lOperand, rOperand) => +lOperand / +rOperand,\r\n  \"%\": (lOperand, rOperand) => +lOperand % +rOperand,\r\n};\r\n\r\nkeyboard.forEach((btn) => {\r\n  btn.addEventListener(\"click\", () => {\r\n    input.focus();\r\n    displayResult.classList.remove(\"display__result_show\");\r\n    input.classList.remove(\"display__input_hidden\");\r\n\r\n    input.value == 0 && btn.classList.contains(\"keyboard_number\")\r\n      ? (input.value = btn.textContent)\r\n      : (input.value += btn.textContent);\r\n\r\n    if (btn.textContent === \"C\") {\r\n      input.value = 0;\r\n      displayResult.textContent = \"\";\r\n    }\r\n\r\n    let strTemp = input.value;\r\n    let mainOperation = /[+-/*%]{2,}/g;\r\n    // operations = strTemp.match(/[+-/*%]/g);\r\n\r\n    if (btn.classList.contains(\"keyboard_erase\")) {\r\n      strTemp = strTemp.slice(0, strTemp.indexOf(\" \", 0) - 1); // удаляем содержимое btn.textContent, через поиск индекса первого пробела\r\n      input.value = \"\";\r\n      input.value = strTemp.slice(0, strTemp.length - 1);\r\n    }\r\n\r\n    if (strTemp.match(mainOperation)) {\r\n      strTemp = strTemp.replace(mainOperation, btn.textContent);\r\n      input.value = strTemp;\r\n    }\r\n\r\n    (0,_getResultBySteps__WEBPACK_IMPORTED_MODULE_0__.getResultBySteps)(strTemp, input, calculator, displayResult);\r\n\r\n    if (btn.textContent === \"=\") {\r\n      (0,_getResultBySteps__WEBPACK_IMPORTED_MODULE_0__.getResultBySteps)(strTemp, input, calculator, displayResult);\r\n      displayResult.classList.add(\"display__result_show\");\r\n      input.classList.add(\"display__input_hidden\");\r\n      (0,_calcHist__WEBPACK_IMPORTED_MODULE_2__.calcHist)(input, displayResult);\r\n      input.value = \"\";\r\n      displayResult.textContent = \"\";\r\n    }\r\n  });\r\n});\r\n\r\n(0,_keyboardSwitching__WEBPACK_IMPORTED_MODULE_1__.keyboardSwitching)();\r\n\r\ninput.addEventListener(\"input\", () => {\r\n  // getResultBySteps();\r\n  console.log(input.value);\r\n});\r\n\r\n/* \r\n\r\n     \r\n\r\n      \r\n*/\r\n\n\n//# sourceURL=webpack://mycalculator/./src/js/index.js?");

/***/ }),

/***/ "./src/js/keyboardSwitching.js":
/*!*************************************!*\
  !*** ./src/js/keyboardSwitching.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   keyboardSwitching: () => (/* binding */ keyboardSwitching)\n/* harmony export */ });\nconst sectionKeyboard = document.querySelector(\".keyboard\");\r\nconst keyboardToggle = document.querySelector(\".keyboard_toggle\");\r\nconst displayToggle = document.querySelector(\".display_toggle\");\r\nconst display = document.querySelector(\".display\");\r\nconst displayHistory = document.querySelector(\".display__hist\");\r\n\r\nfunction keyboardSwitching() {\r\n  keyboardToggle.addEventListener(\"click\", () => {\r\n    sectionKeyboard.style.display = \"none\";\r\n    display.style.height = \"95%\";\r\n    displayToggle.style.display = \"block\";\r\n    // displayHistory.style.overflowY = \"scroll\";\r\n  });\r\n\r\n  displayToggle.addEventListener(\"click\", () => {\r\n    sectionKeyboard.style.display = \"flex\";\r\n    display.style.height = \"50%\";\r\n    displayToggle.style.display = \"none\";\r\n    // displayHistory.style.overflow = \"hidden\";\r\n  });\r\n}\r\n\n\n//# sourceURL=webpack://mycalculator/./src/js/keyboardSwitching.js?");

/***/ }),

/***/ "./src/js/steps.js":
/*!*************************!*\
  !*** ./src/js/steps.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   steps: () => (/* binding */ steps)\n/* harmony export */ });\nfunction steps(calculator, array, index) {\r\n  calculator.lOperand = array[index - 1]; // задаем левый операнд\r\n  calculator.rOperand = array[index + 1]; // задаем правый операнд\r\n\r\n  let result;\r\n  /* вычисляем значение */\r\n  result = calculator[array[index]](calculator.lOperand, calculator.rOperand);\r\n\r\n  array.splice(index - 1, 3, result); // вставляем результат на место оператора и его операндов\r\n  return array;\r\n}\r\n\n\n//# sourceURL=webpack://mycalculator/./src/js/steps.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;