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

        }
    }

    public function selectAll(){
        $location = \App\locations::all();
        $accessories = \App\accessories::all();
        $services=\App\services::all();
        $data=Response::json([
            'locations'=>$location,
            'accessories'=>$accessories,
            'services'=>$services
        ]);
        return view('admin.plan.insertplan')->with('data', $data);
    }
}
