<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\File;

class ServiceController extends Controller
{
    public function action(Request $request){
        $type = $request['data'];
        if($type==='getimage')
            return $this->getAllImage();

        //return $request['name'];
    }

    public function getAllImage()
    {
        //echo public_path();
        $images=array();
        foreach (File::allFiles(public_path().'/images/temps/') as $file)
        {
            $filename = $file->getRelativePathName();
            $images[]='public/images/temps/'.$filename;
        }
        //return [1,2,3];

        return $images;
    }
}
