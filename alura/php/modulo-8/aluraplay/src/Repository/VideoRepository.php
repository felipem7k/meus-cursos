<?php 

declare(strict_types=1);

namespace Felipem7k\Aluraplay\Repository;

use Felipem7k\Aluraplay\Entity\Video;

class VideoRepository
{
    public function __construct(private \PDO $pdo) 
    {

    }

    public function add(Video $video): bool
    {
        $sql = "INSERT INTO videos (url, title) VALUES (?, ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $video->url);
        $stmt->bindValue(2, $video->title);

        $result = $stmt->execute();
        $id = $this->pdo->lastInsertId();

        $video->setId(intval(($id)));
        return $result;
    }

    public function remove(int $id): bool
    {
        $id = $_GET["id"];
        $stmt = $this->pdo->prepare("DELETE FROM videos WHERE id = ?;");
        $stmt->bindValue(1, $id);
        return $stmt->execute();
    }

    public function update(Video $video): bool
    {
        $sql = "UPDATE videos SET
        url = :url, title = :titulo
        WHERE id = :id;";
        $stmt = $this->pdo->prepare(query: $sql);
        $stmt->bindValue("url", $video->url);
        $stmt->bindValue("titulo", $video->title);
        $stmt->bindValue("id", $video->id);
        
        return $stmt->execute();
    }

    public function all(): array
    {
        return array_map(
            $this->hydrateVideo(...),
            $this->pdo->query("SELECT * FROM videos;")->fetchAll(\PDO::FETCH_ASSOC));
    }

    public function find(int $id): Video
    {
        $stmt = $this->pdo->prepare("SELECT * FROM videos WHERE id = ?;");
        $stmt->bindValue(1, $id, \PDO::PARAM_INT);
        $stmt->execute();
        return $this->hydrateVideo($stmt->fetch(\PDO::FETCH_ASSOC));
    }

    public function hydrateVideo(array $data): Video
    {
        $video = new Video($data["url"], $data["title"]);
        $video->setId(intval($data["id"]));
        return $video;
    }
}