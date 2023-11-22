let startBtn = document.querySelector(".start");
let result = document.querySelector(".result");
let stopBtn = document.querySelector(".stop");
let resetBtn = document.querySelector(".reset");
let incrementBtn = document.querySelector(".increment");
let decrementBtn = document.querySelector(".decrement");
let incvalueBtn = document.querySelector(".incvalue");
let decvalueBtn = document.querySelector(".decvalue");
let incInp = document.querySelector(".incinp");
let decInp = document.querySelector(".decinp");

startBtn.style.backgroundColor = "green";
startBtn.style.color = "white";
startBtn.style.width = "100px";
startBtn.style.height = "30px";
startBtn.style.border = "none";
stopBtn.style.backgroundColor = "red";
stopBtn.style.color = "white";
stopBtn.style.width = "100px";
stopBtn.style.height = "30px";
stopBtn.style.border = "none";
resetBtn.style.backgroundColor = "red";
resetBtn.style.width = "100px";
resetBtn.style.height = "30px";
resetBtn.style.border = "none";
incrementBtn.style.backgroundColor = "teal";
incrementBtn.style.color = "white";
incrementBtn.style.width = "150px";
incrementBtn.style.height = "30px";
incrementBtn.style.border = "none";
decrementBtn.style.backgroundColor = "teal";
decrementBtn.style.color = "white";
decrementBtn.style.width = "150px";
decrementBtn.style.height = "30px";
decrementBtn.style.border = "none";
incInp.style.borderColor = "orange";
incvalueBtn.style.backgroundColor = "orange";
incvalueBtn.style.height = "25px";
incvalueBtn.style.width = "200px";
incvalueBtn.style.border = "none";
decInp.style.borderColor = "orange";
decvalueBtn.style.backgroundColor = "orange";
decvalueBtn.style.height = "25px";
decvalueBtn.style.width = "200px";
decvalueBtn.style.border = "none";

let count = 0;
let countInterval;

startBtn.addEventListener("click", function () {
  clearInterval(countInterval);
  countInterval = setInterval(() => {
    result.innerText = ++count;
  }, 100);
});

stopBtn.addEventListener("click", function () {
  clearInterval(countInterval);
});

resetBtn.addEventListener("click", function () {
  count = 0;
  result.innerText = 0;
  clearInterval(countInterval);
});

incrementBtn.addEventListener("click", function () {
  result.innerText = ++count;
});
decrementBtn.addEventListener("click", function () {
  result.innerText = --count;
});

incvalueBtn.addEventListener("click", function () {
  count += +incInp.value;
  result.innerText = count;
});
decvalueBtn.addEventListener("click", function () {
  count -= +decInp.value;
  result.innerText = count;
});
