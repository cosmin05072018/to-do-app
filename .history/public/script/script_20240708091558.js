const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");
const icon = document.querySelector('.icon');


setThemeSection.addEventListener("click", () => {
    const isDarkTheme =
        body.style.backgroundImage === 'url("/storage/bg-desktop-light.jpg")';

    const isSunIcon = icon.src;
    console.log(isSunIcon);

    body.style.backgroundImage = isDarkTheme
        ? 'url("/storage/bg-desktop-dark.jpg")'
        : 'url("/storage/bg-desktop-light.jpg")';
    body.style.backgroundColor = isDarkTheme
        ? "hsl(235, 21%, 11%)"
        : "hsl(0, 0%, 98%)";
});
