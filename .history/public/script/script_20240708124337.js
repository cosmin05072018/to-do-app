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
        type: "GET",
        url: "toDoApp", // Ruta pentru a obține task-urile
        dataType: "json",
        success: function (data) {
            var taskList = $("#taskList");
            taskList.empty(); // Golește lista curentă de task-uri

            // Adaugă task-urile din răspunsul AJAX în lista de task-uri
            $.each(data.tasks, function (index, task) {
                var li = $("<li>").text(task.task_name);
                taskList.append(li);
            });
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        },
    });
});
