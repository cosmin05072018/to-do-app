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
                <h1>TO DO</h1>
                <div class="set-theme">
                    <img src="{{ storage_path().'/app/public/icon-sun.svg' }}" alt="" title=""></a>
                </div>
            </div>
        </div>
    </body>
</html>
