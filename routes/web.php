<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| This file is where you may define all of the routes that are handled
| by your application. Just tell Laravel the URIs it should respond
| to using a Closure or controller method. Build something great!
|
*/

Route::get('/', function () {
    return view('home');
});
Route::get('album', function () {
    return view('album');
});
Route::get('detail', function () {
    return view('detail');
});
Route::get('sml_login', function () {
    if (\Illuminate\Support\Facades\Auth::check())
        return redirect()->intended('sml_admin/dashboard');
    else
        return view('admin.login');
});
Route::post('sml_login', 'AuthController@login')->name('login');
Route::post('sml_admin/locations', 'LocationController@action')->name('locations');
Route::post('sml_admin/services', 'ServiceController@action')->name('services');
//Route::post('sml_admin/services/upload','ServiceController@uploadImage');

Route::group(['middleware' => ['AuthMiddle']], function () {
    Route::get('sml_admin', function () {
        return view('admin.admin');
    });
    Route::get('sml_admin/dashboard', function () {
        return view('admin.dashboard');
    });
    Route::get('sml_admin/albums', function () {
        return view('admin.album');
    });
    Route::get('sml_admin/locations', 'LocationController@selectAll');
    Route::get('sml_admin/services', 'ServiceController@selectAll');
});
Route::get('errors', function () {
    return view('errors.503');
});


Route::get('logout', 'AuthController@logout');
