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
        'lat',
        'long',
        'type',
        'description',
        'estloss',
        'death',
        'missing',
        'injured',
        'is_verified'
    ];

    public function volunteers()
    {
        return $this->hasMany(Volunteers::class);
    }
}
