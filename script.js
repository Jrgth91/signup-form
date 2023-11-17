const firstPass = document.querySelector("#password");
const secondPass = document.querySelector("#confirmPassword");
const firstPassword = document.querySelector("#firstPassword");
const passwordInputs = document.querySelectorAll('.passInputs');
const logIn = document.querySelector("span");
const createAccount = document.querySelector(".createAccountButton");
let passwordNotice = document.createElement("div");
let passwordMatch = true;

passwordNotice.className = "passwordNotice"
passwordNotice.style.height = "0px";
firstPassword.appendChild(passwordNotice);

createAccount.addEventListener("mousedown", () => {
    createAccount.classList.add("button-push");
})

createAccount.addEventListener("mouseup", () => {
    createAccount.classList.remove("button-push");
})

logIn.addEventListener("mousedown", (e) => {
    window.location.href = 'http://www.google.com';
})

createAccount.addEventListener("click", (e) => {
    if (!passwordMatch) {
        passwordNotice.textContent = "* Passwords do not match"
    } else {
        passwordNotice.textContent = "";
    }
})

secondPass.addEventListener("keyup", (e) => {
    if (secondPass.value !== firstPass.value) {
        passwordNotice.textContent = "* Passwords do not match"
        passwordMatch = false;
    } else if (secondPass.value === "" && firstPass.value === "") {
        passwordNotice.textContent = "";
        passwordMatch = true;
    } else {
        passwordNotice.textContent = "";
        passwordMatch = true;
    }
})


