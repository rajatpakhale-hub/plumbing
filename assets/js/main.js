const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");
const currentPage = document.body.dataset.page;
const navLinks = document.querySelectorAll(".site-nav a");
const yearSpan = document.getElementById("year");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });
}

if (currentPage) {
  navLinks.forEach((link) => {
    const path = link.getAttribute("href") || "";
    if (currentPage === "home" && path === "index.html") {
      link.classList.add("active");
    }
    if (currentPage === "services" && path.includes("services.html")) {
      link.classList.add("active");
    }
    if (currentPage === "about" && path.includes("about.html")) {
      link.classList.add("active");
    }
    if (currentPage === "contact" && path.includes("contact.html")) {
      link.classList.add("active");
    }
  });
}

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
