import BaseballGame from './index.js';

let computerNumbers = generateComputerNumbers();
const baseballGame = new BaseballGame();

const userInput = document.querySelector('#user-input');
const submitButton = document.querySelector('#submit');
const resultDiv = document.querySelector('#result');
const restartQuestion = document.querySelector('#restart-question');
const restartButton = document.querySelector('#game-restart-button');

function generateComputerNumbers() {
  const computer = [];
  while (computer.length < 3) {
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (!computer.includes(number)) {
      computer.push(number);
    }
  }
  return computer;
}

function validateInput(input) {
  if (input.length !== 3) {
    throw new Error('[ERROR] 숫자는 반드시 3자리여야 합니다.');
  }
  if (!/^[1-9]{3}$/.test(input)) {
    throw new Error('[ERROR] 1부터 9까지의 숫자만 입력할 수 있습니다.');
  }
  const uniqueNumbers = new Set(input);
  if (uniqueNumbers.size !== 3) {
    throw new Error('[ERROR] 중복된 숫자는 입력할 수 없습니다.');
  }
}

function showWinUI() {
  resultDiv.innerHTML = '🎉 정답을 맞히셨습니다! 🎉';
  restartQuestion.style.display = 'block';
  restartButton.style.display = 'block';
  submitButton.disabled = true;
}

function showResult(result) {
  if (result === '3스트라이크') {
    showWinUI();
  } else {
    resultDiv.innerHTML = result;
  }
}

function handleInputError(error) {
  alert(error.message);
  userInput.value = '';
  userInput.focus();
}

function resetGame() {
  computerNumbers = generateComputerNumbers();
  userInput.value = '';
  resultDiv.innerHTML = '';
  restartQuestion.style.display = 'none';
  restartButton.style.display = 'none';
  submitButton.disabled = false;
  userInput.focus();
}

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userValue = userInput.value;

  try {
    validateInput(userValue);
    const result = baseballGame.play(computerNumbers, userValue);
    showResult(result);
  } catch (error) {
    handleInputError(error);
  }
});

restartButton.addEventListener('click', resetGame);
