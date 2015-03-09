<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tanguy Godin web developer, my résumé & works</title>

    <!-- META -->
    <meta name='Author' content="Tanguy Godin">
    <meta name='description' content="Find here my resumé and somes of my works">
    <meta name='keywords' content="Tanguy Godin, developer, résumé, works">

    <!-- fonts -->
    <link href='http://fonts.googleapis.com/css?family=Quicksand:400' rel='stylesheet' type='text/css'>
    
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
            <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
            <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->


    <!-- FAVICON -->
    <link rel='shortcut icon' href="{{asset('/images/favicon.ico')}}"/>
    <link rel='icon' href="{{asset('/images/favicon.ico')}}"/>

    <!-- CSS -->
    <link rel='stylesheet' href="{{asset('/css/dist/portfolio.css')}}" type='text/css' media='all' />
</head>
<body>

    <!-- HEADER -->

    <header>
        <div id='wrapperHeader'>
            <div id='logo'>
                <h1><span class='bold colorWhite'>Tanguy</span> GODIN</h1> 
                <p>junior web developer</p>
            </div>
            <nav id='menuHeader'>
                <ul>
                    <li id='menuHeadHome' class='active' >Hello</li>
                    <li id='menuHeadWork'>Works</li>
                    <li id='menuHeadAbout'>About</li>
                    <li id='menuHeadContact'>Contact</li>
                </ul>
            </nav>
        </div>
    </header>
	
    <!-- CONTENT -->

    <div id='wrapper'>
            <div id='fondBase'>
            </div>
            <section>
                <!-- HOME/HELLO -->
                <div id='introSlide'>
                    <div id='intro'>
                        <h1 class='bold'>WELCOME ON MY WEBSITE</h1>
                        <p class='bold'>I have studied multiple computer languages, especially for front-end : <strong class='colorRed'>HTML5</strong>, <strong class='colorRed'>CSS3</strong> & <strong class='colorRed'>JQUERY-JAVASCRIPT</strong>. However I prefer <strong class='colorRed'>BACK-END DEVELOPMENT</strong> with <strong class='colorRed'>PHP/MySQL</strong>. I also mastered WORDPRESS and DRUPAL as CMS.</p>
                    </div>
                </div>
                <div id='learn'>
                    <p>Learn more about me</p>
                    <div class='fleche'></div>
                </div>

                <!-- WORKS -->
                <div id='worksSlide'>
                    <h2 class='bold'>FIND SOME OF MY WORK HERE</h2>
                    <nav id='menuFilter'>
                        <ul>
                            <li class='active' data-filter='All'>All</li>
                            <li data-filter='JS'>Jquery/Js</li>
                            <li data-filter='Algorythm'>Algorythm</li>
                            <li data-filter='Back'>Back-end management</li>
                        </ul>
                    </nav>
                    <div class='projectBanner Algorythm JS inactive' id='GoL'>
                        <div class='veil'>
                        </div> 
                        <div class='project'>
                        </div>
                        <div class='com'>
                            <h3>CUSTOMIZABLE CONWAY'S GAME OF LIFE</h3>
                            <p>algorythm, JQuery/JS, webGl render, perf studies</p>
                        </div>
                        <div class='bannerDetail'>
                            <div class='thumbnail'>
                                <figure>
                                    <img src="{{asset('/images/GoL.jpg')}}" alt="thumbnail conway's game of life interface capture"/>
                                </figure>
                            </div>
                            <p class='linkProject'><a href='https://github.com/Uthmordar/gameOfLife' rel='nofollow'>github</a></p>
                            <ul>
                                <li class='lowRes'>Developed as final year project in preparatory year.</li>
                                <li class='lowRes'>Include : a mini-site, algorythm and render performances test on multiple browsers tests.
                                <li>Works : render system with PIXI.js, game of life simulation which is able to run personnal algorytm of proliferation, seed/parent-child system which allows proliferation of some different species of entities</li>
                            </ul>
                        </div>
                    </div>
                    <div class='projectBanner JS inactive' id='webGame'>
                            <div class='veil'>
                            </div> 
                            <div class='project'>
                                    <div class='slide'>
                                    </div>
                            </div>
                            <div class='com'>
                                    <h3>WEB GAME</h3>
                                    <p>game, JQuery/JS</p>
                            </div>
                            <div class='bannerDetail'>
                                    <div class='thumbnail'>
                                            <figure>
                                                    <img src="{{asset('/images/webGame.png')}}" alt='thumbnail webgame play capture'/>
                                            </figure>
                                    </div>
                                    <ul>
                                            <li class='lowRes'>Developed during a JS workshop in preparatory year.</li>
                                            <li>Works : introduction to object, requestAnimationFrame & movement management.</li>
                                            <li>This game was never put online.</li>
                                    </ul>
                            </div>
                    </div>
                    <div class='projectBanner JS inactive' id='europunk'>
                            <div class='veil'>
                            </div> 
                            <div class='project'>
                            </div>
                            <div class='com'>
                                    <h3>EUROPUNK SITE</h3>
                                    <p>html 5, advanced CSS3, JS/JQuery</p>
                            </div>
                            <div class='bannerDetail'>
                                    <div class='thumbnail'>
                                            <figure>
                                                    <img src="{{asset('/images/europunk.jpg')}}" alt='thumbnail europunk homepage capture'/>
                                            </figure>
                                    </div>
                                    <p class='linkProject'>
                                            <a href='http://www.citedelamusique.fr/minisites/1310_europunk/index.asp' rel='nofollow'>Europunk</a>
                                            <a href='http://www.citedelamusique.fr/' rel='nofollow'>deconstruct</a>
                                    </p>
                                    <ul>
                                            <li class='lowRes'>Developed for "la Cité de la Musique", Paris.</li>
                                            <li>Works : website organization & management, integration, JS/JQuery & CSS3 advanced for animation, development of a plug-in for deconstruction of the curent website, lightbox, client-side languages management, responsive.</li>
                                    </ul>
                            </div>
                    </div>
                    <div class='projectBanner Back inactive' id='WP'>
                            <div class='veil'>
                            </div> 
                            <div class='project'>
                            </div>
                            <div class='com'>
                                    <h3>WORDPRESS PROJECT</h3>
                                    <p>API google/twitter, CMS WP, JS/JQuery, PHP</p>
                            </div>
                            <div class='bannerDetail'>
                                    <div class='thumbnail'>
                                            <figure>
                                                    <img src="{{asset('/images/WPproject.jpg')}}" alt='thumbnail wordpress project code'/>
                                            </figure>
                                    </div>
                                    <ul>
                                            <li>I developed some Wordpress theme.</li>
                                            <li>Works : API management (google, twitter, youtube), JS plug-in management & development, website admin management
                                            , PHP development for website customization, theme development.</li>
                                    </ul>
                            </div>
                    </div>			
                </div>

                    <!-- ABOUT -->

                    <div id='about'>
                            <div id='fondAbout'>
                            </div>
                            <div id='aboutPos'>
                                    <div id='aboutWrap'>
                                            <div class='aboutBox' id='pdf'>
                                                    <a href='./dl/cv.pdf' class='pdf' title='Download résumé pdf' rel='nofollow'>
                                                            <img src="{{asset('/images/pdfIcon.png')}}" alt='pdf picto'/>
                                                            <span class='lowRes'>Download</span> my résumé
                                                    </a>
                                            </div>
                                            <div class='aboutBox boxLeft' id='me'>
                                                    <h2>ME</h2>
                                                    <p>Hello my name is <span class='colorWhite'>Tanguy</span> GODIN, 24 years old.</p>
                                                    <p>I would like to work as a back-end developer.</p>
                                                    <p>Career objectives: I love algorythm challenges and would be pleased to work on resolving some theoretical issues.</p>
                                            </div>
                                            <div class='aboutBox boxRight' id='skills'>
                                                    <h2>SKILLS</h2>
                                                    <p>Web development :</p>
                                                    <ul id='web'>
                                                            <li><span class='colorRed'>HTML 5</span>
                                                                    <div class='data' data-percent='65'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>65%</span>
                                                            </li>
                                                            <li><span class='colorRed'>CSS3</span> & <span class='colorRed'>advanced CSS3</span>
                                                                    <div class='data' data-percent='60'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>60%</span>
                                                            </li>
                                                            <li>Preprocessor : <span class='colorRed'>LESS</span>
                                                                    <div class='data' data-percent='50'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>50%</span>
                                                            </li>
                                                            <li><span class='colorRed'>JQuery/JS</span>
                                                                    <div class='data' data-percent='60'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>60%</span>
                                                            </li>
                                                            <li><span class='colorRed'>AJAX</span>
                                                                    <div class='data' data-percent='40'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>40%</span>
                                                            </li>
                                                            <li><span class='colorRed'>PHP/MySQL</span>
                                                                    <div class='data' data-percent='45'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>45%</span>
                                                            </li>
                                                            <li>CMS : <span class='colorRed'>Wordpress</span> 
                                                                    <div class='data' data-percent='75'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>75%</span> 
                                                            <br/> & <span class='colorRed'>Drupal</span> 
                                                                    <div class='data' data-percent='20'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>20%</span>
                                                            </li>
                                                            <li>Adobe Edge animate
                                                                    <div class='data' data-percent='32'>
                                                                            <div class='remplData'></div>
                                                                    </div>
                                                                    <span class='percent'>32%</span>
                                                            </li>
                                                    </ul>
                                                    <p>Other :</p>
                                                    <ul>
                                                            <li>C language (algorythm)</li>
                                                            <li>MathLab</li>
                                                            <li>Python (basics)</li>
                                                            <li>R language</li>
                                                    </ul>
                                            </div>
                                            <div  class='aboutBox boxLeft' id='exp'>
                                                    <h2>INTERNSHIPS</h2>
                                                    <ul>
                                                            <li>
                                                                    <h3>worker at SIM'EDIT, printer, Nantes, FRANCE</h3>
                                                                    <p>July 2010, 1 month.</p>
                                                                    <p class='decal'>gravure printing workshop</p>
                                                            </li>
                                                            <li>
                                                                    <h3>Institut Pasteur, Paris, FRANCE</h3>
                                                                    <p>June-July 2009, 2 month.</p>
                                                                    <p class='decal'>work at CEPIA platform (center of production & infection of anopheles)</p>
                                                                    <p class='decal'>spec :</p>
                                                                    <ul>
                                                                            <li>computer security</li>
                                                                            <li>work health & general security</li>
                                                                            <li>Lab bench work (genetics experiments about plague & malaria)</li>
                                                                            <li>Animals care</li>
                                                                    </ul>
                                                            </li>
                                                    </ul>
                                            </div>
                                            <div class='aboutBox boxRight' id='educ'>
                                                    <h2>EDUCATION</h2>
                                                    <ul>
                                                            <li>2012-2014 : 1st year and preparatory year in web development at l'Ecole Multimedia, Paris, FRANCE.</li>
                                                            <li>2010-2011 : Master 1 in biocomputing, structural biochemestry & genomics at Luminy's university, Marseille, FRANCE.</li>
                                                            <li>2009-2010 : <span class='colorWhite'>Bachelor degree in biotechnology</span> at ESIL(engineering school), Marseille, FRANCE.</li>
                                                            <li>2007-2009 : Preparatory classes in biology-chemistry-physics & geology at Lycée Marcelin Berthelot, Saint-Maur des fossés, FRANCE.</li>
                                                            <li>2007 : high school diploma in science, majoring in biology</li>
                                                    </ul>
                                            </div>
                                            <div class='aboutBox boxLeft' id='misc'>
                                                    <h2>MISC</h2>
                                                    <ul>
                                                            <li>Reading (novels, comic books, English articles)</li>
                                                            <li>Videogames (RPG & STR, AAA or indie, solo or team play, experience as team/guild manager online)</li>
                                                            <li>Travels (Brazil, Greece, Germany, Italy, England)</li>
                                                            <li>Piano practice</li>
                                                    </ul>
                                            </div>
                                    </div>
                            </div>
                    </div>
            </section>
    </div>

    <!-- FOOTER -->

    <footer>
        <div id='wrapperFooter'>
            <div id='contact'>
                <h2>CONTACT ME</h2>
                <p>I am available to hire and I am based in Alfortville, near Paris, FRANCE.</p>
                <ul id='contactData'>
                    <li>Tel : 0033 647 764 006</li>
                    <li>email : 
                        <a href='mailto:tanguyrygodin@gmail.com?subject=portfolioContact' class='colorRed' title='my mail : click and send me your message.' rel='nofollow'>
                            tanguyrygodin@gmail.com
                        </a>
                    </li>
                </ul>
                <ul id='soc'>
                    <li id='twitter'>
                        <a href="https://twitter.com/TanguyGodin" rel='nofollow'>
                            <img src="{{asset('/images/twitter.png')}}" alt='twitter icon' title='follow my twitter'/>
                        </a>
                    </li>
                    <li id='linkedIn'>
                        <a href="https://lnkd.in/d6mE7_Z" rel='nofollow'>
                            <img src="{{asset('/images/linkin.png')}}" alt='linkIn icon' title='check my linkin'/>
                        </a>
                    </li>
                    <li id='gith'>
                        <a href='https://github.com/Uthmordar' rel='nofollow'>
                            <img src="{{asset('/images/github.png')}}" alt='github icon' title='find my works on github'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div id='contactForm'>
                <!-- if(!empty($error)){ echo $error;}
                echo $result;-->
                {!!Form::open(['url'=>'contact', 'files'=>false, 'method'=>'POST'])!!}
                    {!!Session::get('contactMessage')!!}
                    
                    {!!Form::label('name', 'Name *')!!}
                    {!!Form::text('name', Input::old('name'), array('placeholder'=>'please enter your name', 'class'=>'form_name', 'required'))!!}
                    {!!isset($errors)?'<span class="bg-danger">'.$errors->first('name').'</span>': ''!!}

                        {!!Form::label('email', 'Email *')!!}
                        {!!Form::email('email', Input::old('email'), array('placeholder'=>'name@domain.com', 'class'=>'form_mail', 'required'))!!}
                        {!!isset($errors)?'<span class="bg-danger">'.$errors->first('email').'</span>': ''!!}
                    
                    
                        {!!Form::label('message', 'Message *')!!}
                        {!!Form::textarea('message', Input::old('message'), array('placeholder'=>'Your message...', 'class'=>'form_message', 'required'))!!}
                        {!!isset($errors)?'<span class="bg-danger">'.$errors->first('message').'</span>': ''!!}
                   
                    {!!Form::submit('Submit', array('class'=>'form_submit'))!!}
                {!!Form::close()!!}
            </div>
        </div>
    </footer>
    <!-- script à action différée pour la bonne marche des animations -->
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <script src="//cdn.quilljs.com/0.19.8/quill.js"></script>
    <script type="text/javascript" src="{{asset('/js/portfolio/main.js')}}"></script>
    <script>
        $(function(){
            var editor=new Quill('.form_message');
            editor.getHTML();
        });
    </script>
</body>
</html>