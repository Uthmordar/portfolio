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
                <p>back-end web developer</p>
            </div>
            <nav id='menuHeader'>
                <ul>
                    <li id='menuHeadHome' class='active' >Hello</li>
                    <li id='menuHeadWork'>Works</li>
                    <li id='menuHeadAbout'>More about me</li>
                    <li id='menuHeadContact'>Contact me</li>
                </ul>
            </nav>
        </div>
    </header>
    <!-- CONTENT -->
    <section id='wrapper'>
        <div id='fondBase'>
        </div>
        <section>
            <!-- HOME/HELLO -->
            <div id='introSlide'>
                <article id='intro'>
                    <h1 class='bold'>WELCOME ON MY PORTFOLIO</h1>
                    <p class='bold'>I have studied multiple computer languages, especially for back-end development : <strong class='colorRed'>PHP object</strong>, <strong class='colorRed'>NodeJS</strong> & <strong class='colorRed'>unit testing</strong>. Moreover I have mastered some frameworks such as <strong class='colorRed'>Laravel 5</strong> and <strong class='colorRed'>Symphony</strong>. I also spent my time in some personnal project, such as developing my own php framework.</p>
                </article>
            </div>
            <a id='learn' href="#">
                <p>Learn more about me</p>
            </a>

            <!-- WORKS -->
            <section id='worksSlide'>
                <h2 class='bold'>FIND SOME OF MY WORK HERE</h2>
                <nav id='menuFilter'>
                    <ul>
                        <li class='active' data-filter='All'>All</li>
                        @foreach($tags as $id=>$name)
                        <li data-filter="tag-{{$id}}">{{$name}}</li>
                        @endforeach
                    </ul>
                </nav>
                <article class='projectBanner Algorythm JS inactive' id='GoL'>
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
                </article>
                <article class='projectBanner JS inactive' id='webGame'>
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
                </article>
                <article class='projectBanner JS inactive' id='europunk'>
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
                </article>
                <article class='projectBanner Back inactive' id='WP'>
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
                </article>			
            </section>

            <!-- ABOUT -->

            <section id='about'>
                <div id='fondAbout'>
                </div>
                <div id='aboutPos'>
                    <div class='aboutBox' id='pdf'>
                        <a href='{{asset("/dl/cv.pdf")}}' class='pdf' title='Download résumé pdf' rel='nofollow'>
                            <img src="{{asset('/images/pdfIcon.png')}}" alt='pdf picto'/>
                            <span class='lowRes'>Download</span> my résumé
                        </a>
                    </div>
                    <article class='aboutBox' id='me'>
                        <h2>ME</h2>
                        <p>Hello my name is <span class='colorWhite'>Tanguy</span> GODIN, 25 years old.</p>
                        <p>I would like to work as a back-end developer.</p>
                        <p>Career objectives: I love algorythm challenges and would be pleased to work on PHP object development or unit testing team. I also enjoy using Laravel as framework.</p>
                        <p>What's more ? You could find some of my experiments or free time works on my <a href="https://github.com/Uthmordar" alt="uthmordar github" target="_blank" class="colorRed">GITHUB account</a></p>
                    </article>
                    <section class="flex_container">
                        <article class='aboutBox' id='skills'>
                            <h2>SKILLS</h2>
                            <p>Back-end development :</p>
                            <ul class='web'>
                                <li><span class='colorRed bold'>PHP OOP</span>
                                    <div class='data' data-percent='80'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>80%</span>
                                </li>
                                <li><span class='colorRed bold'>PHP UNIT, BEHAT</span>
                                    <div class='data' data-percent='80'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>80%</span>
                                </li>
                                <li><span class='colorRed'>NodeJS</span>
                                    <div class='data' data-percent='60'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>60%</span>
                                </li>
                                <li>AJAX
                                    <div class='data' data-percent='40'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>40%</span>
                                </li>
                                <li><span class='colorRed bold'>Laravel 5</span>
                                    <div class='data' data-percent='70'>
                                            <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>70%</span>
                                </li>
                                <li>Symphony
                                    <div class='data' data-percent='70'>
                                            <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>70%</span>
                                </li>
                                <li>CMS : <span class='colorRed'>Wordpress</span> & Drupal 
                                </li>
                            </ul>
                            <p>Front-end development :</p>
                            <ul class='web'>
                                <li><span class='colorRed'>HTML 5</span>
                                    <div class='data' data-percent='90'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>90%</span>
                                </li>
                                <li><span class='colorRed'>CSS3</span>
                                    <div class='data' data-percent='90'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>90%</span>
                                </li>
                                <li>Preprocessor : LESS, COMPASS
                                </li>
                                <li><span class='colorRed'>JAVASCRIPT</span>
                                    <div class='data' data-percent='60'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>60%</span>
                                </li>
                                <li>GRUNT, GULP
                                    <div class='data' data-percent='40'>
                                        <div class='remplData'></div>
                                    </div>
                                    <span class='percent'>40%</span>
                                </li>
                            </ul>
                        </article>
                        <article  class='aboutBox' id='exp'>
                            <h2>INTERNSHIPS</h2>
                            <ul>
                                <li>
                                    <h3><a href="http://www.netemedia.fr/" alt="Netemedia, agence web">Netemedia</a>, web agency, Paris</h3>
                                    <p>Avril-August 2014, 5 months</p>
                                    <p>Work as web developer: wordpress theme development, website maintenance...</p>
                                    <p>Used: wordpress, php, symphony, ajax, js, html5, css3</p>
                                    <p class="decal">Some project :</p>
                                    <ul>
                                        <li><a href="http://www.covoiture-art.com/" class="show" target="_blank">Carshare website</a></li>
                                        <li><a href="http://www.parquets-koval.com/" class="show" target="_blank">Parquet showroom & command website</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <h3>worker at SIM'EDIT, printer, Nantes, FRANCE</h3>
                                    <p>July 2010, 1 month.</p>
                                    <p class='decal'>gravure printing workshop</p>
                                </li>
                                <li>
                                    <h3>Institut Pasteur, Paris, FRANCE</h3>
                                    <p>June-July 2009, 2 months.</p>
                                    <p class='decal'>work at CEPIA platform (center of production & infection of anopheles)</p>
                                </li>
                            </ul>
                        </article>
                    </section>
                    <section class="flex_container">
                        <article class='aboutBox' id='educ'>
                            <h2>EDUCATION</h2>
                            <ul>
                                <li>2012-2015 : 1st, 2nd & preparatory years in web development at l'Ecole Multimedia, Paris, FRANCE.</li>
                                <li>2010-2011 : Master 1 in biocomputing, structural biochemestry & genomics at Luminy's university, Marseille, FRANCE.</li>
                                <li>2009-2010 : <span class='colorWhite'>Bachelor degree in biotechnology</span> at ESIL(engineering school), Marseille, FRANCE.</li>
                                <li>2007-2009 : Preparatory classes in biology-chemistry-physics & geology at Lycée Marcelin Berthelot, Saint-Maur des fossés, FRANCE.</li>
                                <li>2007 : high school diploma in science, majoring in biology</li>
                            </ul>
                        </article>
                        <article class='aboutBox boxLeft' id='misc'>
                            <h2>MISC</h2>
                            <ul>
                                <li>Reading (novels, graphic novels, English articles)</li>
                                <li>Videogames (RPG & STR, AAA or indie game, solo or team play, experience as team/guild manager online)</li>
                                <li>Travels (Brazil, Greece, Germany, Italy, England)</li>
                                <li>Piano practice</li>
                            </ul>
                        </article>
                    </section>
                </div>
            </section>
        </section>
    </section>

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