<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class AccessoryController extends Controller
{
    public function action(Request $request)
    {
        if (Input::get('insertAccessory')) {
            $check = $this->insert($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Thêm Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Thêm Thất Bại');
            }

        } else if (Input::get('updateAccessory')) {
            $check = $this->update($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Cập Nhật Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Cập Nhật Thất Bại');
            }
        } else if (Input::get('deleteAccessory')) {
            $check = $this->delete($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Xóa Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Xóa Thất Bại');
            }
        } else
            redirect('errors');
    }

    public function insert(Request $request)
    {
        $messages = array(
            'accessory.required' => '* Không Để Trống',
        );
        $this->validate($request, [
            'accessory' => 'required'
        ], $messages);
        $location = new \App\accessories;
        if (Input::has('type')){
            $location->type=1;
        }else{
            $location->type=0;
        }
        $location->name = $request['accessory'];
        $location->id = Auth::user()->id;
        return ($location->save());
    }

    public function update(Request $request)
    {
        $id=$request['hdId'];
        $data = \App\accessories::find($id);
        if (Input::has('edittype')){
            $data->type=1;
        }else{
            $data->type=0;
        }
        $data->name = $request['editaccessory'];
        $data->id=Auth::user()->id;
        return ($data->save());
    }

    public function delete(Request $request)
    {
        $items_checked = Input::get('checkbox');
        if (is_array($items_checked)) {
            return (\App\accessories::whereIn('id_accessory', $items_checked)->delete());
        }
    }

    public function selectAll()
    {
        $data = \App\accessories::orderBy('type', 'desc')->get();
        return view('admin.accessory')->with('data', $data);

    }
}
