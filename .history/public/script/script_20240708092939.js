// const body = document.querySelector("body");
// const setThemeSection = document.querySelector(".set-theme");
// const icon = document.querySelector(".icon");

// const darkIconUrl = "{{ asset('storage/icon-moon.svg') }}";
// const lightIconUrl = "{{ asset('storage/icon-sun.svg') }}";

// setThemeSection.addEventListener("click", () => {
//     const isLightTheme =
//         body.style.backgroundImage === 'url("/storage/bg-desktop-light.jpg")';

//     icon.src = isLightTheme ? darkIconUrl : lightIconUrl;

//     body.style.backgroundImage = isLightTheme
//         ? 'url("/storage/bg-desktop-dark.jpg")'
//         : 'url("/storage/bg-desktop-light.jpg")';
//     body.style.backgroundColor = isLightTheme
//         ? "hsl(235, 21%, 11%)"
//         : "hsl(0, 0%, 98%)";
// });


document.addEventListener("DOMContentLoaded", function() {
    const body = document.querySelector("body");
    const setThemeSection = document.querySelector(".set-theme");
    const icon = document.querySelector(".icon");

    setThemeSection.addEventListener("click", () => {
        const isLightTheme = body.classList.contains('light-theme');

        icon.src = isLightTheme ? darkIconUrl : lightIconUrl;

        body.style.backgroundImage = isLightTheme ? `url(${darkBgUrl})` : `url(${lightBgUrl})`;
        body.style.backgroundColor = isLightTheme ? "hsl(235, 21%, 11%)" : "hsl(0, 0%, 98%)";

        // Toggle theme classes
        body.classList.toggle('dark-theme', isLightTheme);
        body.classList.toggle('light-theme', !isLightTheme);
    });
});
