// =========================
// CURRENT YEAR
// =========================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// =========================
// NAVBAR ACTIVE LINK
// =========================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.style.color = "";

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.style.color = "#4f6ef7";
        }

    });

});


// =========================
// SIMPLE REVEAL ANIMATION
// =========================

const revealElements = document.querySelectorAll(
    ".section-heading, .about-text, .stat-card, .skill-card, .project-card, .contact-box"
);

const revealObserver = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("revealed");

                revealObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.1
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});