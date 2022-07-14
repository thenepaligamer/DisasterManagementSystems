<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Events;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Rules\ValidHCaptcha;
use Laravel\Sanctum\HasApiTokens;

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

        return response()->json([
            'message' => 'Added event',
            'event details' => $events
        ], 201);
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
    public function edit($id)
    {
        
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
