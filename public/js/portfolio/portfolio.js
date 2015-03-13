!function(){for(var e=0,i=["ms","moz","webkit","o"],n=0;n<i.length&&!window.requestAnimationFrame;++n)window.requestAnimationFrame=window[i[n]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[i[n]+"CancelAnimationFrame"]||window[i[n]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(i){var n=(new Date).getTime(),t=Math.max(0,16-(n-e)),o=window.setTimeout(function(){i(n+t)},t);return e=n+t,o}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),function(e){"use strict";var i,n={initialize:function(e){window.requestAnimFrame=function(){return window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)}}(),i=e,t.form.initialize(),t.menu.initialize(),t.portfolio.initialize(),t.works.initialize(),t.parallax.initialize(),t.bindEvents()},bindEvents:function(){},getBaseUrl:function(){return i}};e.app=n;var t=n}(window),function(e){"use strict";var i,n,t,o,a,r,l,s,c,d,u,m,f,h,p,w=0,v={initialize:function(){r=$("#form_contact"),l=$("#name"),s=$("#email"),c=$("#message"),n=$("#form_contact .form_submit"),f=l.siblings(".error_name"),h=s.siblings(".error_mail"),p=c.siblings(".error_message"),b.bindEvents()},bindEvents:function(){r.on("submit",function(e){return e.preventDefault(),a=0,b.getFields(),b.checkFields()?(n.val("Submit").removeClass("submit_error"),w||(w++,b.generateToken(),n.val("Sending..."),b.ajaxSendMail()),!1):!1}),s.on("keyup change",function(){b.getEmail(),b.checkValidEmail()})},checkFields:function(){return d||(b.setFieldError(l,f,"Could I know your name."),a++),u?b.checkValidEmail()||(b.setFieldError(s,h,"This email is invalid."),a++):(b.setFieldError(s,h,"I need your email to reply."),a++),m||(b.setFieldError(c,p,"Could you tell me why you contact me, please."),a++),a?!1:!0},setFieldError:function(e,i,n){i.html(n),e.addClass("error_form")},getFields:function(){d=l.val(),u=s.val().trim(),m=c.val().trim()},getEmail:function(){u=s.val().trim()},checkValidEmail:function(){return o=u.match(/^[a-zA-Z0-9\.\_\-]+@[a-zA-Z0-9\.\_\-]+\.[a-zA-Z]{2,6}/),o&&o[0]===u?(s.removeClass("error_form"),!0):(s.addClass("error_form"),!1)},ajaxSendMail:function(){$.ajax({type:"POST",url:e.getBaseUrl()+"/contact",data:{_token:t,name:d,email:u,message:m},success:function(e){w=0,"success"===e.status?n.val("Send"):n.val("Error").addClass("submit_error")},error:function(e){w=0,n.val("Error").addClass("submit_error"),e=JSON.parse(e.responseText),e.name&&b.setFieldError(l,f,"Could I know your name."),e.email&&b.setFieldError(s,h,"I need a valid email to reply."),e.message&&b.setFieldError(c,p,"Could you tell me why you contact me, please.")}},"json")},generateToken:function(){i=new Date,t=i.getUTCDate()+"_"+Math.random().toString(36).substring(7)+(i.getMonth()+1)}};e.form=v;var b=v}(app),function(e){"use strict";var i,n,t,o,a,r,l,s,c,d,u=$("html, body"),m=$("#header"),f=$(window),h=$("#menu_header"),p=h.children("ul").children("li"),w=$("#works_slide"),v=$("#wrapper"),b=$("#learn"),g={initialize:function(){n=$(".project_banner"),_.bindEvents()},bindEvents:function(){n.on("click",function(){_.generateLightbox(this)}),f.on("resize",function(){c&&_.positionLightbox()}),p.on("click",function(e){e.preventDefault(),p.removeClass("active"),$(this).addClass("active")}),b.on("click",function(e){e.preventDefault(),_.scroll(w,20)}),$("#menu_head_home, #logo").on("click",function(e){e.preventDefault(),_.scroll(v,0)})},bindEventsModal:function(){d.on("click",function(){_.destroyLightbox()}),s.on("click",function(){_.destroyLightbox()})},dataFill:function(e){i=$(e).attr("data-percent"),$(e).children(".rempl_data").css("width",i+"%")},dataUnfill:function(e){$(e).children(".rempl_data").css("width","0")},generateLightbox:function(e){a=$(e),r=a.children(".com").html(),l=a.children(".banner_detail").html(),s=$('<div class="modal"></div>').appendTo("body"),c=$('<div class="lightbox">'+r+l+"</div>").appendTo("body"),d=$('<div class="cross"></div>').appendTo(c),v.addClass("blur"),_.positionLightbox(),_.bindEventsModal()},destroyLightbox:function(){v.removeClass("blur"),c.remove(),s.remove()},positionLightbox:function(){t=.5*(f.innerHeight()-c.height()),o=.4*f.innerWidth()*.5,c.css(window.matchMedia("(max-width: 480px)").matches?window.matchMedia("(max-width: 400px)").matches?{top:t+"px",left:"2%"}:{top:t+"px",left:"10%"}:{top:t+"px",left:o+"px"})},scroll:function(e,i){u.animate({scrollTop:e.offset().top-(m.height()+i)},2e3)}};e.portfolio=g;var _=g}(app),function(e){"use strict";var i,n=0,t=$(window),o=$("#works_slide"),a=$("#about"),r=$("#fond_base"),l=$("#fond_about"),s={initialize:function(){i=$("#skills .web .data"),c.bindEvents()},bindEvents:function(){t.on("scroll",function(i){i.preventDefault(),n=Math.floor(t.scrollTop()),c.renderParallax(),e.menu.controlMenuActiveLink()})},parallaxBG:function(e,i,t){e.css({"background-position":"0px "+(i-n/t)+"px"})},parallaxHeight:function(e,i,t,o,a){e.css({height:i+(n/t-o)*a+"%"})},renderParallax:function(){if(n>-100&&n<o.offset().top+200&&c.parallaxBG(r,75,.5),n>a.offset().top-200&&3300>n&&(c.parallaxBG(l,75,.1),c.parallaxHeight(l,0,20,65,1.6)),n>a.offset().top-200&&2600>n)for(var t=0;t<i.length;t++)e.portfolio.dataFill(i[t]);if(1300>n||n>2600)for(var t=0;t<i.length;t++)e.portfolio.dataUnfill(i[t])}};e.parallax=s;var c=s}(app),function(e){"use strict";var i,n,t=$("#menu_filter li"),o=$(".project_banner"),a={initialize:function(){r.bindEvents()},bindEvents:function(){t.on("click",function(e){e.preventDefault(),n=$(this),n.hasClass("active")===!1&&r.filterWorks(n)})},filterWorks:function(e){if(t.removeClass("active"),e.addClass("active"),i=e.attr("data-filter"),"All"===i)o.addClass("project_filter");else for(var n=0;n<o.length;n++)r.projectStatusChange($(o[n]))},projectStatusChange:function(e){e.hasClass(i)?e.addClass("project_filter"):e.removeClass("project_filter")}};e.works=a;var r=a}(app),function(e){"use strict";var i,n=0,t=$(window),o=$("#works_slide"),a=$("#footer"),r=$("#about"),l=$("#menu_header"),s=$("#wrapper_footer"),c=l.children("ul").children("li"),d=$("#menu_head_contact"),u=$("#menu_head_about"),m=$("#menu_head_work"),f=$("#menu_head_home"),h=$("#skills h2"),p={initialize:function(){window.matchMedia("(max-width: 1280px)").matches||(i=h.offset().left,w.transitionMenu(l,"left",i)),w.bindEvents()},bindEvents:function(){t.on("resize",function(){w.onResize()}),m.on("click",function(i){i.preventDefault(),e.portfolio.scroll(o,20)}),u.on("click",function(i){i.preventDefault(),e.portfolio.scroll(r,0)}),d.on("click",function(i){i.preventDefault(),e.portfolio.scroll(s,0)})},controlMenuActiveLink:function(){c.removeClass("active"),n>a.offset().top-600?d.addClass("active"):n>r.offset().top-250?u.addClass("active"):n>o.offset().top-250?m.addClass("active"):f.addClass("active")},transitionMenu:function(e,i,n){n=n>window.innerWidth-e.width()-60?window.innerWidth-e.width()-60:n,e.css(i,n+"px")},onResize:function(){window.matchMedia("(min-width : 1281px)").matches&&(i=h.offset().left,w.transitionMenu(l,"left",i)),window.matchMedia("(max-width: 1280px)").matches&&window.matchMedia("(min-width:990px)").matches&&l.css("left","35rem"),window.matchMedia("(max-width: 930px)").matches&&l.css("left","0")}};e.menu=p;var w=p}(app);