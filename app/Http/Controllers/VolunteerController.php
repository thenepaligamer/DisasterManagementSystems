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
use Illuminate\Support\Facades\Mail;
use App\Mail\WelcomeMail;

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
            'district' => 'required',
            'local'=> 'required',
            'ward_no' => 'required|numeric',
            'phone' => 'required|decimal',
            'email' => 'required',
            'interested_area' => 'required',
            'manpower' => 'alpha_num'
        ]);

        $volunteerDetails = [
            'type' => $data['type'],
            'district' => $data['district'],
            'local'=> $data['local'],
            'ward_no' => $data['ward_no'],
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

        /*return response()->json([
            'message' => 'Added volunteer data',
            'relief details' => $volunteer
        ],201);*/

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
        $data = $request->validate([
            'type' => 'required',
            'district' => 'required',
            'local'=> 'required',
            'ward_no' => 'required|numeric',
            'phone' => 'required|numeric',
            'email' => 'required',
            'interested_area' => 'required',
            'manpower' => 'alpha_num'
        ]);

        $editedVolunteerData = Volunteers::find($id);

        $editedVolunteerData->type = $request->input('type');
        $editedVolunteerData->district = $request->input('district');
        $editedVolunteerData->local = $request->input('local');
        $editedVolunteerData->ward_no = $request->input('ward_no');
        $editedVolunteerData->phone = $request->input('phone');
        $editedVolunteerData->email = $request->input('email');
        $editedVolunteerData->interested_area = $request->input('interested_area');
        $editedVolunteerData->manpower = $request->input('manpower');

        $editedVolunteerData->save();

        return response()->json([
            'message' => 'Volunteer data edited',
            'edited Details' => $editedVolunteerData
        ],201);
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
}
