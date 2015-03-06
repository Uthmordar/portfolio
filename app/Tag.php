<?php
namespace portfolio;

use Illuminate\Database\Eloquent\Model;

class Tag extends Model{
    protected $table='tg_tags';
    
    protected $guarded=['id'];
    
    /**
     * relationship 1->n tag->aperos
     * @return type
     */
    public function projects(){
        return $this->hasMany('portfolio\Project');
    }
}