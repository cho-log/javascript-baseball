export default class BaseballGame {
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
