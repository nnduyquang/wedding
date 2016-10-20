<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Validator;
use Illuminate\Support\MessageBag;
use App\Http\Requests;
use Illuminate\Support\Facades\Auth;

class AuthController extends Controller
{
    public function login(Request $request)
    {
//        system.out.println("step1");
//        if(Auth::check()){
//            system.out.println("step2");
//            return redirect()->intended('sml_admin/dashboard');
//        }else{
        $this->validate($request, [
            'email' => 'required|max:50',
            'password' => 'required'
        ]);
        $email = $request['email'];
        $password = $request['password'];
        if (Auth::attempt(['email' => $email, 'password' => $password])) {
            //echo 'Thành công';
            //$request->session()->put('user', Auth::user());
            //$user = Auth::User();
            //Session::put('name', $user->name);
            //session(['user' => Auth::user()]);
            //return view('admin.admin', ['user' => Auth::user()]);
            return redirect()->intended('sml_admin/dashboard');
        } else {
            $errors = new MessageBag(['errors' => ['Thông Tin Đăng Nhập Không Hợp Lệ.']]);
            return Redirect::back()->withErrors($errors);
        }

//        }
        //echo $request['email'];
        //echo $request['password'];

    }

    public function logout()
    {
        //session()->flush();
        Auth::logout();
        return redirect()->intended('sml_login');
    }
}
