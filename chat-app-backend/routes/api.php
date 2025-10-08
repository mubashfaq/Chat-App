<?php

use App\Http\Controllers\Auth\RegisteredController;
use App\Http\Controllers\Auth\PasswordResetController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\SocialAuthController;




// Public routes
Route::post('/register', [RegisteredController::class, 'register']);
Route::post('/login', [RegisteredController::class, 'login']);

// Social login routes
Route::post('/auth/{provider}/token', [RegisteredController::class, 'socialLogin']);

// Protected routes (your existing routes)
Route::middleware('auth:sanctum')->group(function () {
    Route::post('/logout', [RegisteredController::class, 'logout']);
    Route::get('/user', [RegisteredController::class, 'user']);
    Route::put('/update-profile', [RegisteredController::class, 'updateProfile']);
    Route::put('/change-password', [RegisteredController::class, 'changePassword']);
});


Route::post('/forgot-password', [PasswordResetController::class, 'forgotPassword']);
Route::post('/reset-password', [PasswordResetController::class, 'resetPassword'])->name('password.reset');
