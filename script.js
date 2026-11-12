const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });
}
document.querySelectorAll(".nav-link[href^='#']").forEach(link => {
  link.addEventListener("click", () => {
    document.querySelectorAll(".nav-link").forEach(item => item.classList.remove("active"));
    link.classList.add("active");
    navLinks?.classList.remove("open");
    menuToggle?.setAttribute("aria-expanded", "false");
  });
});
const year = document.getElementById("year");
if (year) year.textContent = new Date().getFullYear();