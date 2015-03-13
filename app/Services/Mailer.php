<?php

namespace portfolio\Services;

abstract class Mailer implements MailerInterface{
    public function sendTo($userMail, $subject, $view, $data=[]){
        $data['content']=$data['message'];
        \Mail::queue($view, $data, function($mail) use ($data, $userMail, $subject){
            $mail->from($data['email'], $data['name']);
            $mail->to($userMail)->subject($subject);
        });
    }
}