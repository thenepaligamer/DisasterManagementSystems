<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class UsersPhoneNumber extends Model
{
    use HasFactory;
    protected $table= "users_dis";
    protected $fillable = [
        'phone_number'
    ];
}
