// Scroll Reveal
const sections = document.querySelectorAll(".fade-section");

const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < triggerBottom) {
            section.classList.add("active");
        }
    });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

// CTA Buttons
const buttons = document.querySelectorAll(".primary-btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        alert("Thank you for choosing Success Flight Educational Services. We will contact you shortly.");
    });
});
