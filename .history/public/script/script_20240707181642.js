const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");

setThemeSection.addEventListener("click", () => {
    // Verifică dacă imaginea de fundal actuală este cea pentru temă întunecată
    if (body.style.backgroundImage === 'url("/storage/bg-desktop-dark.jpg")') {
        // Schimbă imaginea de fundal la cea pentru temă luminoasă
        body.style.backgroundImage = 'url("/storage/bg-desktop-light.jpg")';
        // Schimbă culoarea de fundal la o nuanță de gri deschis
        body.style.backgroundColor = "hsl(0, 0%, 98%)";
    } else {
        // Schimbă imaginea de fundal la cea pentru temă întunecată
        body.style.backgroundImage = 'url("/storage/bg-desktop-dark.jpg")';
        // Schimbă culoarea de fundal la o nuanță de negru închis
        body.style.backgroundColor = "hsl(235, 21%, 11%)";
    }
});
