<?php

use App\Http\Controllers\AnggotaController;
use App\Http\Controllers\BaseController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

// Route::get('/', function () {
//     return Inertia::render('HomePage', []);
// });
// Route::get('/anggota', function () {
//     return Inertia::render('TableAnggota', [

//     ]);
// });
Route::get('/test', function(){
    return Inertia::render('CreateData', [
        'title' => 'Create Data'
    ]);
})->name('test');

Route::prefix('anggota')->group(function(){
    Route::get('/', [AnggotaController::class, 'index'])->name('anggota.list');
    Route::get('/{uuid}', [AnggotaController::class, 'show'])->name('anggota.show');
    Route::get('/create/data', [AnggotaController::class, 'create'])->name('anggota.create');
    Route::post('/', [AnggotaController::class, 'store'])->name('anggota.store');
    Route::get('/{uuid}/edit', [AnggotaController::class, 'edit'])->name('anggota.edit');
    Route::post('/{uuid}', [AnggotaController::class, 'update'])->name('anggota.update');
    Route::post('/{uuid}/delete', [AnggotaController::class, 'destroy'])->name('anggota.delete');
});

// Route::get('/welcome', function () {
//     return Inertia::render('Welcome', [
//         'canLogin' => Route::has('login'),
//         'canRegister' => Route::has('register'),
//         'laravelVersion' => Application::VERSION,
//         'phpVersion' => PHP_VERSION,
//     ]);
// });

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';
