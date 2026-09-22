import { NUMBER_LENGTH } from "../constants/Baseballconstants.js";

const isValidBaseballNumber = (userInput) => {
    if (userInput.length !== NUMBER_LENGTH) {
        return {
            isValid: false,
            reason: "숫자 길이가 3이여야 합니다."
        };
    }
    if (!/^[1-9]+$/.test(userInput)) {
        return {
            isValid: false,
            reason: "1부터 9까지의 숫자만 입력해주세요."
        };
    }
    if (new Set(userInput).size !== NUMBER_LENGTH) {
        return {
            isValid: false,
            reason: "숫자 입력은 중복되지 않아야 합니다"
        };
    }
    return{
        isValid: true
    };
};

export default isValidBaseballNumber;
