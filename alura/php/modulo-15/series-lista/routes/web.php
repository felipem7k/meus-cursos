<?php

use App\Http\Controllers\EpisodesController;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\SeasonsController;
use App\Http\Controllers\SeriesController;
use App\Http\Controllers\UsersController;
use App\Mail\SeriesCreated;
use Illuminate\Support\Facades\Route;

Route::middleware('autenticador')->group(function() {
    Route::get('/', function () {
        return redirect('/series');
    });
    Route::get('/series/{series}/seasons', [SeasonsController::class, 'index'])->name('seasons.index');
    Route::get('/seasons/{season}/episodes', [EpisodesController::class, 'index'])->name('episodes.index');
    Route::post('/seasons/{season}/episodes', [EpisodesController::class, 'update'])->name('episodes.update');
});

Route::resource('/series', SeriesController::class)->except(['show']);

// Route::controller(SeriesController::class)->group(function() {
//     Route::get('/series', [SeriesController::class, 'index'])->name('series.index');
//     Route::get('/series/criar', [SeriesController::class, 'create'])->name('series.create');
//     Route::post('/series/salvar', [SeriesController::class, 'store'])->name('series.store');
// });

Route::get('mail', function() {
    return new SeriesCreated(
        "Série de Teste",
        1,
        5,
        10
    );
});

Route::get('/login', [LoginController::class, 'index'])->name('login');
Route::post('/login', [LoginController::class, 'store'])->name('sign-in');
Route::get('/logout', [LoginController::class, 'destroy'])->name('logout');

Route::get('/register', [UsersController::class, 'create'])->name('users.create');
Route::post('/register', [UsersController::class, 'store'])->name('users.store');