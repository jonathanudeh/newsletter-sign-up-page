const form = document.querySelector("form");
const successPage = document.getElementById("success-display");
const input = document.getElementById("email");
const errorMsg = document.querySelector(".error-msg");
const submitBtn = document.getElementById("submit-btn");
const dismissBtn = document.getElementById("dismiss-btn");

// regex to match valid emails
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; 

// this function runs while user is typing. checks for valid input
const handleInput = () => {
    //if input is valid
    if (emailRegex.test(input.value)) {
        errorMsg.classList.add("disable");
        input.classList.remove("error-display");
    } else {
        // if input isn't valid then everywhere shows red, lol.
        errorMsg.classList.remove("disable");
        input.classList.add("error-display");
    }
}

const  handleSubmission = async (e) => {
    e.preventDefault(); //prevents page reload when submit button is clicked
    try{
        // i ran this eventList. so it only shows if email is valid or not after submit button has been clicked at least once not on initial typing
        input.addEventListener("input", handleInput); //listens for user inputs
        if(emailRegex.test(input.value)) {
            //if email is valid then succes page shows and sign up page disappers
            form.classList.add("disable");
            successPage.classList.remove("disable");
        } else {
            // else everywhere shows red cos email isn't valid
            errorMsg.classList.remove("disable");
            input.classList.add("error-display");
        }
    } catch (err) {
        alert(`Error: ${err}`);
    }
}

// handle when dismiss button is clicked on success page
const handleDismiss = (e) => {
    e.preventDefault(); //prevents default behaviour 
    form.classList.toggle("disable"); // show the sign up page if not already showing 
    successPage.classList.add("disable"); // hide the success page
}

form.addEventListener("submit", handleSubmission); /// listens for form submission
dismissBtn.addEventListener("click", handleDismiss); // listens for click on dismiss button
