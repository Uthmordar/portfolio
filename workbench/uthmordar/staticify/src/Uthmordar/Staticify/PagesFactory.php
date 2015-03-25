<?php
namespace Uthmordar\Staticify;

class PagesFactory extends \SplObjectStorage{
    
    /**
     * create page and attach it 
     * @param type $route
     * @param type $static
     */
    public function addPage($route, $static){
        $page=new Page($route, $static);
        
        $this->attach($page);
        return $this;
    }
    
    /**
     * get object with facade use
     * @return \Uthmordar\Staticify\PagesFactory
     */
    public function getFactory(){
        return $this;
    }
}