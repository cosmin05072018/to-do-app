const body = document.querySelector("body");
const setThemeSection = document.querySelector(".set-theme");
const icon = document.querySelector(".icon");

const darkIconUrl = "/storage/icon-moon.svg";
const lightIconUrl = "/storage/icon-sun.svg";

setThemeSection.addEventListener("click", () => {
    const isLightTheme =
        body.style.backgroundImage === 'url("/storage/bg-desktop-light.jpg")';

    setTimeout(() => {
        icon.src = isLightTheme ? lightIconUrl : darkIconUrl;
    }, 1000);

    body.style.backgroundImage = isLightTheme
        ? 'url("/storage/bg-desktop-dark.jpg")'
        : 'url("/storage/bg-desktop-light.jpg")';
    body.style.backgroundColor = isLightTheme
        ? "hsl(235, 21%, 11%)"
        : "hsl(0, 0%, 98%)";
});

$(document).ready(function() {
    $('#addTaskForm').submit(function(event) {
        event.preventDefault(); // Opriți trimiterea formularului în mod tradițional

        var url = $(this).attr('action'); // Obțineți URL-ul acțiunii formularului
        var formData = {
            task: $('#task').val(), // Obțineți valoarea câmpului de task din formular
            _token: $('input[name=_token]').val() // Obțineți tokenul CSRF
        };

        // Trimiteți datele formularului către controller folosind AJAX
        $.ajax({
            type: 'POST',
            url: url,
            data: formData,
            dataType: 'json', // Tipul de date așteptat în răspuns
            success: function(response) {
                console.log(response); // În caz de succes, afișați răspunsul
                // Aici puteți face alte acțiuni, cum ar fi actualizarea UI-ului
            },
            error: function(xhr, status, error) {
                console.error(xhr.responseText); // În caz de eroare, afișați mesajul de eroare
            }
        });
    });
});
