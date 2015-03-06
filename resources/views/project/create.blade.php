@extends('app')

@section('content')
@if(Session::has('messageDash'))
    @if(Session::has('messageType') && Session::get('messageType')=="success")
    <p class='success bg-success'><span class='glyphicon glyphicon-ok' style='color:green;'></span>{{Session::get('messageDash')}}</p>
    @else
    <p class='error bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>{{Session::get('messageDash')}}</p>
    @endif
@endif
<section class="w80 center">
    <h3>Add a project</h3>
    @if(Auth::check())
        <div id='addProjectForm'>
            {!!Form::open(['url'=>'project', 'files'=>true, 'method'=>'POST'])!!}
                {!!Session::get('messageProjectCreate')!!}
                <div class="control-group">
                    {!!Form::label('title', 'Title')!!}
                    {!!Form::text('title', Input::old('title'), array('placeholder'=>'title', 'required'))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('title').'</span>': ''!!}
                </div>
                <div class="control-group">	
                    {!!Form::label('date', 'Date')!!}
                    {!!Form::input('date', 'date')!!}
                </div>
                <div class="control-group">
                    {!!Form::label('abstract', 'Abstract')!!}<br/>
                    {!!Form::text('abstract', Input::old('abstract'), array('placeholder'=>'Abstract'))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('abstract').'</span>': ''!!}
                </div>
                <div class="control-group">
                    {!!Form::label('content', 'Content')!!}<br/>
                    {!!Form::textarea('content', Input::old('content'), array('placeholder'=>'mon contenu', 'class'=>'ckeditor'))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('content').'</span>': ''!!}
                </div>
                <div class="control-group">
                    {!!Form::label('thumbnail', 'Thumbnail')!!}
                    {!!Form::file('thumbnail', array('multiple'=>false))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('thumbnail').'</span>': ''!!}
                </div>
                <div class="control-group">
                    {!!Form::label('image', 'Image')!!}
                    {!!Form::file('image', array('multiple'=>false))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('image').'</span>': ''!!}
                </div>
                <div class="control-group">	
                    {!!Form::label('url', 'Url')!!}
                    {!!Form::text('url', Input::old('url'), array('placeholder'=>'project url'))!!}
                </div>
                <div class="control-group">	
                    {!!Form::label('git_url', 'Git Url')!!}
                    {!!Form::text('git_url', Input::old('git_url'), array('placeholder'=>'git repo url'))!!}
                </div>
                <div class="control-group">
                    {!!Form::label( 'tag', 'Tag')!!}
                    {!!Form::select('tag', $tags)!!}
                </div>
                {!!Form::submit('Submit', array('class'=>'btn btn-primary'))!!}
            {!!Form::close()!!}
        </div>
    @endif
</section>
@endsection
