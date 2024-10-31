const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
console.log(input.value);

keyboard.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.focus();
    
    input.value == 0 && btn.classList.contains("keyboard_number")
      ? (input.value = btn.textContent)
      : (input.value += btn.textContent);

    if (btn.textContent === "C") input.value = 0;

    strTemp = input.value;
    mainOperation = /[+-/*%]{2,}/g;

    if (strTemp.match(mainOperation)) {
      strTemp = strTemp.replace(mainOperation, btn.textContent);
      input.value = strTemp;
    }

    if (btn.classList.contains("keyboard_erase")) {
      console.log(strTemp.length);
      // strTemp.slice(0, strTemp.length - 1);
    }

    console.log(input.value);

  });
});

input.addEventListener("input", () => console.log(input.value));
