<?php

use App\Http\Controllers\Api\SeriesController;
use App\Models\Episode;
use App\Models\Series;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::middleware('auth:sanctum')->group(function() {
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
});

Route::post('/login', function(Request $request) {
    $credentials = $request->only([
        'email',
        'password'
    ]);

    if (Auth::attempt($credentials) === false) {
        return response()->json('Unauthorized', 401);
    }

    $user = Auth::user();

    // $user = User::whereEmail($credentials['email'])->first();
    
    // if ($user === null || Hash::check($credentials['password'], $user->password) === false) {
    //     return response()->json('Unauthorized', 401);
    // }
    $token = $user->createToken('token');

    return response()->json($token->plainTextToken);
});