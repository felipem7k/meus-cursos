<?php

use App\Http\Controllers\SiteController;
use Illuminate\Support\Facades\Route;

Route::get("/", [SiteController::class, 'index']);

// Route::get('/', function () {
//     return "ainda no router";
// });
