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