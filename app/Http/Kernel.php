<?php namespace portfolio\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel {

	/**
	 * The application's global HTTP middleware stack.
	 *
	 * @var array
	 */
	protected $middleware = [
		'Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode',
		'Illuminate\Cookie\Middleware\EncryptCookies',
		'Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse',
		'Illuminate\Session\Middleware\StartSession',
		'Illuminate\View\Middleware\ShareErrorsFromSession',
	];

	/**
	 * The application's route middleware.
	 *
	 * @var array
	 */
	protected $routeMiddleware = [
            'auth' => 'portfolio\Http\Middleware\Authenticate',
            'auth.basic' => 'Illuminate\Auth\Middleware\AuthenticateWithBasicAuth',
            'guest' => 'portfolio\Http\Middleware\RedirectIfAuthenticated',
            'csrf' => 'portfolio\Http\Middleware\VerifyCsrfToken',
	];

}
