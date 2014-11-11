<?php
namespace Craft;

class VzUrlVariable
{
    public function parse($url)
    {
        if ( empty($url) )
        {
            return false;
        }

        $data = parse_url($url);

        if ( isset($data['host']) )
        {
            // Add the full root domain
            $scheme = isset($data['scheme']) ? $data['scheme'] : 'http';
            $data['root'] = $scheme . '://' . $data['host'];
        }

        if ( isset($data['path']) )
        {
            // Add the filename extension, if any
            preg_match('/\/[^\/]+\.(\w+)$/', $url, $matches);
            if ( isset($matches[1]) )
            {
                $data['filetype'] = $matches[1];
            }
        }

        return $data;
    }
}