const body = document.querySelector('body');
const setThemeSection = document.querySelector('.set-theme');


setThemeSection.addEventListener('click', ()=> {
    body.style.backgroundImage = "url('/storage/bg-desktop-light.jpg')";
})
