<?php

namespace App\Http\Controllers;

use App\Models\Episode;
use App\Models\Season;
use Illuminate\Http\Request;

class EpisodesController extends Controller
{
    public function index(Season $season)
    {
        return view('episodes.index', [
            'episodes' => $season->episodes, 
            'mensagemSucesso' => session('mensagem.sucesso')
        ]);
    }

    public function update(Request $request, Season $season)
    {
        $whatchedEpisodes = $request->episodes;
        $season->episodes->each(function(Episode $episode) use ($whatchedEpisodes) {
            $episode->watched = in_array($episode->id, $whatchedEpisodes);
        });
        $season->push();
        
        return to_route('episodes.index', $season->id)->with('mensagem.sucesso', 'Episódios marcados como assistidos.');
    }
}
