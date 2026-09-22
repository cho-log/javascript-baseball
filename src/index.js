import BaseballGameController from "./controller/BaseballGameController.js";


const baseballGameController = new BaseballGameController();

const userInput = document.querySelector("#user-input");
const form = document.querySelector("form");

baseballGameController.run(userInput, form);
