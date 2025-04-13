document.addEventListener("DOMContentLoaded", () => {
  const themeToggle = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;
  const icon = themeToggle.querySelector("i");

  // Check for saved theme preference
  const savedTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-bs-theme", savedTheme);
  updateIcon(savedTheme === "dark");

  // Theme toggle handler
  themeToggle.addEventListener("click", () => {
    const currentTheme = htmlElement.getAttribute("data-bs-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    htmlElement.setAttribute("data-bs-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateIcon(newTheme === "dark");
  });

  function updateIcon(isDark) {
    icon.className = isDark ? "bi bi-sun" : "bi bi-moon-stars";
  }
});

// Handle sidebar toggle for mobile
document.addEventListener("DOMContentLoaded", () => {
  const sidebarToggle = document.querySelector('[data-bs-toggle="sidebar"]');
  if (sidebarToggle) {
    sidebarToggle.addEventListener("click", () => {
      document.querySelector(".sidebar").classList.toggle("show");
    });
  }
});
