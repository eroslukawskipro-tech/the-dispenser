
/* ==================================
   THE DISPENSER — INTERACTIONS
   ================================== */

// VÉRIFICATION DE L'ÂGE

const gate = document.getElementById("gate");
const ageYes = document.getElementById("age-yes");
const ageNo = document.getElementById("age-no");

if (sessionStorage.getItem("td-age") === "yes") {
  gate?.classList.add("hidden");
}

ageYes?.addEventListener("click", () => {
  sessionStorage.setItem("td-age", "yes");
  gate?.classList.add("hidden");
});

ageNo?.addEventListener("click", () => {
  const box = gate?.querySelector(".gatebox");

  if (box) {
    box.innerHTML = `
      <div class="logo">THE <span>DISPENSER</span></div>
      <h2>Accès refusé.</h2>
      <p>Ce site est réservé aux personnes majeures.</p>
    `;
  }
});


// MENU MOBILE

const menuToggle = document.getElementById("menu-toggle");
const mainNav = document.getElementById("main-nav");

menuToggle?.addEventListener("click", () => {
  const isOpen = mainNav.classList.toggle("active");

  menuToggle.classList.toggle("active", isOpen);
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainNav?.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    mainNav.classList.remove("active");
    menuToggle?.classList.remove("active");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});


// ANIMATION AU DÉFILEMENT

const animatedElements = document.querySelectorAll(
  ".product, .values article, .section-heading, .story-content"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12
  });

  animatedElements.forEach(element => {
    element.classList.add("reveal");
    observer.observe(element);
  });
}


// ANNÉE AUTOMATIQUE

document.querySelectorAll("[data-year]").forEach(element => {
  element.textContent = new Date().getFullYear();
});
