VZ URL Fieldtype for Craft
==========================

A VZ URL field displays a textbox where the user can enter a URL. It will ping the URL they entered and display an error message if it doesn't find a valid webpage there. It also prompts the user to update URLs that are redirected to a different location.

Please note that VZ URL will not prevent the user from saving their weblog entry if if cannot validate the URL - it just warns them. This is intentional, perhaps they are linking to a page they have not yet created, or the site they are linking to is currently down but they know the URL is correct.

Template Variables
------------------

### `{{ field_name }}`

Used as a single variable, the VZ URL field will simply output the URL that was entered.

Installation & Updates
----------------------

Download and unzip the extension. Upload the `vzurl` folder to your `/craft/plugins/` folder. Go to Settings -> Plugins in the Craft control panel and enable the VZ URL plugin.

That's it! Now you can use the URL fieldtype anywhere you were previously using a plain text field. Switching from a text field to a VZ URL field (or vice-versa) will not affect your data.

Support
-------

Please post all bugs or feature requests in [GitHub Issues](https://github.com/elivz/VzUrl-Craft/issues). I maintain this fieldtype in my spare time, but I will try to respond to questions as quickly as possible.