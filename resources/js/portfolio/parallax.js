(function(ctx){
    "use strict";
    var windowScroll=0, $window=$(window), $worksSlide=$('#works_slide'), $footer=$('#footer'), $about=$('#about'), $data, $fondBase=$('#fond_base'), $fondAbout=$('#fond_about'),
    $menuHeaderLi=$('#menu_header li'), $menuContact=$('#menu_head_contact'), $menuAbout=$('#menu_head_about'), $menuWork=$('#menu_head_work'), $menuHome=$('#menu_head_home');
    
    var parallax={
        // Application Constructor
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
            if(windowScroll>-100 && windowScroll<$worksSlide.offset().top + 200){
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