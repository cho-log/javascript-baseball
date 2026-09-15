console.log(window.MissionUtils);
export default class BaseballGame {
  play(computerInputNumbers, userInputNumbers) {
    if (!isValid(userInputNumbers)) return;

    const strike = countStrike(computerInputNumbers, userInputNumbers);
    const ball = countSame(computerInputNumbers, userInputNumbers) - strike;
    const answer = makeAnswer(ball, strike);
    return answer;
  }
}
function displayButton(button, flag) {
  if (flag === 1) button.style.display = 'block';
  else button.style.display = 'none';
  return;
}
function isValid(numbers) {
  if (!isInRange(numbers)) {
    alert('1~9사이의 숫자가 아닙니다.');
    return 0;
  }
  if (numbers.length !== 3) {
    alert('숫자가 3자리가 아닙니다.');
    return 0;
  }
  if (isDuplicate(numbers)) {
    alert('중복된 숫자가 있습니다.');
    return 0;
  }
  return 1;
}
function isInRange(numbers) {
  for (let i = 0; i < sizeOfNumbers; i++) {
    if (numbers[i] < 1 || 9 < numbers[i]) return 0;
  }
  return 1;
}
function isDuplicate(numbers) {
  if (
    numbers[0] === numbers[1] ||
    numbers[1] === numbers[2] ||
    numbers[2] === numbers[0]
  )
    return 1;
  return 0;
}
function countSame(numbers1, numbers2) {
  let count = 0;
  for (let i = 0; i < sizeOfNumbers; i++) {
    count += checkSame(numbers1, numbers2[i]);
  }
  return count;
}
function checkSame(numbers, number) {
  for (let i = 0; i < sizeOfNumbers; i++) {
    if (numbers[i] === number) return 1;
  }
  return 0;
}
function countStrike(numbers1, numbers2) {
  let count = 0;
  for (let i = 0; i < sizeOfNumbers; i++) {
    if (numbers1[i] === numbers2[i]) count++;
  }
  return count;
}
function makeAnswer(ball, strike) {
  if (strike === 3) {
    displayButton(restartButton, 1);
    return '<div><strong>🎉정답을 맞추셨습니다🎉</strong></div> <br>게임을 새로 시작하시겠습니까?';
  }
  if (ball + strike === 0) return '낫싱';
  if (ball === 0) return strike + '스트라이크';
  if (strike === 0) return ball + '볼';
  return ball + '볼 ' + strike + '스트라이크';
}
function makeNumbers() {
  const numbers = [];
  while (1) {
    if (numbers.length === 3) break;
    const number = MissionUtils.Random.pickNumberInRange(1, 9);
    if (numbers.includes(number)) continue;
    numbers.push(number);
  }
  return numbers.join('');
}

const game = new BaseballGame();
let computerInputNumbers = makeNumbers();
const sizeOfNumbers = 3;

const input = document.getElementById('user-input');
const submitButton = document.getElementById('submit');
const result = document.getElementById('result');
const restartButton = document.getElementById('game-restart-button');
displayButton(restartButton, 0);

submitButton.addEventListener('click', (event) => {
  event.preventDefault();
  const userInputNumbers = input.value;
  result.innerHTML = game.play(computerInputNumbers, userInputNumbers);
});
restartButton.addEventListener('click', (event) => {
  computerInputNumbers = makeNumbers();
  input.value = '';
  result.textContent = '';
  displayButton(restartButton, 0);
});
