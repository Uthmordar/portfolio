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
        //$this->page=\URL::to('/') . DIRECTORY_SEPARATOR . 'portfolio2' . DIRECTORY_SEPARATOR . 'public' . DIRECTORY_SEPARATOR . $page;
        $this->page="http://localhost/portfolio2/public/";
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