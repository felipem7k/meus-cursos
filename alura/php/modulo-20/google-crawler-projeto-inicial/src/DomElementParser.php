<?php


namespace CViniciusSDias\GoogleCrawler;

use CViniciusSDias\GoogleCrawler\Exception\InvalidResultException;
use CViniciusSDias\GoogleCrawler\Proxy\UrlParser\GoogleUrlParser;
use DOMElement;
use j45l\maybe\Maybe\Maybe;
use Symfony\Component\DomCrawler\Crawler as DomCrawler;
use Symfony\Component\DomCrawler\Link;

class DomElementParser
{
    public function __construct(private GoogleUrlParser $proxy)
    {
        // Constructor can be empty or used for dependency injection if needed
    }

    /**
     * If $resultLink is a valid link, this method assembles the Result and adds it to $googleResults
     *
     * @param Link $resultLink
     * @param DOMElement $descriptionElement
     * @return Result
     * @throws InvalidResultException
     */
    private function createResult(Link $resultLink, DOMElement $descriptionElement): Result
    {
        $description = $descriptionElement->nodeValue
            ?? 'A description for this result isn\'t available due to the robots.txt file.';

        $googleResult = new Result();
        $googleResult
            ->setTitle($resultLink->getNode()->nodeValue)
            ->setUrl($this->proxy->parseUrl($resultLink->getUri()))
            ->setDescription($description);

        return $googleResult;
    }

    public function parse(DOMElement $resultDomElement): Maybe
    {
        $resultCrawler = new DomCrawler($resultDomElement);
        $linkElement = $resultCrawler->filterXPath('//a')->getNode(0);
        if (is_null($linkElement)) {
            return Maybe::try(null);
        }

        $resultLink = new Link($linkElement, 'http://google.com/');
        $descriptionElement = $resultCrawler->filterXPath('//div[@class="BNeawe s3v9rd AP7Wnd"]//div[@class="BNeawe s3v9rd AP7Wnd"]')->getNode(0);

        if (is_null($descriptionElement)) {
            return Maybe::try(null);
        }

        $isImageSuggestion = $resultCrawler->filterXpath('//img')->count() > 0;
        if ($isImageSuggestion) {
            return Maybe::try(null);
        }

        if (strpos($resultLink->getUri(), 'http://google.com') === false) {
            return Maybe::try(null);
        }

        return Maybe::try(
            $this->createResult($resultLink, $descriptionElement)
        );
    }
}
