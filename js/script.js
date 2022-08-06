`use script`;

// CALCULATE IMC ----------------------------

//elements for calculate imc
const inputWeight = document.querySelector(`#input-weight`);
const inputHeight = document.querySelector(`#input-height`);
const btnCalculateIMC = document.querySelector(`#btn-calculate-imc`);
const imcResult = document.querySelector(`#imc-result`);
const calculateAgain = document.querySelector(`#calculate-again`);
const firstP = document.querySelector(`.first-p`);
const mainBackground = document.querySelector(`.main`);
//and of the elements for calculate imc
firstP.classList.add(`hidden`);

//forumula for calculate imc
const calcImc = function (weight, height) {
  return weight / height ** 2;
};

// functions for calculate imc
const calculateButtonClick = function () {
  const weight = inputWeight.value;
  const height = inputHeight.value;
  const imc = calcImc(weight, height).toFixed(2).replace(`.`, `,`);

  // if the value is false, show the message (type a valid value)
  if (
    !inputWeight.value ||
    !inputHeight.value ||
    inputHeight.value == 0 ||
    inputWeight.value == 0
  ) {
    firstP.classList.remove(`hidden`);

    // if the value is true, calculate imc and desappear the message
  } else {
    imcResult.textContent = imc;
    firstP.classList.add(`hidden`);
  }
};

//calculate imc
btnCalculateIMC.addEventListener(`click`, calculateButtonClick);

//restore values to calculate again;
const calculatecAgainButtonClick = function () {
  inputWeight.value = 0;
  inputHeight.value = 0;
  imcResult.textContent = `0`;
  mainBackground.classList.toggle(`random-color`);
};
// click event in button for calculate again
calculateAgain.addEventListener(`click`, calculatecAgainButtonClick);
