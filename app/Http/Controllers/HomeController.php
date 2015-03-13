<?php namespace portfolio\Http\Controllers;

use portfolio\Tag;
use portfolio\Project;
use portfolio\Http\Requests;
use portfolio\Services\UserMailer as Mailer;

class HomeController extends Controller{
    protected $mailer;

    /*
    |--------------------------------------------------------------------------
    | Home Controller
    |--------------------------------------------------------------------------
    |
    | This controller renders your application's "dashboard" for users that
    | are authenticated. Of course, you are free to change or remove the
    | controller as you wish. It is just here to get your app started!
    |
    */
    public function __construct(Mailer $mailer){
        $this->mailer=$mailer;
    }

    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index(){
        $tags=Tag::all();
        $projects=Project::isPublish()->get();
        return view('welcome', compact('tags', 'projects'));
    }
    
    public function staticIndex(){
        return view('static.home');
    }
    
    public function contact(Requests\ContactRequest $request){
        if(\Request::ajax()){
            $data=\Input::all();
            $token=explode('_', $data['_token']);
            $d=$token[0].substr($token[1], 11);

            if(intval($d)==intval(date('jn', time()))){
                $this->mailer->contact($data);
                return ['status'=>'success'];
            }
        }
        return Redirect::to('/');
    }
}
