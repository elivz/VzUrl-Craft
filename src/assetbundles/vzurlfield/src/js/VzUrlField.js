/**
 * VZ URL plugin for Craft CMS
 *
 * VzUrlField Field JS
 *
 * @author    Eli Van Zoeren
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 * @link      https://github.com/elivz
 * @package   VzUrl
 * @since     2.0.0VzUrlVzUrlField
 */

import style from '../css/VzUrlField.css';

/*
 * Ajax link validator for VZ URL fieldtype
 * by Eli Van Zoeren - http://elivz.com
 *
 * Depends on: jQuery, Craft
 */

(($, Craft, window) => {
  const urlCache = {};

  function VzUrl(field) {
    this.timer = false;
    this.delay = 500;
    this.regex = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i;

    // Store elements we will work with
    this.$field = $(`#${field}`);
    this.$wrapper = this.$field.parent();
    this.$msg = this.$field.next();

    // Check URLs whenever the field changes
    this.$field.on('keyup paste', () => {
      this.checkField();
    });

    // Check existing URLs when the page loads
    this.checkField(true);
  }

  VzUrl.prototype.queueAjax = (() => {
    let previous = new $.Deferred().resolve();
    return fn => (previous = previous.then(fn));
  })();

  VzUrl.prototype.checkField = function checkField(immediate) {
    // Clear the timeout
    if (this.timer) {
      clearTimeout(this.timer);
    }

    // Don't bother checking if it's empty
    if (this.$field.val() === '') {
      this.setStatus({ status: 'empty' });
      return;
    }

    // Show the "spinner"
    this.setStatus({ status: 'checking' });

    // Use a timeout to prevent an ajax call on every keystroke
    if (!immediate) {
      this.timer = setTimeout($.proxy(this.validate, this), this.delay);
    } else {
      this.validate(this.$field);
    }
  };

  /*
     * Actually send a request the the target URL to see if it exists
     */
  VzUrl.prototype.validate = function validate() {
    const url = this.$field.val();
    let data = {};

    if (url in urlCache) {
      // Use the cached data
      data = urlCache[url];
    } else if (url.charAt(0) === '#' || url.charAt(0) === '?') {
      // In-page links should always be considered valid
      data.status = 'valid';
    } else if (!url.match(this.regex)) {
      // That's not even a real URL
      data.status = 'invalid';
    } else {
      // Ajax call to proxy to check the url
      this.queueAjax(() => {
        const safeUrl = url.replace('http', 'ht^tp'); // Mod_security doesn't like "http://" in posted data
        return Craft.postActionRequest('vzUrl/validation/check', {
          url: safeUrl,
        })
          .done(response => {
            // Make sure the URL we are checking is still there
            if (response.original !== this.$field.val()) {
              return;
            }

            // Show or hide the error message, as needed
            if (response.http_code >= 200 && response.http_code < 400) {
              if (response.original === response.final_url) {
                // The URL is valid
                data.status = 'valid';
              } else {
                // The URL is a redirect
                data.status = 'redirect';
                data.redirect = response.final_url;
              }
            } else {
              data.status = 'invalid';
            }
          })
          .fail(() => {
            data.status = 'invalid';
          })
          .always(() => {
            this.setStatus(data);
            urlCache[url] = data;
          });
      });
    }

    if ('status' in data) {
      this.setStatus(data);
    }
  };

  /*
     * Set the styling and error message as needed
     */
  VzUrl.prototype.setStatus = function setStatus(data) {
    // Reset field
    this.$field.prev().remove();
    this.$wrapper.removeClass('empty checking errors valid invalid redirect');

    // Reset message
    this.$msg.empty();

    if (data.status === 'empty') {
      return;
    }

    if (data.status === 'invalid') {
      this.$msg.text(Craft.t('This URL appears to be invalid'));
      this.$wrapper.addClass('errors');
    } else if (data.status === 'redirect') {
      if (this.$field.hasClass('follow-redirects')) {
        this.$wrapper.addClass('errors');
        this.$msg.html(
          `<span>${Craft.t('Redirects to')} ${data.redirect}</span>`
        );
        $('<a/>', {
          text: Craft.t('Update'),
          click: event => {
            // Replace the field value with the redirect target
            this.$field.val(data.redirect);
            this.validate(this.$field);
            event.preventDefault();
          },
        }).appendTo(this.$msg);
      } else {
        data.status = 'valid';
      }
    }

    this.$wrapper.addClass(data.status);

    // Add a "Open Page link"
    if (data.status !== 'empty' && data.status !== 'checking') {
      const $visitLink = $('<a/>', {
        href: this.$field.val(),
        class: 'vzurl-visit',
        target: '_blank',
        'data-icon': 'world',
        title: `${Craft.t('Visit URL')}: ${this.$field.val()}`,
      });
      this.$field.before($visitLink);
    }
  };

  // Export the main function
  window.VzUrl = VzUrl;
})(window.jQuery, window.Craft, window);
