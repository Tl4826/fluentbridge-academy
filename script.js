
const menuButton = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuButton.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("active");

    menuButton.setAttribute("aria-expanded", isOpen);
    menuButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
    menuButton.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
        menuButton.setAttribute("aria-expanded", "false");
        menuButton.setAttribute("aria-label", "Open navigation menu");
        menuButton.textContent = "☰";
    });
});

const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");

contactForm.addEventListener("submit", function(event) {
    event.preventDefault();

    formStatus.textContent =
        "Demo only: Your message was not sent.";

    contactForm.reset();
});
