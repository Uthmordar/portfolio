(function(ctx){
    "use strict";
    var editor, $form;
    
    var form={
        // Application Constructor
        initialize: function(){
            editor=new Quill('.form_message');
            editor.getHTML();
            
            self.bindEvents();
        },
        bindEvents: function(){

        }
    };
    ctx.form=form;
    var self=form;
})(app);