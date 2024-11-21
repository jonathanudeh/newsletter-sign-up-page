const form = document.querySelector("form");
const successPage = document.getElementById("success-display");
const input = document.getElementById("email-id");
const errorMsg = document.querySelector(".error-msg");
const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");


const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const handleInput = () => {
    if(input.value.match(/\s/g)) {
        errorMsg.classList.add("disable");
    input.classList.remove("error-display");
    }
    if (emailRegex.test(input.value)) {
        errorMsg.classList.add("disable");
        input.classList.remove("error-display");
    } else {
        errorMsg.classList.remove("disable");
        input.classList.add("error-display");
    }
}

const  handleSubmission = async (e) => {
    e.preventDefault();
    try{
        input.addEventListener("input", handleInput); //listens for user inputs
        if(emailRegex.test(input.value)) {
            form.classList.add("disable");
            successPage.classList.remove("disable");
            errorMsg.classList.add("disable");
            input.classList.remove("error-display");
        } else {
            errorMsg.classList.remove("disable");
            input.classList.add("error-display");
        }
    } catch (err) {
        alert(`Error: ${err}`);
    }
}

const handleDismiss = (e) => {
    e.preventDefault();
    form.classList.toggle("disable");
    successPage.classList.add("disable")
}



form.addEventListener("submit", handleSubmission); /// listens for form submission
dismissBtn.addEventListener("click", handleDismiss); // listens for click on dismiss button
