<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class keywords extends Model
{
    protected $table='keywords';
    protected $primaryKey = 'id_keyword';
    protected $fillable=['id_keyword','name','created_at','updated_at'];
}
