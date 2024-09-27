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
        $sql = "INSERT INTO videos (url, title, image_path) VALUES (?, ?, ?)";
        $stmt = $this->pdo->prepare($sql);
        $stmt->bindValue(1, $video->url);
        $stmt->bindValue(2, $video->title);
        $stmt->bindValue(3, $video->getFilePath());

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
        $filePath = $video->getFilePath();
        $updateImageSql = "";
        if ($filePath !== null) {
            $updateImageSql = ', image_path = :image_path';
        }
        $sql = "UPDATE videos SET
        url = :url, title = :titulo$updateImageSql
        WHERE id = :id;";
        $stmt = $this->pdo->prepare(query: $sql);
        $stmt->bindValue("url", $video->url);
        $stmt->bindValue("titulo", $video->title);
        $stmt->bindValue("id", $video->id);
        if ($filePath !== null) {
            $stmt->bindValue("image_path", $video->getFilePath());
        }
        
        return $stmt->execute();
    }

    public function all(): array
    {
        $videosList = $this->pdo->query("SELECT * FROM videos;")->fetchAll(\PDO::FETCH_ASSOC);
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
        if (!empty($data["image_path"])) {
            $video->setFilePath($data["image_path"]);
        }
        return $video;
    }
}