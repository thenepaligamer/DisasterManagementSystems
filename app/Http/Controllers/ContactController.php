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
            'district' => 'required',
            'local' => 'required',
            'spokesman'=> 'required',
            'phone' => 'required|numeric',
            'email' => 'required'
        ]);

        $contactDetails = [
            'district' => $data['district'],
            'local' => $data['local'],
            'spokesman'=> $data['spokesman'],
            'phone' => $data['phone'],
            'email' => $data['email']
        ];

        $contacts = Contact::create($contactDetails);

        return response()->json([
            'message' => 'Added contacts',
            'relief details' => $contacts
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
        $data = $request->validate([
            'district' => 'required',
            'local' => 'required',
            'spokesman'=> 'required',
            'phone' => 'required|numeric',
            'email' => 'required'
        ]);

        $editedContactData = Contact::find($id);

        $editedContactData->district = $request->input('district');
        $editedContactData->local = $request->input('local');
        $editedContactData->spokesman = $request->input('spokesman');
        $editedContactData->phone = $request->input('phone');
        $editedContactData->email = $request->input('email');

        $editedContactData->save();

        return response()->json([
            'message' => 'Contacts edited',
            'edited Details' => $editedContactData
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
        $findContactToDelete = Contact::find($id);
        $findContactToDelete->delete();

        return response()->json([
            "message" => "Relief deleted",
        ],201);
    }
}
