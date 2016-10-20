<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class services extends Model
{
    protected $table='services';
    protected $primaryKey = 'id_service';
    protected $fillable=['id_service','name','icon','created_at','updated_at','id'];
    public function users(){
        return $this->belongsTo('App\User','id');
    }
}
