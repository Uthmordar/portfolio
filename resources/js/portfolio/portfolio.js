(function(ctx){
    "use strict";
    var fill, $projectBanner, $page=$('html, body'), $header=$('#header'), top, left, $window=$(window),
    $modal, $lightbox, $cross, $menuHeader=$('#menu_header'), $menuHeaderLi=$menuHeader.children('ul').children('li'),
    $worksSlide=$('#works_slide'), $wrapper=$('#wrapper'), $learn=$('#learn'), projectId, $this;
    
    var portfolio={
        initialize: function(){
            $projectBanner=$('.project_banner');
            self.bindEvents();
        },
        bindEvents: function(){
            $projectBanner.on('click', function(){
                $this=$(this);
                projectId=$this.attr('data-project');
                $this.children('.veil').addClass('active');
                $.ajax({
                    type: "GET",
                    url: ctx.getBaseUrl() + "/project/" + projectId,
                    success: function(data){
                        self.generateLightbox(data);
                        $this.children('.veil').removeClass('active');
                    }
                });
            });
               
            $window.on('resize', function(){
                if($lightbox){
                    self.positionLightbox();
                }
            });
            
            $menuHeaderLi.on('click', function(e){
                e.preventDefault();
                $menuHeaderLi.removeClass('active');
                $(this).addClass('active');
            });
            
            $learn.on('click', function(e){
                e.preventDefault();
                self.scroll($worksSlide, 20);
            });

            $("#menu_head_home, #logo").on('click', function(e){
                e.preventDefault();
                self.scroll($wrapper, 0);
            });
        },
        bindEventsModal: function(){
            $cross.on('click', function(){
                self.destroyLightbox();
            });

            $modal.on('click', function(){
                self.destroyLightbox();
            });
        },
        dataFill: function($field){
            fill=$($field).attr('data-percent');
            $($field).children('.rempl_data').css('width', fill+'%');
        },
        dataUnfill: function($field){
            $($field).children('.rempl_data').css('width', '0');
        },
        generateLightbox: function(data){
            //on crée le fond opaque et la lightbox
            $modal=$('<div class="modal"></div>').appendTo('body');
            $lightbox=$('<div class="lightbox">'+
                    '<h3>'+data.data.title+'</h3>'+
                    '<p>'+data.data.abstract+'</p>'+
                    data.content+'</div>').appendTo('body');
            $cross=$('<div class="cross"></div>').appendTo($lightbox);

            $wrapper.addClass('blur');
            self.positionLightbox();
            self.bindEventsModal();
        },
        destroyLightbox: function(){
            $wrapper.removeClass('blur');
            $lightbox.remove();
            $modal.remove();
        },
        positionLightbox: function(){
            top=($window.innerHeight()-$lightbox.height())*0.5;
            left=($window.innerWidth()*0.4)*0.5;

            if(!window.matchMedia("(max-width: 480px)").matches){
                $lightbox.css({'top': top+'px', 'left': left+'px'});
            }else if(!window.matchMedia("(max-width: 400px)").matches){
                $lightbox.css({'top': top+'px', 'left': '10%'});
            }else{
                $lightbox.css({'top': top+'px', 'left': '2%'});
            }
        },
        /*
         * modifier timer en fonction windowScroll/distance ancre
         */
        scroll: function($scrollTo, ajust){
            $page.animate({
                scrollTop:($scrollTo.offset().top)-($header.height()+ajust)
            }, 2000);
        }
    };
    
    ctx.portfolio=portfolio;
    var self=portfolio;
})(app);