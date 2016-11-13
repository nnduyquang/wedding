<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class albums extends Model
{
    protected $table='albums';
    protected $primaryKey = 'id_album';
    protected $fillable=['id_album','name','description','updated_at','id','id_folder'];
    public function users(){
        return $this->belongsTo('App\User','id');
    }

    public function locations(){
        return $this->belongsToMany('App\locations','albumsatlocations','id_album','id_location')->withTimestamps();
    }
    public function accessories(){
        return $this->belongsToMany('App\accessories','accessoriesofalbums','id_album','id_accessory')
            ->withPivot('has_accessory', 'description')
            ->withTimestamps();
    }
    public function services(){
        return $this->belongsToMany('App\services','servicesofalbums','id_album','id_service')
            ->withPivot('has_servive', 'description')
            ->withTimestamps();
    }
}
