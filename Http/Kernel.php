<?php
    protected $middleware = [
//        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class, //This line must be delete if it was exist.
    ];

    protected $routeMiddleware = [
        'maintenance' => \App\Http\Middleware\CheckForMaintenanceMode::class, //Add this line.
    ];
}