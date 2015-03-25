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
        
        $this->app['pagesfactory']=$this->app->share(function($app){
            return new PagesFactory;
        });


        // Shortcut so developers don't need to add an Alias in app/config/app.php
        $this->app->booting(function(){
            $loader = \Illuminate\Foundation\AliasLoader::getInstance();
            $loader->alias('Staticify', '\Uthmordar\Staticify\Facade\StaticifyFacade');
            $loader->alias('Page', '\Uthmordar\Staticify\Page');
            $loader->alias('PagesFactory', '\Uthmordar\Staticify\Facade\PagesFactoryFacade');
        });
        
        $this->app->bind('vendor::command.generate.static.pages', function($app) {
            return new Command\GenerateStaticPages();
        });
        $this->commands(array(
            'vendor::command.generate.static.pages'
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