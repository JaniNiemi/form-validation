const form = document.querySelector("form");
const password = document.querySelector("#password1");
const passwordConfirm = document.querySelector("#password2");
const messageContainer = document.querySelector(".message-container");
const message = document.querySelector("#message");

let isValid = false;
let passwordsMatch = false;

function validateForm() {
    // Using constraint
    isValid = form.checkValidity();
    // Style main message for error
    if (!isValid) {
        message.textContent = "Please fill out all fields.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        return;
    }
    // Check if passwords match
    if (password.value === passwordConfirm.value) {
        passwordsMatch = true;
        password.style.borderColor = "green";
        passwordConfirm.style.borderColor = "green";
    } else {
        passwordsMatch = false;
        message.textContent = "Make sure passwords match.";
        message.style.color = "red";
        messageContainer.style.borderColor = "red";
        password.style.borderColor = "red";
        passwordConfirm.style.borderColor = "red";
        return;
    }
    // If form is valid and passwords match
    if (isValid && passwordsMatch) {
        message.textContent = "Successfully registered!";
        message.style.color = "green";
        messageContainer.style.borderColor = "green";
    }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Validate form
    validateForm();
    // Submit data if valid
    if (isValid && passwordsMatch) {
        storeFormData();
    }
}

// Event listener
form.addEventListener("submit", processFormData);