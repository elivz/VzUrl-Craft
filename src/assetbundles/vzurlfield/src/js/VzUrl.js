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

import { debounce } from 'throttle-debounce';
import urlTest from 'url-regex';
import '../css/VzUrl.css';

/*
 * Ajax link validator for VZ URL fieldtype
 * by Eli Van Zoeren - http://elivz.com
 *
 * Depends on: jQuery, Craft
 */

const urlCache = {};
const delay = 500;

class VzUrl {
  constructor(field) {
    // Store elements we will work with
    this.$field = $(`#${field}`);
    this.$wrapper = this.$field.closest('.vzurl-wrapper');
    this.$msg = this.$wrapper.find('.vzurl-msg');

    // Check URLs whenever the field changes
    this.$field.on('keyup paste', this.checkField.bind(this));

    // Store the debounced validation function
    this.validate = debounce(delay, this._validate.bind(this));

    this.queueAjax = (() => {
      let previous = new $.Deferred().resolve();
      return fn => (previous = previous.then(fn));
    })();

    // Check existing URLs when the page loads
    this.checkField();
  }

  checkField() {
    // Don't bother checking if it's empty
    if (this.$field.val() === '') {
      this.setStatus({ status: 'empty' });
      return;
    }

    // Show the "spinner"
    this.setStatus({ status: 'checking' });

    this.validate(this.$field);
  }

  /*
   * Actually send a request the the target URL to see if it exists
   */
  _validate() {
    let url = this.$field.val();
    let data = {};

    // Prepend site baseUrl to relative URIs
    if (url.charAt(0) === '/') {
      url = Craft.baseUrl.replace(/^(.+?)\/*?$/, '$1') + url;
    }

    if (url in urlCache) {
      // Use the cached data
      data = urlCache[url];
    } else if (url.charAt(0) === '#' || url.charAt(0) === '?') {
      // In-page links should always be considered valid
      data.status = 'valid';
    } else if (!urlTest({ exact: true }).test(url)) {
      // That's not even a real URL
      data.status = 'invalid';
    } else {
      // Ajax call to proxy to check the url
      return Craft.postActionRequest(
        'vzurl/validation/check',
        {
          url,
        },
        (response, textStatus) => {
          if (textStatus === 'success') {
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
          } else {
            data.status = 'invalid';
          }

          this.setStatus(data);
          urlCache[url] = data;
        }
      );
    }

    if ('status' in data) {
      this.setStatus(data);
    }
  }

  /*
   * Set the styling and error message as needed
   */
  setStatus(data) {
    // Reset field
    this.$field.prev().remove();
    this.$wrapper.removeClass('errors redirect checking');

    // Reset message
    this.$msg.empty();

    if (data.status === 'empty') {
      return;
    }

    if (data.status === 'invalid') {
      this.$msg.text(Craft.t('vzurl', 'This URL appears to be invalid'));
      this.$wrapper.addClass('errors');
    } else if (data.status === 'redirect') {
      if (this.$field.hasClass('follow-redirects')) {
        this.$wrapper.addClass('errors redirect');
        this.$msg.html(
          `<span>${Craft.t('vzurl', 'Redirects to')} ${data.redirect}</span>`
        );
        $('<a/>', {
          text: Craft.t('vzurl', 'Update'),
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
    } else if (data.status === 'checking') {
      this.$wrapper.addClass('checking');
    }

    // Add a "Open Page link"
    if (data.status !== 'empty' && data.status !== 'checking') {
      const $visitLink = $('<a/>', {
        href: this.$field.val(),
        class: 'vzurl-visit',
        target: '_blank',
        title: `${Craft.t('vzurl', 'Visit URL')}: ${this.$field.val()}`,
      });
      this.$field.before($visitLink);
    }
  }
}

window.VzUrl = VzUrl;
