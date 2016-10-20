<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Input;
use Illuminate\Support\Facades\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class ServiceController extends Controller
{
    public function action(Request $request){
        $type = $request['data'];
        if($type==='getimage')
            return $this->getAllImage();
        elseif($type==='uploadImage')
            return $this->uploadImage();

        if(Input::get('insertService')){
            $check = $this->insert($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Thêm Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Thêm Thất Bại');
            }
        }else if (Input::get('deleteLocation')) {
            $check = $this->delete($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Xóa Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Xóa Thất Bại');
            }
        }
    }

    public function getAllImage()
    {
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

    public function insert(Request $request){
        $messages = array(
            'txtsevice.required' => '* Không Để Trống',
            'srcIcon.required'=>'* Mời Chọn Icon',
        );
        $this->validate($request, [
            'txtsevice' => 'required',
            'srcIcon' => 'required',
        ], $messages);
        $nameService=$request['txtsevice'];
        $srcIcon=$request['srcIcon'];
        $service = new \App\services;
        $service->name= $nameService;
        $service->icon= $srcIcon;
        $service->id = Auth::user()->id;
        return ($service->save());
    }

    public function delete(Request $request){
        $items_checked = Input::get('checkbox');
        if (is_array($items_checked)) {
            return (\App\services::whereIn('id_service', $items_checked)->delete());
        }
    }

    public function selectAll()
    {
        $data = \App\services::all();
        return view('admin.service')->with('data', $data);

    }
}
