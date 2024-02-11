"use strict";

const billInput = document.querySelector("#bill-amount");
const customInput = document.querySelector("#number-input");
const resetBtn = document.querySelector("#reset");
const peopleInput = document.querySelector("#number-of-people");

const sliceInput = (input) => {
  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6);
  }
};

const displayError = (input) => {
  if (input.value === "" || input.value === "0") {
    input.classList.add("error");
  }
};

customInput.addEventListener("focus", () => {
  customInput.placeholder = "";
});

customInput.addEventListener("blur", () => {
  if (customInput.value === "") customInput.placeholder = "Custom";
});

resetBtn.addEventListener("click", () => {
  peopleInput.classList.remove("error");
  billInput.value = "";
  customInput.value = "";
  customInput.placeholder = "Custom";
  peopleInput.value = "";
});

billInput.addEventListener("input", () => {
  sliceInput(billInput);
});

peopleInput.addEventListener("input", () => {
  sliceInput(peopleInput);
});

peopleInput.addEventListener("blur", () => {
  displayError(peopleInput);
});

customInput.addEventListener("input", () => {
  sliceInput(customInput);
});
