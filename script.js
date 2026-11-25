
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

toggle?.addEventListener("click", () => {
  nav?.classList.toggle("active");
  toggle.setAttribute(
    "aria-expanded",
    String(nav?.classList.contains("active"))
  );
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
