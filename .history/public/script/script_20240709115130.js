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
    $.ajax({
        url: "/getTasks",
        type: "GET",
        dataType: "json",
        success: function (data) {

            if(!data.length){
                // return;
            }

            const $totalItems = $(".total-items");
            const $statusTasks = $(".status-tasks");
            const $clearCompleted = $('.clear-completed');

            $totalItems.text(`${data.length} items left`);

            const statusTasksHtml = `
                <ul class="list-status">
                    <li class="active-link-status">All</li>
                    <li>Active</li>
                    <li>Completed</li>
                </ul>`;

            $statusTasks.html(statusTasksHtml);
            const clearCompletedHtml = '<button class="clear-completed">Clear Completed</button>';
            $clearCompleted.html(clearCompletedHtml);

            let taskList = $("#taskList");
            taskList.empty();

            $.each(data, function (index, task) {
                let li = $("<li>").text(task.task_name);
                let circleDiv = $("<div>").addClass("circle-task");

                li.prepend(circleDiv);
                taskList.append(li);
            });
        },
        error: function (xhr, status, error) {
            console.log(error);
        },
    });

    $("#addTaskForm").submit(function (event) {
        location.reload();
        event.preventDefault();

        let url = $(this).attr("action");
        let formData = {
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
});
