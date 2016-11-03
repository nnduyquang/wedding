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

class ServiceController extends Controller
{
    public function action(Request $request)
    {
        $type = $request['data'];
        if ($type === 'getimage')
            return $this->getAllImage();
        elseif ($type === 'uploadImage')
            return $this->uploadImage();
        elseif ($type === 'selectService') {
            $id = $request['id'];
            return $this->getServiceById($id);
        }
        switch ($type) {
            case 'getimage':
                return $this->getAllImage();
            case 'uploadImage':
                return $this->uploadImage();
            case 'selectService':
                $id = $request['id'];
                return $this->getServiceById($id);
            case 'insertService':
                //console.log('zo');
                return $this->insert($request);
            case 'getDetailService':
                return $this->getServiceById($request['id']);
            case 'updateService':
                return $this->update($request);
            case 'deleteService':
                return $this->delete($request);
        }
    }

    public function getAllImage()
    {
        $images = array();
        foreach (File::allFiles(public_path() . '/images/temps/') as $file) {
            $filename = $file->getRelativePathName();
            $images[] = '/public/images/temps/' . $filename;
        }
        return $images;
    }

    public function uploadImage()
    {
        $file = Input::file('input-file');
        $target = "public/images/temps/";
        $filename = $file->getClientOriginalName();
        Input::file('input-file')->move($target, $filename);
        return Response::json(['success' => true]);
    }

    public function insert(Request $request)
    {
        $messages = array(
            'txtsevice.required' => '* Không Để Trống',
            'srcIcon.required' => '* Mời Chọn Icon',
            'txtorder.integer' => 'Chỉ Được Nhập Số Nguyên'
        );
        $validator = Validator::make($request->all(), [
            'txtsevice' => 'required',
            'srcIcon' => 'required',
            'txtorder' => 'integer'
        ], $messages);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()->toArray()
            ]);
        } else {

            $nameService = $request['txtsevice'];
            $srcIcon = $request['srcIcon'];
            $service = new \App\services;
            $service->name = $nameService;
            $service->icon = $srcIcon;
            if ($request->has('txtorder')) {
                $txtorder = $request['txtorder'];
                $service->order = $txtorder;
            }
            $service->id = Auth::user()->id;
            $service->save();
            return response()->json([
                'success' => true
            ]);
        }
    }

    public function update(Request $request)
    {
        $messages = array(
            'txtsevice.required' => '* Không Để Trống',
            'srcIcon.required' => '* Mời Chọn Icon',
            'txtorder.integer' => 'Chỉ Được Nhập Số Nguyên'
        );
        $validator = Validator::make($request->all(), [
            'txtsevice' => 'required',
            'srcIcon' => 'required',
            'txtorder' => 'integer'
        ], $messages);
        if ($validator->fails()) {
            return response()->json([
                'success' => false,
                'errors' => $validator->errors()->toArray()
            ]);
        } else {
            $id = $request['id'];
            $nameService = $request['txtsevice'];
            $srcIcon = $request['srcIcon'];
            $data = \App\services::find($id);
            $data->name = $nameService;
            $data->icon = $srcIcon;
            if ($request->has('txtorder')) {
                $txtorder = $request['txtorder'];
                $data->order = $txtorder;
            }
            $data->id = Auth::user()->id;
            $data->save();
            return response()->json([
                'success' => true
            ]);
        }
    }

    public function delete(Request $request)
    {
        $items_checked = $request['checkboxlist'];
        if (is_array($items_checked)) {
            \App\services::whereIn('id_service', $items_checked)->delete();
            return response()->json([
                'success' => true
            ]);
        }
    }

    public function selectAll()
    {
        $data = \App\services::all()->sortBy("order");;
        return view('admin.service')->with('data', $data);

    }

    public function getServiceById($id)
    {
        $data = \App\services::where('id_service', $id)->first();
        return response()->json([
            'success' => true,
            'data' => $data->toArray()
        ]);
    }
}
