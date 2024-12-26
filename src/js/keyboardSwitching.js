const sectionKeyboard = document.querySelector(".keyboard");
const keyboardToggle = document.querySelector(".keyboard_toggle");
const displayToggle = document.querySelector(".display_toggle");
const display = document.querySelector(".display");

export function keyboardSwitching() {
  keyboardToggle.addEventListener("click", () => {
    sectionKeyboard.style.display = "none";
    display.style.height = "95%";
    displayToggle.style.display = "block";
  });

  displayToggle.addEventListener("click", () => {
    sectionKeyboard.style.display = "flex";
    display.style.height = "50%";
    displayToggle.style.display = "none";
  });
}
