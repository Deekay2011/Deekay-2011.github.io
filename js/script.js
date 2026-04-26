document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", function (e) {
        e.preventDefault(); // stops page refresh

        alert("Message sent successfully!");

        form.reset(); // clears the form
    });
});