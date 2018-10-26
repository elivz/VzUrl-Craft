<?php
/**
 * VZ URL plugin for Craft CMS 3.x
 *
 * A URL fieldtype with validation.
 *
 * @link      https://github.com/elivz
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 */

namespace elivz\vzurl\variables;

use elivz\vzurl\VzUrl;

use Craft;

/**
 * VZ URL Variable
 *
 * Craft allows plugins to provide their own template variables, accessible from
 * the {{ craft }} global variable (e.g. {{ craft.vzUrl }}).
 *
 * https://craftcms.com/docs/plugins/variables
 *
 * @author  Eli Van Zoeren
 * @package VzUrl
 * @since   2.0.0
 */
class VzUrlVariable
{
    // Public Methods
    // =========================================================================

    /**
     * Run PHP's parseurl() on a url, and add in a few extra variables as well
     *
     * @param string $url URL to parse
     * 
     * @return array The component parts
     */
    public function parse($url = false)
    {
        if (empty($url)) {
            return false;
        }

        $data = array_merge(
            [
                'scheme' => '',
                'host' => '',
                'port' => '',
                'user' => '',
                'pass' => '',
                'path' => '',
                'query' => '',
                'params' => [],
                'fragment' => '',
                'filetype' => '',
            ], parse_url($url)
        );

        if (!empty($data['host'])) {
            // Add the full root domain
            $scheme = !empty($data['scheme']) ? $data['scheme'] : 'http';
            $data['root'] = $scheme . '://' . $data['host'];
        }

        if (!empty($data['path'])) {
            // Add the filename extension, if any
            preg_match('/\/[^\/]+\.(\w+)$/', $url, $matches);
            if (!empty($matches[1])) {
                $data['filetype'] = $matches[1];
            }
        }

        if (!empty($data['query'])) {
            parse_str($data['query'], $data['params']);
        }

        return $data;
    }
}
