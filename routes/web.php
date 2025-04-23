<?php

use App\Http\Controllers\DashboardController;
use App\Http\Controllers\GroupController;
use App\Http\Controllers\ProfileController;
use App\Http\Middleware\EnsureUserIsOwnerMiddleware;
use App\Http\Middleware\EnsureUserIsOwnerOrAdminMiddleware;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', [DashboardController::class, 'index'])->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';

Route::get('/groups/{id}', [GroupController::class, 'showUserGroup'])->name('users.group');
Route::put('/groups/{id}', [GroupController::class, 'updateGroup'])->name('update.group');
Route::delete('/groups/{id}', [GroupController::class, 'deleteGroup'])->name('delete.group');
Route::post('/groups/create', [GroupController::class, 'createGroup'])->name('create.group');

Route::post('/groups/{id}/invitation/create', [GroupController::class, 'createInvitationCode'])->name('create.group.invitation-code');
Route::post('/groups/invitation/{code}/join', [GroupController::class, 'joinGroup'])->name('create.joinGroup');
