export default class ComputerNumber {
    getRandomNumbers() {
        const numbers = [];
        const NUMBER_LENGTH = 3;
        while (numbers.length < NUMBER_LENGTH) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }
}