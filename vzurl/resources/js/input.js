/*
 * Ajax link validator for VZ URL fieldtype
 * by Eli Van Zoeren - http://elivz.com
 *
 * Depends on: jQuery
 */

 ;(function ( $, window, document, undefined ) {

    var pluginName = "vzUrl";

    var defaults = {
        delay: 650,
        regex: new RegExp("^((https?|ftp)://[\\w\\-_]+(\\.[\\w\\-_]+)+|/)([\\w\\-\\.,@?^=%&amp;:/~\\+#]*[\\w\\-\\@?^=%!&amp;/~\\+#])?$", "gi")
    };


    // Plugin constructor
    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;

        this._defaults = defaults;
        this._name = pluginName;

        this.init();
    }

    Plugin.prototype = {

        timer: false,

        init: function() {
            var vzUrl = this,
                $field = $(this.element);

            // Check URLs whenever the field changes
            $field.on('keyup paste', function(e) {
                vzUrl.checkField($field);
            });

            // Check existing URLs when the page loads
            vzUrl.checkField($field, true);
        },

        /*
         * Event handler for changes to the field
         */
        checkField: function($field, immediate) {
            var vzUrl = this;

            // Clear the timeout
            if ( ! immediate && vzUrl.timer ) {
                clearTimeout(vzUrl.timer);
            }

            // Don't bother checking the default value of http://
            if ($field.val() === 'http://' || $field.val() === 'https://' || $field.val() === '') {
                vzUrl.setStatus($field, 'empty');
                return;
            } else {
                // Show the "spinner"
                vzUrl.setStatus($field, 'checking');
            }

            // Use a timeout to prevent an ajax call on every keystroke
            if ( ! immediate ) {
                vzUrl.timer = setTimeout(function() {
                    vzUrl.validate($field);
                }, vzUrl.options.delay);
            } else {
                vzUrl.validate($field);
            }
        },

        /*
         * Actually send a request the the target URL to see if it exists
         */
        validate: function($field) {
            var vzUrl = this,
                url = this.encodeUri($field.val());

            // In-page links should always be considered valid
            if (url.charAt(0) === '#' || url.charAt(0) === '?') {
                vzUrl.setStatus($field, 'valid');
                return;
            }

            // Make sure it's even a valid url
            if ( ! url.match(vzUrl.options.regex) ) {
                vzUrl.setStatus($field, 'invalid');
                return;
            }

            // Ajax call to proxy to check the url
            var safeUrl = url.replace('http', 'ht^tp'); // Mod_security doesn't like "http://" in posted data
            Craft.postActionRequest(
                'vzUrl/validation/check',
                { url: safeUrl },
                function (data) {
                    // Make sure the URL we are checking is still there
                    if ( data.original !== vzUrl.encodeUri($field.val()) ) return;

                    // Show or hide the error message, as needed
                    if ( (data.original === data.final_url) && (data.http_code >= 200) && (data.http_code < 400) ) {
                        // The URL is valid
                        vzUrl.setStatus($field, 'valid');
                    } else if (data.original !== data.final_url) {
                        // The URL is a redirect
                        vzUrl.setStatus($field, 'redirect', data);
                    } else {
                        vzUrl.setStatus($field, 'invalid');
                    }
                }
            );
        },

        /*
         * Set the styling and error message as needed
         */
        setStatus : function($field, status, response) {
            var vzUrl = this,
                $msg = $field.next().empty();

            // Reset field
            $field.removeClass('empty checking invalid valid redirect');
            $field.prev().remove();

            switch (status) {
                case 'empty' : case 'checking' : case 'valid' :
                    break;
                case 'invalid' :
                    $msg.html( Craft.t('This URL appears to be invalid') );
                    break;
                case 'redirect' :
                    if ($field.hasClass('follow-redirects')) {
                        $msg.html( Craft.t('Redirects to') + ' ' + response.final_url);
                        $('<a/>', {
                            text: Craft.t('Update'),
                            href: '',
                            click: function(e) {
                                e.preventDefault();

                                // Replace the field value with the redirect target
                                $field.val(response.final_url);
                                vzUrl.validate($field);
                            }
                        }).appendTo($msg);
                    } else {
                        $field.removeClass('redirect').addClass('valid');
                    }
                    break;
            }

            $field.addClass(status);

            // Add a "Open Page link"
            if (status !== 'empty' && status !== 'checking') {
                $field.before('<a href="'+$field.val()+'" class="vzurl-visit" target="_blank" title="Open '+$field.val()+' in a new tab">' + Craft.t('Open') + '</a>');
            }
        },

        encodeUri: function(str) {
            return encodeURI(str).replace(/%25/g, '%').replace(/%5B/g, '[').replace(/%5D/g, ']');
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );