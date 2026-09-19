import BaseballGame from "./model/BaseBallGame.js";
import ComputerNumber from "./model/ComputerNumber.js";
import isValidBaseballNumber from "./utils/isValidBaseballNumber.js";
import OutputView from "./view/OutputView.js";

const baseBallGame = new BaseballGame();
const computerNumber = new ComputerNumber();
const outputView = new OutputView();

const answerNumbers = computerNumber.getRandomNumbers();

const userInput = document.querySelector("#user-input");
const result = document.querySelector("#result");
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (isValidBaseballNumber(userInput.value)) {
        const userInputNumbers = userInput.value
            .split("").map(Number);

        const gameResult = baseBallGame.play(answerNumbers, userInputNumbers);

        result.textContent = gameResult;
    }
    else {
        outputView.printResult(userInput.value);
    }
});

