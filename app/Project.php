<?php
namespace portfolio;

use portfolio\Tag;
use Illuminate\Database\Eloquent\Model;
use portfolio\lib\HelperImage;

class Project extends Model{
    
    protected $table = 'tg_projects';
    protected $guarded=['id'];
    protected $fillable=['title', 'content', 'date'];
    
    public static function boot(){
        parent::boot();
        Project::observe(new Events\Observers\ProjectObserver);
    }
    
    /**
     * relation n->1 projects->tag
     * @return type
     */
    public function tag(){
        return $this->belongsTo('portfolio\Tag');
    }
    
    /**
     * give number of aperos linked to apero tag
     * @param type $apero
     */
    public function tagCount(){
        if($this->tag){
            $this->tag->count_projects=$this->tag->projects()->count();
            $this->tag->save();
        }
    }

    /**
     * filter for create form field
     * @return type
     */
    public function filter(){
        return $this->filter;
    }
    
    /**
     * return project with status publish
     * @param type $query
     * @return type
     */
    public function scopeIsPublish($query){
        return $query->where('status', '=', 'publish')->orderBy('date', 'desc');
    }
    
    /**
     * insert project
     * @param type $project
     * @param type $input
     * @param type $uploader
     * @return type
     * @throws \RuntimeException
     */
    public function createProject($project, $input, $uploader){
        $project->title=$input['title'];
        $project->content=($input['content'])? $input['content'] : '';
        $project->abstract=($input['abstract'])? $input['abstract'] : '';
        $project->date=($input['date'])? strtotime($input['date']): time();
        if(\Input::hasfile('thumbnail')){
            $project->url_thumbnail=$uploader->uploadImage(\Input::file('thumbnail'), 'messageProjectCreate', [120, 120]);
        }
        if(\Input::hasfile('image')){
            $project->url_image=$uploader->uploadImage(\Input::file('image'), 'messageProjectCreate', [120, 120]);
        }
        $project->status='unpublish';
        if(!Tag::findOrFail($input['tag'])){
            \Session::flash('messageProjectCreate', "<p class='error bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>Tag issue.</p>");
            throw new \RuntimeException('No tag');
        }
        $project->url=($input['url'])? $input['url'] : '';
        $project->git_url=($input['git_url'])? $input['git_url'] : '';
        $project->tag()->associate(Tag::findOrFail($input['tag']));
        $project->created_at=time();
        $project->updated_at=time();
        return $project;
    }
    
    /**
     * update project
     * @param type $project
     * @param type $input
     * @param type $uploader
     * @return type
     * @throws \RuntimeException
     */
    public function updateProject($project, $input, $uploader){
        $project->title=$input['title'];
        $project->content=$input['content'];
        $project->abstract=$input['abstract'];
        $project->date=strtotime($input['date']);
        if(\Input::hasfile('thumbnail')){
            $oldUrl=$project->url_thumbnail;
            $project->url_thumbnail=$uploader->uploadImage(\Input::file('thumbnail'), 'messageProjectCreate', [120, 120]);
            if(!empty($oldUrl)){
                HelperImage::deleteBothImages($oldUrl);
            }
        }
        if(\Input::hasfile('image')){
            $oldUrl=$project->url_image;
            $project->url_image=$uploader->uploadImage(\Input::file('image'), 'messageProjectCreate', [120, 120]);
            if(!empty($oldUrl)){
                HelperImage::deleteBothImages($oldUrl);
            }
        }
        if(!Tag::findOrFail($input['tag'])){
            \Session::flash('messageProjectCreate', "<p class='error bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>Tag issue.</p>");
            throw new \RuntimeException('No tag');
        }
        $project->url=$input['url'];
        $project->git_url=$input['git_url'];
        $project->tag()->associate(Tag::findOrFail($input['tag']));
        $project->updated_at=time();
        return $project;
    }
    
    /**
     * delete attach images
     */
    public function deleteImages(){
        if(!empty($this->url_image)){
            HelperImage::deleteBothImages($this->url_image);
        }
        if(!empty($this->url_thumbnail)){
            HelperImage::deleteBothImages($this->url_thumbnail);
        }
    }
    
    /**
     * change project current status
     */
    public function changeStatus(){
        if($this->status=='unpublish'){
            $this->status='publish';
            $this->save();
        }else{
            $this->status="unpublish";
            $this->save();
        }
    }
}