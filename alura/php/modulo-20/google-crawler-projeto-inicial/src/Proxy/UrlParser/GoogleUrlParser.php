<?php

namespace CViniciusSDias\GoogleCrawler\Proxy\UrlParser;

interface GoogleUrlParser
{
    /**
     * Parses an URL based on how they are encoded in the proxy service
     *
     * @param string $googleUrl
     * @return string
     * @throws \CViniciusSDias\GoogleCrawler\Exception\InvalidResultException
     */
    public function parseUrl(string $googleUrl): string;
}
