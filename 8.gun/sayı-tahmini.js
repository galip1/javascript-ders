const randomNumber = 0; ///global

const start = () => {
  randomNumber = generateRandomNumber(1, 100); //normalde 0 ile 1 arası sayı tutar.
  const btnGuess = document.querySelector(".btn-guess");
  btnGuess.style.display = "inline";

  const btnStart = document.querySelector(".btn-start");
  btnStart.innerHTML = "reset game";
};

const reset = () => {
  btnGuess.style.display = "none";
  btnStart.innerHTML = "start game";
};
const guess = () => {
  const numEl = document.querySelector("#txtNumber");
  const labelEl = document.querySelector("#lblResult");
  const num = Number(numEl.value);

  num = num || 0;

  if (num === randomNumber) {
    labelEl.innerHTML = "congrats! you  guess the number";
  } else if (num > randomNumber) {
    labelEl.innerHTML = "your number is greater then the random number";
  } else {
    labelEl.innerHTML = "your number is lessear then the random number";
  }
};

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
