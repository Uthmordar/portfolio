<?php
namespace portfolio\Events\Observers;

class ProjectObserver{
    public function saved($project){
        $project->tagCount();
    }
    
    public function deleting($project){
        $project->deleteImages();
    }
    
    public function deleted($project){
        $project->tagCount();
    }
}