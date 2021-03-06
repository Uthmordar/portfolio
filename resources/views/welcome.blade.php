<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Tanguy Godin web developer, my résumé & works</title>

    <!-- META -->
    <meta name='Author' content="Tanguy Godin">
    <meta name='description' content="Find here my resumé and some projects I worked on">
    <meta name='keywords' content="Tanguy Godin, web developer, back-end, php, laravel 5, résumé, works">

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
    <header id="header">
        <div id='wrapper_header'>
            <div id='logo'>
                <h1><span class='bold color_white'>Tanguy</span> GODIN</h1> 
                <p>back-end web developer</p>
            </div>
            <nav id='menu_header'>
                <ul>
                    <li id='menu_head_home' class='active'><span class="puce"></span><span class="text">Hello</span></li>
                    <li id='menu_head_work'><span class="puce"></span><span class="text">Works</span></li>
                    <li id='menu_head_about'><span class="puce"></span><span class="text">More about me</span></li>
                    <li id='menu_head_contact'><span class="puce"></span><span class="text">Contact me</span></li>
                </ul>
            </nav>
        </div>
    </header>
    <!-- CONTENT -->
    <section id='wrapper'>
        <div id='fond_base'>
        </div>
        <section>
            <!-- HOME/HELLO -->
            <div id='intro_slide'>
                <article id='intro'>
                    <h1 class='bold'>WELCOME ON MY PORTFOLIO</h1>
                    <p class='bold'>I have studied multiple computer languages, especially for back-end development : <strong class='color_red'>PHP object</strong>, <strong class='color_red'>NodeJS</strong> & <strong class='color_red'>unit testing</strong>. Moreover I have mastered some frameworks such as <strong class='color_red'>Laravel 5</strong> and <strong class='color_red'>Symfony</strong>. I also spent my time in some personnal project, such as developing my own php framework.</p>
                </article>
            </div>
            <a id='learn' href="#">
                <p>Learn more about me</p>
            </a>

            <!-- WORKS -->
            
            <section id='works_slide'>
                <h2 class='bold'>FIND SOME OF MY WORK HERE</h2>
                <nav id='menu_filter'>
                    <ul>
                        <li class='active' data-filter='All'>All</li>
                        @foreach($tags as $tag)
                            @if($tag->count_projects>0)
                                <li data-filter="tag-{{$tag->id}}">{{$tag->name}} ({{$tag->count_projects}})</li>
                            @endif
                        @endforeach
                    </ul>
                </nav>
                @foreach($projects as $project)
                <article class='project_banner tag-{{$project->tag_id}} inactive project_filter' data-project="{{$project->id}}" @if($project->url_image)  style="background: url({{asset('/uploads/'.$project->url_image)}}) center center; background-size: 100%;" @endif>
                    <div class='veil'>
                    </div> 
                    <div class='com'>
                        <h3>{{$project->title}}</h3>
                        <p>{{$project->abstract}}</p>
                    </div>
                </article>
                @endforeach
            </section>

            <!-- ABOUT -->

            <section id='about'>
                <div id='about_pos'>
                    <div class='about_box' id='pdf'>
                        <a href='{{asset("/dl/Godin_tanguy_cv_web_developer.pdf")}}' class='pdf' title='Download résumé pdf' rel='nofollow'>
                            <img src="{{asset('/images/pdfIcon.png')}}" alt='pdf picto'/>
                            <span class='low_res'>Download</span> my résumé
                        </a>
                    </div>
                    <article class='about_box' id='me'>
                        <h2>ME</h2>
                        <p>Hello my name is <span class='color_white'>Tanguy</span> GODIN, 25 years old.</p>
                        <p>I would like to work as a back-end developer.</p>
                        <p>Career objectives: I love algorythm challenges and would be pleased to work on PHP object development or unit testing team. I also enjoy using Laravel as framework.</p>
                        <p>What's more? You could find some of my experiments or free time works on my <a href="https://github.com/Uthmordar" target="_blank" class="color_red">GITHUB account</a></p>
                    </article>
                    <section class="flex_container">
                        <article class='about_box' id='skills'>
                            <h2>SKILLS</h2>
                            <div class="skills_flex">
                                <section class="back_column">
                                    <p>Back-end development:</p>
                                    <ul class='web'>
                                        <li><span class='color_red bold'>PHP OOP</span>
                                            <div class='data' data-percent='80'>
                                                <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>80%</span>
                                        </li>
                                        <li><span class='color_red bold'>PHP UNIT, BEHAT</span>
                                            <div class='data' data-percent='80'>
                                                <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>80%</span>
                                        </li>
                                        <li><span class='color_red'>NodeJS</span>
                                            <div class='data' data-percent='60'>
                                                <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>60%</span>
                                        </li>
                                        <li>AJAX
                                        </li>
                                        <li><span class='color_red bold'>Laravel 5</span>
                                            <div class='data' data-percent='80'>
                                                    <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>80%</span>
                                        </li>
                                        <li><span class='color_red bold'>Symfony</span>
                                            <div class='data' data-percent='70'>
                                                    <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>70%</span>
                                        </li>
                                        <li>CMS : <span class='color_red'>Wordpress</span> & Drupal 
                                        </li>
                                    </ul>
                                </section>
                                <section class="front_column">
                                    <p>Front-end development:</p>
                                    <ul class='web'>
                                        <li><span class='color_red'>HTML 5</span>
                                            <div class='data' data-percent='90'>
                                                <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>90%</span>
                                        </li>
                                        <li><span class='color_red'>CSS3</span>
                                            <div class='data' data-percent='90'>
                                                <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>90%</span>
                                        </li>
                                        <li>Preprocessor : LESS, COMPASS
                                        </li>
                                        <li><span class='color_red'>JAVASCRIPT</span>
                                            <div class='data' data-percent='60'>
                                                <div class='rempl_data'></div>
                                            </div>
                                            <span class='percent'>70%</span>
                                        </li>
                                        <li>GRUNT, GULP</li>
                                    </ul>
                                </section>
                            </div>
                        </article>
                        <article  class='about_box' id='exp'>
                            <h2>INTERNSHIPS</h2>
                            <ul>
                                <li>
                                    <h3><a href="http://www.netemedia.fr/" title="Netemedia, agence web">Netemedia</a>, web agency, Paris</h3>
                                    <p>Avril-August 2014, 5 months</p>
                                    <p>Work as web developer: wordpress theme development, website upgrade...</p>
                                    <p>Used: wordpress, php, symfony, ajax, js, html5, css3</p>
                                    <p class="decal">Some projects:</p>
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
                        <article class='about_box' id='educ'>
                            <h2>EDUCATION</h2>
                            <ul>
                                <li>2012-2015 : 1st, 2nd & preparatory years in web development at l'Ecole Multimedia, Paris, FRANCE.</li>
                                <li>2010-2011 : Master 1 in biocomputing, structural biochemestry & genomics at Luminy's university, Marseille, FRANCE.</li>
                                <li>2009-2010 : <span class='color_white'>Bachelor degree in biotechnology</span> at ESIL(engineering school), Marseille, FRANCE.</li>
                                <li>2007-2009 : Preparatory classes in biology-chemistry-physics & geology at Lycée Marcelin Berthelot, Saint-Maur des fossés, FRANCE.</li>
                                <li>2007 : high school diploma in science, majoring in biology</li>
                            </ul>
                        </article>
                        <article class='about_box' id='misc'>
                            <h2>MISC</h2>
                            <ul>
                                <li>Reading (novels, graphic novels, English articles)</li>
                                <li>Videogames (RPG & STR, AAA or indie game, solo or team play, experience as team/guild manager online)</li>
                                <li>Travels (Brazil, Greece, Germany, Italy, England)</li>
                                <li>Piano practice</li>
                            </ul>
                        </article>
                    </section>
                    <article class='about_box' id="award">
                        <h2>Award</h2>
                        <ul>
                            <li>Open du web 4, 2013, Paris: 1st in Integration</li>
                            <li>Open du web 5, 2015, Paris: 2nd in development</li>
                        </ul>
                    </article>
                </div>
            </section>
        </section>
    </section>

    <footer id="footer">
        <div id='wrapper_footer'>
            <div id='contact'>
                <h2>CONTACT ME</h2>
                <p>I am available to hire and I am based in Alfortville, near Paris, FRANCE.</p>
                <ul id='contact_data'>
                    <li>Tel: 0033 647 764 006</li>
                    <li>mail: 
                        <a href='mailto:tanguyrygodin@gmail.com?subject=portfolioContact' class='color_red' title='my mail : click and send me your message.' rel='nofollow'>
                            tanguyrygodin@gmail.com
                        </a>
                    </li>
                </ul>
                <ul id='soc'>
                    <li id='twitter'>
                        <a href="https://twitter.com/TanguyGodin" rel='nofollow'>
                            <img src="{{asset('/images/logo-twitter.svg')}}" alt='twitter icon' title='follow my twitter'/>
                        </a>
                    </li>
                    <li id='linkedIn'>
                        <a href="https://lnkd.in/d6mE7_Z" rel='nofollow'>
                            <img src="{{asset('/images/logo-linkedin.svg')}}" alt='linkIn icon' title='check my linkin'/>
                        </a>
                    </li>
                    <li id='gith'>
                        <a href='https://github.com/Uthmordar' rel='nofollow'>
                            <img src="{{asset('/images/logo-github.svg')}}" alt='github icon' title='find my works on github'/>
                        </a>
                    </li>
                </ul>
            </div>
            <div id='contact_form_bloc'>
                {!!Form::open(['url'=>'/contact', 'files'=>false, 'method'=>'POST', 'id'=>'form_contact'])!!}
                    {!!Session::get('contactMessage')!!}
                    
                    {!!Form::label('name', 'Name *')!!}
                    {!!Form::text('name', Input::old('name'), array('placeholder'=>'please enter your name', 'class'=>'form_name'))!!}
                    {!!'<div class="error_name color_red">'.$errors->first('name').'</div>'!!}

                    {!!Form::label('email', 'Email *')!!}
                    {!!Form::email('email', Input::old('email'), array('placeholder'=>'name@domain.com', 'class'=>'form_mail'))!!}
                    {!!isset($errors)?'<div class="error_mail color_red">'.$errors->first('email').'</div>': ''!!}

                    {!!Form::label('message', 'Message *')!!}
                    {!!Form::textarea('message', Input::old('message'), array('placeholder'=>'Your message...', 'class'=>'form_message'))!!}
                    {!!isset($errors)?'<div class="error_message color_red">'.$errors->first('message').'</div>': ''!!}

                    {!!Form::submit('Submit', array('class'=>'form_submit'))!!}
                {!!Form::close()!!}
            </div>
        </div>
        <div class="legal">
            <p>Copyright©2015 Tanguy Godin</p>
        </div>
    </footer>
    <script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script type="text/javascript" src="{{asset('/js/portfolio/portfolio.js')}}"></script>
    <script type="text/javascript">
        $(function(){
            window.app.initialize("{{URL::to('/')}}");
        });
    </script>
</body>
</html>