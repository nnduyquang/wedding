<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class accessories extends Model
{
    protected $table='accessories';
    protected $primaryKey = 'id_accessory';
    protected $fillable=['id_accessory','name','type','created_at','updated_at','id'];
    public function users(){
        return $this->belongsTo('App\User','id');
    }
}
