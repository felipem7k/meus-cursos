<?php

namespace App\Http\Controllers\Api;

use App\Http\Requests\SeriesFormRequest;
use App\Models\Series;
use App\Repositories\SeriesRepository;

class SeriesController
{
    public function __construct(private SeriesRepository $seriesRepository)
    {
    }

    public function index()
    {
        return response()->json([
            'series' => Series::all()
        ]);
    }

    public function store(SeriesFormRequest $request)
    {
        return response()->json([
            'series' => $this->seriesRepository->add($request)
        ], 201);
    }

    public function show(int $id)
    {
        $series = Series::with(['seasons.episodes'])->find($id);
        if ($series === null) {
            return response()->json([
                'message' => 'Série não encontrada'
            ], 404);
        }
        return response()->json([
            'series' => $series
        ]);
    }

    // public function show(int $id) // buscar por id com episódios //
    // {
    //     $series = Series::whereId($id)->with('seasons.episodes')->first();
    //     return response()->json([
    //         'series' => $series
    //     ]);
    // }

    public function update(Series $series, SeriesFormRequest $request)
    {
        $series->fill($request->all());
        $series->save();

        return response()->json([
            'series' => $series
        ]);
    }

    public function destroy(int $id)
    {
        Series::destroy($id);   

        return response()->noContent();
    }
}