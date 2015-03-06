<?php
namespace Uthmordar\Staticify;

interface iPage{
    public function getPage();
    public function setPage($page);
    public function setStatic($static);
    public function getStatic();
}