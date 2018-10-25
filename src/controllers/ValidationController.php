<?php
/**
 * VZ URL plugin for Craft CMS 3.x
 *
 * A URL fieldtype with validation.
 *
 * @link      https://github.com/elivz
 * @copyright Copyright (c) 2018 Eli Van Zoeren
 */

namespace elivz\vzurl\controllers;

use elivz\vzurl\VzUrl;

use Craft;
use craft\web\Controller;

/**
 * Validation Controller
 *
 * @author  Eli Van Zoeren
 * @package VzUrl
 * @since   2.0.0
 */
class ValidationController extends Controller
{
    // Public Methods
    // =========================================================================

    /**
     * Validate a URL and return an array of data
     *
     * @return array
     */
    public function actionCheck()
    {
        $this->requirePostRequest();
        $this->requireAcceptsJson();

        // Validate the URL
        $url = Craft::$app->getRequest()->getRequiredBodyParam('url');
        $data = VzUrl::getInstance()->validation->check($url);

        if (!$data) {
            $data = [
                'original' => $url,
                'final_url' => $url,
                'http_code' => 0
            ];
        }

        return $this->asJson($data);
    }
}
