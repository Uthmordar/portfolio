(function(ctx){
    "use strict";
    var $menuFilter=$('#menu_filter li') ,filter, $projects=$('.project_banner'), $this;
    
    var works={
        initialize: function(){
            self.bindEvents();
        },
        bindEvents: function(){
            $menuFilter.on('click', function(e){
                e.preventDefault();
                $this=$(this);
                if($this.hasClass('active')===false){
                    self.filterWorks($this);
                }
            });
        },
        filterWorks: function($this){
            $menuFilter.removeClass('active');
            $this.addClass('active');

            filter=$this.attr('data-filter');
            if(filter==='All'){
                $projects.addClass('project_filter');
            }else{
                for(var i=0; i<$projects.length; i++){
                    self.projectStatusChange($($projects[i]));
                }
            }
        },
        projectStatusChange: function($project){
            if($project.hasClass(filter)){
                $project.addClass('project_filter');
            }else{
                $project.removeClass('project_filter');
            }
        }
    };
    
    ctx.works=works;
    var self=works;
})(app);