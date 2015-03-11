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