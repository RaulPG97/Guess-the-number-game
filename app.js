document.addEventListener("DOMContentLoaded", () => {
  let randomNumberText = document.getElementById("number__text");
  let userInputNumber = document.getElementById("input__number");
  let submitBtn = document.getElementById("send__number");

  let randomNumber;
  let generateRamdonNumber = () => {
    return Math.floor(Math.random() * 3);
  };

  function isGuessCorrect(userGuess, randonNumber) {
    if (parseInt(userGuess) === parseInt(randonNumber)) {
      return true;
    } else {
      return false;
    }
  }

  submitBtn.addEventListener("click", () => {
    let inputValue = parseInt(userInputNumber.value);

    if (isNaN(inputValue)) {
      randomNumberText.textContent = "No es un numero";

      setTimeout(() => {
        randomNumberText.textContent = "????";
      }, 1000);
      return;
    }

    randomNumber = generateRamdonNumber();

    if (isGuessCorrect(inputValue, randomNumber)) {
      displayGuessResult(randomNumber, true);
    } else {
      displayGuessResult(randomNumber, false);
    }
  });

  function displayGuessResult(randomNumber, isCorrect) {
    randomNumberText.textContent = isCorrect
      ? "Correcto: " + randomNumber 
      : "Incorrecto: " + randomNumber;
  
    setTimeout(() => {
      randomNumberText.textContent = "????";
      userInputNumber.value = "";
    }, 1000);
  }
});
