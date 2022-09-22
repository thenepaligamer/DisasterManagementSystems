<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Relief extends Model
{
    use HasFactory;
    protected $fillable = [
        'district',
        'province',
        'local',
        'date',
        'rice',
        'sugar',
        'salt',
        'readymade',
        'water',
        'otherfood',
        'housing'
    ];
}
