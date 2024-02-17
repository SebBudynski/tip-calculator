"use strict";

const billInput = document.querySelector("#bill-amount");
const customInput = document.querySelector("#custom-input");
const resetBtn = document.querySelector(".reset");
const peopleInput = document.querySelector("#number-of-people");
const amount = document.querySelector(".tip");
const tipBtns = document.querySelectorAll(".tip-btn");
const finalBill = document.querySelector(".final-bill");
const txtErrorBill = document.querySelector(".txt-error-bill");
const txtErrorPeople = document.querySelector(".txt-error-people");

let tipValue = 0;
let tipAmount = 0;
let billValue = 0;
let peopleValue = 0;

//Make reset button blured when all values are 0
const bluredResetBtn = () => {
  if (
    tipValue === 0 &&
    tipAmount === 0 &&
    billValue === 0 &&
    peopleValue === 0
  ) {
    resetBtn.id = "blured";
  } else {
    resetBtn.id = "";
  }
};

//Lunch all calculations and check if values are correct
const calculateAndCheckValues = () => {
  calcBillPerPerson();
  calcTipPerPerson();
  bluredResetBtn();
};

//Slice input value to 6 characters
const sliceInput = (input) => {
  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6);
  }
  calculateAndCheckValues();
};

//Display error if bill  input is less than 1
const displayErrorBill = () => {
  if (billInput.value < 1) {
    txtErrorBill.classList.remove("hidden");
    billInput.classList.add("error");
  } else {
    txtErrorBill.classList.add("hidden");
    billInput.classList.remove("error");
  }
};

//Display error if people input is less than 1
const displayErrorPeople = () => {
  if (peopleInput.value < 1) {
    txtErrorPeople.classList.remove("hidden");
    peopleInput.classList.add("error");
  } else {
    txtErrorPeople.classList.add("hidden");
    peopleInput.classList.remove("error");
  }
};

//Calculate tip per person amount
const calcTipPerPerson = () => {
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

//Calculate final bill per person amount
const calcBillPerPerson = () => {
  let billAmount = billValue / peopleValue + tipAmount;
  if (isNaN(billAmount)) {
    finalBill.textContent = "0";
  } else if (Number.isInteger(billAmount)) {
    finalBill.textContent = billAmount.toFixed(0);
  } else {
    finalBill.textContent = billAmount.toFixed(2);
  }
};

//
tipBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    tipValue = parseFloat(this.value);
    calculateAndCheckValues();
  });
});

customInput.addEventListener("input", () => {
  tipValue = parseFloat(customInput.value) / 100;
  calculateAndCheckValues();
});

customInput.addEventListener("focus", () => {
  customInput.placeholder = "";
});

customInput.addEventListener("blur", () => {
  if (customInput.value === "") customInput.placeholder = "Custom";
});

//Reset all values
resetBtn.addEventListener("click", () => {
  peopleInput.classList.remove("error");
  billInput.classList.remove("error");
  txtErrorBill.classList.add("hidden");
  txtErrorPeople.classList.add("hidden");
  billInput.value = "";
  peopleInput.value = "";
  billValue = 0;
  peopleValue = 0;
  tipValue = 0;
  tipAmount = 0;
  customInput.value = "";
  customInput.placeholder = "Custom";
  amount.textContent = "0";
  finalBill.textContent = "0";
  bluredResetBtn();
});

billInput.addEventListener("input", () => {
  sliceInput(billInput);
  calculateAndCheckValues();
  displayErrorBill();
});

billInput.addEventListener("blur", () => {
  displayErrorBill();
});

peopleInput.addEventListener("input", () => {
  sliceInput(peopleInput);
  calculateAndCheckValues();
  displayErrorPeople();
});

peopleInput.addEventListener("blur", () => {
  displayErrorPeople();
});

customInput.addEventListener("input", () => {
  sliceInput(customInput);
});
