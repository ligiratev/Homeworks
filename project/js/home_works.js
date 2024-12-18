const parentBlock = document.querySelector(".parent_block");
const childBlock = document.querySelector(".child_block");

let positionX = 0;
let positionY = 0;

const maxWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const maxHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

const moveBlock = () => {
    if (positionX < maxWidth && positionY === 0) {

        positionX++;
    } else if (positionX === maxWidth && positionY < maxHeight) {

        positionY++;
    } else if (positionY === maxHeight && positionX > 0) {

        positionX--;
    } else if (positionX === 0 && positionY > 0) {

        positionY--;
    }

    childBlock.style.left = `${positionX}px`;
    childBlock.style.top = `${positionY}px`;

    requestAnimationFrame(moveBlock);
};

moveBlock();


moveBlock();


class GmailValidator {
    constructor(inputSelector, buttonSelector, resultSelector) {
        this.emailInput = document.querySelector(inputSelector);
        this.checkButton = document.querySelector(buttonSelector);
        this.resultSpan = document.querySelector(resultSelector);

        this.gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

        this.addEventListeners();
    }


    validateEmail() {
        const email = this.emailInput.value.trim();

        if (this.gmailRegex.test(email)) {
            this.showSuccess("Valid Gmail address!");
            return true;
        } else {
            this.showError("Invalid Gmail address. Please use example@gmail.com format.");
            return false;
        }
    }


    showSuccess(message) {
        this.resultSpan.textContent = message;
        this.resultSpan.style.color = "green";
        this.emailInput.style.borderColor = "green";
    }

    // Метод для отображения ошибки
    showError(message) {
        this.resultSpan.textContent = message;
        this.resultSpan.style.color = "red";
        this.emailInput.style.borderColor = "red";
    }


    addEventListeners() {
        this.checkButton.addEventListener("click", (event) => {
            event.preventDefault();
            this.validateEmail();
        });
    }
}


const gmailValidator = new GmailValidator("#gmail_input", "#gmail_button", "#gmail_result");



const seconds = document.querySelector("#seconds");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");

let interval;
let countSeconds = 0;

startButton.onclick = () => {

    if (!interval) {
        interval = setInterval(() => {
            countSeconds++;
            seconds.innerHTML = countSeconds;
        }, 1000);
    }
};

stopButton.onclick = () => {
    clearInterval(interval);
    interval = null;
};

resetButton.onclick = () => {
    clearInterval(interval);
    interval = null;
    countSeconds = 0;
    seconds.innerHTML = countSeconds;
};

