<?php
namespace portfolio\Services;

interface MailerInterface{
    function sendTo($userMail, $subject, $view, $data);
}