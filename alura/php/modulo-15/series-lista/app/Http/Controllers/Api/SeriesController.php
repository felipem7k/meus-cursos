<?php

namespace App\Http\Controllers\Api;

class SeriesController
{
    public function index()
    {
        return response()->json([
            'series' => \App\Models\Series::all()
        ]);
    }
}