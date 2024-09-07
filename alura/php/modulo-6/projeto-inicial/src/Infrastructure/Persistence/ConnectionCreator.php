<?php

namespace Felipem7k\PhpPdo\Infrastructure\Persistence;

use PDO;

class ConnectionCreator
{
    public static function createConnection(): PDO
    {
        $databasePath = __DIR__ . '/../../../banco.sqlite';

        $connection = new PDO('sqlite:' . $databasePath);

        return $connection;
    }
}