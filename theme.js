// theme.js
(function () {
  const STORAGE_KEY = "theme";

  function getPreferredTheme() {
    // Prefer light unless user explicitly saved a choice
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "dark" || saved === "light" ? saved : "light";
  }

  function applyTheme(theme) {
    if (theme === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
  }

  function currentTheme() {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function labelFor(theme) {
    // Show the action the user can take next
    return theme === "dark" ? "Light mode" : "Dark mode";
  }

  // Apply immediately to avoid flash
  applyTheme(getPreferredTheme());

  // Wire up toggle after DOM is ready
  document.addEventListener("DOMContentLoaded", function () {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) return;

    toggle.textContent = labelFor(currentTheme());

    toggle.addEventListener("click", function (e) {
      e.preventDefault();
      const next = currentTheme() === "dark" ? "light" : "dark";
      localStorage.setItem(STORAGE_KEY, next);
      applyTheme(next);
      toggle.textContent = labelFor(next);
    });
  });
})();
