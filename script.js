"use strict";

const body = document.querySelector("body");

const today = new Date();
const day = today.getDay();
const dayList = [
  "Sekmadienis",
  "Pirmadienis",
  "Antradienis",
  "Trečiadienis ",
  "Ketvirtadienis",
  "Penktadienis",
  "Šeštadienis",
];
const hour = today.getHours();
const minute = today.getMinutes();
const second = today.getSeconds();
const displayPartOfDay = hour >= 12 ? "PM" : "AM";

if (hour === 0 && displayFormat === "PM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    displayPartOfDay = "Vidurdienis";
  } else {
    hour = 12;
    displayPartOfDay = "PM";
  }
}

if (hour === 0 && displayPartOfDay === "AM") {
  if (minute === 0 && second === 0) {
    hour = 12;
    displayPartOfDay = "Vidurnaktis";
  } else {
    hour = 12;
    displayPartOfDay = "AM";
  }
}

const displayDay = document.createElement("h1");
displayDay.innerText = `Šiandien: ${dayList[day]}`;
const displayHours = document.createElement("h3");
displayHours.innerText = `Dabar ${hour} : ${minute} : ${second} ${displayPartOfDay}`;
const displayWindow = document.createElement("div");
displayWindow.append(displayDay, displayHours);
body.append(displayWindow);

console.log(today);
console.log(day);
console.log(dayList);
