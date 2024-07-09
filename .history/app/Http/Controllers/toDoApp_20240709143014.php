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

    public function getTasks()
    {
        $tasks = Task::all();

        return response()->json($tasks);
    }

    public function addTask(Request $request)
    {
        $validatedData = $request->validate([
            'task' => 'required|string|max:255',
        ]);

        $newTask = new Task();
        $newTask->task_name = $validatedData['task'];
        $newTask->save();

        return response()->json(['success' => true, 'message' => 'Task added successfully']);
    }

    public function checkTask(Request $request)
    {

        $id = $request->idTask;

        $task = Task::find($id);

        if ($task) {
            $task->is_completed = !$task->is_completed;
            $task->save();
        }

        return redirect()->back();
    }
}
