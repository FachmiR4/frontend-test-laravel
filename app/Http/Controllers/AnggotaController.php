<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Utility\HttpHandler;
use Exception;
use GrahamCampbell\ResultType\Success;
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
        return Inertia::render('CreateData', [
            'title' => 'Form New Anggota',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        if (!$this->apiToken) {
            return redirect()->back()->with('error', 'Unable to get API token.');
        }
        $request->validate([
            'name' => 'required|string',
            'email' => 'required|string',
            'no_hp' => 'required|string',
            'alamat' => 'required|string',
        ]);
        try {
            $client = new Client();
            $response = $client->post($this->apiDomainUrl . 'api/v1.0/anggota/create', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiToken,
                ],
                'form_params' => [
                    'name' => $request->name,
                    'email' => $request->email,
                    'no_hp' => $request->no_hp,
                    'alamat' => $request->alamat
                ]
            ]);
            $responseData = json_decode($response->getBody()->getContents(), true);
            if ($responseData && isset($responseData['status']) && $responseData['status'] === 'Success') {
                return redirect()->back()->with('success', 'Data successfully created.');
            }
            $errorMessage = isset($responseData['message']) ? $responseData['message'] : 'Unknown error occurred';
                return redirect()->back()->with('error', $errorMessage);
        } catch (Exception $e) {
            if ($e instanceof \GuzzleHttp\Exception\RequestException && $e->hasResponse()) {
                $response = json_decode($e->getResponse()->getBody()->getContents(), true);
                if (isset($response['message'])) {
                    return redirect()->back()->with('error', $response['message']);
                }
            }
            return redirect()->back()->with('error', 'Error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $uuid)
    {
        if (!$this->apiToken) {
            return redirect()->back()->with('error', 'Unable to get API token.');
        }
        try {
            $client = new Client();
            $response = $client->post($this->apiDomainUrl . 'api/v1.0/anggota/show', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiToken,
                ],
                'form_params' => [
                    'id' => $uuid
                ]
            ]);
            $responData = json_decode($response->getBody()->getContents(), true);
            return Inertia::render('DetailAnggota', [
                'title' => 'Detail Anggota',
                'data' => $responData['data']
            ]);
        } catch (Exception $e) {
            return Inertia::render('HomePage', [
                'title' => 'Detail Anggota',
                'data' => []
            ]);
        }
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $uuid)
    {
        if (!$this->apiToken) {
            return redirect()->back()->with('error', 'Unable to get API token.');
        }
        try {
            $client = new Client();
            $response = $client->post($this->apiDomainUrl . 'api/v1.0/anggota/show', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiToken,
                ],
                'form_params' => [
                    'id' => $uuid
                ]
            ]);
            $responData = json_decode($response->getBody()->getContents(), true);
            return Inertia::render('EditAnggota', [
                'title' => 'Form Edit Anggota',
                'id' => $uuid,
                'data' => $responData['data']
            ]);
        } catch (\Throwable $th) {
            return Inertia::render('EditAnggota', [
                'title' => 'Form Edit Anggota',
                'id' => $uuid,
                'data' => []
            ]);
        }
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $uuid)
    {
        if (!$this->apiToken) {
            return redirect()->back()->with('error', 'Unable to get API token.');
        }
        try {
            $client = new Client();
            $response = $client->post($this->apiDomainUrl . 'api/v1.0/anggota/update', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiToken,
                    'Accept' => 'application/json',
                ],
                'form_params' => [
                    'id' => $uuid,
                    'name' => $request->name,
                    'email' => $request->email,
                    'no_hp' => $request->no_hp,
                    'alamat' => $request->alamat,
                ]
            ]);
            $responseData = json_decode($response->getBody()->getContents(), true);
            if ($responseData && isset($responseData['status']) && $responseData['status'] === 'Success') {
                return redirect()->route('anggota.show', $uuid)->with('success', 'Data successfully created.');
            }
            $errorMessage = isset($responseData['message']) ? $responseData['message'] : 'Unknown error occurred';
            return redirect()->back()->with('error', $errorMessage);
        } catch (Exception $e) {
            if ($e instanceof \GuzzleHttp\Exception\RequestException && $e->hasResponse()) {
                $response = json_decode($e->getResponse()->getBody()->getContents(), true);
                if (isset($response['message'])) {
                    return redirect()->back()->with('error', $response['message']);
                }
            }
            return redirect()->back()->with('error', 'Error occurred: ' . $e->getMessage());
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $uuid)
    {
        if (!$this->apiToken) {
            return redirect()->back()->with('error', 'Unable to get API token.');
        }
        try {
            $client = new Client();
            $response = $client->delete($this->apiDomainUrl . 'api/v1.0/anggota/destroy', [
                'headers' => [
                    'Authorization' => 'Bearer ' . $this->apiToken,
                ],
                'form_params' => [
                    'id' => $uuid
                ]
            ]);
            $responseData = json_decode($response->getBody()->getContents(), true);
            if ($responseData && isset($responseData['status']) && $responseData['status'] === 'Success') {
                return redirect()->back()->with('success', 'Data successfully created.');
            }
            $errorMessage = isset($responseData['message']) ? $responseData['message'] : 'Unknown error occurred';
            return redirect()->back()->with('error', $errorMessage);
        } catch (Exception $e) {
            if ($e instanceof \GuzzleHttp\Exception\RequestException && $e->hasResponse()) {
                $response = json_decode($e->getResponse()->getBody()->getContents(), true);
                if (isset($response['message'])) {
                    return redirect()->back()->with('error', $response['message']);
                }
            }

            return redirect()->back()->with('error', 'Error occurred: ' . $e->getMessage());
        }
    }
}
