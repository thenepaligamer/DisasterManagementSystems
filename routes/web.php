<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DisController;
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

Route::get('/', function () {
    return view('welcome');
});

Route::get('/mail-send', [WelcomeController::class, 'mailSend']);

Route::get('/', [DisController::class,'show']);
Route::post('/store/phonenumber', [DisController::class,'storePhoneNumber']);
Route::post('/custom', [DisController::class,'sendCustomMessage']);