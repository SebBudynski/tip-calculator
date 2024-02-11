"use strict";

const customInput = document.querySelector("#number-input");
const resetBtn = document.querySelector("#reset");

customInput.addEventListener("focus", () => {
  customInput.placeholder = "";
});

customInput.addEventListener("blur", () => {
  if (customInput.value === "") customInput.placeholder = "Custom";
});

resetBtn.addEventListener("click", () => {
  customInput.value = "";
  customInput.placeholder = "Custom";
});
