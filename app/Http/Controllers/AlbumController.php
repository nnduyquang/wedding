<?php

namespace App\Http\Controllers;


use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Illuminate\Support\Facades\Validator;

class AlbumController extends Controller
{
    public function action(Request $request)
    {
        $type = $request['data'];
        switch ($type) {
            case 'uploadImage':
                return $this->uploadImage($request);
            case 'getDirectory':
                return $this->getDirectory();
            case 'getListImage':
                return $this->getListImage($request);
        }
    }

    public function uploadImage($request)
    {
        $messages = array(
            'albumname.required' => 'Tên Album Không Để Trống',
        );
        $validator = Validator::make($request->all(), [
            'albumname' => 'required'
        ], $messages);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()->toArray(),
                'error'=>$validator->errors()->first('albumname')
            ]);
        } else {
            $name_folder = $request['albumname'];
            $file = Input::file('input-file-album');
            $target = "public/images/albums/" . $name_folder;
            $filename = $file->getClientOriginalName();
            Input::file('input-file-album')->move($target, $filename);
            return Response::json(['success' => true]);
        }
    }
    public function getDirectory(){
        $directory='public/images/albums/*';
        $listfile=[];
        foreach(glob($directory, GLOB_ONLYDIR) as $dir) {
            $listfile[]= basename($dir);
        }
        return response()->json([
            'success' => true,
            'listfile'=>$listfile
        ]);
    }

    public function getListImage($request){
        $images = array();
        foreach (File::allFiles(public_path() . '/images/albums/'.$request['nameFolder']) as $file) {
            $filename = $file->getRelativePathName();
            $images[] = '/public/images/albums/'.$request['nameFolder'].'/' . $filename;
        }
        return $images;
    }

}
