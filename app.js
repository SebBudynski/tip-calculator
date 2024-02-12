"use strict";

const billInput = document.querySelector("#bill-amount");
const customInput = document.querySelector("#custom-input");
const resetBtn = document.querySelector("#reset");
const peopleInput = document.querySelector("#number-of-people");
const amount = document.querySelector(".amount");
const tipBtns = document.querySelectorAll("tip-btn");
let tipValue = 0;

const sliceInput = (input) => {
  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6);
  }
};

const displayError = (input) => {
  if (input.value === "" || input.value === "0") {
    input.classList.add("error");
  } else {
    input.classList.remove("error");
  }
};

tipBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tipValue = parseFloat(this.value);
    calcTip();
  });
});

const calcTip = () => {
  let billValue = parseFloat(billInput.value);
  let peopleValue = parseInt(peopleInput.value);
  let tipAmount = (billValue / peopleValue) * tipValue;
  if (Number.isInteger(tipAmount)) {
    amount.textContent = tipAmount.toFixed(0);
  } else {
    amount.textContent = tipAmount.toFixed(2);
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
  billInput.classList.remove("error");
  billInput.value = "";
  customInput.value = "";
  customInput.placeholder = "Custom";
  peopleInput.value = "";
});

billInput.addEventListener("input", () => {
  sliceInput(billInput);
  calcTip();
  console.log(calcTip());
});

billInput.addEventListener("blur", () => {
  displayError(billInput);
});

peopleInput.addEventListener("input", () => {
  sliceInput(peopleInput);
  calcTip();
});

peopleInput.addEventListener("blur", () => {
  displayError(peopleInput);
});

customInput.addEventListener("input", () => {
  sliceInput(customInput);
});
