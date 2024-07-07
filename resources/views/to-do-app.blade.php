<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>To Do APP</title>
        <link rel="stylesheet" href="{{ asset('css/style.css') }}">

    </head>
    <body>
        <div class="container">
            <div class="section-top">
                <h1>TODO</h1>
                <div class="set-theme">
                    <img src="{{ asset('storage/icon-sun.svg') }}" alt="Example Image">
                </div>
            </div>
            <div class="add-to-do">
                <div class="circle"></div>
                <input type="text" placeholder="Create a new todo..." name="todo">
            </div>
        </div>

        <script src="{{ asset('script/script.js') }}"></script>
    </body>
</html>
