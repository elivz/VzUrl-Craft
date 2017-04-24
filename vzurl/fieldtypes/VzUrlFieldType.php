<?php
namespace Craft;

/**
 * VZ URL field type
 */
class VzUrlFieldType extends BaseFieldType implements IPreviewableFieldType
{
    public function getName()
    {
        return Craft::t('URL');
    }

    public function defineContentAttribute()
    {
        return array(AttributeType::String, 'column' => ColumnType::Text);
    }

    protected function defineSettings()
    {
        return array(
            'followRedirects' => array(AttributeType::Bool, 'default' => true)
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
        $inputId = craft()->templates->formatInputId($name);
        $namespacedId = craft()->templates->namespaceInputId($inputId);

        // Include our Javascript
        craft()->templates->includeCssResource('vzurl/css/input.css');
        craft()->templates->includeJsResource('vzurl/js/input.js');
        craft()->templates->includeJs("new VzUrl($('#{$namespacedId}'));");

        $settings = $this->getSettings();

        $class  = 'vzurl-field';
        $class .= $settings->followRedirects ? ' follow-redirects' : '';

        craft()->templates->includeTranslations(
            'Redirects to',
            'This URL appears to be invalid',
            'Update',
            'Visit URL'
        );

        return craft()->templates->render('vzurl/input', array(
            'id'    => $inputId,
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

    public function getTableAttributeHtml($value)
    {
        if ($value)
        {
            return '<a href="'.$value.'" target="_blank">'.$value.'</a>';
        }
    }
}
