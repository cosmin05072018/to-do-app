const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");
const icon = document.querySelector(".icon");

const darkIconUrl = "{{ asset('storage/icon-moon.svg') }}";
const lightIconUrl = "{{ asset('storage/icon-sun.svg') }}";

setThemeSection.addEventListener("click", () => {
    const isDarkTheme =
        body.style.backgroundImage === 'url("/storage/bg-desktop-light.jpg")';

    icon.src = isLightTheme ? darkIconUrl : lightIconUrl;

    body.style.backgroundImage = isDarkTheme
        ? 'url("/storage/bg-desktop-dark.jpg")'
        : 'url("/storage/bg-desktop-light.jpg")';
    body.style.backgroundColor = isDarkTheme
        ? "hsl(235, 21%, 11%)"
        : "hsl(0, 0%, 98%)";
});
