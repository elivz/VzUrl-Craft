<?php
namespace Craft;

class VzUrl_ValidationController extends BaseController
{
    public function actionCheck()
    {
        $this->requireAjaxRequest();

        $time_start = microtime(true);

        // Validate the URL
        $url = str_replace('ht^tp', 'http', craft()->request->getRequiredPost('url'));
        $data = craft()->vzUrl_validation->check($url);

        if (!$data) {
            $data = array(
                'original' => $url,
                'final_url' => $url,
                'http_code' => 0
            );
        }

        $time_end = microtime(true);
        $data['response_time'] = $time_end - $time_start;

        $this->returnJson($data);
    }
}