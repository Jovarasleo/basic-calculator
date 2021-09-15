const firstVar = document.querySelector(".firstVar");
const secondVar = document.querySelector(".secondVar");
const result = document.querySelector("#result");
let sum = document.querySelector(".sum");
let sub = document.querySelector(".sub");
let div = document.querySelector(".div");
let mul = document.querySelector(".mul");
let mod = document.querySelector(".mod");
let res = document.querySelector(".res");

firstVar.addEventListener("input", inputValue1);
function inputValue1(event) {
  skaicius1 = event.target.value;
  return skaicius1;
}

secondVar.addEventListener("input", inputValue2);
function inputValue2(event) {
  skaicius2 = event.target.value;
  return skaicius2;
}
/*
sum.addEventListener("click", add);
function add() {
  result.innerHTML = Number(skaicius1) + Number(skaicius2);
}
sub.addEventListener("click", subract);
function subract() {
  result.innerHTML = Number(skaicius1) - Number(skaicius2);
}
div.addEventListener("click", divide);
function divide() {
  result.innerHTML = Number(skaicius1) / Number(skaicius2);
}
mul.addEventListener("click", multiply);
function multiply() {
  result.innerHTML = Number(skaicius1) * Number(skaicius2);
}
mod.addEventListener("click", moda);
function moda() {
  result.innerHTML = Number(skaicius1) % Number(skaicius2);
}
*/
res.addEventListener("click", reset);
function reset() {
  firstVar.value = "";
  secondVar.value = "";
  result.innerHTML = "";
}

const Skaiciuokle = null;
switch (Skaiciuokle) {
  case sum.addEventListener("click", add):
    function add() {
      result.innerHTML = Number(skaicius1) + Number(skaicius2);
    }
    break;
  case sub.addEventListener("click", subract):
    function subract() {
      result.innerHTML = Number(skaicius1) - Number(skaicius2);
    }
    break;
  case div.addEventListener("click", divide):
    function divide() {
      result.innerHTML = Number(skaicius1) / Number(skaicius2);
    }
    break;
  case mul.addEventListener("click", multiply):
    function multiply() {
      result.innerHTML = Number(skaicius1) * Number(skaicius2);
    }
    break;
  case mod.addEventListener("click", moda):
    function moda() {
      result.innerHTML = Number(skaicius1) % Number(skaicius2);
    }
    break;
}
