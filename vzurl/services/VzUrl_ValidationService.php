<?php
namespace Craft;

use Guzzle\Http\Client;

class VzUrl_ValidationService extends BaseApplicationComponent
{
    public function check($url)
    {
        if (empty($url)) {
            return false;
        }

        // Store the original, so we can pass it back in the response
        $originalUrl = $url;


        if (substr($url, 0, 1) == '/') {
            // Local URL, add the current domain
            $protocol = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] && $_SERVER['HTTPS'] != "off") ? "https" : "http";
            $host = $protocol . "://" . $_SERVER['HTTP_HOST'];
            $url = $host . $url;
        }

        try {
            // Make the request
            $client = new Client();
            $client->setUserAgent('VzUrl/1.0 (CraftCMS)');
            $request = $client->get($url, null, array(
                'headers' => array(
                    'Accept' => 'text/html,*/*',
                    'Cache-Control' => 'no-cache',
                ),
                'timeout' => 10,
                'connect_timeout' => 2,
                'verify' => false,
            ));
            $response = $request->send();

            // Get the data we need
            $code = $response->getStatusCode();
            $final = $response->getEffectiveUrl();

            if (isset($host)) {
                $final = str_replace($host, '', $final);
            }

            return array(
                'original'  => $originalUrl,
                'final_url' => $final,
                'http_code' => $code
            );
        } catch (\Exception $e) {
            return false;
        }
    }
}
