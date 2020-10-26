const jsGreetingForm = document.querySelector(".js-form"),
    jsGreeting = document.querySelector(".js-greetings"),
    greetingInput = jsGreetingForm.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = greetingInput.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    jsGreetingForm.classList.add(SHOWING_CN);
    jsGreetingForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    jsGreetingForm.classList.remove(SHOWING_CN);
    jsGreeting.classList.add(SHOWING_CN);
    jsGreeting.innerText = `Helle ${text}`;
}


function loadName() {
    const currentUser = localStorage.getItem(USER_LS);
    if(currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);
    }

}

function init() {
    loadName();
}

init();