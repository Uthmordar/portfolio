// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); },
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());
(function(ctx){
    "use strict";
    var app={
        // Application Constructor
        initialize: function(){
            window.requestAnimFrame = (function(){
                return  window.requestAnimationFrame       ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame    ||
                        window.oRequestAnimationFrame      ||
                        window.msRequestAnimationFrame     ||
                        function( callback ){
                            window.setTimeout(callback, 1000 / 60);
                        };
            })();
            self.form.initialize();
            self.parallax.initialize();
            self.portfolio.initialize();
            self.works.initialize();
            self.bindEvents();
        },
        bindEvents: function(){

        }
    };
    ctx.app=app;
    var self=app;
})(window);
(function(ctx){
    "use strict";
    var editor;
    
    var form={
        // Application Constructor
        initialize: function(){
            editor=new Quill('.form_message');
            editor.getHTML();
            
            self.bindEvents();
        },
        bindEvents: function(){

        }
    };
    ctx.form=form;
    var self=form;
})(app);
(function(ctx){
    "use strict";
    var fill, $projectBanner, $page=$('html, body'), $header=$('#header'), top, left, $window=$(window),
    $elem, intro, text, $modal, $lightbox, $cross, $menuHeader=$('#menu_header'), $menuHeaderLi=$menuHeader.children('ul').children('li'), $skillsTitle=$('#skills h2'), X,
    $worksSlide=$('#works_slide'), $wrapper=$('#wrapper'), $about=$('#about'), $wrapperFooter=$('#wrapper_footer');
    
    var portfolio={
        // Application Constructor
        initialize: function(){
            $projectBanner=$('.project_banner');
            if(!window.matchMedia("(max-width: 1280px)").matches){
                X=($skillsTitle.offset().left);
                self.transitionMenu($menuHeader, 'left', X);
            }
            self.bindEvents();
        },
        bindEvents: function(){
            $projectBanner.on('click', function(){
                self.generateLightbox(this);
            });
               
            $window.on('resize', function(){
                if($lightbox){
                    self.positionLightbox();
                }
                if(window.matchMedia("(min-width : 1281px)").matches){
                    X=($skillsTitle.offset().left);
                    self.transitionMenu($menuHeader, 'left', X);
                }

                if(window.matchMedia("(max-width: 1280px)").matches && window.matchMedia("(min-width:990px)").matches){
                    $menuHeader.css('left', '35rem');
                }

                if(window.matchMedia("(max-width: 930px)").matches){
                    $menuHeader.css('left', '0');
                }
            });
            
            $menuHeaderLi.on('click', function(e){
                e.preventDefault();
                $menuHeaderLi.removeClass('active');
                $(this).addClass('active');
            });
            
            $("#learn").on('click', function(e){
                e.preventDefault();
                self.scroll($worksSlide, 20);
            });

            $("#menu_head_home, #logo").on('click', function(e){
                e.preventDefault();
                self.scroll($wrapper, 0);
            });

            $("#menu_head_work").on('click', function(e){
                e.preventDefault();
                self.scroll($worksSlide, 20);
            });

            $("#menu_head_about").on('click', function(e){
                e.preventDefault();
                self.scroll($about, 0);
            });

            $("#menu_head_contact").on('click', function(e){
                e.preventDefault();
                self.scroll($wrapperFooter, 0);
            });
        },
        bindEventsModal: function(){
            $cross.on('click', function(){
                $lightbox.remove();
                $modal.remove();
            });

            $modal.on('click', function(){
                $lightbox.remove();
                $modal.remove();
            });
        },
        dataFill: function($field){
            fill=$($field).attr('data-percent');
            $($field).children('.rempl_data').css('width', fill+'%');
        },
        dataUnfill: function($field){
            $($field).children('.rempl_data').css('width', '0');
        },
        generateLightbox: function(elem){
            //on récupére les contenus
            $elem=$(elem);
            intro=$elem.children('.com').html();
            text=$elem.children('.banner_detail').html();

            //on crée le fond opaque et la lightbox
            $modal=$('<div class="modal"></div>').appendTo('body');
            $lightbox=$('<div class="lightbox">'+intro+text+'</div>').appendTo('body');
            $cross=$('<div class="cross"></div>').appendTo($lightbox);

            self.positionLightbox();
            self.bindEventsModal();
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
        },
        transitionMenu: function($elem, prop, mvt){
            mvt=(mvt>window.innerWidth - $elem.width() - 60)? window.innerWidth - $elem.width() - 60 : mvt;
            $elem.css(prop, mvt+'px');
        }
    };
    
    ctx.portfolio=portfolio;
    var self=portfolio;
})(app);
(function(ctx){
    "use strict";
    var windowScroll=0, $window=$(window), $worksSlide=$('#works_slide'), $footer=$('#footer'), $about=$('#about'), $data, $fondBase=$('#fond_base'), $fondAbout=$('#fond_about'),
    $menuHeaderLi=$('#menu_header li'), $menuContact=$('#menu_head_contact'), $menuAbout=$('#menu_head_about'), $menuWork=$('#menu_head_work'), $menuHome=$('#menu_head_home');
    
    var parallax={
        initialize: function(){
            $data=$('#skills .web .data');
            self.bindEvents();
        },
        bindEvents: function(){
            $window.on('scroll', function(e){
                e.preventDefault();
                windowScroll=Math.floor($window.scrollTop());
                self.renderParallax();
                self.controlMenuActiveLink();
            });
        },
        parallaxBG: function(elem, yPos, ySpeed){
            elem.css({'background-position' : '0px '+(yPos-(windowScroll/ySpeed))+'px'});
        },
        parallaxHeight: function(elem, iniHeight, divHeight, soustractHeight, speed){
            elem.css({'height' : iniHeight+((windowScroll/divHeight)-soustractHeight)*speed+'%'});
        },
        renderParallax: function(){
            if(windowScroll> -100 && windowScroll<$worksSlide.offset().top + 200){
                self.parallaxBG($fondBase, 75, 0.5);
            }

            if(windowScroll>$about.offset().top - 200 && windowScroll<3300){
                self.parallaxBG($fondAbout, 75, 0.1);
                self.parallaxHeight($fondAbout, 0, 20, 65, 1.6);
            }

            if(windowScroll>$about.offset().top - 200 && windowScroll<2600){
                for(var i=0; i<$data.length; i++){
                    ctx.portfolio.dataFill($data[i]);
                }
            }

            if(windowScroll<1300 || windowScroll>2600){
                for(var i=0; i<$data.length; i++){
                    ctx.portfolio.dataUnfill($data[i]);
                }
            }
        },
        controlMenuActiveLink: function(){
            $menuHeaderLi.removeClass('active');
            if(windowScroll> $footer.offset().top - 600){
                $menuContact.addClass('active');
            }else if(windowScroll> $about.offset().top -250){
                $menuAbout.addClass('active');
            }else if(windowScroll> $worksSlide.offset().top - 250){
                $menuWork.addClass('active');
            }else{
                $menuHome.addClass('active');
            }
        }
    };
    
    ctx.parallax=parallax;
    var self=parallax;
})(app);
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
//# sourceMappingURL=portfolio.js.map