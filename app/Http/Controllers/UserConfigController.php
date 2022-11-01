<?php

namespace App\Http\Controllers;

use App\Models\UserConfig;
use Illuminate\Http\Request;

class UserConfigController extends Controller
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
        $showAllDetails = UserConfig::all();
        return response()->json($showAllDetails);
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
            'phone' => 'required',
            'email' => 'string',
            'district' => 'required'
        ]);

        $userConfigDetails = [
            'phone' => $data['phone'],
            'email' => $data['email'],
            'district' => $data['district']
        ];

        $userdata = UserConfig::create($userConfigDetails);

        return response()->json([
            'message' => 'Added user data',
            'userData' => $userdata
        ],201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\UserConfig  $userConfig
     * @return \Illuminate\Http\Response
     */
    public function show(UserConfig $userConfig)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\UserConfig  $userConfig
     * @return \Illuminate\Http\Response
     */
    public function edit(UserConfig $userConfig)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\UserConfig  $userConfig
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, UserConfig $userConfig)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\UserConfig  $userConfig
     * @return \Illuminate\Http\Response
     */
    public function destroy(UserConfig $userConfig)
    {
        $findUserDataToDelete = UserConfig::find($id);
        $findUserDataToDelete->delete();

        return response()->json([
            "message" => "User data deleted",
        ],201);
    }
}