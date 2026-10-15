
const reducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// Scroll karne par sections animate honge
const revealElements = document.querySelectorAll(".reveal");

if (reducedMotion) {
  revealElements.forEach(element => {
    element.classList.add("visible");
  });
} else {
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -35px 0px"
    }
  );

  revealElements.forEach(element => {
    revealObserver.observe(element);
  });
}

// Hero section ka text automatically change hoga
const roleElement = document.getElementById("changing-role");

const roles = [
  "Experiences",
  "Identities",
  "Visuals",
  "Stories"
];

let roleIndex = 0;

if (roleElement && !reducedMotion) {
  setInterval(() => {
    roleElement.classList.add("changing");

    setTimeout(() => {
      roleIndex = (roleIndex + 1) % roles.length;
      roleElement.textContent = roles[roleIndex];
      roleElement.classList.remove("changing");
    }, 250);
  }, 2400);
}

// Mouse move par halka purple glow
const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow && matchMedia("(pointer: fine)").matches) {
  addEventListener("pointermove", event => {
    cursorGlow.style.left = event.clientX + "px";
    cursorGlow.style.top = event.clientY + "px";
  }, { passive: true });
}

// Mobile navigation menu
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

function closeMenu() {
  if (!menuToggle || !navLinks) return;

  menuToggle.setAttribute("aria-expanded", "false");
  navLinks.classList.remove("open");
  document.body.classList.remove("menu-open");
}

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen =
      menuToggle.getAttribute("aria-expanded") === "true";

    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    navLinks.classList.toggle("open", !isOpen);
    document.body.classList.toggle("menu-open", !isOpen);
  });

  document.querySelectorAll(".nav-link, .nav-cta")
    .forEach(link => {
      link.addEventListener("click", closeMenu);
    });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeMenu();
  });

  addEventListener("resize", () => {
    if (innerWidth > 680) closeMenu();
  });
}

// Scroll karne par active navigation link update hoga
const sections = document.querySelectorAll(
  "#home, #about, #work, #contact"
);

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        document.querySelectorAll(".nav-link")
          .forEach(link => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === "#" + entry.target.id
            );
          });
      });
    },
    {
      rootMargin: "-30% 0px -55% 0px"
    }
  );

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
}

console.log("Dev Portfolio loaded.");
