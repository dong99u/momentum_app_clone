const whatsYourNameContainer = document.querySelector(".main-greeting__container");
const showGreetingContainer = document.querySelector(".main-greeting__container:nth-child(2)");
const nameForm = document.querySelector(".main-greeting__form");
const nameInput = document.querySelector(".main-greeting__form input");
const headerLogo = document.querySelector(".header-logo")

const HIDDEN_CLASSNAME = "main-greeting__container--hidden";

function handleSubmit(event) {
    event.preventDefault();
    const userName = nameInput.value;
    localStorage.setItem("username", userName);
    whatsYourNameContainer.classList.add(HIDDEN_CLASSNAME);
    showGreetingContainer.classList.remove(HIDDEN_CLASSNAME);
    headerLogo.classList.add(HIDDEN_CLASSNAME);
}


showGreetingContainer.querySelector(".main__greeting").innerText
function greetingMessage(hour) {
    if (hour > 5 && hour < 11) {
      showGreetingContainer.querySelector(".main__greeting").innerText = `Good morning, ${localStorage.getItem("username")}`;
    } else if (hour >= 11 && hour < 14) {
      showGreetingContainer.querySelector(".main__greeting").innerText = `Good afternoon, ${localStorage.getItem("username")}`;
    } else {
      showGreetingContainer.querySelector(".main__greeting").innerText = `Good evening, ${localStorage.getItem("username")}`;
    }
  }

nameForm.addEventListener("submit", handleSubmit);