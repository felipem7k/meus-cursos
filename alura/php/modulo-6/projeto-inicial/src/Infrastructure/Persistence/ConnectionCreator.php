<?php

namespace Felipem7k\PhpPdo\Infrastructure\Persistence;

use PDO;

class ConnectionCreator
{
    public static function createConnection(): PDO
    {
        $connection = new PDO('mysql:host=localhost;dbname=php-pdo', 'root', '');

        return $connection;
    }
}