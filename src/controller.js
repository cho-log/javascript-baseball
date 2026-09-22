import BaseballGame from './baseballgame.js';
import View from './view.js';

export default class GameController {
  #view = new View();
  #baseballGame = new BaseballGame();
  #computerNumbers = BaseballGame.generateComputerNumbers();

  constructor() {
    this.#view.bindSubmit((userInput) => this.#handleSubmit(userInput));
    this.#view.bindRestart(() => this.#handleRestart());
  }

  #handleSubmit(userInput) {
    try {
      BaseballGame.validateInput(userInput);
      const result = this.#baseballGame.play(this.#computerNumbers, userInput);
      this.#renderResult(result);
    } catch (error) {
      this.#view.showInputError(error.message);
    }
  }

  #renderResult(result) {
    if (result === '3스트라이크') {
      this.#view.showWinResult();
    } else {
      this.#view.showResult(result);
    }
  }

  #handleRestart() {
    this.#computerNumbers = BaseballGame.generateComputerNumbers();
    this.#view.resetForNewGame();
    this.#view.clearInput();
    this.#view.focusInput();
  }
}
