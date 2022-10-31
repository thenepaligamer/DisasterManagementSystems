<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use App\Rules\ValidHCaptcha;
use Laravel\Sanctum\HasApiTokens;


class ContactController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $showAllDetails = Contact::all();
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
            'spokesman'=> 'required',
            'phone' => 'required|numeric',
            'email' => 'required'
        ]);

        $contactDetails = [
            'province' => $data['province'],
            'district' => $data['district'],
            'local' => $data['local'],
            'spokesman'=> $data['spokesman'],
            'phone' => $data['phone'],
            'email' => $data['email']
        ];

        $contacts = Contact::create($contactDetails);

        return response()->json([
            'message' => 'Added contacts',
            'contactDetail' => $contacts
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
        $contactdetail = Contact::find($id);
        return response()->json($contactdetail);
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
        if (Contact::where('id', $id)->exists()) {
            $editedContactData = Contact::find($id);
            $editedContactData->province = is_null($request->province) ? $editedContactData->province : $request->input['province'];
            $editedContactData->district = is_null($request->district) ? $editedContactData->district : $request->district;
            $editedContactData->local = is_null($request->local) ? $editedContactData->local : $request->local;
            $editedContactData->spokesman = is_null($request->spokesman) ? $editedContactData->spokesman : $request->spokesman;
            $editedContactData->phone = is_null($request->phone) ? $editedContactData->phone : $request->phone;
            $editedContactData->email = is_null($request->email) ? $editedContactData->email : $request->email;

            $editedContactData->save();
            
            return response()->json([
                "message" => "Contact Updated successfully",
                "editedContactData" => $editedContactData
            ], 201);
        }else{
            return response()->json([
                "message" => "Contact Not Found."
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
        $findContactToDelete = Contact::find($id);
        $findContactToDelete->delete();

        return response()->json([
            "message" => "Relief deleted",
        ],201);
    }
}
