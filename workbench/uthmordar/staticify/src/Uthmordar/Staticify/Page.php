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
        $this->page=$page;
        return $this;
    }
    
    public function getPage(){
        return $this->page;
    }
    
    public function setStatic($static){
        $this->static=$static;
        return $this;
    }
    public function getStatic(){
        return $this->static;
    }
}