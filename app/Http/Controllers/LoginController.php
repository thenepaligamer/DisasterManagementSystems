<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use App\Models\User;

class LoginController extends Controller
{
    function register (Request $request){
        $data = $request->all();

        $userDetails = [
            'name'=>$data['name'],
            'email' => $data['email'],
            'password' => Hash::make($data['password'])
        ];

        $user = User::create($userDetails);

        $token = $user-> createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    function login (Request $request){
        if( !Auth::attempt($request->only('email','password'))){
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token')->plainTextToken;

        return response()->json([
            'user' => $user,
            'access_token' => $token,
            'token_type' => 'Bearer',
        ]);
    }

    function logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ], Response::HTTP_OK);
    }
}
