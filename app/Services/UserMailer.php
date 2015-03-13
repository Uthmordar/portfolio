<?php
namespace portfolio\Services;
use portfolio\User;

class UserMailer extends Mailer{
    public function contact($data){
        $view="emails.contact";
        $subject="Demande de contact";
        $userMail=User::find(1)->email;
        
        return $this->sendTo($userMail, $subject, $view, $data);
    }
}