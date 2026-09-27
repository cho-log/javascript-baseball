export default class View {
  #userInput = document.querySelector('#user-input');
  #submitButton = document.querySelector('#submit');
  #resultDiv = document.querySelector('#result');
  #restartQuestion = document.querySelector('#restart-question');
  #restartButton = document.querySelector('#game-restart-button');

  getUserInput() {
    return this.#userInput.value;
  }

  clearInput() {
    this.#userInput.value = '';
  }

  focusInput() {
    this.#userInput.focus();
  }

  showResult(message) {
    this.#resultDiv.textContent = message;
  }

  showWinResult() {
    this.#resultDiv.textContent = '🎉 정답을 맞히셨습니다! 🎉';
    this.#restartQuestion.style.display = 'block';
    this.#restartButton.style.display = 'block';
    this.#submitButton.disabled = true;
  }

  resetForNewGame() {
    this.#resultDiv.textContent = '';
    this.#restartQuestion.style.display = 'none';
    this.#restartButton.style.display = 'none';
    this.#submitButton.disabled = false;
  }

  showInputError(message) {
    alert(message);
    this.clearInput();
    this.focusInput();
  }

  // 제출(확인) 이벤트를 View 바깥(Controller)에 위임한다
  bindSubmit(handler) {
    this.#submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      handler(this.getUserInput());
    });
  }

  // 재시작 이벤트를 View 바깥(Controller)에 위임한다
  bindRestart(handler) {
    this.#restartButton.addEventListener('click', handler);
  }
}
