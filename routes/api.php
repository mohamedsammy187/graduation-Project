<?php
use App\Http\Controllers;
use App\Http\Controllers\RecipeController;
use Illuminate\Support\Facades\Route;


Route::get('/recipes', [RecipeController::class, 'index']);
Route::post('/recipes', [RecipeController::class, 'store']);

?>