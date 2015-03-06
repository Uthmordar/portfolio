<?php
namespace Uthmordar\Staticify\Facade;

use Illuminate\Support\Facades\Facade;

class StaticifyFacade extends Facade{
    protected static function getFacadeAccessor(){
        return 'staticify';
    }
}