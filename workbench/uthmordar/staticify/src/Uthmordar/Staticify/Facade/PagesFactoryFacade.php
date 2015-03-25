<?php
namespace Uthmordar\Staticify\Facade;

use Illuminate\Support\Facades\Facade;

class PagesFactoryFacade extends Facade{
    protected static function getFacadeAccessor(){
        return 'pagesfactory';
    }
}