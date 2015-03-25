<?php namespace portfolio\Http\Controllers;

use portfolio\Project;
use portfolio\Services\UploadImage;
use portfolio\Tag;
use portfolio\Http\Requests;
use portfolio\Http\Controllers\Controller;

use Illuminate\Http\Request;

class ProjectController extends Controller{
        private $projects;
        private $upload;

        public function __construct(Project $project, UploadImage $uploadImage){
            $this->upload=$uploadImage;
            $this->projects=$project;
            $this->middleware('auth');
        }
	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index(){            
            $projects=Project::orderBy('created_at', 'desc')->get();
            return view('project.all', ['projects'=>$projects]);
	}

	/**
	 * Show the form for creating a new resource.
	 *
	 * @return Response
	 */
	public function create(){
            $tags=[];
            foreach(Tag::all() as $tag){
                $tags[$tag->id]=$tag->name;
            }
	    return view('project.create', compact('tags'));
	}

	/**
	 * Store a newly created resource in storage.
	 *
	 * @return Response
	 */
	public function store(Requests\ProjectFormRequest $request){
            $input=\Input::all();

            foreach($input as $k=>$v){
                if(is_string($v)){
                    $input[$k]=strip_tags($v, '<br><br/><ul></ul><li></li><p></p><span></span>');
                }
            }

            $project=new Project;
            try{
                $this->projects->createProject($project, $input, $this->upload);
            }catch(RuntimeException $e){
                \Session::flash('messageProjectUpdate', "<p class='success bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>" . $e->getMessage() . "</p>");
                return \Redirect::route('project.create');
            }
            $project->save();
            
            \Session::flash('messageDash', "Project created.");
            \Session::flash('messageType', 'success');
            return \Redirect::to('project')->with('message', 'success');
	}

	/**
	 * Display the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function show($id){
	}

	/**
	 * Show the form for editing the specified resource.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function edit($id){
            $project=Project::findOrFail($id);
            $tags=[];
            foreach(Tag::all() as $tag){
                $tags[$tag->id]=$tag->name;
            }
            return view('project.edit', compact('project', 'tags'));
	}

	/**
	 * Update the specified resource in storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function update($id, Requests\ProjectFormUpdateRequest $request){
            try{
                $project=Project::findOrFail($id);
            } catch(Exception $e) {
                \Session::flash('messageProjectUpdate', "<p class='success bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>Project not found, db corruption.</p>");
                return \Redirect::back();
            }
            $input=\Input::all();

            foreach($input as $k=>$v){
                if(is_string($v)){
                    $input[$k]=strip_tags($v, '<br><br/><ul></ul><li></li><p></p><span></span>');
                }
            }

            try{
                $this->projects->updateProject($project, $input, $this->upload);
            }catch(RuntimeException $e){
                \Session::flash('messageProjectUpdate', "<p class='success bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>" . $e->getMessage() . "</p>");
                return \Redirect::back();
            }
            $project->save();
            
            \Session::flash('messageProjectUpdate', "<p class='success bg-success'><span class='glyphicon glyphicon-ok' style='color:green;'></span>Project updated with success.</p>");
            return \Redirect::to('/project/'.$id.'/edit')->with('message', 'success');
	}

	/**
	 * Remove the specified resource from storage.
	 *
	 * @param  int  $id
	 * @return Response
	 */
	public function destroy($id){
            if(\Request::ajax()){
                $data=\Input::all();
                if($data['_token']!=\Session::token()){
                    return ['status'=>'error'];
                }
                try{
                    Project::destroy($id);
                }catch (RuntimeException $e){
                    return ['status'=>'error'];
                }
                return ['status'=>'success'];
            }
	}
        
        /**
         * change project status
         * @param type $id
         * @return type
         */
        public function changeStatus($id){
            try {
                Project::findOrFail($id)->changeStatus();
                \Session::flash('messageDash', "Status change successfull.");
                \Session::flash('messageType', 'success');
                return \Redirect::back();
            }catch(Illuminate\Database\Eloquent\ModelNotFoundException $e){
                \Session::flash('messageDash', "Error in selection " . $e->getMessage());
                \Session::flash('messageType', 'error');
                return \Redirect::back();
            }
            
        }
}
