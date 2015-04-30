(function(ctx){
    "use strict";
    var windowScroll=0, $window=$(window), $worksSlide=$('#works_slide'), $skills=$('#skills'), $about=$('#about'), $data, $fondBase=$('#fond_base');
    
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
                ctx.menu.controlMenuActiveLink();
            });
        },
        getWindowScroll: function(){
            return windowScroll;
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

            self.parallaxBG($about, 0, 0.1);
            //self.parallaxHeight($fondAbout, 0, 20, 65, 1.6);
            
            if(windowScroll>$skills.offset().top - 150 && windowScroll<$skills.offset().top + $skills.height() -150){
                for(var i=0; i<$data.length; i++){
                    ctx.portfolio.dataFill($data[i]);
                }
            }

            if(windowScroll<$skills.offset().top - 300 || windowScroll>$skills.offset().top + $skills.height() - 150){
                for(var i=0; i<$data.length; i++){
                    ctx.portfolio.dataUnfill($data[i]);
                }
            }
        }
    };
    
    ctx.parallax=parallax;
    var self=parallax;
})(app);