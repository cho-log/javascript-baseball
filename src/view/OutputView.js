export default class OutputView {
    printResult(userInput) {
        const NUMBER_LENGTH = 3;
        if (userInput.length !== NUMBER_LENGTH) {
            window.alert("숫자 길이가 3이여야 합니다.");
            return;
        }
        if (!/^[1-9]+$/.test(userInput)) {
            window.alert("1부터 9까지의 숫자만 입력해주세요.")
            return;
        }
        if (new Set(userInput).size !== NUMBER_LENGTH) {
            window.alert("숫자 입력은 중복되지 않아야 합니다.")
            return;
        }
    }
} 