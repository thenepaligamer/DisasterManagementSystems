<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\Http\Controllers\LoginController;
use App\Http\Controllers\ViewController;
use App\Http\Controllers\ReliefController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\VolunteerController;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DisController;
use App\Http\Controllers\FeedbackController;
use App\Http\Controllers\UserConfigController;

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

Route::get('event/viewUser', [ViewController::class, 'indexUser']);
Route::post('/event/add', [ViewController::class, 'store']);

Route::get('/relief/view', [ReliefController::class, 'index']);

Route::get('/contact/view', [ContactController::class, 'index']);

Route::get('/volunteer/view', [VolunteerController::class, 'index']);

Route::get('/showPhoneNumber', [DisController::class,'show']);
Route::post('/store/phonenumber', [DisController::class,'storePhoneNumber']);
Route::post('/custom', [DisController::class,'sendCustomMessage']);

Route::post('/feedback/add', [FeedbackController::class, 'store']);
Route::post('/userdata/add', [UserConfigController::class, 'store']);
Route::post('/volunteer/add', [VolunteerController::class, 'store']);



Route::middleware('auth:sanctum')->group(function () {
    Route::get('/event/view', [ViewController::class, 'index']);
    Route::get('/event/update/{id}', [ViewController::class, 'show']);
    Route::put('/event/update/{id}', [ViewController::class, 'update']);
    Route::put('/event/update/status/{id}', [ViewController::class, 'edit']);
    Route::delete('/event/delete/{id}', [ViewController::class, 'destroy']);
    
    
    Route::post('/relief/add', [ReliefController::class, 'store']);
    Route::get('/relief/update/{id}', [ReliefController::class, 'show']);
    Route::put('/relief/update/{id}', [ReliefController::class, 'update']);
    Route::delete('/relief/delete/{id}', [ReliefController::class, 'destroy']);


    Route::post('/contact/add', [ContactController::class, 'store']);
    Route::get('/contact/update/{id}', [ContactController::class, 'show']);
    Route::put('/contact/update/{id}', [ContactController::class, 'update']);
    Route::delete('/contact/delete/{id}', [ContactController::class, 'destroy']);


    Route::get('/volunteer/update/{id}', [VolunteerController::class, 'show']);
    Route::put('/volunteer/update/{id}', [VolunteerController::class, 'update']);
    Route::delete('/volunteer/delete/{id}', [VolunteerController::class, 'destroy']);

    Route::delete('/feedback/delete/{id}', [FeedbackController::class, 'destroy']);

    Route::delete('/userdata/delete/{id}', [UserConfigController::class, 'destroy']);
});