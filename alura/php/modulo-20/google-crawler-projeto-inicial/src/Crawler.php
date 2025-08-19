<?php
namespace CViniciusSDias\GoogleCrawler;

use CViniciusSDias\GoogleCrawler\Exception\InvalidGoogleHtmlException;
use CViniciusSDias\GoogleCrawler\Proxy\GooogleProxyAbstractFactory;
use CViniciusSDias\GoogleCrawler\Proxy\HttpClient\GoogleHttpClient;
use CViniciusSDias\GoogleCrawler\Proxy\NoProxyAbstractFactory;
use CViniciusSDias\GoogleCrawler\Proxy\UrlParser\GoogleUrlParser;
use Symfony\Component\DomCrawler\Crawler as DomCrawler;

/**
 * Google Crawler
 *
 * @package CViniciusSDias\GoogleCrawler
 * @author Vinicius Dias
 */
class Crawler
{
    private GoogleHttpClient $httpClient;
    private GoogleUrlParser $parser;
    public function __construct(
        private GooogleProxyAbstractFactory $factory
    ) {
        if ($factory === null) {
            $factory = new NoProxyAbstractFactory();
        }

        $this->httpClient = $this->factory->createGoogleHttpClient();
        $this->parser = $this->factory->createGoogleUrlParser();
    }

    /**
     * Returns the 100 first found results for the specified search term
     *
     * @return ResultList
     * @throws \GuzzleHttp\Exception\ServerException If the proxy was overused
     * @throws \GuzzleHttp\Exception\ConnectException If the proxy is unavailable or $countrySpecificSuffix is invalid
     */
    public function getResults(
        SearchTermInterface $searchTerm,
        string $googleDomain = 'google.com',
        string $countryCode = ''
    ): ResultList
    {
        if (stripos($googleDomain, 'google.') === false || stripos($googleDomain, 'http') === 0) {
            throw new \InvalidArgumentException('Invalid google domain');
        }

        $googleUrl = "https://$googleDomain/search?q={$searchTerm}&num=100";
        if (!empty($countryCode)) {
            $googleUrl .= "&gl={$countryCode}";
        }

        $response = $this->httpClient->getHttpResponse($googleUrl);
        $stringResponse = (string) $response->getBody();
        $domCrawler = new DomCrawler($stringResponse);
        $googleResultList = $this->createGoogleResultList($domCrawler);

        $resultList = new ResultList($googleResultList->count());

        $domElementParser = new DomElementParser($this->parser);
        foreach ($googleResultList as $googleResultElement) {
            $parsedResultMaybe = $domElementParser->parse($googleResultElement);
            $parsedResultMaybe->getOrElse(function (Result $result) use ($resultList) {
                $resultList->addResult($result);
            });
        }

        return $resultList;
    }

    private function createGoogleResultList(DomCrawler $domCrawler): DomCrawler
    {
        $googleResultList = $domCrawler->filterXPath('//div[@class="Gx5Zad fP1Qef xpd EtOod pkphOe"]');
        if ($googleResultList->count() === 0) {
            throw new InvalidGoogleHtmlException('No parsable element found');
        }
        return $googleResultList;
    }
}
