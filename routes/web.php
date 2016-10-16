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
Route::get('login', function () {
    return view('admin.login');
});
Route::post('login', 'AuthController@login')->name('login');
Route::post('admin/locations','LocationController@action')->name('locations');

Route::group(['middleware'=>['AuthMiddle']],function(){
    Route::get('admin', function () {
        return view('admin.admin');
    });
    Route::get('admin/dashboard', function () {
        return view('admin.dashboard');
    });
    Route::get('admin/albums', function () {
        return view('admin.album');
    });
    Route::get('admin/locations', function () {
        return view('admin.location');
    })->name('ohyear');
});

/*Route::get('admin', function () {
    return view('admin.admin');
})->middleware('AuthMiddle');
Route::get('admin/dashboard', function () {
    return view('admin.dashboard');
})->middleware('AuthMiddle');
Route::get('admin/albums', function () {
    return view('admin.album');
})->middleware('AuthMiddle');*/
Route::get('errors', function () {
    return view('errors.503');
});


Route::get('logout', 'AuthController@logout');
