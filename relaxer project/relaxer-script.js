const container = document.querySelector(".container");
const text = document.querySelector(".text");
const pointer = document.querySelector(".pointer");

const totalTime = 7500;
const breatheTime = (totalTime / 5) * 2;
const holdTime = totalTime / 5;

const breatheAnimation = function () {
  text.innerText = "Breathe in!";
  pointer.style.backgroundColor = " #015959";
  setTimeout(() => {
    text.innerText = "Hold";
    pointer.style.backgroundColor = " #ffffff";

    setTimeout(() => {
      text.innerText = "Breathe out!";
      pointer.style.backgroundColor = " #0ca1e6";
    }, holdTime);
  }, breatheTime);
};

breatheAnimation();

setInterval(breatheAnimation, totalTime);
