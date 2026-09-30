
// ================= FOOTER YEAR =================

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// ================= PROJECTS DATA =================
// Projects are listed best first. To add or edit a project, change this list.
// Add your links in "github" and "live". Leave them as "" to hide a link.

const projects = [
    {
        name: "USMÉRAN",
        type: "Premium fashion e-commerce website",
        description:
            "A premium men's fashion store with a component-based React frontend styled with Tailwind CSS, and a Node.js and Express server that provides the product API.",
        points: [
            "Product catalog with search, filters and detail pages",
            "Shopping cart, wishlist and checkout flow",
            "Reusable React components and a fully responsive layout",
            "REST API endpoints built with Express.js"
        ],
        tags: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Node.js", "Express"],
        github: "",
        live: ""
    },
    {
        name: "AUREN",
        type: "MERN stack e-commerce store",
        description:
            "A clothing store built with the MERN stack: a component-based React frontend, and an Express.js API serving product data from MongoDB.",
        tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
        github: "",
        live: ""
    },
    {
        name: "VESTRA",
        type: "Full-stack e-commerce platform",
        description:
            "A complete unisex clothing store with category filtering, cart, secure accounts and a checkout that places real orders. Deployed live on Railway.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "JWT", "bcrypt"],
        github: "https://github.com/muhammadusman-dev-0/vestra",
        live: "https://vestra-production-fc74.up.railway.app/category.html?category=Men"
    },
    {
        name: "Static E-Commerce Website",
        type: "Responsive multi-page website",
        description:
            "A responsive online store built with only HTML, CSS and vanilla JavaScript, with product listing, cart and dynamic updates.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: ""
    },
    {
        name: "TaskFlow",
        type: "Task management application",
        description:
            "Create, update and track tasks. The frontend talks to Express REST routes, with routes and business logic kept separate.",
        tags: ["HTML", "CSS", "JavaScript", "Node.js", "Express"],
        github: "https://github.com/muhammadusman-dev-0/TaskFlow",
        live: ""
    },
    {
        name: "StudentHub",
        type: "Student management system",
        description:
            "Add, view, update and delete student records, with data updating without page reloads through Express API routes.",
        tags: ["HTML", "CSS", "JavaScript", "Express", "CRUD"],
        github: "",
        live: ""
    },
    {
        name: "Python Student Management System",
        type: "Console application",
        description:
            "An object-oriented Python app that adds, views and updates student records, saved between runs with file handling.",
        tags: ["Python", "OOP", "File Handling"],
        github: "",
        live: ""
    },
    {
        name: "Expense Tracker",
        type: "Web application",
        description:
            "Record and categorize daily expenses and see a running total in a clean, simple interface.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: ""
    },
    {
        name: "To-Do List App",
        type: "Beginner project",
        description:
            "Add, edit, delete and complete tasks, with tasks saved in the browser using localStorage.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: ""
    },
    {
        name: "Calculator App",
        type: "Beginner project",
        description:
            "A responsive calculator for basic arithmetic with a clean interface and input validation.",
        tags: ["HTML", "CSS", "JavaScript"],
        github: "",
        live: ""
    }
];


// ================= RENDER PROJECTS =================

function linksHtml(project) {
    const links = [];

    if (project.github) {
        links.push(
            `<a href="${project.github}" target="_blank" rel="noopener noreferrer" class="project-link">GitHub ↗</a>`
        );
    }

    if (project.live) {
        links.push(
            `<a href="${project.live}" target="_blank" rel="noopener noreferrer" class="project-link">Live demo ↗</a>`
        );
    }

    return links.length ? `<div class="project-links">${links.join("")}</div>` : "";
}

function tagsHtml(tags) {
    return `<div class="project-tags">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function featuredCard(project, isFirst) {
    const points = isFirst && project.points
        ? `<ul class="project-points">${project.points.map((point) => `<li>${point}</li>`).join("")}</ul>`
        : "";

    return `
        <article class="project-card${isFirst ? " featured" : ""}">
            <div class="project-content">
                <p class="project-type">${project.type}</p>
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                ${tagsHtml(project.tags)}
                ${linksHtml(project)}
            </div>
            ${points}
        </article>
    `;
}

function projectRow(project) {
    return `
        <article class="project-row">
            <div>
                <h4>${project.name}</h4>
                <p class="project-type">${project.type}</p>
            </div>
            <div>
                <p class="row-desc">${project.description}</p>
                ${tagsHtml(project.tags)}
            </div>
            <div class="row-links">${linksHtml(project)}</div>
        </article>
    `;
}

const featuredContainer = document.getElementById("featured-projects");
const moreContainer = document.getElementById("more-projects");

if (featuredContainer && moreContainer) {
    featuredContainer.innerHTML = projects
        .slice(0, 3)
        .map((project, index) => featuredCard(project, index === 0))
        .join("");

    moreContainer.innerHTML = projects.slice(3).map(projectRow).join("");
}


// ================= NAVBAR ACTIVE LINK =================

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }
    });
});


// ================= SMOOTH SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", function (event) {
        const targetId = this.getAttribute("href");

        if (targetId === "#") {
            return;
        }

        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            event.preventDefault();

            targetElement.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});