# VZ URL Fieldtype for Craft

A VZ URL field displays a text input where the user can enter a URL. It will ping the URL they entered and display an error message if it doesn't find a valid webpage there. It also prompts the user to update URLs that are redirected to a different location.

![Screenshot of VZ URL for Craft](resources/img/screenshot.png)

Please note that VZ URL will not prevent the user from saving their entry if if cannot validate the URL - it just warns them. This is intentional, perhaps they are linking to a page they have not yet created, or the site they are linking to is currently down but they know the URL is correct.

## Requirements

This plugin requires Craft CMS 3.0 or later.

## Installation

To install the plugin, follow these instructions.

1.  Open your terminal and go to your Craft project:

        cd /path/to/project

2.  Then tell Composer to load the plugin:

        composer require elivz/vzurl

3.  In the Control Panel, go to Settings → Plugins and click the “Install” button for VZ URL.

## Template Variables

### Simple output

Just output the URL that was entered.

    <a href="{{ entry.fieldName }}">Link</a>

### Redirect

Immediately redirects a visitor's browser to the specified URL. Any other code in a template containing this tag will never be displayed.

    {% redirect entry.fieldName %}

### URL Parts

A helper function, `craft.vzUrl.parse` makes available an array of all the pieces of a URL. Keep in mind that many of these components are likely to be empty for any particular URL. You may also use this to get the components of _any_ URL by passing in a string or other variable in place of the field name.

    Domain: {{ craft.vzUrl.parse(entry.fieldName).host }}

The following components are available:

- `scheme` e.g. http
- `host` e.g. www.google.com
- `root` e.g. http://www.google.com
- `port`
- `user`
- `pass`
- `path` e.g. /about
- `query` (without the question mark)
- `params` an associative array containing any query parameters
- `fragment` (without the hash)
- `filetype` e.g. pdf

## Support

Please post all bugs or feature requests in [GitHub Issues](https://github.com/elivz/VzUrl-Craft/issues). I maintain this fieldtype in my spare time, but I will try to respond to questions as quickly as possible.

## Roadmap

- Cache validation results
- More output options
- Retrieve additional information about the webpage (OpenGraph, etc) and make it available in templates
