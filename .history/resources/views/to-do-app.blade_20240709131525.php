<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>To Do APP</title>
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <meta name="csrf-token" content="{{ csrf_token() }}"></head>

<body>
    <div class="container">
        <div class="section-top">
            <h1>TODO</h1>
            <div class="set-theme">
                <img class="icon" src="{{ asset('storage/icon-sun.svg') }}" alt="icon">
            </div>
        </div>
        <form action="{{ route('addTask') }}" method="POST" class="add-to-do" id="addTaskForm">
            @csrf
            <div class="circle"></div>
            <div class="insert-task">
                <input type="text" placeholder="Create a new todo..." name="task" id="task">
                <button class="add-task" type="submit">add</button>
            </div>
        </form>
        <ul class="list" id="taskList">
        </ul>
        <div class="section-bottom">
            <div class="total-items"></div>
            <div class="status-tasks"></div>
            <div class="clear-completed"></div>
        </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="{{ asset('script/script.js') }}"></script>

</body>

</html>
