<?php
/**
 * VZ URL plugin for Craft CMS 3.x
 *
 * A URL fieldtype with validation.
 *
 * @link      https://github.com/elivz
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 */

namespace elivz\vzurl\migrations;

use elivz\vzurl\fields\VzUrlField;
use craft\db\Migration;
use craft\helpers\MigrationHelper;

/**
 * m181109_211900_craft3_upgrade migration.
 *
 * @author  Eli Van Zoeren
 * @package VzUrl
 * @since   2.1.0
 */
class Install extends Migration
{
    /**
     * @inheritdoc
     */
    public function safeUp()
    {
        // Fields
        $this->update('{{%fields}}', ['type' => VzUrlField::class], ['type' => 'VzUrl']);

        return true;
    }

    /**
     * @inheritdoc
     */
    public function safeDown()
    {
        echo "VZ Url install migration cannot be reverted.\n";

        return false;
    }
}