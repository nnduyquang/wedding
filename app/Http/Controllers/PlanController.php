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
            case 'getTags':
                return $this->getTags();
            case 'insertPlan':
                return $this->insertPlan($request);
            case 'updatePlan':
                return $this->updatePlan($request);
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

    public function getTags()
    {
        $tags = \App\keywords::all();
        $result = array();
        foreach ($tags as $tag) {
            $result[] = $tag->name;
        }
        return Response::json([
            'options' => $result
        ]);
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
        if (!$idLocations) {
            $validator->after(function ($validator) {
                $validator->errors()->add('locations', 'Vui Lòng Chọn Địa Điểm');
            });
        }
        $accessoryMains = json_decode($request['accessoryMain'], true);
        foreach ($accessoryMains as $accessoryMain) {
            if ($accessoryMain['description'] === "") {
                $id = $accessoryMain['idAccessory'];
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
            $services = json_decode($request['services'], true);
            foreach ($services as $service) {
                $album->services()->attach($service['idService'], ['description' => $service['description'], 'has_servive' => false]);
            }
            $keywords = Input::get('taglist');
            $keywords = explode(",", $keywords);
            //dd($keywords);
            foreach ($keywords as $keyword) {
                $tag = \App\keywords::where('name', $keyword)->get();
                // dd($tag->toArray());
                if ($tag->isEmpty()) {
                    $tag = new \App\keywords;
                    $tag->name = $keyword;
                    $tag->save();
                    $album->keywords()->attach($tag->id_keyword);
                } else {
                    //dd($tag[0]->id_keyword);
                    $album->keywords()->attach($tag[0]->id_keyword);
                }
            }
            return response()->json([
                'success' => true
            ]);
        }
    }

    public function updatePlan($request)
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
        if (!$idLocations) {
            $validator->after(function ($validator) {
                $validator->errors()->add('locations', 'Vui Lòng Chọn Địa Điểm');
            });
        }
        $accessoryMains = json_decode($request['accessoryMain'], true);
        foreach ($accessoryMains as $accessoryMain) {
            if ($accessoryMain['description'] === "") {
                $id = $accessoryMain['idAccessory'];
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
            $album = \App\albums::find($request['idAlbum']);
            $album->name = $request['nameAlbum'];
            $album->description = $request['descriptionAlbum'];
            $album->id_folder = $request['idFolderAlbum'];
            $album->id = Auth::user()->id;
            $album->save();
            $idLocations = (array)Input::get('locations');
            $album->locations()->sync($idLocations);
            $accessoryMains = json_decode($request['accessoryMain'], true);
            $syncAccessoryMains = [];
            foreach ($accessoryMains as $accessoryMain) {
                $syncAccessoryMains[$accessoryMain['idAccessory']]=array('description' => $accessoryMain['description']);
            }
            $album->accessories()->sync($syncAccessoryMains);
            $accessorySubs =(array) Input::get('accessorySubs');
            $album->accessories()->sync($accessorySubs,false);
            $services = json_decode($request['services'], true);
            $syncServices = [];
            foreach ($services as $service) {
                $syncServices[$service['idService']]=array('description' => $service['description']);
            }
            $album->services()->sync($syncServices);
            $keywords = Input::get('taglist');
            $keywords = explode(",", $keywords);
            $syncKey=[];
            foreach ($keywords as $keyword) {
                $tag = \App\keywords::where('name', $keyword)->get();
                if ($tag->isEmpty()) {
                    $tag = new \App\keywords;
                    $tag->name = $keyword;
                    $tag->save();
                    $syncKey[]=$tag->id_keyword;
                } else {
                    $syncKey[]=$tag[0]->id_keyword;
                }
            }
            $album->keywords()->sync($syncKey);
            return response()->json([
                'success' => true,
                'redirect' => url('/sml_admin/plans')
            ]);

        }
    }

    public function selectAllPlan()
    {
        $data = \App\albums::all();
        return view('admin.plan')->with('data', $data);

    }

    public function getDetailPlan($id)
    {
        $location = \App\locations::select('name', 'locations.id_location', 'albumsatlocations.id_album')->leftJoin('albumsatlocations', function ($leftJoin) use ($id) {
            $leftJoin->on('locations.id_location', '=', 'albumsatlocations.id_location')->where('albumsatlocations.id_album', $id);
        })->get();
        //dd($location->toArray());
        $accessories = \App\accessories::select('accessories.id_accessory', 'name', 'type', 'description', 'accessoriesofalbums.id_album')->leftJoin('accessoriesofalbums', function ($leftJoin) use ($id) {
            $leftJoin->on('accessories.id_accessory', '=', 'accessoriesofalbums.id_accessory')->where('accessoriesofalbums.id_album', $id);
        })->get();
        //dd($accessories->toArray());
        $services = \App\services::select('services.id_service','name','description','servicesofalbums.id_album')->leftJoin('servicesofalbums', function ($leftJoin) use ($id) {
            $leftJoin->on('services.id_service', '=', 'servicesofalbums.id_service')->where('servicesofalbums.id_album', $id);
        })->get();
        $albumfolders = \App\albumfolders::all();
        $albums = \App\albums::where('id_album', $id)->first();
        $keywords = \App\keywords::leftJoin('keywordsofalbums', function ($leftJoin) use ($id) {
            $leftJoin->on('keywords.id_keyword', '=', 'keywordsofalbums.id_keyword')->where('keywordsofalbums.id_album', $id);
        })->get();
        //dd($keywords->toArray());
        $arrayKeywords = [];
        foreach ($keywords as $keyword) {
            if (!empty($keyword->id_album))
                $arrayKeywords[] = $keyword->name;
        }
        $stringKeywords = implode(",", $arrayKeywords);
        $data = Response::json([
            'id_album' => $id,
            'locations' => $location,
            'accessories' => $accessories,
            'services' => $services,
            'albumfolders' => $albumfolders,
            'albums' => $albums,
            'keywords' => $stringKeywords
        ]);
        return view('admin.plan.updateplan')->with('data', $data);
    }
}
