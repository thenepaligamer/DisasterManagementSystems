<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Volunteers extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'type',
        'district',
        'local',
        'ward_no',
        'phone',
        'email',
        'interested_area',
        'manpower'
    ];
}
