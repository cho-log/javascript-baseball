import { NUMBER_LENGTH } from "../constants/Baseballconstants.js";

export default class ComputerNumber {
    getRandomNumbers() {
        const numbers = [];
        while (numbers.length < NUMBER_LENGTH) {
            const randomNumber = MissionUtils.Random.pickNumberInRange(1, 9);
            if (!numbers.includes(randomNumber)) {
                numbers.push(randomNumber);
            }
        }
        return numbers;
    }
}
