<?php namespace portfolio\Http\Controllers;

class HomeController extends Controller {

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
    public function __construct(){
        
    }

    /**
     * Show the application dashboard to the user.
     *
     * @return Response
     */
    public function index(){
        return view('welcome');
    }
    
    public function staticIndex(){
        return view('static.home');
    }
}
