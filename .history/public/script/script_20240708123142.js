$(document).ready(function () {
    const body = document.querySelector("body");
    const setThemeSection = document.querySelector(".set-theme");
    const icon = document.querySelector(".icon");

    const darkIconUrl = "/storage/icon-moon.svg";
    const lightIconUrl = "/storage/icon-sun.svg";

    setThemeSection.addEventListener("click", () => {
        const isLightTheme =
            body.style.backgroundImage ===
            'url("/storage/bg-desktop-light.jpg")';

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
    function updateTaskList() {
        $.get("{{ route('toDoApp') }}", function (data) {
            $("#taskList").empty(); // Golește lista curentă de task-uri

            // Adaugă task-urile din răspunsul AJAX în lista de task-uri
            $.each(data.tasks, function (index, task) {
                $("#taskList").append("<li>" + task.task_name + "</li>");
            });
        });
    }

    // Apelăm funcția pentru actualizarea listei de task-uri la încărcarea paginii
    updateTaskList();
});
