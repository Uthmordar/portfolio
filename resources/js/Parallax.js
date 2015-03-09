//objet de gestion des fonctions liées au scroll pour le parallaxe

var Parallax = Parallax || {

	windowScroll : 0,
	
	//défilement du background en fonction du scroll
	parallaxBG : function(elem, yPos, YSpeed){
		window.requestAnimationFrame(Parallax.parallaxBG);
		$(elem).css({'background-position' : 0+'px '+(yPos-(Parallax.windowScroll/YSpeed))+'px'});
	},

	//modification de la hauteur d'un élément selon le scroll
	parallaxHeight : function(elem, iniHeight, divHeight, soustractHeight, speed){
		window.requestAnimationFrame(Parallax.parallaxHeight);
		$(elem).css({'height' : iniHeight+((Parallax.windowScroll/divHeight)-soustractHeight)*speed+'%'});
	}
}