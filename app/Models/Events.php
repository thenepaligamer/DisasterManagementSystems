<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Events extends Model
{
    use HasFactory;
    protected $fillable = [
        'title',
        'province',
        'district',
        'local',
        'type',
        'description',
        'estloss',
        'death',
        'missing',
        'injured',
        'is_verified'
    ];

    /*public function volunteers()
    {
        return $this->hasMany('App\Model\Volunteers');
    }*/
}
