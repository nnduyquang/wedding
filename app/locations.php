<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class locations extends Model
{
    protected $table='locations';
    protected $fillable=['id_location','name','created_at','updated_at','id'];
}
