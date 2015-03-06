<?php
namespace portfolio\Services;

use portfolio\lib\HelperImage;

class UploadImage{
    /**
     * @param type $flashTarget
     * @param array $thumbsize [x, y]
     * @return string
     */
    public function uploadImage($file, $flashTarget, array $thumbsize=[50,50]){
        if($file){
            $fileTrueName=$file->getClientOriginalName();
            $fileExtension=$file->getClientOriginalExtension();
            $fileThumb=$file;

            $destinationPath=public_path(). DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR;
            $filename=str_random(25) . '.' . $fileExtension;

            $thumbPath=$destinationPath . '_min' . DIRECTORY_SEPARATOR . $filename;
            //fonction de resize des images
            HelperImage::thumb($fileThumb, $thumbsize[0], $thumbsize[1], $thumbPath);

            $upload_success=$file->move($destinationPath, $filename);
            
            if($upload_success){
                return $filename;
            }else{
                \Session::flash($flashTarget, "<p class='error bg-danger'><span class='glyphicon glyphicon-remove' style='color:red;'></span>Problème d'upload.</p>");
                return \Redirect::back();
            }
        }
    }
}