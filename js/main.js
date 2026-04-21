document.addEventListener("DOMContentLoaded", () => {
    let currentLang = "tr";

    // ── DOM refs ──
    const langBtn = document.getElementById("lang-btn");
    const navbar = document.querySelector(".navbar");
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("nav-links");

    // ── Language toggle ──
    function applyLanguage(lang) {
        currentLang = lang;
        const t = translations[lang];

        // Nav
        document.getElementById("nav-about").textContent = t.navAbout;
        document.getElementById("nav-education").textContent = t.navEducation;
        document.getElementById("nav-experience").textContent = t.navExperience;
        document.getElementById("nav-projects").textContent = t.navProjects;
        document.getElementById("nav-contact").textContent = t.navContact;
        langBtn.textContent = t.langToggle;

        // Hero
        document.getElementById("hero-greeting").textContent = t.heroGreeting;
        document.getElementById("hero-name").textContent = t.heroName;
        document.getElementById("hero-title").textContent = t.heroTitle;
        document.getElementById("hero-subtitle").textContent = t.heroSubtitle;
        document.getElementById("hero-cta").textContent = t.heroCTA;
        document.getElementById("hero-cv").textContent = t.heroCV;

        // About
        document.getElementById("about-title").textContent = t.aboutTitle;
        document.getElementById("about-text").textContent = t.aboutText;
        document.getElementById("skills-title").textContent = t.skillsTitle;
        document.getElementById("skill-languages-label").textContent = t.skillLanguages;
        document.getElementById("skill-languages-val").textContent = t.skillLanguagesVal;
        document.getElementById("skill-frameworks-label").textContent = t.skillFrameworks;
        document.getElementById("skill-frameworks-val").textContent = t.skillFrameworksVal;
        document.getElementById("skill-mlai-label").textContent = t.skillMlAi;
        document.getElementById("skill-mlai-val").textContent = t.skillMlAiVal;
        document.getElementById("skill-cloud-label").textContent = t.skillCloud;
        document.getElementById("skill-cloud-val").textContent = t.skillCloudVal;
        document.getElementById("skill-tools-label").textContent = t.skillTools;
        document.getElementById("skill-tools-val").textContent = t.skillToolsVal;

        // Education
        document.getElementById("education-title").textContent = t.educationTitle;
        document.getElementById("edu-school").textContent = t.eduSchool;
        document.getElementById("edu-degree").textContent = t.eduDegree;
        document.getElementById("edu-date").textContent = t.eduDate;
        document.getElementById("edu-desc").textContent = t.eduDesc;

        // Experience
        document.getElementById("experience-title").textContent = t.experienceTitle;
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`exp${i}-title`).textContent = t[`exp${i}Title`];
            document.getElementById(`exp${i}-company`).textContent = t[`exp${i}Company`];
            document.getElementById(`exp${i}-date`).textContent = t[`exp${i}Date`];
            const bulletList = document.getElementById(`exp${i}-bullets`);
            bulletList.innerHTML = "";
            t[`exp${i}Bullets`].forEach((b) => {
                const li = document.createElement("li");
                li.textContent = b;
                bulletList.appendChild(li);
            });
        }

        // Projects
        document.getElementById("projects-title").textContent = t.projectsTitle;
        for (let i = 1; i <= 5; i++) {
            document.getElementById(`proj${i}-title`).textContent = t[`proj${i}Title`];
            document.getElementById(`proj${i}-desc`).textContent = t[`proj${i}Desc`];
            document.getElementById(`proj${i}-tech`).textContent = t[`proj${i}Tech`];
        }

        // Contact
        document.getElementById("contact-title").textContent = t.contactTitle;
        document.getElementById("contact-subtitle").textContent = t.contactSubtitle;
        document.getElementById("contact-email-label").textContent = t.contactEmail;
        document.getElementById("contact-linkedin-label").textContent = t.contactLinkedIn;
        document.getElementById("contact-linkedin-text").textContent = t.contactLinkedInText;
        document.getElementById("contact-github-label").textContent = t.contactGitHub;
        document.getElementById("contact-github-text").textContent = t.contactGitHubText;

        // Footer
        document.getElementById("footer-text").textContent = t.footerText;
    }

    langBtn.addEventListener("click", () => {
        applyLanguage(currentLang === "tr" ? "en" : "tr");
    });

    // ── Navbar scroll effect ──
    window.addEventListener("scroll", () => {
        navbar.classList.toggle("scrolled", window.scrollY > 50);
    });

    // ── Hamburger menu ──
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });

    // Close menu on link click
    navLinks.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
        });
    });

    // ── Scroll reveal ──
    const revealEls = document.querySelectorAll(".reveal");
    const revealObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        { threshold: 0.12 }
    );
    revealEls.forEach((el) => revealObserver.observe(el));

    // ── Smooth scroll for anchor links ──
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        });
    });

    // ── Init ──
    applyLanguage("tr");
});
