<?php
namespace App\Utility;

use Exception;
use GuzzleHttp\Client;
use GuzzleHttp\Psr7;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;
use GuzzleHttp\Exception\ClientException;
use Session;

class HttpHandler {

    public static function getToken($url, $body = []){

        $header = [
            'Content-Type'  => 'application/x-www-form-urlencoded',
        ];

        if(empty($url)) return "please provide valid url";

        $response = \App\Utility\Http::postRequest($url, [
            'header' => $header,
            'body' => $body
        ]);

        if(is_array($response)){
            return response()->json($response, $response['StatusCode']);
        }

        $data = json_decode($response);

        if ($data !== null) {
            return response()->json($data, 200);
        } else {
            return response()->json(['message' => $response], 200);
        }
    }

    public static function postJson($url, $body = []){
        $tokenResponse = self::getToken('token');

        if($tokenResponse instanceof \Illuminate\Http\JsonResponse && $tokenResponse->getStatusCode() === 200){
            $token = $tokenResponse->getData()->token;
        } else {
            return $tokenResponse; // Return error response if token retrieval fails
        }

        // Prepare Authorization header
        $header = [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '. $token,
        ];


        if (empty($url)) return "please provide valid url";
        // Send POST request
        $response = \App\Utility\Http::postRequestDataJson($url, [
            'header' => $header,
            'body' => $body
        ]);
        // Process response
        if (is_array($response)) {
            $status = isset($response['Status']) && is_numeric($response['Status']) ? (int)$response['Status'] : 200;
            return response()->json($response, $status);
        }

        $data = json_decode($response, true);
        $status = isset($data['Status']) && is_numeric($data['Status']) ? (int)$data['Status'] : 200;
        return response()->json($data, $status);
    }

    public static function post($url, $body = array()){
        $tokenResponse = self::getToken('token');

        if($tokenResponse instanceof \Illuminate\Http\JsonResponse && $tokenResponse->getStatusCode() === 200){
            $token = $tokenResponse->getData()->token;
        } else {
            return $tokenResponse; // Return error response if token retrieval fails
        }

        // Prepare Authorization header
        $header = [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer '. $token,
        ];


        if (empty($url)) return "please provide valid url";
        // Send POST request
        $response = \App\Utility\Http::postRequestDataJson($url, [
            'header' => $header,
            'body' => $body
        ]);
        // Process response
        if (is_array($response)) {
            $status = isset($response['Status']) && is_numeric($response['Status']) ? (int)$response['Status'] : 200;
            return response()->json($response, $status);
        }

        $data = json_decode($response, true);
        $status = isset($data['Status']) && is_numeric($data['Status']) ? (int)$data['Status'] : 200;
        return response()->json($data, $status);
    }

    public static function deleteJson($url, $body = []) {
        // Mengambil token menggunakan fungsi getToken()
        $tokenResponse = self::getToken('token');
    
        // Cek apakah token berhasil diambil
        if ($tokenResponse instanceof \Illuminate\Http\JsonResponse && $tokenResponse->getStatusCode() === 200) {
            $token = $tokenResponse->getData()->token;
        } else {
            // Jika pengambilan token gagal, kembalikan response error
            return $tokenResponse;
        }
    
        // Persiapkan header Authorization dengan token Bearer
        $header = [
            'Content-Type' => 'application/json',
            'Authorization' => 'Bearer ' . $token,
        ];
    
        // Cek apakah URL valid
        if (empty($url)) return "Please provide a valid URL";
    
        // Kirim request DELETE dengan header dan body
        $response = \App\Utility\Http::deleteRequestDataJson($url, [
            'header' => $header,
            'body' => $body
        ]);
    
        // Proses response
        if (is_array($response)) {
            // Jika response berupa array, ambil status dan kembalikan response JSON
            $status = isset($response['Status']) && is_numeric($response['Status']) ? (int)$response['Status'] : 200;
            return response()->json($response, $status);
        }
    
        // Jika response bukan array, decode JSON dan ambil status
        $data = json_decode($response, true);
        $status = isset($data['Status']) && is_numeric($data['Status']) ? (int)$data['Status'] : 200;
    
        // Kembalikan response dalam format JSON
        return response()->json($data, $status);
    }
    
}
?>
