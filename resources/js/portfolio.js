// requestAnimationFrame polyfill by Erik Möller
// fixes from Paul Irish and Tino Zijdel
(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x){
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame']
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
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
(function(ctx){
    "use strict";
    var base_url;
    var app={
        // Application Constructor
        initialize: function(url){
            window.requestAnimFrame = (function(){
                return  window.requestAnimationFrame       ||
                        window.webkitRequestAnimationFrame ||
                        window.mozRequestAnimationFrame    ||
                        window.oRequestAnimationFrame      ||
                        window.msRequestAnimationFrame     ||
                        function( callback ){
                            window.setTimeout(callback, 1000 / 60);
                        };
            })();
            base_url=url;
            self.form.initialize();
            self.menu.initialize();
            self.portfolio.initialize();
            self.works.initialize();
            self.parallax.initialize();
            self.bindEvents();
        },
        bindEvents: function(){

        },
        getBaseUrl: function(){
            return base_url;
        }
    };
    ctx.app=app;
    var self=app;
})(window);
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
        resetFieldsStatus: function(){
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
(function(ctx){
    "use strict";
    var fill, $projectBanner, $page=$('html, body'), $header=$('#header'), top, left, $window=$(window),
    $elem, intro, text, $modal, $lightbox, $cross, $menuHeader=$('#menu_header'), $menuHeaderLi=$menuHeader.children('ul').children('li'),
    $worksSlide=$('#works_slide'), $wrapper=$('#wrapper'), $learn=$('#learn');
    
    var portfolio={
        // Application Constructor
        initialize: function(){
            $projectBanner=$('.project_banner');
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
            });
            
            $menuHeaderLi.on('click', function(e){
                e.preventDefault();
                $menuHeaderLi.removeClass('active');
                $(this).addClass('active');
            });
            
            $learn.on('click', function(e){
                e.preventDefault();
                self.scroll($worksSlide, 20);
            });

            $("#menu_head_home, #logo").on('click', function(e){
                e.preventDefault();
                self.scroll($wrapper, 0);
            });
        },
        bindEventsModal: function(){
            $cross.on('click', function(){
                self.destroyLightbox();
            });

            $modal.on('click', function(){
                self.destroyLightbox();
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

            $wrapper.addClass('blur');
            self.positionLightbox();
            self.bindEventsModal();
        },
        destroyLightbox: function(){
            $wrapper.removeClass('blur');
            $lightbox.remove();
            $modal.remove();
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
        }
    };
    
    ctx.portfolio=portfolio;
    var self=portfolio;
})(app);
(function(ctx){
    "use strict";
    var windowScroll=0, $window=$(window), $worksSlide=$('#works_slide'), $about=$('#about'), $data, $fondBase=$('#fond_base'), $fondAbout=$('#fond_about');
    
    var parallax={
        initialize: function(){
            $data=$('#skills .web .data');
            self.bindEvents();
        },
        bindEvents: function(){
            $window.on('scroll', function(e){
                e.preventDefault();
                windowScroll=Math.floor($window.scrollTop());
                self.renderParallax();
                ctx.menu.controlMenuActiveLink();
            });
        },
        parallaxBG: function(elem, yPos, ySpeed){
            elem.css({'background-position' : '0px '+(yPos-(windowScroll/ySpeed))+'px'});
        },
        parallaxHeight: function(elem, iniHeight, divHeight, soustractHeight, speed){
            elem.css({'height' : iniHeight+((windowScroll/divHeight)-soustractHeight)*speed+'%'});
        },
        renderParallax: function(){
            if(windowScroll> -100 && windowScroll<$worksSlide.offset().top + 200){
                self.parallaxBG($fondBase, 75, 0.5);
            }

            if(windowScroll>$about.offset().top - 200 && windowScroll<3300){
                self.parallaxBG($fondAbout, 75, 0.1);
                self.parallaxHeight($fondAbout, 0, 20, 65, 1.6);
            }

            if(windowScroll>$about.offset().top - 200 && windowScroll<2600){
                for(var i=0; i<$data.length; i++){
                    ctx.portfolio.dataFill($data[i]);
                }
            }

            if(windowScroll<1300 || windowScroll>2600){
                for(var i=0; i<$data.length; i++){
                    ctx.portfolio.dataUnfill($data[i]);
                }
            }
        }
    };
    
    ctx.parallax=parallax;
    var self=parallax;
})(app);
(function(ctx){
    "use strict";
    var $menuFilter=$('#menu_filter li') ,filter, $projects=$('.project_banner'), $this;
    
    var works={
        initialize: function(){
            self.bindEvents();
        },
        bindEvents: function(){
            $menuFilter.on('click', function(e){
                e.preventDefault();
                $this=$(this);
                if($this.hasClass('active')===false){
                    self.filterWorks($this);
                }
            });
        },
        filterWorks: function($this){
            $menuFilter.removeClass('active');
            $this.addClass('active');

            filter=$this.attr('data-filter');
            if(filter==='All'){
                $projects.addClass('project_filter');
            }else{
                for(var i=0; i<$projects.length; i++){
                    self.projectStatusChange($($projects[i]));
                }
            }
        },
        projectStatusChange: function($project){
            if($project.hasClass(filter)){
                $project.addClass('project_filter');
            }else{
                $project.removeClass('project_filter');
            }
        }
    };
    
    ctx.works=works;
    var self=works;
})(app);
(function(ctx){
    "use strict";
    var windowScroll=0, $window=$(window), $worksSlide=$('#works_slide'), $footer=$('#footer'), $about=$('#about'), $menuHeader=$('#menu_header'), $wrapperFooter=$('#wrapper_footer'),
    $menuHeaderLi=$menuHeader.children('ul').children('li'), $menuContact=$('#menu_head_contact'), $menuAbout=$('#menu_head_about'), $menuWork=$('#menu_head_work'), $menuHome=$('#menu_head_home'), $skillsTitle=$('#skills h2'), X;
    
    var menu={
        initialize: function(){
            if(!window.matchMedia("(max-width: 1280px)").matches){
                //X=($skillsTitle.offset().left);
                X=30;
                self.transitionMenu($menuHeader, 'right', X);
            }
            self.bindEvents();
        },
        bindEvents: function(){
            $window.on('resize', function(){
                self.onResize();
            });
            
            $menuWork.on('click', function(e){
                e.preventDefault();
                ctx.portfolio.scroll($worksSlide, 20);
            });

            $menuAbout.on('click', function(e){
                e.preventDefault();
                ctx.portfolio.scroll($about, 0);
            });

            $menuContact.on('click', function(e){
                e.preventDefault();
                ctx.portfolio.scroll($wrapperFooter, 0);
            });
        },
        controlMenuActiveLink: function(){
            $menuHeaderLi.removeClass('active');
            if(windowScroll> $footer.offset().top - 600){
                $menuContact.addClass('active');
            }else if(windowScroll> $about.offset().top -250){
                $menuAbout.addClass('active');
            }else if(windowScroll> $worksSlide.offset().top - 250){
                $menuWork.addClass('active');
            }else{
                $menuHome.addClass('active');
            }
        },
        transitionMenu: function($elem, prop, mvt){
            mvt=(mvt>window.innerWidth - $elem.width() - 60)? window.innerWidth - $elem.width() - 60 : mvt;
            $elem.css(prop, mvt+'px');
        },
        onResize: function(){
            if(window.matchMedia("(min-width : 1281px)").matches){
                //X=($skillsTitle.offset().left);
                //self.transitionMenu($menuHeader, 'left', X);
            }

            if(window.matchMedia("(max-width: 1280px)").matches && window.matchMedia("(min-width:990px)").matches){
                $menuHeader.css('left', '35rem');
            }

            if(window.matchMedia("(max-width: 930px)").matches){
                $menuHeader.css('left', '0');
            }
        }
    };
    
    ctx.menu=menu;
    var self=menu;
})(app);
//# sourceMappingURL=portfolio.js.map