<?php

spl_autoload_register(function ($class) {
    $prefix = 'PHPMailer\\PHPMailer\\';
    if (strncmp($prefix, $class, strlen($prefix)) !== 0) {
        return;
    }
    $relativeClass = substr($class, strlen($prefix));
    $file = __DIR__ . '/phpmailer/phpmailer/src/' . str_replace('\\', '/', $relativeClass) . '.php';
    if (is_file($file)) {
        require $file;
    }
});
