<?php

namespace Craft;

/**
 * The class name is the UTC timestamp in the format of mYYMMDD_HHMMSS_pluginHandle_migrationName
 */
class m170102_220000_vzurl_increase_character_limit extends BaseMigration
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
            ->where(array('type' => 'VzUrl'))
            ->queryAll();

        foreach ($fields as $field)
        {
            $fieldName = 'field_' . $field['handle'];
            $this->alterColumn('content', $fieldName, array(
                'column' => ColumnType::Varchar,
                'maxLength' => 2000
            ));
        }

        Craft::log('Done increasing character limit for VZ URL fields.', LogLevel::Info, true);

        return true;
    }
}
