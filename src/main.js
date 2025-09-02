import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const openMenu = document.getElementById("open-menu");
  const closeMenu = document.getElementById("close-menu");
  const mobileMenu = document.getElementById("mobile-nav");

  openMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("close-nav");
    mobileMenu.classList.add("open-nav");
  });

  closeMenu.addEventListener("click", () => {
    mobileMenu.classList.remove("open-nav");
    mobileMenu.classList.add("close-nav");
  });

  const mobileLinks = document.querySelectorAll("[role=menuitem]");
  mobileLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("open-nav");
      mobileMenu.classList.add("close-nav");
    });
  });
});

window.addEventListener("load", () => {
  document.body.classList.remove("preload");
});

const tabs = document.querySelectorAll("[role=tab]");
const sections = document.querySelectorAll("[role=tabpanel]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((tab) => tab.setAttribute("aria-selected", "false"));

    tab.setAttribute("aria-selected", "true");
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    sections.forEach((section) => {
      section.setAttribute("aria-hidden", "true");
      section.classList.add("inactive-section");
      section.classList.remove("active-section");
    });

    const targetSection = document.getElementById(tab.dataset.target);
    targetSection.setAttribute("aria-hidden", "false");
    targetSection.classList.add("active-section");
    targetSection.classList.remove("inactive-section");
  });
});
