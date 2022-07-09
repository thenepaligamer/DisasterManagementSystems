<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Relief;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Rules\ValidHCaptcha;
use Laravel\Sanctum\HasApiTokens;

class ReliefController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $showAllDetails = Relief::all();
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
            'district' => 'required',
            'local' => 'required',
            'date'=> 'required|date',
            'rice' => 'numeric',
            'sugar' => 'numeric',
            'salt' => 'numeric',
            'readymade' => 'numeric',
            'water' => 'numeric',
            'otherfood' => 'numeric',
            'housing' => 'alpha_num',
        ]);

        $reliefDetails = [
            'district' => $data['district'],
            'local' => $data['local'],
            'date'=> $data['date'],
            'rice' => $data['rice'],
            'sugar' => $data['sugar'],
            'salt' => $data['salt'],
            'readymade' => $data['readymade'],
            'water' => $data['water'],
            'otherfood' => $data['otherfood'],
            'housing' => $data['housing']
        ];

        $reliefs = Relief::create($reliefDetails);

        return response()->json([
            'message' => 'Added relief',
            'relief details' => $reliefs
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
        $reliefdetail = Relief::find($id);
        return response()->json($reliefdetail);
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
            'district' => 'required',
            'local' => 'required',
            'date'=> 'required|date',
            'rice' => 'numeric',
            'sugar' => 'numeric',
            'salt' => 'numeric',
            'readymade' => 'numeric',
            'water' => 'numeric',
            'otherfood' => 'numeric',
            'housing' => 'alpha_num',
        ]);

        $editedReliefData = Relief::find($id);

        $editedReliefData->district = $request->input('district');
        $editedReliefData->local = $request->input('local');
        $editedReliefData->date = $request->input('date');
        $editedReliefData->rice = $request->input('rice');
        $editedReliefData->sugar = $request->input('sugar');
        $editedReliefData->salt = $request->input('salt');
        $editedReliefData->readymade = $request->input('readymade');
        $editedReliefData->water = $request->input('water');
        $editedReliefData->otherfood = $request->input('otherfood');
        $editedReliefData->housing = $request->input('housing');

        $editedReliefData->save();

        return response()->json([
            'message' => 'Relief edited',
            'edited Details' => $editedReliefData
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
        $findReliefToDelete = Relief::find($id);
        $findReliefToDelete->delete();

        return response()->json([
            "message" => "Relief deleted",
        ],201);
    }
}
