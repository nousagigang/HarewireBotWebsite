const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
const site = document.getElementById("site");
const menuButton = document.getElementById("menu-button");
const nav = document.getElementById("site-nav");

function startHarewireBot() {
  startScreen.classList.add("is-hidden");
  site.classList.add("is-visible");
  site.setAttribute("aria-hidden", "false");

  // Put focus into the page after the intro transition.
  window.setTimeout(() => {
    document.querySelector(".hero h2")?.focus?.();
  }, 900);
}

startButton.addEventListener("click", startHarewireBot);

document.addEventListener("keydown", (event) => {
  if (
    !startScreen.classList.contains("is-hidden") &&
    (event.key === "Enter" || event.key === " ")
  ) {
    event.preventDefault();
    startHarewireBot();
  }
});

menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

// Add a subtle terminal-style reveal when content enters the viewport.
const revealItems = document.querySelectorAll(".panel, .warning-panel, .journey-card, .final-message");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-seen");
    observer.unobserve(entry.target);
  });
}, { threshold: 0.08 });

revealItems.forEach((item) => observer.observe(item));
