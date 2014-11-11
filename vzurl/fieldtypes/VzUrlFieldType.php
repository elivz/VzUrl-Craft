<?php
namespace Craft;

/**
 * VZ URL field type
 */
class VzUrlFieldType extends BaseFieldType
{
    public function getName()
    {
        return Craft::t('URL');
    }

    protected function defineSettings()
    {
        return array(
            'followRedirects' => array(AttributeType::Bool, 'default' => TRUE),
        );
    }

    public function getSettingsHtml()
    {
        return craft()->templates->render('vzurl/settings', array(
            'settings' => $this->getSettings()
        ));
    }

    public function getInputHtml($name, $value)
    {
        // Reformat the input name into something that looks more like an ID
        $id = craft()->templates->formatInputId($name);
        $namespacedId = craft()->templates->namespaceInputId($id);

        // Include our Javascript
        craft()->templates->includeCssResource('vzurl/css/input.css');
        craft()->templates->includeJsResource('vzurl/js/input.js');
        craft()->templates->includeJs("$('#{$namespacedId}').vzUrl();");

        $settings = $this->getSettings();

        // Default to http://
        if ( empty($value) )
        {
            $value = 'http://';
        }

        $class  = 'vzurl-field';
        $class .= $settings->followRedirects ? ' follow-redirects' : '';

        return craft()->templates->render('vzurl/input', array(
            'id'    => $id,
            'name'  => $name,
            'value' => $value,
            'class' => $class,
        ));
    }

    public function prepValueFromPost($value)
    {
        // Remove http:// if it's the only thing in the field
        return ($value == 'http://' || $value == 'https://') ? '' : $value;
    }
}