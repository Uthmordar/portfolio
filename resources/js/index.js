$(function(){
    //définition des variables pour le parallaxe.
    var $this, filter, projet, $window=$(window), $about=$('#about'), $worksSlide=$('#worksSlide'), $footer=$('footer'), worksBaseHeight=$worksSlide.height();

//--------------------------------------------------------------------------
//                              LIGHTBOX
//---------------------------------------------------------------------------	
	
    //Affichage des lightbox lors du click sur les banni�res

    $('.projectBanner').on('click', function(){
        create_lightbox(this);
    });

	
//------------------------------------------------------------------------------
//					DEFINITION DES INTERACTIONS DU SITE
//------------------------------------------------------------------------------
	
    //--------------------------------
    //          HEADER
    //--------------------------------


    //COLORATION DES LIENS ITEMS MENUS ACTIFS
    var $menuHeader=$('#menuHeader');
    var $menuHeaderLi=$('#menuHeader li');
    $menuHeaderLi.on('click', function(e){
        e.preventDefault();
        $menuHeaderLi.removeClass('active');
        $(this).addClass('active');
    });

    //POSITIONNEMENT DU MENU HOME
    var $skillsTitle=$('#skills h2');
    if( !window.matchMedia("(max-width: 1280px)").matches){
        var X=($skillsTitle.offset().left);
        X=(X>1100)? 1100 : X;
        transitionMenuHeader('#menuHeader', 'left', X);
    }

    $window.on('resize', function(){
        if( window.matchMedia("(min-width : 1281px)").matches){
            var X=($skillsTitle.offset().left);
            transitionMenuHeader('#menuHeader', 'left', X);
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
        scroll('#worksSlide', 20);
    });

    $("#menuHeadHome, #logo").on('click', function(e){
        e.preventDefault();
        scroll('#wrapper', 0);
    });

    $("#menuHeadWork").on('click', function(e){
        e.preventDefault();
        scroll('#worksSlide', 20);
    });

    $("#menuHeadAbout").on('click', function(e){
        e.preventDefault();
        scroll('#about', 0);
    });

    $("#menuHeadContact").on('click', function(e){
        e.preventDefault();
        scroll('#wrapperFooter', 0);
    });

    //------------------------------------
    //				WORKS
    //------------------------------------

    //FILTRE WORKS
    $('#menuFilter li').on('click', function(e){
        e.preventDefault();
        $this=$(this);
        if($this.hasClass('active')===false){
            $('#menuFilter li').removeClass('active');
            $this.addClass('active');

            filter=$this.attr('data-filter');
            projet=$('.projectBanner');
            if(filter==='All'){
                $(projet).css('display', 'block');
            }else{
                for(var i=0; i<projet.length; i++){
                    if($(projet[i]).hasClass(filter)){
                        $(projet[i]).css('display', 'block');
                    }else{
                        $(projet[i]).css('display', 'none');
                    }
                }
            }
        }
    });

//--------------------------------------------------------
// GESTION DU PARALLAXE
//--------------------------------------------------------
	
	//�couteur d'�v�nement li� au scroll pour d�finir l'application ou non des parallaxes
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
				Parallax.parallaxBG('#fondBase', 75, 0.3);
			}
			
			if(Parallax.windowScroll>800 && Parallax.windowScroll<4400){
				Parallax.parallaxBG('#fondAbout', 75, 0.1);
				var vitesse=(worksBaseHeight/($worksSlide.height()))*0.64;
				Parallax.parallaxHeight('#fondAbout', 0, 20, 59, vitesse);
			}
			
			if(Parallax.windowScroll>500 && Parallax.windowScroll<1800){
				Parallax.parallaxBG('#webGame .slide', 75, (-0.3));
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
			if(Parallax.windowScroll>0 && Parallax.windowScroll<850){
				Parallax.parallaxBG('#fondBase', 75, 0.3);
			}
			
			if(Parallax.windowScroll>500 && Parallax.windowScroll<3300){
				Parallax.parallaxBG('#fondAbout', 75, 0.1);
				var vitesse=(worksBaseHeight/($worksSlide.height()));
				Parallax.parallaxHeight('#fondAbout', 0, 20, 65, vitesse);
			}
			
			if(Parallax.windowScroll>500 && Parallax.windowScroll<1800){
				Parallax.parallaxBG('#webGame .slide', 75, (-0.3));
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
			$('#menuHeadContact').addClass('active');
		}else if(Parallax.windowScroll> $about.offset().top -250){
			$menuHeaderLi.removeClass('active');
			$('#menuHeadAbout').addClass('active');
		}else if(Parallax.windowScroll> $worksSlide.offset().top - 250){
			$menuHeaderLi.removeClass('active');
			$('#menuHeadWork').addClass('active');
		}else{
			$menuHeaderLi.removeClass('active');
			$('#menuHeadHome').addClass('active');
		}
	});
});