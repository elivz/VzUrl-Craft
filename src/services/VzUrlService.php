<?php
/**
 * VZ URL plugin for Craft CMS 3.x
 *
 * A URL fieldtype with validation.
 *
 * @link      https://github.com/elivz
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 */

namespace elivz\vzurl\services;

use elivz\vzurl\VzUrl;

use Craft;
use craft\base\Component;
use craft\helpers\UrlHelper;

use GuzzleHttp\TransferStats;

/**
 * VzUrlService Service
 *
 * All of your plugin’s business logic should go in services, including saving data,
 * retrieving data, etc. They provide APIs that your controllers, template variables,
 * and other plugins can interact with.
 *
 * https://craftcms.com/docs/plugins/services
 *
 * @author  Eli Van Zoeren
 * @package VzUrl
 * @since   2.0.0
 */
class VzUrlService extends Component
{
    // Public Methods
    // =========================================================================

    /**
     * Validate a URL
     *
     * @param string $url The URL to check
     * 
     * @return array
     */
    public function check($url): array
    {
        if (empty($url)) {
            return false;
        }

        // Store the original, so we can pass it back in the response
        $originalUrl = $url;
        $finalUrl = '';

        try {
            // Make the request
            $guzzleClient = Craft::createGuzzleClient(
                [
                'base_uri' => UrlHelper::baseSiteUrl(),
                'timeout' => 15, 
                'connect_timeout' => 5,
                'allow_redirects' => ['track_redirects' => true],
                'headers' => [
                    'Accept' => 'text/html,*/*',
                    'Cache-Control' => 'no-cache',
                    'User-Agent' => 'VzUrl/2.0 (CraftCMS)',
                ],
                'verify' => false,
                'on_stats' => function (TransferStats $stats) use (&$finalUrl) {
                    $finalUrl = $stats->getEffectiveUri();
                }
                ]
            );
            $response = $guzzleClient->get($url);
        } catch (\Exception $e) {
            return [
                'original' => $originalUrl,
                'final_url' => $originalUrl,
                'http_code' => 0
            ];
        }

        // Get the data we need
        $code = $response->getStatusCode();

        return [
            'original'  => (string) $originalUrl,
            'final_url' => (string) $finalUrl,
            'http_code' => (int) $code
        ];
    }
}
