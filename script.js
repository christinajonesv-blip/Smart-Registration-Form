const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const bioInput = document.getElementById("bio");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const bioError = document.getElementById("bioError");

const charCount = document.getElementById("charCount");
const submitBtn = document.getElementById("submitBtn");

const successMessage = document.getElementById("successMessage");


// -----------------------------
// Name Validation
// -----------------------------

function validateName() {

    const name = nameInput.value.trim();

    if (name === "") {

        nameError.textContent = "Name is required.";
        nameInput.classList.add("invalid");
        nameInput.classList.remove("valid");

        return false;

    }

    nameError.textContent = "";
    nameInput.classList.remove("invalid");
    nameInput.classList.add("valid");

    return true;
}


// -----------------------------
// Email Validation
// -----------------------------

function validateEmail() {

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        emailError.textContent = "Email is required.";
        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;
    }

    if (!emailPattern.test(email)) {

        emailError.textContent =
            "Please enter a valid email address.";

        emailInput.classList.add("invalid");
        emailInput.classList.remove("valid");

        return false;
    }

    emailError.textContent = "";
    emailInput.classList.remove("invalid");
    emailInput.classList.add("valid");

    return true;
}


// -----------------------------
// Password Validation
// -----------------------------

function validatePassword() {

    const password = passwordInput.value;

    if (password === "") {

        passwordError.textContent =
            "Password is required.";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        return false;
    }

    if (password.length < 6) {

        passwordError.textContent =
            "Password must contain at least 6 characters.";

        passwordInput.classList.add("invalid");
        passwordInput.classList.remove("valid");

        return false;
    }

    passwordError.textContent = "";

    passwordInput.classList.remove("invalid");
    passwordInput.classList.add("valid");

    return true;
}


// -----------------------------
// Bio Validation + Counter
// -----------------------------

function validateBio() {

    const bioLength = bioInput.value.length;

    charCount.textContent =
        `${bioLength} / 200 characters`;

    if (bioLength > 200) {

        bioError.textContent =
            "Bio cannot exceed 200 characters.";

        bioInput.classList.add("invalid");
        bioInput.classList.remove("valid");

        return false;
    }

    bioError.textContent = "";

    bioInput.classList.remove("invalid");
    bioInput.classList.add("valid");

    return true;
}


// -----------------------------
// Check All Fields
// -----------------------------

function checkForm() {

    const nameValid = validateName();
    const emailValid = validateEmail();
    const passwordValid = validatePassword();
    const bioValid = validateBio();

    submitBtn.disabled = !(
        nameValid &&
        emailValid &&
        passwordValid &&
        bioValid
    );
}


// -----------------------------
// Real-time Input Events
// -----------------------------

nameInput.addEventListener("input", checkForm);

emailInput.addEventListener("input", checkForm);

passwordInput.addEventListener("input", checkForm);

bioInput.addEventListener("input", checkForm);


// -----------------------------
// Form Submit
// -----------------------------

form.addEventListener("submit", function(event) {

    event.preventDefault();

    checkForm();

    if (!submitBtn.disabled) {

        successMessage.textContent =
            "Registration successful! 🎉";

        form.reset();

        charCount.textContent =
            "0 / 200 characters";

        nameInput.classList.remove("valid");
        emailInput.classList.remove("valid");
        passwordInput.classList.remove("valid");
        bioInput.classList.remove("valid");

        submitBtn.disabled = true;
    }

});