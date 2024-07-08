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

$(document).ready(function () {
    $("#addTaskForm").submit(function (event) {
        event.preventDefault();

        var url = $(this).attr("action");
        var formData = {
            task: $("#task").val(),
            _token: $("input[name=_token]").val(),
        };

        $.ajax({
            type: "POST",
            url: url,
            data: formData,
            dataType: "json",
            success: function (response) {
                console.log(response);
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            },
        });
    });
    $.ajax({
        url: "{!! route('/toDoApp') !!}",
        type: "GET",
        dataType: "json",
        success: function (data) {
            // Handle the response data
            // For this example, we simply display it in the data-container div
            var html = '';
            $.each(data, function(index, item) {
                html += '<p>' + item.name + '</p>';
            });
            $('#cf-data-container').html(html);
        },
        error: function (xhr, status, error) {
            // Handle errors, if any
            console.log(error);
        }
    });
});
