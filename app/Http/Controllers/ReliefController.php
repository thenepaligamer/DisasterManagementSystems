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
            'province' => 'required',
            'district' => 'required',
            'local' => 'required',
            'date'=> 'required',
            'rice' => 'numeric',
            'sugar' => 'numeric',
            'salt' => 'numeric',
            'readymade' => 'numeric',
            'water' => 'numeric',
            'otherfood' => 'required',
            'housing' => 'required',
        ]);

        $reliefDetails = [
            'province' => $data['province'],
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
            'reliefDetails' => $reliefs
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
        if (Relief::where('id', $id)->exists()) {
            $editedReliefData = Relief::find($id);
            $editedReliefData->province = is_null($request->province) ? $editedReliefData->province : $request->input['province'];
            $editedReliefData->district = is_null($request->district) ? $editedReliefData->district : $request->district;
            $editedReliefData->local = is_null($request->local) ? $editedReliefData->local : $request->local;
            $editedReliefData->date = is_null($request->date) ? $editedReliefData->date : $request->date;
            $editedReliefData->rice = is_null($request->rice) ? $editedReliefData->rice : $request->rice;
            $editedReliefData->sugar = is_null($request->sugar) ? $editedReliefData->sugar : $request->sugar;
            $editedReliefData->salt = is_null($request->salt) ? $editedReliefData->salt : $request->salt;
            $editedReliefData->readymade = is_null($request->readymade) ? $editedReliefData->readymade : $request->readymade;
            $editedReliefData->water = is_null($request->water) ? $editedReliefData->water : $request->water;
            $editedReliefData->otherfood = is_null($request->otherfood) ? $editedReliefData->otherfood : $request->otherfood;
            $editedReliefData->housing = is_null($request->housing) ? $editedReliefData->housing : $request->housing;

            $editedReliefData->save();
            
            return response()->json([
                "message" => "Relief Details Updated successfully",
                "editedReliefData" => $editedReliefData
            ], 201);
        }else{
            return response()->json([
                "message" => "Relief Detail Not Found."
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
        $findReliefToDelete = Relief::find($id);
        $findReliefToDelete->delete();

        return response()->json([
            "message" => "Relief deleted",
        ],201);
    }
}
