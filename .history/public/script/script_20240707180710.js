const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");

setThemeSection.addEventListener("click", () => {
    if (body.style.backgroundImage === "url('/storage/bg-desktop-dark.jpg')") {
        body.style.backgroundImage = "url('/storage/bg-desktop-light.jpg')";
    } else {
        body.style.backgroundImage = "url('/storage/bg-desktop-dark.jpg')";
    }
});
