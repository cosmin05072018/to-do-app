<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

class toDoApp extends Controller
{
    public function toDoApp(){
        return view('to-do-app');
    }

    public function addTask(Request $request){

    }
}
