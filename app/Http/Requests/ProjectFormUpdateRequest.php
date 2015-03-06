<?php
namespace portfolio\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Response;

class ProjectFormUpdateRequest extends FormRequest{
    protected $rules=[
        'title' => 'required',
        'tag' => 'required|integer',
        //'image'=> 'image|mime:jpg,png,gif,jpeg|max:3000',
        //'thumbnail'=> 'image|mime:jpg,png,gif,jpeg|max:3000'
    ];
    
    public function rules(){
        return $this->rules;
    }

    public function authorize(){
        return \Auth::check();
    }

    // OPTIONAL OVERRIDE
    public function forbiddenResponse(){
        return Response::make('Permission denied foo!', 403);
    }
}