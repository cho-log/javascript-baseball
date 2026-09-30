import BaseballGameController from "./controller/BaseballGameController.js";

const result=document.querySelector("#result");
const baseballGameController = new BaseballGameController();

const userInput = document.querySelector("#user-input");
const form = document.querySelector("form");

baseballGameController.run(userInput, form);

const restartButton=document.querySelector("#game-restart-button");

restartButton.addEventListener("click",()=>{
    baseballGameController.run(userInput,form);
});
