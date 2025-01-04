<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Utility\HttpHandler;
use Exception;
use GuzzleHttp\Client;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{   
    private $apiDomainUrl;
    private $apiToken;
    public function __construct()
    {
        $uti = new BaseController();
        $this->apiDomainUrl = config('services.api_domain.base_api_url');
        $this->apiToken = $uti->__invoke();
    }
    /**
     * Display a listing of the resource.
     */
    public function index()
    {   
        if (!$this->apiToken) {
            return Inertia::render('HomePage', [
                    'title' => 'Table Anggota',
                    'datas' => []
                ]);
        }
        try {
            $client = new Client();
            $response = $client->post($this->apiDomainUrl  . 'api/v1.0/anggota', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiToken,
                    'Content-Type' => 'application/json',
                ]
            ]);
            $responseData = json_decode($response->getBody()->getContents(), true);
            return Inertia::render('HomePage', [
                'title' => 'Table Anggota',
                'datas' => $responseData['data']
            ]);
        } catch (Exception $e) {
            return Inertia::render('HomePage', [
                'title' => 'Table Anggota',
                'datas' => []
            ]);
        }
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('welcome', [
            'title' => 'Form New Anggota',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // $response_data = HttpHandler::postJson("/api/v1.0/anggota/create", [
        //     'name' => $request->input('name'),
        //     'email' => $request->input('email'),
        //     'no_hp' => $request->input('no_hp'),
        //     'alamat' => $request->input('alamat')
        // ]);
        // $response_data = $response_data->getData();
        // $data = isset($response_data->data) ? $response_data->data : [];
        // return redirect()->route('anggota.list');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $uuid)
    {
        // $response_data = HttpHandler::postJson("/api/v1.0/anggota/show", [
        //     'id' => $uuid
        // ]);
        // $response_data = $response_data->getData();
        // $data = isset($response_data->data) ? $response_data->data : [];
        // return Inertia::render('DetailAnggota', [
        //     'title' => 'Detail Anggota',
        //     'data' => $data
        // ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $uuid)
    {
        // return Inertia::render('EditAnggota', [
        //     'title' => 'Form Edit Anggota',
        //     'id' => $uuid,
        // ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $uuid)
    {
        // $response_data = HttpHandler::postJson("/api/v1.0/anggota/show", [
        //     'id' => $uuid,
        //     'name' => $request->input('name'),
        //     'email' => $request->input('email'),
        //     'no_hp' => $request->input('no_hp'),
        //     'alamat' => $request->input('alamat')
        // ]);
        // return redirect()->route('anggota.list');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $uuid)
    {
        // $response_data = HttpHandler::postJson("/api/v1.0/anggota/destroy", [
        //     'id' => $uuid,
        // ]);
        // return redirect()->route('anggota.list');
    }
}
