<?php namespace Uthmordar\Staticify;

use Illuminate\Support\ServiceProvider;

class StaticifyServiceProvider extends ServiceProvider {

    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = false;

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register(){
        $this->app['staticify'] = $this->app->share(function($app){
            return new Staticify;
        });
        
        $this->app['page']=$this->app->share(function($app){
            return new Page;
        });

        // Shortcut so developers don't need to add an Alias in app/config/app.php
        $this->app->booting(function(){
            $loader = \Illuminate\Foundation\AliasLoader::getInstance();
            $loader->alias('Staticify', '\Uthmordar\Staticify\Facade\StaticifyFacade');
            $loader->alias('Page', '\Uthmordar\Staticify\Page');
        });
        
        $this->app->bind('vendor::command.generate.static.page', function($app) {
            return new Command\GenerateStaticPage();
        });
        $this->commands(array(
            'vendor::command.generate.static.page'
        ));
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides(){
        return [];
    }
}