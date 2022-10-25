<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Auth;
use Validator;
use App\Models\User;
use Laravel\Sanctum\HasApiTokens;
use Illuminate\Support\Facades\DB;
use Illuminate\Contracts\Auth\Authenticatable;

class LoginController extends Controller
{
    function register (Request $request){
        $data = $request->validate([
            'name'=>'required|string|between:3,15',
            'email'=>'required|email|unique:users',
            'password'=>'required|regex:/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$/'
            ]);

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
        ],200);
    }

    function login (Request $request){
        if( !Auth::attempt($request->only('email','password'))){
            return response()->json([
                'message' => 'Invalid login details'
            ], 401);
        }

        $user = User::where('email', $request['email'])->firstOrFail();

        $token = $user->createToken('auth_token');

        Auth::login($user);

        return response()->json([
            'message' => 'Successfully logged in',
            'access_token' => $token->plainTextToken,
            'token_type' => 'Bearer',
            'user' => $user->id
        ],200);
    }

    function logout(){
        auth()->user()->tokens()->delete();

        return response()->json([
            'message' => 'Successfully logged out'
        ], Response::HTTP_OK);
    }

    function doSomething(Request $request){
        #$user = DB::select('select * from users');
        #echo $user = User::all();
        $print = Auth::user();
        print($print->id);
    }
}
