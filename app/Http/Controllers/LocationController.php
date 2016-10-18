<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Input;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Redirect;

class LocationController extends Controller
{

    public function action(Request $request)
    {
        if (Input::get('insertLocation')) {
            $check = $this->insert($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Thêm Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Thêm Thất Bại');
            }

        } else if (Input::get('updateLocation')) {
            $check = $this->update($request);
            if ($check) {
                return Redirect::back()->withInput()->with('success', 'Cập Nhật Thành Công');
            } else {
                return Redirect::back()->withInput()->with('fail', 'Cập Nhật Thất Bại');
            }
        } else if (Input::get('deleteLocation')) {
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
            'location.required' => '* Không Để Trống',
        );
        $this->validate($request, [
            'location' => 'required'
        ], $messages);

        $location = new \App\locations;
        $location->name = $request['location'];
        $location->id = Auth::user()->id;
        return ($location->save());
    }

    public function update(Request $request)
    {
        $id=$request['hdId'];
        $data = \App\locations::find($id);
        $data->name = $request['editlocation'];
        return ($data->save());
    }

    public function delete(Request $request)
    {
        $items_checked = Input::get('checkbox');
        if (is_array($items_checked)) {
            return (\App\locations::whereIn('id_location', $items_checked)->delete());
        }
    }

    public function selectAll()
    {
        $data = \App\locations::all();
        return view('admin.location')->with('data', $data);

    }
}
