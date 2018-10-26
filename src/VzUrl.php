<?php
/**
 * VZ URL plugin for Craft CMS 3.x
 *
 * A URL fieldtype with validation.
 *
 * @link      https://github.com/elivz
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 */

namespace elivz\vzurl;

use elivz\vzurl\services\VzUrlService as VzUrlServiceService;
use elivz\vzurl\variables\VzUrlVariable;
use elivz\vzurl\twigextensions\VzUrlTwigExtension;
use elivz\vzurl\fields\VzUrlField as VzUrlField;

use Craft;
use craft\base\Plugin;
use craft\services\Plugins;
use craft\events\PluginEvent;
use craft\web\UrlManager;
use craft\services\Fields;
use craft\web\twig\variables\CraftVariable;
use craft\events\RegisterComponentTypesEvent;
use craft\events\RegisterUrlRulesEvent;

use yii\base\Event;

/**
 * @author  Eli Van Zoeren
 * @package VzUrl
 * @since   2.0.0
 *
 * @property VzUrlServiceService $vzUrlService
 */
class VzUrl extends Plugin
{
    // Static Properties
    // =========================================================================

    /**
     * Static property that is an instance of this plugin class so that it can be accessed via
     * VzUrl::$plugin
     *
     * @var VzUrl
     */
    public static $plugin;

    // Public Properties
    // =========================================================================

    /**
     * @var string
     */
    public $schemaVersion = '2.0.0';

    // Public Methods
    // =========================================================================

    /**
     * Set our $plugin static property to this class so that it can be accessed via
     * VzUrl::$plugin
     */
    public function init()
    {
        parent::init();
        self::$plugin = $this;

        // Register service
        $this->setComponents(
            [
            'validation' => \elivz\vzurl\services\VzUrlService::class,
            ]
        );

        // Register our field
        Event::on(
            Fields::class,
            Fields::EVENT_REGISTER_FIELD_TYPES,
            function (RegisterComponentTypesEvent $event) {
                $event->types[] = VzUrlField::class;
            }
        );
        
        // Register our template variable
        Event::on(
            CraftVariable::class,
            CraftVariable::EVENT_INIT,
            function (Event $event) {
                $variable = $event->sender;
                $variable->set('vzUrl', VzUrlVariable::class);
            }
        );

        Craft::info(
            Craft::t(
                'vzurl',
                '{name} plugin loaded',
                ['name' => $this->name]
            ),
            __METHOD__
        );
    }

    // Protected Methods
    // =========================================================================
}
