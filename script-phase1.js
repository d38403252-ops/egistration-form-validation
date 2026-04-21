// Constructor Function
function Validator() {}

// Name Validation
Validator.prototype.validateName = function(name) {
    if (name.trim() === "") {
        return "Name is required";
    }
    return "";
};

// Email Validation
Validator.prototype.validateEmail = function(email) {
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!pattern.test(email)) {
        return "Invalid email";
    }
    return "";
};

// Password Validation
Validator.prototype.validatePassword = function(password) {
    if (password.length < 8) {
        return "Password must be at least 8 characters";
    }
    return "";
};

// Form Submit
document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let validator = new Validator();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let nameError = validator.validateName(name);
    let emailError = validator.validateEmail(email);
    let passwordError = validator.validatePassword(password);

    document.getElementById("nameError").innerText = nameError;
    document.getElementById("emailError").innerText = emailError;
    document.getElementById("passwordError").innerText = passwordError;

    if (!nameError && !emailError && !passwordError) {
        alert("Registration Successful (Phase 1)");
    }
});