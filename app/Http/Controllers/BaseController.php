<?php

namespace App\Http\Controllers;

use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class BaseController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke()
    {
        try {
            $client = new Client();
            
            $url = config('services.api_domain.base_api_url');
            $response = $client->post($url.'api/v1.0/login' , array(
                'form_params' => array(
                    'email' => 'test123@example.com',
                    'password' => '123456'
                )
            ));
            $statusCode = $response->getStatusCode();
            $data = $response->getBody()->getContents();
            if ($statusCode == 200) {
				$responseData = json_decode($data, true);
				return $responseData['token'] ?? null;
			} else {
				return response()->json(['message' => 'Failed to retrieve token', 'response' => $data], $statusCode);
			}
        } catch (Exception $e) {
            return response()->json(['message' => 'Error occurred: ' . $e->getMessage()], 500);
        }
    }
}
