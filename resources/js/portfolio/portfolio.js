(function(ctx){
    "use strict";
    var fill;
    
    var portfolio={
        // Application Constructor
        initialize: function(){            
            self.bindEvents();
        },
        bindEvents: function(){

        },
        dataFill: function($field){
            fill=$($field).attr('data-percent');
            $($field).children('.rempl_data').css('width', fill+'%');
        },
        dataUnfill: function($field){
            $($field).children('.rempl_data').css('width', '0');
        }
    };
    
    ctx.portfolio=portfolio;
    var self=portfolio;
})(app);