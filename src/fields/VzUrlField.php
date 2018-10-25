<?php
/**
 * VZ URL plugin for Craft CMS 3.x
 *
 * A URL fieldtype with validation.
 *
 * @link      https://github.com/elivz
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 */

namespace elivz\vzurl\fields;

use elivz\vzurl\VzUrl;
use elivz\vzurl\assetbundles\vzurlfield\VzUrlFieldAsset;

use Craft;
use craft\base\ElementInterface;
use craft\base\Field;
use craft\helpers\Db;
use yii\db\Schema;
use craft\helpers\Json;
use craft\fields\Url;
use craft\web\View;

/**
 * VzUrl Field
 *
 * @author  Eli Van Zoeren
 * @package VzUrl
 * @since   2.0.0
 */
class VzUrlField extends Url
{
    // Public Properties
    // =========================================================================

    /**
     * Follow redirects
     *
     * @var bool
     */
    public $followRedirects = true;

    // Static Methods
    // =========================================================================

    /**
     * Returns the display name of this class.
     *
     * @return string The display name of this class.
     */
    public static function displayName(): string
    {
        return Craft::t('vzurl', 'URL (with validation)');
    }

    // Public Methods
    // =========================================================================

    /**
     * Returns the component’s settings HTML.
     *
     * @return string|null
     */
    public function getSettingsHtml()
    {
        // Render the settings template
        return Craft::$app->getView()->renderTemplate(
            'vzurl/_components/fields/VzUrlField_settings',
            [
                'field' => $this,
            ]
        );
    }

    /**
     * Returns the field’s input HTML.
     *
     * @param mixed                 $value   The field’s value. This will either be the [[normalizeValue() normalized
     *                                       value]], raw POST data (i.e. if there was a validation error), or null
     * @param ElementInterface|null $element The element the field is associated with, if there is one
     *
     * @return string The input HTML.
     */
    public function getInputHtml($value, ElementInterface $element = null): string
    {
        // Register translatable strings
        Craft::$app->getView()->registerTranslations(
            'vzurl', [
            'This URL appears to be invalid',
            'Redirects to',
            'Update',
            'Visit URL',
            ]
        );
        
        // Register our asset bundle
        Craft::$app->getView()->registerAssetBundle(VzUrlFieldAsset::class);

        // Get our id and namespace
        $id = Craft::$app->getView()->formatInputId($this->handle);
        $namespacedId = Craft::$app->getView()->namespaceInputId($id);

        // Input classes
        $class  = 'vzurl-field';
        $class .= $this->followRedirects ? ' follow-redirects' : '';

        // Variables to pass down to our field JavaScript to let it namespace properly
        Craft::$app->getView()->registerJs("new VzUrl('{$namespacedId}');");

        // Render the input template
        return Craft::$app->getView()->renderTemplate(
            'vzurl/_components/fields/VzUrlField_input',
            [
                'name' => $this->handle,
                'value' => $value,
                'field' => $this,
                'id' => $id,
                'namespacedId' => $namespacedId,
                'class' => $class,
            ]
        );
    }
}
