@extends('app')

@section('content')
<section class="w80 center">
    <h3>Edit {!!$project->title!!}</h3>
    @if(Auth::check())
        <div id='addProjectForm'>
            {!!Form::open(['url'=>'project/'.$project->id, 'files'=>true, 'method'=>'PUT'])!!}
                {!!Session::get('messageProjectUpdate')!!}
                <div class="control-group">
                    {!!Form::label('title', 'Title')!!}
                    {!!Form::text('title', $project->title, array('placeholder'=>'title', 'required'))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('title').'</span>': ''!!}
                </div>
                <div class="control-group">	
                    {!!Form::label('date', 'Date')!!}
                    {!!Form::input('date', 'date', HelperDate::timeToStr('Y-m-d', $project->date))!!}
                </div>
                <div class="control-group">
                    {!!Form::label('abstract', 'Abstract')!!}<br/>
                    {!!Form::text('abstract', $project->abstract, array('placeholder'=>'Abstract'))!!}
                    {!!isset($errors)?'<p>'.$errors->first('abstract').'</p>': ''!!}
                </div>
                <div class="control-group">
                    {!!Form::label('content', 'Content')!!}<br/>
                    {!!Form::textarea('content', $project->content, array('placeholder'=>'mon contenu', 'class'=>'ckeditor'))!!}
                    {!!isset($errors)?'<p>'.$errors->first('content').'</p>': ''!!}
                </div>
                <div class="control-group">
                    @if($project->url_thumbnail)
                        <img src="{{url('/uploads/_min/'.$project->url_thumbnail)}}"/>
                    @endif
                    {!!Form::label('thumbnail', 'Thumbnail')!!}
                    {!!Form::file('thumbnail', array('multiple'=>false))!!}
                    {!! '<p>'.$errors->first('images').'</p>'!!}
                </div>
                <div class="control-group">
                    @if($project->url_image)
                        <img src="{{url('/uploads/_min/'.$project->url_image)}}"/>
                    @endif
                    {!!Form::label('image', 'Image')!!}
                    {!!Form::file('image', array('multiple'=>false))!!}
                </div>
                <div class="control-group">	
                    {!!Form::label('url', 'Url')!!}
                    {!!Form::text('url', $project->url, array('placeholder'=>'project url'))!!}
                </div>
                <div class="control-group">	
                    {!!Form::label('git_url', 'Git Url')!!}
                    {!!Form::text('git_url', $project->git_url, array('placeholder'=>'git repo url'))!!}
                </div>
                <div class="control-group">
                    {!!Form::label( 'tag', 'Tag')!!}
                    {!!Form::select('tag', $tags, $project->tag->id)!!}
                </div>
                {!!Form::submit('Submit', array('class'=>'btn btn-primary'))!!}
            {!!Form::close()!!}
        </div>
    @endif
</section>
@endsection
