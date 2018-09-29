Route::group(
    [
        'middleware' => [ ..,'maintenance',..] //Add 'maintenance' into the middleware section.
    ],


Route::group(['prefix' => 'admin'], function () {
    Voyager::routes();
    Route::get('/maintenance-mode/{type}','Voyager\VoyagerController@maintenance')->name('maintenanceMode');
});