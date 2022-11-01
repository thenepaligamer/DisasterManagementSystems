<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Volunteers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Rules\ValidHCaptcha;
use Laravel\Sanctum\HasApiTokens;
use App\Notifications\WelcomeEmailNotification;
use Notification;
use App\Http\Controllers\WelcomeController;
use App\Http\Controllers\DisController;
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

use App\Notifications\SuccessfulRegistration;

use Twilio\Rest\Client;
use App\Models\UsersPhoneNumber;

class VolunteerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $showAllDetails = Volunteers::all();
        return response()->json($showAllDetails);
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
            'type' => 'required',
            'province' => 'required',
            'district' => 'required',
            'local'=> 'required',
            'ward_no' => 'required|numeric',
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required',
            'interested_area' => 'required',
            'manpower' => 'alpha_num'
        ]);

        $volunteerDetails = [
            'type' => $data['type'],
            'province' => $data['province'],
            'district' => $data['district'],
            'local'=> $data['local'],
            'ward_no' => $data['ward_no'],
            'name' => $data['name'],
            'phone' => $data['phone'],
            'email' => $data['email'],
            'interested_area' => $data['interested_area'],
            'manpower' => $data['manpower'],
        ];

        $volunteer = Volunteers::create($volunteerDetails);

        $email = 'admin@dms.com';

        $mailInfo = [
            'title' => 'Welcome new volunteer',
            'url' => 'localhost'
        ];

        Mail::to($email)->send(new WelcomeMail($mailInfo));

        $message = 'You have been registered as volunteer';
        $recipient = $data['phone'];
        //$this->sendMessage($message,$recipient);

        return response()->json([
            'message' => 'Added volunteer data',
            'volunteerDetails' => $volunteer
        ],201);

    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $volunteerdetail =  Volunteers::find($id);
        return response()->json($volunteerdetail);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
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
        if (Volunteers::where('id', $id)->exists()) {
            $editedVolunteerData = Volunteers::find($id);
            $editedVolunteerData->type = is_null($request->type) ? $editedVolunteerData->type : $request->type;
            $editedVolunteerData->province = is_null($request->province) ? $editedVolunteerData->province : $request->province;
            $editedVolunteerData->district = is_null($request->district) ? $editedVolunteerData->district : $request->district;
            $editedVolunteerData->local = is_null($request->local) ? $editedVolunteerData->local : $request->local;
            $editedVolunteerData->ward_no = is_null($request->ward_no) ? $editedVolunteerData->ward_no : $request->ward_no;
            $editedVolunteerData->name = is_null($request->name) ? $editedVolunteerData->name : $request->name;
            $editedVolunteerData->phone = is_null($request->phone) ? $editedVolunteerData->phone : $request->phone;
            $editedVolunteerData->email = is_null($request->email) ? $editedVolunteerData->email : $request->email;
            $editedVolunteerData->interested_area = is_null($request->interested_area) ? $editedVolunteerData->interested_area : $request->interested_area;
            $editedVolunteerData->manpower = is_null($request->manpower) ? $editedVolunteerData->manpower : $request->manpower;

            $editedVolunteerData->save();
            
            return response()->json([
                "message" => "Volunteer Detail Updated successfully",
                "editedVolunteerData" => $editedVolunteerData
            ], 201);
        }else{
            return response()->json([
                "message" => "Volunteer Detail Not Found."
            ], 404);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $findVolunteerDataToDelete = Volunteers::find($id);
        $findVolunteerDataToDelete->delete();

        return response()->json([
            "message" => "Volunteer data deleted",
        ],201);
    }

    public function sendMessage($message, $recipients)
    {
        $account_sid = getenv("TWILIO_SID");
        $auth_token = getenv("TWILIO_AUTH_TOKEN");
        $twilio_number = getenv("TWILIO_NUMBER");
        $client = new Client($account_sid, $auth_token);
        $client->messages->create($recipients, ['from' => $twilio_number, 'body' => $message] );
    }

}

/*
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=dms
DB_USERNAME=root
DB_PASSWORD=
*/