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
            case 'deleteImageInFolder':
                return $this->deleteImageInFolder($request);
        }
    }

    /**
     * @param $request
     * @return mixed
     */
    public function uploadImage($request)
    {
        $messages = array(
            'albumname.required' => 'Tên Album Không Để Trống',
            'uploadfile.max' => 'Dung Lượng Hình Không Lớn Hơn 2MB'
        );
        $validator = Validator::make($request->all(), [
            'albumname' => 'required',
            'uploadfile' => 'max:2048'
        ], $messages);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()->toArray()
            ]);
        } else {
            $file = Input::file('uploadfile');
            if ($file) {
                $name_folder = $request['albumname'];
                if ($request['type'] == 'create') {
                    $album_folder = new \App\albumfolders;
                    $album_folder->name = $name_folder;
                    $album_folder->id = Auth::user()->id;
                    $album_folder->save();
                }

                $target = "public/images/albums/" . $name_folder;
                foreach ($file as $oneFile) {
                    $ran = str_random(10);
                    $filename = $oneFile->getClientOriginalName();
                    $filename = str_replace('.' . $oneFile->getClientOriginalExtension(), '', $filename);
                    $filename = $filename . '_' . $ran . '.' . $oneFile->getClientOriginalExtension();
                    $oneFile->move($target, $filename);
                }
                return Response::json(['success' => true]);
            }
            return Response::json([
                'success' => false,
                'errors' => ['uploadfile' => 'Mời Chọn Hình']
            ]);
        }
    }

    public function selectAll()
    {
        $album_folder = \App\albumfolders::all();
        return view('admin.albummanager')->with('data', $album_folder);
    }

    public function getDirectory()
    {
        $directory = 'public/images/albums/*';
        $listfile = [];
        foreach (glob($directory, GLOB_ONLYDIR) as $dir) {
            $listfile[] = basename($dir);
        }
        return response()->json([
            'success' => true,
            'listfile' => $listfile
        ]);
    }

    public function getListImage($request)
    {
        $images = array();
        foreach (File::allFiles(public_path() . '/images/albums/' . $request['nameFolder']) as $file) {
            $filename = $file->getRelativePathName();
            $images[] = '/public/images/albums/' . $request['nameFolder'] . '/' . $filename;
        }
        return $images;
    }

    public function getImageOfAlbum($id)
    {
        $album_folder = \App\albumfolders::where('id_folder', $id)->first();
        $images = array();
        foreach (File::allFiles(public_path() . '/images/albums/' . $album_folder->name) as $file) {
            $filename = $file->getRelativePathName();
            $images[] = ['/public/images/albums/' . $album_folder->name . '/' . $filename, $filename];
        }
        $data = Response::json([
            'name' => $album_folder->name,
            'images' => $images,
            'id_folder' => $album_folder->id_folder,
        ]);
        //return $data;
        return view('admin.album.viewdetailalbum')->with('data', $data);
    }

    public function deleteImageInFolder($request)
    {
        $infos = $request['info'];
        $pathImage = '/public/images/albums/';
        foreach ($infos as $info) {
            File::delete(public_path() . '/images/albums/' . $info['folder'] . '/' . $info['name']);
        }
        return Response::json(['success' => true]);
    }

}
