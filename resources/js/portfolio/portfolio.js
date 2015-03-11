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