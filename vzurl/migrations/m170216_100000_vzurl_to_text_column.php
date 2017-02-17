<?php

namespace Craft;

/**
 * The class name is the UTC timestamp in the format of mYYMMDD_HHMMSS_pluginHandle_migrationName
 */
class m170216_100000_vzurl_to_text_column extends BaseMigration
{
    /**
     * Any migration code in here is wrapped inside of a transaction.
     *
     * @return bool
     */
    public function safeUp()
    {
        Craft::log('Increasing character limit for VZ URL fields.', LogLevel::Info, true);

        // Get all the VZ URL fields
        $fields = craft()->db->createCommand()
            ->select('handle')
            ->from('fields')
            ->where(array('type' => 'VzUrl', 'context' => 'global'))
            ->queryAll();

        foreach ($fields as $field)
        {
            $fieldName = 'field_' . $field['handle'];
            $this->alterColumn('content', $fieldName, array(
                'column' => ColumnType::Text
            ));
        }

        Craft::log('Done increasing character limit for VZ URL fields.', LogLevel::Info, true);

        return true;
    }
}
