
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// Mobile navigation
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");

  const isOpen = nav.classList.contains("active");
  menuToggle.setAttribute("aria-expanded", isOpen);
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

// Close menu after clicking a navigation link
document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation");
    menuToggle.textContent = "☰";
  });
});

// Automatic copyright year
document.getElementById("year").textContent =
  new Date().getFullYear();
