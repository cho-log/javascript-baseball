const NUMBER_LENGTH = 3;
const MIN_NUMBER = 1;
const MAX_NUMBER = 9;

export default class BaseballGame {
  // 컴퓨터의 숫자 3자리를 생성한다
  static generateComputerNumbers() {
    const numbers = [];
    while (numbers.length < NUMBER_LENGTH) {
      const number = MissionUtils.Random.pickNumberInRange(
        MIN_NUMBER,
        MAX_NUMBER,
      );
      if (!numbers.includes(number)) {
        numbers.push(number);
      }
    }
    return numbers;
  }

  // 사용자 입력값이 게임 규칙에 맞는지 검증한다
  static validateInput(input) {
    if (input.length !== NUMBER_LENGTH) {
      throw new Error('숫자는 반드시 3자리여야 합니다.');
    }
    if (!/^[1-9]{3}$/.test(input)) {
      throw new Error('1부터 9까지의 숫자만 입력할 수 있습니다.');
    }
    const uniqueNumbers = new Set(input);
    if (uniqueNumbers.size !== NUMBER_LENGTH) {
      throw new Error('중복된 숫자는 입력할 수 없습니다.');
    }
  }

  play(computerInputNumbers, userInputNumbers) {
    const userNumbers = String(userInputNumbers).split('').map(Number);
    const { strikes, balls } = this.countScores(
      computerInputNumbers,
      userNumbers,
    );

    return this.formatResult(strikes, balls);
  }

  // 스트라이크와 볼 개수만 계산하는 전용 메서드
  countScores(computer, user) {
    let strikes = 0;
    let balls = 0;

    user.forEach((userNum, index) => {
      if (userNum === computer[index]) strikes += 1;
      else if (computer.includes(userNum)) balls += 1;
    });

    return { strikes, balls };
  }

  formatResult(strikes, balls) {
    if (strikes === 0 && balls === 0) return '낫싱';

    const resultParts = [];
    if (balls > 0) resultParts.push(`${balls}볼`);
    if (strikes > 0) resultParts.push(`${strikes}스트라이크`);

    return resultParts.join(' ');
  }
}
