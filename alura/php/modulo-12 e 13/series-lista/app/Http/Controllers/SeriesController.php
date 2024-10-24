<?php

namespace App\Http\Controllers;

use App\Http\Requests\SeriesFormRequest;
use App\Models\Series;
use App\Repositories\SeriesRepository;

class SeriesController extends Controller
{
    public function __construct(private SeriesRepository $seriesRepository)
    {

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
        $serie = $this->seriesRepository->add($request);
        return to_route('series.index')->with('mensagem.sucesso', "Série '$serie->nome' adicionada com sucesso!");
    }

    public function destroy(Series $series)
    {
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
