const passwordInput = document.getElementById("passwordinput");
const unlockButton = document.getElementById("unlockbtn");
const updateSection = document.getElementById("updatecta");

const headlineInput = document.getElementById("headlineinput");
const updateButton = document.getElementById("updatebtn");
const ctaHeadline = document.getElementById("ctaheadline");
const quoteButton = document.getElementById("quotebtn");

const correctPassword = "JLR2026";

unlockButton.addEventListener("click", function () {
    const enteredPassword = passwordInput.value.trim();

    if (enteredPassword === correctPassword) {
        updateSection.style.display = "block";
        alert("Access granted.");
    } else {
        alert("Incorrect password.");
    }

    passwordInput.value = "";
});

updateButton.addEventListener("click", function () {
    const newHeadline = headlineInput.value.trim();

    if (newHeadline !== "") {
        ctaHeadline.textContent = newHeadline;
        alert("CTA headline updated.");
    } else {
        alert("Please enter a new headline.");
    }

    headlineInput.value = "";
});

quoteButton.addEventListener("click", function () {
    window.location.href = "mailto:jlrupholstery@gmail.com?subject=Free%20Quote%20Request&body=Hello%20JLR%20Upholstery,%20I%20would%20like%20to%20request%20a%20free%20quote.";
});