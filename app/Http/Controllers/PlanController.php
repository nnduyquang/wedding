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


class PlanController extends Controller
{
    public function action(Request $request)
    {
        $type = $request['data'];
        switch ($type) {
            case 'insertPlan':
                return $this->insertPlan($request);
        }
    }

    public function selectAll()
    {
        $location = \App\locations::all();
        $accessories = \App\accessories::all();
        $services = \App\services::all();
        $albumfolders = \App\albumfolders::all();
        $data = Response::json([
            'locations' => $location,
            'accessories' => $accessories,
            'services' => $services,
            'albumfolders' => $albumfolders
        ]);
        return view('admin.plan.insertplan')->with('data', $data);
    }

    public function insertPlan($request)
    {
        $messages = array(
            'nameAlbum.required' => 'Tên Album Không Để Trống',
            'descriptionAlbum.required' => 'Vui Lòng Nhập Mô Tả Album',
            'idFolderAlbum.numeric' => 'Vui Lòng Chọn Album'
        );
        $validator = Validator::make($request->all(), [
            'nameAlbum' => 'required',
            'descriptionAlbum' => 'required',
            'idFolderAlbum' => 'numeric'
        ], $messages);
        $idLocations = Input::has('locations');
        if(!$idLocations){
            $validator->after(function($validator){
                $validator->errors()->add('locations', 'Vui Lòng Chọn Địa Điểm');
            });
        }
        $accessoryMains = json_decode($request['accessoryMain'], true);
        foreach ($accessoryMains as $accessoryMain) {
            if($accessoryMain['description']===""){
                $id=$accessoryMain['idAccessory'];
                $validator->after(function ($validator) {
                    $validator->errors()->add('accessoryMain', 'Vui Lòng Nhập Không Để Trống');
                });
                break;
            }
        }
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()->toArray()
            ]);
        } else {
            $album = new \App\albums;
            $album->name = $request['nameAlbum'];
            $album->description = $request['descriptionAlbum'];
            $album->id_folder = $request['idFolderAlbum'];
            $album->id = Auth::user()->id;
            $album->save();
            $idLocations = Input::get('locations');
            foreach ($idLocations as $idLocation) {
                $album->locations()->attach($idLocation);
            }
            $accessoryMains = json_decode($request['accessoryMain'], true);
            foreach ($accessoryMains as $accessoryMain) {
                $album->accessories()->attach($accessoryMain['idAccessory'], ['description' => $accessoryMain['description'], 'has_accessory' => false]);
            }
            $accessorySubs = Input::get('accessorySubs');
            foreach ($accessorySubs as $accessorySub) {
                $album->accessories()->attach($accessorySub);
            }
            $services=json_decode($request['services'], true);
            foreach ($services as $service) {
                $album->services()->attach($service['idService'], ['description' => $service['description'], 'has_servive' => false]);
            }
            return response()->json([
                'success' => true
            ]);
        }
    }
}
