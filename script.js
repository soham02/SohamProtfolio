function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  const toggle = document.getElementById("dark-mode-toggle");
  const body = document.body;
  
  function setThemeIcon() {
    toggle.textContent = body.classList.contains("dark-mode") ? "☀️" : "🌙";
  }
  
  // Apply saved theme
  if (localStorage.getItem("theme") === "dark") {
    body.classList.add("dark-mode");
  }
  setThemeIcon();
  
  // Toggle theme
  toggle.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    localStorage.setItem("theme", body.classList.contains("dark-mode") ? "dark" : "light");
    setThemeIcon();
  });