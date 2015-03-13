(function(ctx){
    "use strict";
    var token=0, date, $submit, token_ajax, match, error, $form, $input_name, $input_mail, $input_message, author, email, message, $error_name, $error_mail, $error_message;
    
    var form={
        initialize: function(){
            $form=$('#form_contact');
            $input_name=$('#name');
            $input_mail=$('#email');
            $input_message=$('#message');
            $submit=$('#form_contact .form_submit');
            $error_name=$input_name.siblings('.error_name');
            $error_mail=$input_mail.siblings('.error_mail');
            $error_message=$input_message.siblings('.error_message');
            
            self.bindEvents();
        },
        bindEvents: function(){
            $form.on('submit', function(e){
                e.preventDefault();
                error=0;
                self.getFields();
                self.resetFieldsStatus();
                if(!self.checkFields()){
                    return false;
                }
                $submit.val('Submit').removeClass('submit_error');
                if(!token){
                    token++;
                    self.generateToken();
                    $submit.val('Sending...');
                    self.ajaxSendMail();
                }
               
               return false;
            });
            
            $input_mail.on('keyup change', function(){
                self.getEmail();
                self.checkValidEmail();
            });
        },
        checkFields: function(){
            if(!author){
               self.setFieldError($input_name, $error_name, 'Could I know your name.');
               error++;
            }
            if(!email){
                self.setFieldError($input_mail, $error_mail, 'I need your email to reply.');
                error++;
            }else if(!self.checkValidEmail()){
                self.setFieldError($input_mail, $error_mail, 'This email is invalid.');
                error++;
            }
            if(!message){
                self.setFieldError($input_message, $error_message, 'Could you tell me why you contact me, please.');
                error++;
            }
            return (error)? false : true;
        },
        resetFieldStatus: function(){
            $input_name.removeClass('error_form');
            $input_mail.removeClass('error_form');
            $input_message.removeClass('error_form');
        },
        setFieldError: function($field, $error, error){
            $error.html(error);
            $field.addClass('error_form');
        },
        getFields: function(){
            author=$input_name.val();
            email=$input_mail.val().trim();
            message=$input_message.val().trim();
        },
        getEmail: function(){
            email=$input_mail.val().trim();
        },
        checkValidEmail: function(){
            match=email.match(/^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9\.\_\-]+\.[a-zA-Z]{2,6}/);
            if(!match || match[0]!==email){
                $input_mail.addClass('error_form');
                return false;
            }
            $input_mail.removeClass('error_form');
            return true;
        },
        ajaxSendMail: function(){
            $.ajax({
                type: "POST",
                url: ctx.getBaseUrl() + "/contact",
                data: {
                    "_token": token_ajax,
                    "name": author,
                    "email": email,
                    "message": message
                },
                success: function(data){
                    token=0;
                    if(data.status==='success'){
                        $submit.val('Send');
                    }else{
                        $submit.val('Error').addClass('submit_error');
                    }
                },
                error: function(error){
                    token=0;
                    $submit.val('Error').addClass('submit_error');
                    error=JSON.parse(error.responseText);
                    if(error.name){
                        self.setFieldError($input_name, $error_name, 'Could I know your name.');
                    }
                    if(error.email){
                        self.setFieldError($input_mail, $error_mail, 'I need a valid email to reply.');
                    }
                    if(error.message){
                        self.setFieldError($input_message, $error_message, 'Could you tell me why you contact me, please.');
                    }
                }
            }, "json");
        },
        generateToken: function(){
            date=new Date();
            token_ajax=date.getUTCDate() + '_' + Math.random().toString(36).substring(7) + (date.getMonth()+1);
        }
    };
    ctx.form=form;
    var self=form;
})(app);