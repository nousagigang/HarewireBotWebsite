//const menuButton = document.getElementById("menu-button");
//const nav = document.getElementById("site-nav");
//menuButton.addEventListener("click", () => {
//  const open = nav.classList.toggle("is-open");
//  menuButton.setAttribute("aria-expanded", String(open));
//});
//nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
//  nav.classList.remove("is-open");
//  menuButton.setAttribute("aria-expanded", "false");
//}));

const menuButton = document.getElementById("menu-button");
const siteNav = document.getElementById("site-nav");
menuButton.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});
siteNav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});
