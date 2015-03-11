//POLYFILL REQUEST ANIMATION FRAME

(function() {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame =
          window[vendors[x]+'CancelAnimationFrame'] || window[vendors[x]+'CancelRequestAnimationFrame'];
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
//objet de gestion des fonctions liées au scroll pour le parallaxe

var Parallax=Parallax || {

    windowScroll: 0,

    //défilement du background en fonction du scroll
    parallaxBG: function(elem, yPos, YSpeed){
        //window.requestAnimationFrame(Parallax.parallaxBG);
        $(elem).css({'background-position' : 0+'px '+(yPos-(Parallax.windowScroll/YSpeed))+'px'});
    },

    //modification de la hauteur d'un élément selon le scroll
    parallaxHeight : function(elem, iniHeight, divHeight, soustractHeight, speed){
        //window.requestAnimationFrame(Parallax.parallaxHeight);
        $(elem).css({'height' : iniHeight+((Parallax.windowScroll/divHeight)-soustractHeight)*speed+'%'});
    }
};
//------------------------------------------------------
// FUNCTIONS
//-------------------------------------------------------

//Scroll vers un élément donné
function scroll($scrollTo, $ajust){
    $('html, body').animate({
        scrollTop:($($scrollTo).offset().top)-($('header').height()+$ajust)
    }, 2000);
};

//remplissage des champs data de #about
function dataFill($dataField){
    var fill=$($dataField).attr('data-percent');
    $($dataField).children('.rempl_data').css('width', fill+'%');
}

//remise à 0 des champs data
function dataUnfill($dataField){
    $($dataField).children('.rempl_data').css('width', 0+'%');
}

//contrôle du déplacement du menuHeader
function transitionMenuHeader(elem, prop, mvt){
    mvt=(mvt>window.innerWidth - $(elem).width() - 60)? window.innerWidth - $(elem).width() - 60 : mvt;
    console.log(window.innerWidth - $(elem).width() - 60);
    $(elem).css(prop, mvt+'px');
}

//Positionnement des lightbox
function position_lightbox(lightbox){
    var elt=$(lightbox);

    var top=($(window).innerHeight()-elt.height())*0.5;
    var left=($(window).innerWidth()*0.4)*0.5;

    if(!window.matchMedia("(max-width: 480px)").matches){
            lightbox.css({'top': top+'px', 'left': left+'px'});
    }else if(!window.matchMedia("(max-width: 400px)").matches){
            lightbox.css({'top': top+'px', 'left': '10%'});
    }else{
            lightbox.css({'top': top+'px', 'left': '2%'});
    }
}

function create_lightbox($this){
    var $window=$(window);
    //on récupére les contenus
    var intro=$($this).children('.com').html();
    var text=$($this).children('.banner_detail').html();


    //on crée le fond opaque et la lightbox
    var modal=$('<div class="modal"></div>').appendTo('body');
    var lightbox=$('<div class="lightbox">'+intro+text+'</div>').appendTo('body');
    var cross=$('<div class="cross"></div>').appendTo(lightbox);

    var top=($window.innerHeight()-(lightbox.height()+180))*0.5;
    var left=($window.innerWidth()*0.4)*0.5;

    if(!window.matchMedia("(max-width: 480px)").matches){
            lightbox.css({'top': top+'px', 'left': left+'px'});
    }else if(!window.matchMedia("(max-width: 400px)").matches){
            lightbox.css({'top': top+'px', 'left': '10%'});
    }else{
            lightbox.css({'top': top+'px', 'left': '2%'});
    }

    cross.on('click', function(){
            lightbox.remove();
            modal.remove();
    });

    modal.on('click', function(){
        lightbox.remove();
        modal.remove();
    });

    //on repositionne la lightbox en cas de redimensionnement
    $(window).on('resize', function(){
        position_lightbox(lightbox);
    });
}
$(function(){

	//Prétraitement du formulaire lors de l'arrivée sur la page/envoi du mail, mise en mémoire des éléments en cas de problème PHP
	/*if(localStorage['mail']!=null){
		scroll('#wrapperFooter', 0);
		localStorage.removeItem('mail');
	}
	
	$('#contactSub').on('click', function(){
		var message=true;
		localStorage.setItem('mail', message);
	});
	
	//définition des attributs required du formulaire
	$('.form_name, .form_mail, .form_message').attr('required', "true");
		
	//Vérification de l'adresse mail avant traitement via php si échec de la sécurisation via les données html
	var error=false;
	// on place un champ de message d'erreur après le champ email du formulaire
	$('#contactForm .form_mail').after('<div id="flashMessage" class="errorForm"></div>');
	//à la soumission du formulaire on check l'email
	$('#contactForm form').submit(function(){

		var email=$('#formMail').val();
		//si l'email est valide on poursuit la procédure et on fait les traitements PHP sinon affichage d'un message dans le champ erreur
		//entre en jeu uniquement si input type email est désactivé
		if(email.match(/^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9\.\_\-]+\.[a-zA-Z]{2,6}/)==email){
			error=false;
			$('#flashMessage').remove();
		}else{
			error=true;
		}

		if(error==true){
			$('#flashMessage').html('email incorrect').slideDown().delay(5000).slideUp();
			return false;
		}
	});*/
});
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
//# sourceMappingURL=main.js.map