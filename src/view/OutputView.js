export default class OutputView {
    printResult(gameResult) {
        const result = document.querySelector("#result");
        result.textContent = gameResult;
    }

    printError(message) {
        alert(message);
    }
} 
