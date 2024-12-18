<?php

use \Ds\Map;

require_once __DIR__ ."/Video.php";

$video1 = new Video("Aprendendo mapas");
$video2 = new Video("Aprendendo conjuntos");

$videosAssistidos = new Map();
$videosAssistidos->put($video1,new DateTimeImmutable("2021-02-03") );
$videosAssistidos->put($video2,new DateTimeImmutable("2021-02-01") );

foreach ($videosAssistidos as $video => $data) {
    echo $video->titulo . PHP_EOL;
    echo $data->format("d/m/Y") . PHP_EOL;
}
