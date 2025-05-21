<?php

namespace App\Http\Controllers;

use App\Events\SeriesCreated as EventsSeriesCreated;
use App\Events\SeriesDeleted as EventsSeriesDeleted;
use App\Http\Requests\SeriesFormRequest;
use App\Models\Series;
use App\Repositories\SeriesRepository;
use Illuminate\Routing\Controllers\HasMiddleware;
use Illuminate\Routing\Controllers\Middleware;


class SeriesController extends Controller implements HasMiddleware
{
    public function __construct(private SeriesRepository $seriesRepository)
    {

    }

    public static function middleware(): array
    {
        return [
            new Middleware('autenticador', except: ['index']),
        ];
    }

    public function index()
    {
        $series = Series::all();
        $mensagemSucesso = session('mensagem.sucesso');

        return view('series.index')->with('series', $series)->with('mensagemSucesso', $mensagemSucesso);
    }

    public function create()
    {
        return view('series.create');
    }

    public function store(SeriesFormRequest $request)
    {
        $request->validate([
            'cover' => 'mimes:jpg,bmp,png,gif'
        ]);

        $coverPath = $request->hasFile('cover') ?  $request->file('cover')->store('series_cover', 'public') : null;
        $request->coverPath = $coverPath;

        $serie = $this->seriesRepository->add($request);
        
        EventsSeriesCreated::dispatch(
            $serie->nome,
            $serie->id,
            $request->seasonsQty,
            $request->seasonsEps
        );

        return to_route('series.index')->with('mensagem.sucesso', "Série '$serie->nome' adicionada com sucesso!");
    }

    public function destroy(Series $series)
    {
        EventsSeriesDeleted::dispatch(
            $series->cover
        );

        $series->delete();

        return to_route('series.index')->with('mensagem.sucesso', "Série '$series->nome' removida com sucesso!");
    }

    public function edit(Series $series)
    {   
        return view('series.update')->with('series', $series);
    }

    public function update(Series $series, SeriesFormRequest $request)
    {
        $nomeAntigo = $series->nome;

        $series->fill($request->all());
        $series->save();

        return to_route('series.index')->with('mensagem.sucesso', "Nome da série '$nomeAntigo' alterado para '$series->nome' com sucesso!");
    }
}
