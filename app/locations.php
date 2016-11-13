<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class locations extends Model
{
    protected $table='locations';
    protected $primaryKey = 'id_location';
    protected $fillable=['id_location','name','created_at','updated_at','id'];
    public function users(){
        return $this->belongsTo('App\User','id');
    }
    public function albums(){
        return $this->belongsToMany('App\albums','albumsatlocations','id_location','id_album');
    }
}
