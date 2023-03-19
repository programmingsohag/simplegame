const emptyArray = [];
const guessedNumber = document.getElementById("numberGuessInputBox");
const guessNumberValue = Number(guessedNumber.value);
const inputedArray = [guessNumberValue];
const checkingNumber = document.getElementById("checkingNumer");
const myNumber = Math.floor(Math.random() * 19 + 1);
const yourScore = document.getElementById("scoreText");
const yourHighScore = document.getElementById("highScoreText");
checkingNumber.addEventListener("click", function () {
  const guessedNumber = document.getElementById("numberGuessInputBox");
  const guessNumberValue = guessedNumber.value;
  const guessingNumber = document.getElementById("guessingText");
  const numberOutput = document.getElementById("numberOutput");
  if (myNumber == guessNumberValue) {
    guessingNumber.textContent = "yeah you are right";
    numberOutput.textContent = myNumber;
    yourScore.textContent = 10;
  }
  if (myNumber < guessNumberValue) {
    guessingNumber.textContent = "your guess is too high";
    numberOutput.textContent = "?";
  }
  if (myNumber > guessNumberValue) {
    guessingNumber.textContent = "your guess is too low";
    numberOutput.textContent = "?";
  }
  if (guessNumberValue > 20) {
    guessingNumber.textContent = "Please Guess Between 1 to 20";
    numberOutput.textContent = "?";
  }
  if (guessNumberValue == "") {
    return alert("Please Enter Number Between 1 to 20");
  } 
  guessedNumber.value = "";
  emptyArray.push(guessNumberValue);
 
});
const playAgain = document.querySelector(".play_again");
playAgain.addEventListener("click", () => {
  const numberOutput = document.getElementById("numberOutput");
  numberOutput.textContent = "?";
  yourScore.textContent = '';
});
