const passwordInput = document.getElementById("passwordinput");
const unlockButton = document.getElementById("unlockbtn");
const updateSection = document.getElementById("updatecta");
const hamburger = document.getElementById("hamburgerbtn");
const navlinks = document.getElementById("navlinks");

const quoteButton = document.getElementById("quotebtn");
const submitbutton = document.getElementById("submitbtn");


quoteButton.addEventListener("click", function () {
   document.location.href = "#contactus";
});

submitbutton.addEventListener("click", function () {
    const tname = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    const mailtoLink = `mailto:jlrupholstery@gmail.com?subject=Free%20Estimate%20Request&body=${message}%0A%0AFrom:%20${tname}%20(Phone:%20${phone})`;
    window.location.href = mailtoLink;
});

hamburger.addEventListener("click", function () {
    navlinks.classList.toggle("open");
});


navlinks.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        navlinks.classList.remove("open");
    });
});