<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Http\Exceptions\MaintenanceModeException;

class CheckForMaintenanceMode
{
    public $app;

    public function __construct(Application $app)
    {
        $this->app = $app;
    }

    public function handle($request, Closure $next)
    {
        if ($this->app->isDownForMaintenance() && !$this->isTrue($request)) {
            $data = json_decode(file_get_contents($this->app->storagePath() . '/framework/down'), true);

            throw new MaintenanceModeException($data['time'], $data['retry'], $data['message']);
        }

        return $next($request);
    }

    private function isTrue($request)
    {
        return ($request->is('admin/*') || auth()->check());
    }
}