<?php

namespace App\Helpers;

class UploadImage{
    public $path = 'upload/profile/';

    public function saveBase64($imageStr,$name,$path=''){
        $path = $path!=''?$path:$this->path;
        $image = substr($imageStr,strpos($imageStr,',')+1);
        $decodeImage = base64_decode($image);
        $hardPath =  str_slug($name, '-').'-'.md5(rand(0,99999));
        $hardPathWithExt = $hardPath.'.'.$this->getType($decodeImage);
        $fullPath = $path.$hardPathWithExt;
        file_put_contents(public_path($fullPath),$decodeImage);
        return $hardPathWithExt;
    }

    public function getType($decodeImage){
        $f = finfo_open();
        return explode(
            '/',finfo_buffer($f,$decodeImage,FILEINFO_MIME_TYPE)
        )[1];
    }

    public function delete($name,$path=''){
        $path = $path!=''?$path:$this->path;
        unlink(public_path($path.$name));
        return $this;
    }
}