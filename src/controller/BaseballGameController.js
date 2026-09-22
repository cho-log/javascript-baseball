import BaseballGame from "../model/BaseBallGame.js";
import ComputerNumber from "../model/ComputerNumber.js";
import OutputView from "../view/OutputView.js";
import isValidBaseballNumber from "../model/isValidBaseballNumber.js";

export default class BaseballGameController {

    run(userInput, form) {
        const baseBallGame = new BaseballGame();
        const computerNumber = new ComputerNumber();
        const outputView = new OutputView();

        const answerNumbers = computerNumber.getRandomNumbers();

        form.addEventListener("submit", (event) => {
            event.preventDefault();

            if (isValidBaseballNumber(userInput.value).isValid) {
                const userInputNumbers = userInput.value
                    .split("")
                    .map(Number);

                const gameResult = baseBallGame.play(
                    answerNumbers,
                    userInputNumbers
                );
                outputView.printResult(gameResult);
            } else {
                outputView.printError(isValidBaseballNumber(userInput.value).reason);
            }
        });
    }
}
