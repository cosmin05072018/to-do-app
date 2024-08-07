<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\toDoApp;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', [toDoApp::class, 'toDoApp'])->name('toDoApp');
Route::get('/', [toDoApp::class, 'getTasks'])->name('getTasks');

Route::post('addTask', [toDoApp::class, 'addTask'])->name('addTask');
