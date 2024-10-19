<?php

use App\Http\Controllers\SeriesController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return redirect('/series');
});

Route::resource('/series', SeriesController::class);
// Route::controller(SeriesController::class)->group(function() {
//     Route::get('/series', [SeriesController::class, 'index'])->name('series.index');
//     Route::get('/series/criar', [SeriesController::class, 'create'])->name('series.create');
//     Route::post('/series/salvar', [SeriesController::class, 'store'])->name('series.store');
// });
