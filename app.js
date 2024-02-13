"use strict";

const billInput = document.querySelector("#bill-amount");
const customInput = document.querySelector("#custom-input");
const resetBtn = document.querySelector(".reset");
const peopleInput = document.querySelector("#number-of-people");
const amount = document.querySelector(".tip");
const tipBtns = document.querySelectorAll(".tip-btn");
const finalBill = document.querySelector(".final-bill");
let tipValue = 0;
let tipAmount = 0;
let billValue = 0;
let peopleValue = 0;

const blured = () => {
  if (
    tipValue === 0 &&
    tipAmount === 0 &&
    billValue === 0 &&
    peopleValue === 0
    ) {
    console.log(tipValue, tipAmount, billValue, peopleValue);
    resetBtn.id = "blured";
  } else {
    resetBtn.id = "";
  }
};

const sliceInput = (input) => {
  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6);
  }
  calcBill();
  calcTip();
  blured();
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
    calcBill();
    blured();
  });
});

customInput.addEventListener("input", () => {
  tipValue = parseFloat(customInput.value) / 100;
  calcBill();
  calcTip();
  blured();
});

const calcTip = () => {
  billValue = parseFloat(billInput.value);
  peopleValue = parseInt(peopleInput.value);
  tipAmount = (billValue / peopleValue) * tipValue;
  if (isNaN(tipAmount)) {
    amount.textContent = "0";
  } else if (Number.isInteger(tipAmount)) {
    amount.textContent = tipAmount.toFixed(0);
  } else {
    amount.textContent = tipAmount.toFixed(2);
  }
};

const calcBill = () => {
  let billAmount = billValue / peopleValue + tipAmount;
  if (isNaN(billAmount)) {
    finalBill.textContent = "0";
  } else if (Number.isInteger(billAmount)) {
    finalBill.textContent = billAmount.toFixed(0);
  } else {
    finalBill.textContent = billAmount.toFixed(2);
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
  billValue = 0;
  peopleValue = 0;
  tipValue = 0;
  tipAmount = 0;
  customInput.value = "";
  customInput.placeholder = "Custom";
  peopleInput.value = "";
  amount.textContent = "0";
  finalBill.textContent = "0";
  console.log(tipValue, tipAmount, billValue, peopleValue);
  blured();
});

billInput.addEventListener("input", () => {
  sliceInput(billInput);
  calcTip();
  calcBill();
  blured();
});

billInput.addEventListener("blur", () => {
  displayError(billInput);
});

peopleInput.addEventListener("input", () => {
  sliceInput(peopleInput);
  calcTip();
  calcBill();
  blured();
});

peopleInput.addEventListener("blur", () => {
  displayError(peopleInput);
});

customInput.addEventListener("input", () => {
  sliceInput(customInput);
});
