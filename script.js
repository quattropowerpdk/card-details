"use strict";

const button = document.querySelector(".button");
const buttonContinue = document.querySelector(".button_continue");

const bottom = document.querySelector(".bottom_right");
const bottomRegistration = document.querySelector(".registration");

const errorName = document.querySelector(".card_holder_name");
const errorNumber = document.querySelector(".card_number_error");
const errorDate = document.querySelector(".card_data_error");

const inputNumber = document.querySelector("#number");
const inputName = document.querySelector("#name");
const inputMonth = document.querySelector("#date");
const inputYear = document.querySelector("#date1");
const inputBackCard = document.querySelector("#date2");

const frontCardNumber = document.querySelector(".front_card_number");
const frontCardName = document.querySelector(".front_card_name");
const frontCardDate = document.querySelector(".front_card_date");
const frontCardMonth = document.querySelector(".front_card_date_month");
const frontCardYear = document.querySelector(".front_card_date_year");
const backCardCode = document.querySelector(".back_card_text");

let names, numbers, dates;
const letters = /[a-z]/;
const space = /[]/;

const display = function () {
  //Name input
  if (inputName.value.length < 3 || !inputName.value.match(/^\w+\s+\w+/)) {
    errorName.classList.remove("hidden");
  } else {
    errorName.classList.add("hidden");
    names = true;
  }

  //Number input
  if (inputNumber.value.length !== 19 || inputNumber.value.match(letters)) {
    errorNumber.classList.remove("hidden");
  } else {
    errorNumber.classList.add("hidden");
    numbers = true;
  }

  //Date input

  if (
    inputMonth.value > 12 ||
    inputMonth.value < 1 ||
    inputYear.value < 21 ||
    inputBackCard.value.length !== 3 ||
    inputBackCard.value.match(/[^0-9]/)
  ) {
    errorDate.classList.remove("hidden");
  } else {
    errorDate.classList.add("hidden");
    dates = true;
  }

  // Registration completed

  if (dates === true && numbers === true && names === true) {
    bottom.classList.add("hidden");
    frontCardMonth.textContent =
      inputMonth.value < 10 ? `0${inputMonth.value}` : `${inputMonth.value}`;
    frontCardYear.textContent = inputYear.value;
    backCardCode.textContent = inputBackCard.value;
    frontCardName.textContent = inputName.value
      .toLowerCase()
      .split(" ")
      .map((n) => n.replace(n[0], n[0].toUpperCase()))
      .join(" ");
    frontCardNumber.textContent = inputNumber.value;
    bottomRegistration.classList.remove("hidden");
  }
};

button.addEventListener("click", function (e) {
  e.preventDefault();
  display();
});

buttonContinue.addEventListener("click", function (e) {
  e.preventDefault();
  bottom.classList.remove("hidden");
  bottomRegistration.classList.add("hidden");
  frontCardName.textContent = "Jane Appleseed";
  frontCardNumber.textContent = "0000 0000 0000 0000";
  frontCardMonth.textContent = "00";
  frontCardYear.textContent = "00";
  backCardCode.textContent = "000";
  inputMonth.value = "";
  inputName.value = "";
  inputNumber.value = "";
  inputYear.value = "";
  inputBackCard.value = "";
  dates = false;
  numbers = false;
  names = false;
});
