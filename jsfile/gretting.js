const jsForm = document.querySelector(".js-form"),
    jsGreeting = document.querySelector(".js-greetings"),
    inputForm = jsForm.querySelector("input");

const USER_LS = "currentUser",
    SHOWING_CN = "showing";

function saveName(text) {
    localStorage.setItem(USER_LS, text);
}

function handleSubmit(event) {
    event.preventDefault();
    const currentValue = inputForm.value;
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName() {
    jsForm.classList.add(SHOWING_CN);
    jsForm.addEventListener("submit", handleSubmit);
}

function paintGreeting(text) {
    jsForm.classList.remove(SHOWING_CN);
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