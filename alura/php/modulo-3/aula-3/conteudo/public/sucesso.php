<h1>Sucesso Filme <?= $_GET['filme']; ?> inserido.</h1>
<?php 

$filmeJson = file_get_contents('filme.json');
$filme = json_decode($filmeJson, true);
?>
<!DOCTYPE html>
<html>
<head>
    <title>Filme inserido</title>
</head>
<body>
    <h1><?= $filme['nome']; ?></h1>
    <dl>
        <dt>Ano de lançamento</dt>
        <dd><?= $filme['ano']; ?></dd>

        <dt>Nota</dt>
        <dd><?= $filme['nota']; ?></dd>

        <dt>Gênero</dt>
        <dd><?= $filme['genero']; ?></dd>
    </dl>
</body>
</html>