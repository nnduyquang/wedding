<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class albumfolders extends Model
{
    protected $table='albumfolders';
    protected $primaryKey = 'id_folder';
    protected $fillable=['id_folder','name','main_image','created_at','updated_at','id'];
    public function users(){
        return $this->belongsTo('App\User','id');
    }
}
