export default class BaseballGame {

  play(computerInputNumbers, userInputNumbers) {
    const strikeCount = this.getStrike(computerInputNumbers, userInputNumbers);
    const ballCount = this.getBall(computerInputNumbers, userInputNumbers)

    if(strikeCount===3){
      return {
        isAnswer:true,
        message:"정답을 맞추셨습니다"};
    }
    if (strikeCount ===  0 && ballCount === 0) {
      return {
        isAnswer:false,
        message:"낫싱"};
    }

    if (strikeCount === 0) {
      return {
        isAnswer:false,
        message:`${ballCount}볼`};
    }

    if (ballCount === 0) {
      return {
        isAnswer:false,
        message:`${strikeCount}스트라이크`};
    }

    return {
      isAnswer:false,
      message:`${ballCount}볼 ${strikeCount}스트라이크`};
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
