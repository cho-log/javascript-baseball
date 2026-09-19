export default class BaseballGame {

  play(computerInputNumbers, userInputNumbers) {
    const strikeCount = this.getStrike(computerInputNumbers, userInputNumbers);
    const ballCount = this.getBall(computerInputNumbers, userInputNumbers)

    if (strikeCount === 0 && ballCount === 0) {
      return "낫싱";
    }

    if (strikeCount === 0) {
      return `${ballCount}볼`;
    }

    if (ballCount === 0) {
      return `${strikeCount}스트라이크`;
    }

    return `${ballCount}볼 ${strikeCount}스트라이크`;
  }

  getStrike(computerInputNumbers, userInputNumbers) {
    let strikeCount = userInputNumbers.filter(
      (number, index) => computerInputNumbers[index] === number
    ).length;

    return strikeCount;
  }

  getBall(computerInputNumbers, userInputNumbers) {
    let ballCount = 0;

    userInputNumbers.forEach((number, index) => {
      if (computerInputNumbers.includes(number) &&
        computerInputNumbers[index] !== number
      ) {
        ballCount++;
      }

    });
    return ballCount;
  }
}