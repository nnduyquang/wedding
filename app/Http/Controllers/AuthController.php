<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
        //echo $request['email'];
        //echo $request['password'];
        $email = $request['email'];
        $password = $request['password'];
        if (Auth::attempt(['email' => $email, 'password' => $password]))
            //echo 'Thành công';
            return view('admin.admin', ['user' => Auth::user()]);
        else
            echo 'Thất Bại';
    }

    public function logout()
    {
        Auth::logout();
        return view('admin.login');
    }
}
