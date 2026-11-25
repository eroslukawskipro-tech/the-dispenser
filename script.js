

const gate = document.getElementById("gate");
const yes = document.getElementById("age-yes");
const no = document.getElementById("age-no");

try {
  if (sessionStorage.getItem("td-age") === "yes") {
    gate?.classList.add("hidden");
  }
} catch (error) {
  console.warn("Session storage indisponible.");
}

yes?.addEventListener("click", () => {
  try {
    sessionStorage.setItem("td-age", "yes");
  } catch (error) {}
  gate?.classList.add("hidden");
});

no?.addEventListener("click", () => {
  const box = gate?.querySelector(".gate-box");
  if (box) {
    box.innerHTML = "<h2>ACCÈS REFUSÉ</h2><p>Ce site est réservé aux personnes majeures.</p>";
  }
});

const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");

toggle?.addEventListener("click", () => {
  const opened = nav?.classList.toggle("active");
  toggle.setAttribute("aria-expanded", String(Boolean(opened)));
});

nav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    toggle?.setAttribute("aria-expanded", "false");
  });
});
