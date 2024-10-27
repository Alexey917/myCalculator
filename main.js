const input = document.querySelector(".display__input");
const keyboard = document.querySelectorAll(".keyboard__btn");
console.log(input.value);

keyboard.forEach((btn) => {
  btn.addEventListener("click", () => {
    input.focus();
    input.value == 0
      ? (input.value = btn.textContent)
      : (input.value += btn.textContent);

    // if (btn.classList.contains("keyboard_main-operation")) {
    //   input.value = btn.textContent;
    // }
    if (btn.textContent === "C") input.value = 0;
    // if (input.value[length - 1] === /+-%\/*/) {

    // }
  });
});

input.addEventListener("input", () => console.log(input.value));
