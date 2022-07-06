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
        //
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
        if(Auth::check()){
            return response()->json([ 'user'=> $request->user() ]);
        }else{
            echo "fu";
        }


        /*
        $data = $request->validate([
            'title' => 'required',
            'location' => 'required',
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
            'location' => $data['location'],
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
            'message' => 'Added event'
        ], 201);*/
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show()
    {
       echo "Si senor";
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
