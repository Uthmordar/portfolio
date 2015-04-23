<?php namespace Uthmordar\Staticify\Command;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Uthmordar\Staticify\Facade\StaticifyFacade as Staticify;
use Uthmordar\Staticify\Facade\PagesFactoryFacade as PagesFactory;

class GenerateStaticPages extends Command{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'generate:staticPages';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description.';
    
    protected $pages=[];
    
    protected $statics=[];

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct(){
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function fire(){
        try{
            $page=trim($this->argument('page'), '{} ');
            $this->pages=explode('::', $page);

            $static=trim($this->argument('static'), '{} ');
            $this->statics=explode('::', $static);

            for($i=0; $i<count($this->pages); $i++){
                PagesFactory::addPage(config('app.url') . $this->pages[$i], $this->statics[$i]);
            }

            Staticify::generatePages(PagesFactory::getFactory());
            if(count($this->pages)==1){
                return $this->info("Page {$this->pages[0]} staticified with succes in views directory.");
            }else{
                return $this->info("Pages generated with success.");
            }
        }catch(\RuntimeException $e){
            return $this->error($e->getMessage());
        }
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments(){
        return [
            ['page', InputArgument::REQUIRED, 'Routes path : pattern {route::route} '],
            ['static', InputArgument::REQUIRED, 'views name for statics pages (laravel view name or absolute path) : {admin.index::admin.create}'],
        ];
    }

    /**
     * Get the console command options.
     *
     * @return array
     */
    protected function getOptions(){
        return [];
    }
}