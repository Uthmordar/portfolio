<?php namespace Uthmordar\Staticify\Command;

use Illuminate\Console\Command;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Input\InputArgument;
use Uthmordar\Staticify\Page;
use Uthmordar\Staticify\Facade\StaticifyFacade as Staticify;

class GenerateStaticPage extends Command{

    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'generate:staticPage';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description.';

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
            $page=$this->argument('page');
            $static=$this->argument('static');

            $inst=new Page($page, $static);
            Staticify::generateStatic($inst);

            return $this->info("La page $page a bien ete cree en version statique dans le dir views.");
        }catch(\RuntimeException $e){
            return $this->info($e->getMessage());
        }
    }

    /**
     * Get the console command arguments.
     *
     * @return array
     */
    protected function getArguments(){
        return [
            ['page', InputArgument::REQUIRED, 'Route path'],
            ['static', InputArgument::REQUIRED, 'view name for static page'],
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
