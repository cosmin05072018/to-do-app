const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");

setThemeSection.addEventListener("click", () => {

    if (body.style.backgroundImage === 'url("/storage/bg-desktop-dark.jpg")') {
        body.style.backgroundImage = 'url("/storage/bg-desktop-light.jpg")';
        body.style.backgroundColor = "hsl(0, 0%, 98%)";
    } else {
        body.style.backgroundImage = 'url("/storage/bg-desktop-dark.jpg")';
        body.style.backgroundColor = "hsl(235, 21%, 11%)";
    }
});
