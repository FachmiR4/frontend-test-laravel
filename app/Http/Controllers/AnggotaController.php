<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Utility\HttpHandler;
use Illuminate\Http\Request;

class AnggotaController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $response_data = HttpHandler::postJson("/api/v1.0/anggota", []);
        $response_data = $response_data->getData();
        $data = isset($response_data->data) ? $response_data->data : [];
        return Inertia::render('TableAnggota', [
            'title' => 'Table Anggota',
            'datas' => $data
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('CreateAnggota', [
            'title' => 'Form New Anggota',
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $response_data = HttpHandler::postJson("/api/v1.0/anggota/create", [
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'no_hp' => $request->input('no_hp'),
            'alamat' => $request->input('alamat')
        ]);
        $response_data = $response_data->getData();
        $data = isset($response_data->data) ? $response_data->data : [];
        return redirect()->route('anggota.list');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $uuid)
    {
        $response_data = HttpHandler::postJson("/api/v1.0/anggota/show", [
            'id' => $uuid
        ]);
        $response_data = $response_data->getData();
        $data = isset($response_data->data) ? $response_data->data : [];
        return Inertia::render('DetailAnggota', [
            'title' => 'Detail Anggota',
            'data' => $data
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $uuid)
    {
        $response_data = HttpHandler::postJson("/api/v1.0/anggota/show", [
            'id' => $uuid
        ]);
        $response_data = $response_data->getData();
        $data = isset($response_data->data) ? $response_data->data : [];
        return Inertia::render('EditAnggota', [
            'title' => 'Form Edit Anggota',
            'id' => $uuid,
            'member' => $data
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $uuid)
    {
        $response_data = HttpHandler::postJson("/api/v1.0/anggota/show", [
            'id' => $uuid,
            'name' => $request->input('name'),
            'email' => $request->input('email'),
            'no_hp' => $request->input('no_hp'),
            'alamat' => $request->input('alamat')
        ]);
        return redirect()->route('anggota.list');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $uuid)
    {
        $response_data = HttpHandler::postJson("/api/v1.0/anggota/destroy", [
            'id' => $uuid,
        ]);
        return redirect()->route('anggota.list');
    }
}
