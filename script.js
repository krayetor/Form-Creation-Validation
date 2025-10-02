// form validation

document.addEventListener ("DOMContentLoaded", function() {

    // form & feedback selection
    const form = document.getElementById(id="registration-form");
    const feedbackDiv = document.getElementById(id="form-feedback");

    // form submission handler
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // prevents form submission

        // Input Retrieval and Trimming
        const username = document.getElementById("username").value.trim();
        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        // Validation Setup
        let isValid = true;
        let messages = [];

        // Username Validation
        if(username.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email Validation
        if(!email.includes("@") || !email.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password Validation
        if(password.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Feedback Display Logic
        feedbackDiv.style.display = "block";
        if (isValid) {
            feedbackDiv.textContent = "Registration successful!";
            feedbackDiv.style.color = "#28a745";
        }
        else {
            feedbackDiv.innerHTML = messages.join("<br>");
            feedbackDiv.style.color = "#dc3545";
        }
    });
});