<?php

namespace App\Http\Controllers\Voyager;

use TCG\Voyager\Http\Controllers\VoyagerController as BaseVoyagerController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Artisan;

class VoyagerController extends BaseVoyagerController
{
    public function maintenance($modeName)
    {
        if ( ! App::isDownForMaintenance() && $modeName === 'down') {
            Artisan::call('down');
        }

        if (App::isDownForMaintenance() && $modeName === 'up') {
            Artisan::call('up');
        }

        return redirect()->back()->with('toastr_success', 'Your website maintenance mode was successfully changed!');

    }
}