<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Twilio\Rest\Client;
use App\Models\UsersPhoneNumber;
use Illuminate\Support\Facades\DB;

class DisController extends Controller
{
    /**
    * Store a new user phone number.
    *
    * @param  Request  $request
    * @return Response
    |unique:users_dis
    */
    
    public function storePhoneNumber(Request $request)
    {
        //run validation on data sent in
        $validatedData = $request->validate([
            'phone_number' => 'required|numeric'
        ]);
        $user_phone_number_model = new UsersPhoneNumber($request->all());
        $user_phone_number_model->save();
        $this->sendMessage('User registration successful!!', $request->phone_number);
        //return back()->with(['success' => "{$request->phone_number} registered"]);
    }

    /**
        * Show the forms with users phone number details.
        *
        * @return Response
    */
    public function show()
    {
        $showAllPhoneNumbers = UsersPhoneNumber::all(); //query db with model
        return response()->json($showAllPhoneNumbers);
    }

    /**
        * Sends sms to user using Twilio's programmable sms client
        * @param String $message Body of sms
        * @param Number $recipients string or array of phone number of recepient
    */
    private function sendMessage($message, $recipients)
    {
        $account_sid = getenv("TWILIO_SID");
        $auth_token = getenv("TWILIO_AUTH_TOKEN");
        $twilio_number = getenv("TWILIO_NUMBER");
        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients, ['from' => $twilio_number, 'body' => $message] );
    }

    /**
        * Send message to a selected users
    */
    public function sendCustomMessage(Request $request)
    {
        $validatedData = $request->validate([
            'users' => 'required|array',
            'body' => 'required',
        ]);
        $recipients = $validatedData["users"];
        // iterate over the array of recipients and send a twilio request for each
        foreach ($recipients as $recipient) {
            $this->sendMessage($validatedData["body"], $recipient);
        }
        return back()->with(['success' => "Messages on their way!"]);
        }
}
