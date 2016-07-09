VZ URL Fieldtype for Craft
==========================

<<<<<<< HEAD
**Version 1.0.2 requires Craft 2.5 (currently in beta). For Craft <= 2.4 compatibility, please download [v1.0.1](https://github.com/elivz/VzUrl-Craft/archive/1.0.1.zip).**
=======
**Version 1.0.2 requires Craft 2.5 (currently in beta). For Craft <= 2.4 compatibility, please download [version 1.0.1](https://github.com/elivz/VzUrl-Craft/archive/1.0.1.zip).**
>>>>>>> d5db44cdc0bb54193da0025b0544133b60df3dc7

A VZ URL field displays a textbox where the user can enter a URL. It will ping the URL they entered and display an error message if it doesn't find a valid webpage there. It also prompts the user to update URLs that are redirected to a different location.

![Screenshot of VZ URL for Craft](../gh-pages/screenshot.png?raw=true)

Please note that VZ URL will not prevent the user from saving their entry if if cannot validate the URL - it just warns them. This is intentional, perhaps they are linking to a page they have not yet created, or the site they are linking to is currently down but they know the URL is correct.

Template Variables
------------------

### Simple output

Just output the URL that was entered.

    <a href="{{ entry.fieldName }}">Link</a>

### Redirect

Immediately redirects a visitor's browser to the specified URL. Any other code in a template containing this tag will never be displayed.

    {% redirect entry.fieldName %}

### URL Parts

A helper function, `craft.vzUrl.parse` makes available an array of all the pieces of a URL. Keep in mind that many of these components are likely to be empty for any particular URL. You may also use this to get the components of *any* URL by passing in a string or other variable in place of the field name.

    Domain: {{ craft.vzUrl.parse(entry.fieldName).host }}

The following components are available:

* `scheme` e.g. http
* `host` e.g. www.google.com
* `root` e.g. http://www.google.com
* `port`
* `user`
* `pass`
* `path` e.g. /about
* `query` (without the question mark)
* `fragment` (without the hash)
* `filetype` e.g. pdf

Installation
------------

Download and unzip the extension. Upload the `vzurl` folder to your `/craft/plugins/` folder. Go to Settings -> Plugins in the Craft control panel and enable the VZ URL plugin.

That's it! Now you can use the URL fieldtype anywhere you were previously using a plain text field. Switching from a text field to a VZ URL field (or vice-versa) will not affect your data.

Support
-------

Please post all bugs or feature requests in [GitHub Issues](https://github.com/elivz/VzUrl-Craft/issues). I maintain this fieldtype in my spare time, but I will try to respond to questions as quickly as possible.

Roadmap
-------

* Cache validation results
* More output options
* Retrieve additional information about the webpage (OpenGraph, etc) and make it available in templates
