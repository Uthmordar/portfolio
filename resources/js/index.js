$(function(){
    //définition des variables pour le parallaxe.
    var $this, filter, projet, $window=$(window), $about=$('#about'), $worksSlide=$('#works_slide'), $footer=$('#footer'), worksBaseHeight=$worksSlide.height();

//--------------------------------------------------------------------------
//                              LIGHTBOX
//---------------------------------------------------------------------------	
	
    //Affichage des lightbox lors du click sur les banni�res

    $('.project_banner').on('click', function(){
        create_lightbox(this);
    });

	
//------------------------------------------------------------------------------
//                  DEFINITION DES INTERACTIONS DU SITE
//------------------------------------------------------------------------------
	
    //--------------------------------
    //          HEADER
    //--------------------------------


    //COLORATION DES LIENS ITEMS MENUS ACTIFS
    var $menuHeader=$('#menu_header');
    var $menuHeaderLi=$('#menu_header li');
    $menuHeaderLi.on('click', function(e){
        e.preventDefault();
        $menuHeaderLi.removeClass('active');
        $(this).addClass('active');
    });

    //POSITIONNEMENT DU MENU HOME
    var $skillsTitle=$('#skills h2');
    if( !window.matchMedia("(max-width: 1280px)").matches){
        var X=($skillsTitle.offset().left);
        transitionMenuHeader('#menu_header', 'left', X);
    }

    $window.on('resize', function(){
        if( window.matchMedia("(min-width : 1281px)").matches){
            var X=($skillsTitle.offset().left);
            transitionMenuHeader('#menu_header', 'left', X);
        }

        if(window.matchMedia("(max-width: 1280px)").matches && window.matchMedia("(min-width:990px)").matches){
            $menuHeader.css('left', '35rem');
        }

        if(window.matchMedia("(max-width: 930px)").matches){
            $menuHeader.css('left', '0');
        }
    });

    //------------------------------------------------------
    //          SCROLL ON CLICK MENU HEADER LINK
    //-------------------------------------------------------

    $("#learn").on('click', function(e){
        e.preventDefault();
        scroll('#works_slide', 20);
    });

    $("#menu_head_home, #logo").on('click', function(e){
        e.preventDefault();
        scroll('#wrapper', 0);
    });

    $("#menu_head_work").on('click', function(e){
        e.preventDefault();
        scroll('#works_slide', 20);
    });

    $("#menu_head_about").on('click', function(e){
        e.preventDefault();
        scroll('#about', 0);
    });

    $("#menu_head_contact").on('click', function(e){
        e.preventDefault();
        scroll('#wrapper_footer', 0);
    });

    //------------------------------------
    //				WORKS
    //------------------------------------

    //FILTRE WORKS
    $('#menu_filter li').on('click', function(e){
        e.preventDefault();
        $this=$(this);
        if($this.hasClass('active')===false){
            $('#menu_filter li').removeClass('active');
            $this.addClass('active');

            filter=$this.attr('data-filter');
            projet=$('.project_banner');
            if(filter==='All'){
                $(projet).addClass('project_filter');
            }else{
                for(var i=0; i<projet.length; i++){
                    if($(projet[i]).hasClass(filter)){
                        $(projet[i]).addClass('project_filter');
                    }else{
                        $(projet[i]).removeClass('project_filter');
                    }
                }
            }
        }
    });

//--------------------------------------------------------
// GESTION DU PARALLAXE
//--------------------------------------------------------
    $window.on('scroll', function(e){
        e.preventDefault();
        //rafraichissement de la position du scroll
        //Floor pour limiter les probl�mes de lag sur chrome
        Parallax.windowScroll=Math.floor($window.scrollTop());

        //PARALLAXE MOBILE RES<460PX
        if(window.matchMedia("(max-width: 460px)").matches){
                if(Parallax.windowScroll>$about.offset().top-100 && Parallax.windowScroll<2800){
                        var tabData=$('#skills .web .data');
                        for(var i=0; i<tabData.length; i++){
                                dataFill(tabData[i]);
                        }
                }

                if(Parallax.windowScroll<1500 || Parallax.windowScroll>3900){
                        var tabData=$('#skills .web .data');
                        for(var i=0; i<tabData.length; i++){
                                dataUnfill(tabData[i]);
                        }
                }
        //PARALLAXE RES<1280PX
        }else if(window.matchMedia("(max-width: 1280px)").matches){
                if(Parallax.windowScroll>0 && Parallax.windowScroll<850){
                        Parallax.parallaxBG('#fond_base', 75, 0.3);
                }

                if(Parallax.windowScroll>800 && Parallax.windowScroll<4400){
                        Parallax.parallaxBG('#fond_about', 75, 0.1);
                        var vitesse=(worksBaseHeight/($worksSlide.height()))*0.64;
                        Parallax.parallaxHeight('#fond_about', 0, 20, 59, vitesse);
                }

                if(Parallax.windowScroll>500 && Parallax.windowScroll<1800){
                        Parallax.parallaxBG('#web_game .slide', 75, (-0.3));
                }

                if(Parallax.windowScroll>$about.offset().top-100 && Parallax.windowScroll<2700){
                        var tabData=$('#skills .web .data');
                        for(var i=0; i<tabData.length; i++){
                                dataFill(tabData[i]);
                        }
                }

                if(Parallax.windowScroll<1500 || Parallax.windowScroll>3600){
                        var tabData=$('#skills .web .data');
                        for(var i=0; i<tabData.length; i++){
                                dataUnfill(tabData[i]);
                        }
                }
        //PARALLAX RES>1280PX
        }else{
                if(Parallax.windowScroll>0 && Parallax.windowScroll<$worksSlide.offset().top + 200){
                        Parallax.parallaxBG('#fond_base', 75, 0.3);
                }

                if(Parallax.windowScroll>$about.offset().top - 200 && Parallax.windowScroll<3300){
                        Parallax.parallaxBG('#fond_about', 75, 0.1);
                        Parallax.parallaxHeight('#fond_about', 0, 20, 65, 1.6);
                }

                if(Parallax.windowScroll>500 && Parallax.windowScroll<1800){
                        Parallax.parallaxBG('#web_game .slide', 75, (-0.3));
                }

                if(Parallax.windowScroll>$about.offset().top-200 && Parallax.windowScroll<2600){
                        var tabData=$('#skills .web .data');
                        for(var i=0; i<tabData.length; i++){
                                dataFill(tabData[i]);
                        }
                }

                if(Parallax.windowScroll<1300 || Parallax.windowScroll>2600){
                        var tabData=$('#skills .web .data');
                        for(var i=0; i<tabData.length; i++){
                                dataUnfill(tabData[i]);
                        }
                }
        }

        //ACTIVATIONS DES LIENS DU MENU EN FONCTION DU SCROLL
        if(Parallax.windowScroll> $footer.offset().top-600){
            $menuHeaderLi.removeClass('active');
            $('#menu_head_contact').addClass('active');
        }else if(Parallax.windowScroll> $about.offset().top -250){
            $menuHeaderLi.removeClass('active');
            $('#menu_head_about').addClass('active');
        }else if(Parallax.windowScroll> $worksSlide.offset().top - 250){
            $menuHeaderLi.removeClass('active');
            $('#menu_head_work').addClass('active');
        }else{
            $menuHeaderLi.removeClass('active');
            $('#menu_head_home').addClass('active');
        }
    });
});