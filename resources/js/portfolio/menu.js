(function(ctx){
    "use strict";
    var windowScroll=0, $window=$(window), $worksSlide=$('#works_slide'), $footer=$('#footer'), $about=$('#about'), $menuHeader=$('#menu_header'), $wrapperFooter=$('#wrapper_footer'),
    $menuHeaderLi=$menuHeader.children('ul').children('li'), $menuContact=$('#menu_head_contact'), $menuAbout=$('#menu_head_about'), $menuWork=$('#menu_head_work'), $menuHome=$('#menu_head_home'), $skillsTitle=$('#skills h2'), X;
    
    var menu={
        initialize: function(){
            if(!window.matchMedia("(max-width: 1280px)").matches){
                X=($skillsTitle.offset().left);
                self.transitionMenu($menuHeader, 'left', X);
            }
            self.bindEvents();
        },
        bindEvents: function(){
            $window.on('resize', function(){
                self.onResize();
            });
            
            $menuWork.on('click', function(e){
                e.preventDefault();
                ctx.portfolio.scroll($worksSlide, 20);
            });

            $menuAbout.on('click', function(e){
                e.preventDefault();
                ctx.portfolio.scroll($about, 0);
            });

            $menuContact.on('click', function(e){
                e.preventDefault();
                ctx.portfolio.scroll($wrapperFooter, 0);
            });
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
        },
        transitionMenu: function($elem, prop, mvt){
            mvt=(mvt>window.innerWidth - $elem.width() - 60)? window.innerWidth - $elem.width() - 60 : mvt;
            $elem.css(prop, mvt+'px');
        },
        onResize: function(){
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
        }
    };
    
    ctx.menu=menu;
    var self=menu;
})(app);