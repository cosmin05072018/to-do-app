<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Routing\Controller;

use App\Models\Task;

class toDoApp extends Controller
{
    public function toDoApp()
    {
        return view('to-do-app');
    }

    public function addTask(Request $request)
    {
        // Validează și salvează datele din cererea AJAX
        $validatedData = $request->validate([
            'task' => 'required|string|max:255',
        ]);

        // Creează o nouă instanță a modelului Task
        $newTask = new Task();
        $newTask->task_name = $validatedData['task'];
        $newTask->save();

        // Returnează un răspuns JSON pentru cererea AJAX
        return response()->json(['success' => true, 'message' => 'Task added successfully']);
    }
}
