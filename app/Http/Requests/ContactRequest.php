<?php
namespace portfolio\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest{
    protected $rules=[
        'name' => 'required',
        'email' => 'required|email',
        'message' => 'required'
    ];
    
    public function rules(){
        return $this->rules;
    }
    
    public function authorize(){
        return true;
    }
}