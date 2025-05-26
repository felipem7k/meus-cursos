<?php

use App\Http\Controllers\Api\SeriesController;
use App\Models\Episode;
use App\Models\Series;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::apiResource('/series', SeriesController::class);
Route::get('/series/{series}/seasons', function(Series $series) {
    return response()->json([
        'seasons' => $series->seasons
    ]);
});
Route::get('/series/{series}/episodes', function(Series $series) {
    return response()->json([
        'episodes' => $series->episodes
    ]);
});
Route::patch('/episodes/{episode}', function(Episode $episode, Request $request) {
    $episode->watched = $request->boolean('watched');
    $episode->save();

    return response()->json([
        'episode' => $episode
    ]);
});