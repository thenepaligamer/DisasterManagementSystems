<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DisController;
use App\Http\Controllers\PDFTest;
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
    echo "Hello world";
});

Route::get('/mail-send', [WelcomeController::class, 'mailSend']);

Route::get('/pdf', [PDFTest::class,'index']);
Route::post('/store/phonenumber', [DisController::class,'storePhoneNumber']);
Route::post('/custom', [DisController::class,'sendCustomMessage']);