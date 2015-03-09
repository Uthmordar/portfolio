<?php
namespace Uthmordar\Staticify;

class Staticify{
    /**
     * generate static pages files from routes
     * @param array $pages
     */
    public function generatePages(array $pages){
        foreach($pages as $page){
            $this->generateStatic(new Page($page['page'], $page['static']));
        }
    }
    
    /**
     * generate static page file from page instance
     * @param \Uthmordar\Staticify\iPage $page
     * @return type
     */
    public function generateStatic(iPage $page){
        $content=$this->get_remote_data($page->getPage());
        $to=$this->toPath($page->getStatic());

        $this->createView($to, $content);
        return true;
    }
    
    /**
     * get data from url
     * @param type $url
     * @return type
     */
    public function get_remote_data($url){
        if(filter_var($url, FILTER_VALIDATE_URL)===FALSE && !file_exists($url)){
            throw new \RuntimeException("Invalid url given for route $url");
        }
        $ch=curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

        $result=curl_exec($ch);
        curl_close($ch);
        return $result;
    }
        
    /**
     * get view path to given file, if no valid path return path to laravel default view directory
     * @param string $path
     * @return string
     */
    public function toPath($path){
        $array=explode('.', $path);
        if(file_exists($path)){
            return $path;
        }
        if(function_exists('app_path')){
            $path=app_path() . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'resources' . DIRECTORY_SEPARATOR .'views' . DIRECTORY_SEPARATOR . implode(DIRECTORY_SEPARATOR, $array) . '.php';
            return $path;
        }
        return false;
    }
    
    /**
     * create file
     * @param type $file
     * @param type $content
     */
    public function createView($file, $content){
        if(!$file || !file_exists($file)){
            throw new \RuntimeException("No static view file $file.");
        }
        if(!$content){
            throw new \RuntimeException('No content');
        }
        file_put_contents($file, $content);
    }
}