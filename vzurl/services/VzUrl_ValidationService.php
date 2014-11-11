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

        try
        {
            // Make the request
            $client = new Client();
            $response = $client->get($url)->send();

            // Get the data we need
            $code = $response->getStatusCode();
            $final = $response->getEffectiveUrl();

            return array(
                'original' => $url,
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