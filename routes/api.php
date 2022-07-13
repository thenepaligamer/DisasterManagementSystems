<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\ReliefController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\VolunteerController;
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

Route::group(['middleware' => ['auth:sanctum']],function () {
    Route::post('logout', [LoginController::class, 'logout']);
});

Route::get('viewUser', [ViewController::class, 'indexUser']);
Route::post('addEvent', [ViewController::class, 'store']);
/*
Need to update the routes to xyz/view instead of viewXYZ
*/
Route::get('viewRelief', [ReliefController::class, 'index']);

Route::get('viewContact', [ContactController::class, 'index']);

Route::get('viewVolunteer', [VolunteerController::class, 'index']);

Route::middleware('auth:sanctum')->group(function () {
    Route::get('view', [ViewController::class, 'index']);
    Route::get('/update/{id}', [ViewController::class, 'show']);
    Route::put('/update/{id}', [ViewController::class, 'update']);
    Route::delete('/delete/{id}', [ViewController::class, 'destroy']);
    
    
    Route::post('addRelief', [ReliefController::class, 'store']);
    Route::get('/updateRelief/{id}', [ReliefController::class, 'show']);
    Route::put('/updateRelief/{id}', [ReliefController::class, 'update']);
    Route::delete('/deleteRelief/{id}', [ReliefController::class, 'destroy']);


    Route::post('addContact', [ContactController::class, 'store']);
    Route::get('/updateContact/{id}', [ContactController::class, 'show']);
    Route::put('/updateContact/{id}', [ContactController::class, 'update']);
    Route::delete('/deleteContact/{id}', [ContactController::class, 'destroy']);


    Route::post('addVolunteer', [VolunteerController::class, 'store']);
    Route::get('/updateVolunteer/{id}', [VolunteerController::class, 'show']);
    Route::put('/updateVolunteer/{id}', [VolunteerController::class, 'update']);
    Route::delete('/deleteVolunteer/{id}', [VolunteerController::class, 'destroy']);
});