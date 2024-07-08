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
                <img class="icon" src="{{ asset('storage/icon-sun.svg') }}" alt="icon">
            </div>
        </div>
        <form action="{{ route('/addTask') }}" method="POST" class="add-to-do">
            @csrf
            <div class="circle"></div>
            <input type="text" placeholder="Create a new todo..." name="todo">
            <button type="submit">a</button>
        </form>
    </div>

    <script src="{{ asset('script/script.js') }}"></script>

</body>

</html>
