<?php
namespace Uthmordar\Staticify;

class Page implements iPage{
    private $page;
    private $static;
    
    public function __construct($page, $static){
        $this->setPage($page);
        $this->setStatic($static);
    }
    
    public function setPage($page){
        if(function_exists('config')){
            $this->page=config('app.url') . '/' . $page;
        }else{
            $this->page=$page;
        }
    }
    
    public function getPage(){
        return $this->page;
    }
    
    public function setStatic($static){
        $this->static=$static;
    }
    public function getStatic(){
        return $this->static;
    }
}