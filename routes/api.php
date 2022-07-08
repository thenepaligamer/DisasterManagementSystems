<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\AdminDashboard;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [LoginController::class, 'register']);
Route::post('/login', [LoginController::class, 'login']);
#Route::get('viewplz', [ViewController::class, 'me']);

Route::group(['middleware' => ['auth:sanctum']],function () {
    Route::post('logout', [LoginController::class, 'logout']);
});

Route::get('viewUser', [ViewController::class, 'indexUser']);
Route::post('addEvent', [ViewController::class, 'store']);


Route::get('admin', [AdminDashboard::class, 'index']);//->middleware('admin');

Route::middleware('auth:sanctum')->group(function () {
    Route::get('view', [ViewController::class, 'index']);
    Route::get('/update/{id}', [ViewController::class, 'show']);
    Route::put('/update/{id}', [ViewController::class, 'update']);
    Route::delete('/delete/{id}', [ViewController::class, 'destroy']);
});