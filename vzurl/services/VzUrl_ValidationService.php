<?php
namespace Craft;

use Guzzle\Http\Client;

class VzUrl_ValidationService extends BaseApplicationComponent
{
    public function check($url)
    {
        if ( empty($url) )
        {
            return false;
        }

        // Store the original, so we can pass it back in the response
        $originalUrl = $url;

        if (substr($url, 0, 1) == '/')
        {
            // Local URL, add the current domain
            $protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
            $domain = $protocol . "://" . $_SERVER['HTTP_HOST'];
            $url = $domain . $url;
        }

        try
        {
            // Make the request
            $client = new Client();
            $response = $client->get($url)->send();

            // Get the data we need
            $code = $response->getStatusCode();
            $final = $response->getEffectiveUrl();

            if (isset($domain))
            {
                $final = str_replace($domain, '', $final);
            }

            return array(
                'original'  => $originalUrl,
                'final_url' => $final,
                'http_code' => $code
            );
        }
        catch(\Exception $e)
        {
            return false;
        }
    }
}