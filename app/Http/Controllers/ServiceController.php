<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;

class ServiceController extends Controller
{
    public function action(Request $request){
        $type = $request['data'];
        if($type==='getimage')
            return $this->getAllImage();
        elseif($type==='uploadImage')
            return $this->uploadImage();
        //return $request['name'];
    }

    public function getAllImage()
    {
        //echo public_path();
        $images=array();
        foreach (File::allFiles(public_path().'/images/temps/') as $file)
        {
            $filename = $file->getRelativePathName();

            $images[]='/public/images/temps/'.$filename;
        }
        return $images;
    }

    public function uploadImage()
    {
        $file = Input::file('input-file');
        $target="public/images/temps/";
        $filename = $file->getClientOriginalName();
        Input::file('input-file')->move($target, $filename);
        return Response::json(['success' => true]);
    }
}
