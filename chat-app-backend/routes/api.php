<?php

use App\Http\Controllers\Auth\RegisteredController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::post('/register', [RegisteredController::class, 'register']);
Route::post('/login', [RegisteredController::class, 'login']);

// Protected routes
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [RegisteredController::class, 'logout']);
    Route::get('/user', [RegisteredController::class, 'user']);
    Route::put('/update-profile', [RegisteredController::class, 'updateProfile']);
    Route::put('/change-password', [RegisteredController::class, 'changePassword']);
});
