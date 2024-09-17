<?php 

$dbPath = __DIR__ ."/banco.sqlite";
$pdo = new PDO("sqlite:$dbPath");

$id = filter_input(INPUT_GET,"id", FILTER_VALIDATE_INT);
if (empty($id)) {
    header("Location: /index.php?sucesso=0");
    exit();
}
$url = filter_input(INPUT_POST,"url", FILTER_VALIDATE_URL);
if (empty($url)) {
    header("Location: /index.php?sucesso=0");
    exit();
}
$titulo = filter_input(INPUT_POST,"titulo");
if (empty($titulo)) {
    header("Location: /index.php?sucesso=0");
    exit();
}

$sql = "UPDATE videos SET
        url = :url, title = :titulo
        WHERE id = :id;";
$stmt = $pdo->prepare(query: $sql);
$stmt->bindValue("url", $url);
$stmt->bindValue("titulo", $titulo);
$stmt->bindValue("id", $id);

if ($stmt->execute() == false) {
    header("Location: /index.php?sucesso=0");
} else {
    header("Location: /index.php?sucesso=1");
}