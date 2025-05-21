<?php

use App\Http\Controllers\Api\SeriesController;
use App\Models\Series;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/series', SeriesController::class . '@index')->name('series.index');