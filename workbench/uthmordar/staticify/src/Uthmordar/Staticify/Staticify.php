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
        try{
            $content=$this->get_remote_data($page->getPage());
            $to=$this->toPath($page->getStatic());
            
            $this->createView($to, $content);
            return $content;
        }catch(Exception $e){
            return $e->getMessage();
        }
    }
    
    /**
     * get data from url
     * @param type $url
     * @return type
     */
    public function get_remote_data($url){
        $ch=curl_init();
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0);

        $result = curl_exec($ch);
        curl_close($ch);
        return $result;
    }
    
    /**
     * get view path to given file
     * @param string $path
     * @return string
     */
    private function toPath($path){
        $array=explode('.', $path);
        $path=app_path() . DIRECTORY_SEPARATOR . '..' . DIRECTORY_SEPARATOR . 'resources' . DIRECTORY_SEPARATOR .'views' . DIRECTORY_SEPARATOR . implode(DIRECTORY_SEPARATOR, $array) . '.php';
        
        return $path;
    }
    
    /**
     * create file
     * @param type $file
     * @param type $content
     */
    private function createView($file, $content){
        file_put_contents($file, $content);
    }
}