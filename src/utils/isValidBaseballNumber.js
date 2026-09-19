const isValidBaseballNumber = (userInput) => {
    const NUMBER_LENGTH = 3;
    if (userInput.length !== NUMBER_LENGTH) {
        return false;
    }
    if (!/^[1-9]+$/.test(userInput)) {
        return false;
    }
    if (new Set(userInput).size !== NUMBER_LENGTH) {
        return false;
    }
    return true;
};

export default isValidBaseballNumber;
