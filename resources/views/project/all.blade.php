@extends('app')

@section('content')
@if(Session::has('messageDash'))
    @if(Session::has('messageType') && Session::get('messageType')=="success")
    <p class='success bg-success'><span class='glyphicon glyphicon-ok' style='color:green;'></span>{{Session::get('messageDash')}}</p>
    @else
    <p class='error bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>{{Session::get('messageDash')}}</p>
    @endif
@endif
@if($projects)
    <section class="w80 center">
        <h3>My projects ({{count($projects)}})</h3>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Project name</th>
                    <th>Tag</th>
                    <th>Status</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                @foreach($projects as $project)
                <tr>
                    <th><a href="{{url('project/'.$project->id.'/edit')}}">{{$project->title}}</a></th>
                    <th>{{$project->tag->name}}</th>
                    <th><a href="{{url('project/status/'.$project->id)}}">
                    @if($project->status=='publish')
                        <span class='btn btn-success btn-xs'>publish</span>
                    @elseif($project->status=='unpublish')
                        <span class='btn btn-default btn-xs'>unpublish</span>
                    @endif
                    </a></th>
                    <th><a href="{{url('project/'.$project->id)}}" class="delete" data-id="{{$project->id}}"><span class="btn btn-danger btn-xs">delete</span></a></th>
                </tr>
                @endforeach
            </tbody>
        </table>
        <input type="hidden" name="_token" value="{{csrf_token()}}">
    </section>
@else
<p>No projects, maybe soon.</p>
@endif
@endsection

@section('script')
    <script type="text/javascript">
        (function(ctx){
            "use strict";
            var $links, id, $this, $token;

            var dash={
                initialize: function(){
                    $links=$('a.delete');
                    $token=$('input[name="_token"]');
                    self.bindEvents();
                },
                bindEvents: function(){
                    $links.on('click', function(e){
                        e.preventDefault();
                        $this=$(this);
                        id=$(this).attr('data-id');
                        $.ajax({
                            type: "POST",
                            url: "/project/"+id,
                            data: {
                                '_method': "delete",
                                '_token': $token.attr('value')
                            },
                            success : function(data){
                                if(data.status==="success"){
                                    $this.parent().parent().remove();
                                }else{
                                    alert('An error as occured');
                                }
                            },
                            error: function(error){
                                alert('An error as occured');
                                console.log(error);
                            }
                        },"json");
                        return false;
                    });
                }
            };

            ctx.dash=dash;
            var self=dash;
        })(window);
        
        $(document).ready(function(){
            window.dash.initialize();
        });
    </script>
@endsection