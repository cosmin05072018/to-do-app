const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");

setThemeSection.addEventListener("click", () => {
    const isDarkTheme =
        body.style.backgroundImage === 'url("/storage/bg-desktop-dark.jpg")';

    body.style.backgroundImage = isDarkTheme
        ? 'url("/storage/bg-desktop-light.jpg")'
        : 'url("/storage/bg-desktop-dark.jpg")';
    body.style.backgroundColor = isDarkTheme
        ? "hsl(0, 0%, 98%)"
        : "hsl(235, 21%, 11%)";
});

