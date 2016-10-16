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
                return Redirect::back()->with('success', ['Thêm Thành Công']);
            } else {
                return Redirect::back()->with('fail', ['Thêm Thất Bại']);
            }

        } else if (Input::get('updateLocation')) {
            $this->update($request);
        } else if (Input::get('deleteLocation')) {
            $this->delete($request);
        } else
            redirect('errors');
    }

    public function insert(Request $request)
    {
        $messages = array(
            'location.required' => 'Không Để Trống',
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
        echo $request['location'];
        echo '<br>' . 'update';
    }

    public function delete(Request $request)
    {
        echo $request['location'];
        echo '<br>' . 'delete';
    }
}
