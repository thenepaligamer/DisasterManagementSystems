<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Volunteers extends Model
{
    use HasFactory;
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
