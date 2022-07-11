<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inventory extends Model
{
    use HasFactory;
    protected $fillable = [
        'organization',
        'location',
        'spokesman',
        'phone',/*
        'warehouse',
        'item',
        'packet',
        'quantity'*/
    ];
}
