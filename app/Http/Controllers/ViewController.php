<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Rules\ValidHCaptcha;
use Laravel\Sanctum\HasApiTokens;

use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DisController;
use Illuminate\Support\Facades\Mail;
use App\Mail\IncidentMail;

use Twilio\Rest\Client;
/*
$rules = [
            'h-captcha-response' => ['required', new ValidHCaptcha()]
        ];
        */
class ViewController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $showAllDetails = Events::all();
        return response()->json($showAllDetails);
    }

    public function indexUser(){
        $showVerifiedDetails = Events::where('is_verified',1)->get();
        return response()->json($showVerifiedDetails);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'title' => 'required',
            'province' => 'required',
            'district' => 'required',
            'local' => 'required',
            'type' => 'required',
            'description' => 'required',
            'estloss' => 'numeric',
            'death' => 'numeric',
            'missing' => 'numeric',
            'injured' => 'numeric',
            'is_verified' => 'boolean'
        ]);

        $eventDetails = [
            'title' => $data['title'],
            'province' => $data['province'],
            'district' => $data['district'],
            'local' => $data['local'],
            'type' => $data['type'],
            'description' => $data['description'],
            'estloss' => $data['estloss'],
            'death' => $data['death'],
            'missing' => $data['missing'],
            'injured' => $data['injured'],
            'is_verified' => $data['is_verified']
        ];
        
        $events = Events::create($eventDetails);

        $email = 'admin@dms.com';
   
        $mailInfo = [
            'title' => $eventDetails['type'],
            'url' => 'localhost'
        ];

        //.' has occurred in '.$eventDetails['local'].', '$eventDetails['district']
  
        Mail::to($email)->send(new IncidentMail($mailInfo));
        
        $message = $data['type'];

        $this->events()->volunteers()->show();


        //$recipient = "+9779807502629";
        //$this->sendMessage($message,$recipient);

        return response()->json([
            'message' => 'Added event',
            'event details' => $events,
            'phone number' => $getphonenumber
        ], 201);
    }

    public function sendMessage($message, $recipients)
    {
        $account_sid = getenv("TWILIO_SID");
        $auth_token = getenv("TWILIO_AUTH_TOKEN");
        $twilio_number = getenv("TWILIO_NUMBER");
        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients, ['from' => $twilio_number, 'body' => $message] );
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $eventdetail =  Events::find($id);
        return response()->json($eventdetail);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(Request $request, $id)
    {
        $data = $request->validate([
            'is_verified' => 'required'
        ]);

        $getUnverifiedEvents = Events::find($id);

        $getUnverifiedEvents->is_verified = $request->input('is_verified');

        $getUnverifiedEvents->save();

        return response()->json([
            'message' => 'Status updated',
            'edited Details' => $getUnverifiedEvents
        ],201);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'title' => 'required',
            'province' => 'required',
            'district' => 'required',
            'local' => 'required',
            'type' => 'required',
            'description' => 'required',
            'estloss' => 'numeric',
            'death' => 'numeric',
            'missing' => 'numeric',
            'injured' => 'numeric',
        ]);

        $editedData = Events::find($id);

        $editedData->title = $request->input('title');
        $editedData->province = $request->input('province');
        $editedData->district = $request->input('district');
        $editedData->local = $request->input('local');
        $editedData->type = $request->input('type');
        $editedData->description = $request->input('description');
        $editedData->estloss = $request->input('estloss');
        $editedData->death = $request->input('death');
        $editedData->missing = $request->input('missing');
        $editedData->injured = $request->input('injured');

        $editedData->save();

        return response()->json([
            'message' => 'Event edited',
            'edited Details' => $editedData
        ],201);

        $user->notify(new SuccessfulRegistration());
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $findEventToDelete = Events::find($id);
        $findEventToDelete->delete();

        return response()->json([
            "message" => "Event deleted",
        ],201);
    }

}
