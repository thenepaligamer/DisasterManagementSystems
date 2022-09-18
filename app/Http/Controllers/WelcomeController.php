<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

class WelcomeController extends Controller
{
    public function mailSend() {
        $email = 'admin@dms.com';
   
        $mailInfo = [
            'title' => 'Welcome new volunteer',
            'url' => 'localhost'
        ];
  
        Mail::to($email)->send(new WelcomeMail($mailInfo));
   
        return response()->json([
            'message' => 'Mail has sent.'
        ], Response::HTTP_OK);
    }

    public function __construct(){
        $this->middleware('auth');
    }

    public function index(){
        $user->notify(new WelcomeEmailNotification($user));
    }
}