const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");

const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");

setThemeSection.addEventListener("click", () => {
    const isDarkTheme = body.classList.contains("dark-theme");

    body.classList.toggle("dark-theme", !isDarkTheme);
    body.classList.toggle("light-theme", isDarkTheme);
});

